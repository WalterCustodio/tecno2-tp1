let gestureDetector;
let imageComposer;

let simple = [];

let gestures = [];
let maxImages = 60;
let isMouseMoving = false;

function preload() {
  for (let i = 0; i < 2; i++) {
    simple[i] = loadImage('imagenes/simple_' + i + '.png');
  }
}

class GestureDetector {
  constructor() {
    this.prevMouseX = 0;
    this.prevMouseY = 0;
  }
  
  detectGesture() {
    let dx = mouseX - this.prevMouseX;
    let dy = mouseY - this.prevMouseY;
    
    let gestureType;
    if (abs(dx) < 10 && abs(dy) < 10) {
      gestureType = "Corto";
    } else {
      gestureType = "Largo";
    }
    
    let gesturespeed;
    let gestureLength = dist(this.prevMouseX, this.prevMouseY, mouseX, mouseY);
    let gestureDuration = millis();
    
    if (gestureDuration > 0) {
      gesturespeed = gestureLength / gestureDuration;
    } else {
      gesturespeed = 0;
    }
    
    this.prevMouseX = mouseX;
    this.prevMouseY = mouseY;
    
    return { type: gestureType, speed: gesturespeed };
  }
}

class ImageComposer {
  constructor() {}
  
  getRandomFromArray(arr) {
    if (arr.length > 0) {
      let index = Math.floor(random(arr.length));
      return arr[index];
    } else {
      return null;
    }
  }
  
  composeImage(gesture) {
    let composedImages = [];
    let maxImages;
  
    if (gesture.type === "Corto") {
      maxImages = 20;
      let minOpacity = 0.3; // Opacidad mínima para movimientos cortos
      let maxOpacity = 0.7; // Opacidad máxima para movimientos cortos
      for (let i = 0; i < maxImages; i++) {
        let image = this.composeSingleImage(this.getRandomFromArray(simple), minOpacity, maxOpacity);
        composedImages.push(image);
      }
    } else if (gesture.type === "Largo") {
      maxImages = 40;
      let minOpacity = 0.3; // Opacidad mínima para movimientos largos
      let maxOpacity = 1; // Opacidad máxima para movimientos largos
      for (let i = 0; i < maxImages; i++) {
        let image = this.composeSingleImage(this.getRandomFromArray(simple), minOpacity, maxOpacity);
        composedImages.push(image);
      }
    } else {
      maxImages = 0;
    }
  
    return composedImages;
  }
  
  
  composeSingleImage(image, minOpacity, maxOpacity) {
    let maxSize = min(width, height) * 0.4;
    let aspectRatio = image.width / image.height;
    let imageWidth, imageHeight;
  
    if (aspectRatio > 1) {
      imageWidth = maxSize;
      imageHeight = maxSize / aspectRatio;
    } else {
      imageWidth = maxSize * aspectRatio;
      imageHeight = maxSize;
    }
  
    let composed = createGraphics(imageWidth, imageHeight);
    composed.blendMode(BLEND);
  
    let opacity = random(minOpacity, maxOpacity);
    composed.tint(255, opacity * 255); // Set opacity as a value between 0 and 1
    composed.image(image, 0, 0, imageWidth, imageHeight);
  
    return composed;
  }
  
}

function setup() {
  createCanvas(800, 600);
  gestureDetector = new GestureDetector();
  imageComposer = new ImageComposer();
  background(220);
}

function draw() {
  if (isMouseMoving) {
    let gesture = gestureDetector.detectGesture();
    let composedImages = imageComposer.composeImage(gesture);
    
    for (let i = 0; i < composedImages.length; i++) {
      let composedImage = composedImages[i];
      gestures.push({
        image: composedImage,
        x: random(width - composedImage.width) + composedImage.width / 2,
        y: random(height - composedImage.height) + composedImage.height / 2,
        rotation: random(TWO_PI)
      });
      
      if (gestures.length > maxImages) {
        gestures.shift();
      }
    }
    
    isMouseMoving = false;
  }
  
  background(220);
  
  for (let i = 0; i < gestures.length; i++) {
    let currentGesture = gestures[i];
    let x = currentGesture.x;
    let y = currentGesture.y;
    let imageWidth = currentGesture.image.width;
    let imageHeight = currentGesture.image.height;
    let rotation = currentGesture.rotation;
    
    translate(x, y);
    rotate(rotation);
    image(currentGesture.image, -imageWidth / 2, -imageHeight / 2);
    rotate(-rotation);
    translate(-x, -y);
  }
}

function mouseMoved() {
  isMouseMoving = true;
}
