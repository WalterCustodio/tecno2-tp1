
//-----------------MICROFONO-------------------
let mic;

//--AMPLITUD
let amp;
//------------GESTOR------------------------
let gestorAmp;
//
//----------Configuración
let AMP_MIN = 0.004;
let AMP_MAX = 0.05;
let AMORTIGUACION = 0.9; // factor de amortiguación
// BOOLEANOS
let haySonido = false;
let antesHabiaSonido = false;
let IMPRIMIR = false;
//
//-----------------------------tiempo
let marcaDeTiempo;
let umbralDeTiempo = 1500;
let unmbralSonido = 0.31;
let ultimoSonido;
//
//------------------sketch-----------------

let figuras = [];
let texturas = [];
let cantidadDeFiguras = 50;
let cantidadDeTexturas = 10;
let opBg = 30;

let tamL = 1.7;
let tamM = 1.5;
let tamS = 1.5;


let width = 920;
let height = 678;


function preload(){

  for (let i =0; i <cantidadDeTexturas; i++){
    texturas[i] = createGraphics(width,height);

    crearTextura(texturas[i]);
  }
}
//-------------------setup----------------


function setup(){

    createCanvas(width,height);
    pixelDensity(1)
    frameRate(24)
    userStartAudio();
    //-------------GESTOR -----
    gestorAmp = new GestorSenial(AMP_MIN, AMP_MAX);
    gestorAmp.f = AMORTIGUACION;
    //--------


    //-------------- FIGURAS---------- terminoElSonido = antesHabiaSonido && !haySonido;
    for( let i=0;i<cantidadDeFiguras;i++){

      let index = int(random(0,texturas.length));

      figuras.push(new Figura(texturas[index]));
      
    
    }
    //--------------MICROFONO----------
    mic = new p5.AudioIn();
    mic.start();
  }

function draw(){
  //--------- analizado el sonido

gestorAmp.actualizar(mic.getLevel());  
amp = gestorAmp.filtrada;
//console.log(amp,"amp")

haySonido = amp > AMP_MIN; 

let empezoElSonido = haySonido && !antesHabiaSonido; 
let terminoElsonido = antesHabiaSonido && !haySonido;

if(empezoElSonido){
  opBg= 30;
 marcaDeTiempo = millis();
}
if(terminoElsonido){
  opBg = 150;
  let momentoActual = millis();

  if (momentoActual > marcaDeTiempo + umbralDeTiempo){
    ultimoSonido = "largo";

    console.log("largo")
  }
  if (momentoActual < marcaDeTiempo + umbralDeTiempo){
    ultimoSonido = "corto";
    console.log("corto")
  }
}
if (amp > unmbralSonido){
  reiniciarPrototipo();
}
//-------------
  background(237,235,227,opBg);

  //------------- interactividad
  let fValorbajo = figuras.filter (figura => figura.opacity <100);
  let fValorMedio = figuras.filter (figura => figura.opacity >= 100 && figura.opacity<=150);
  let fValorAlto = figuras.filter (figura => figura.opacity > 150);
  //console.log("figuras = ",figuras.length,"altos =",fValorAlto.length, "medios =", fValorMedio.length, "bajos = ", fValorbajo.length)


     for(let i=0;i<fValorMedio.length;i++){   //-------- FIGURAS DE VALOR MEDIO
    // console.log("opacidad figura valor medio",[i], "=",fValorMedio[i].opacity);
     fValorMedio[i].setColor(55 ,50, 45);
     fValorMedio[i].dibujar(tamM);
     if(haySonido){
      fValorMedio[i].mover();
     }
      if (ultimoSonido== "largo"){
        if(empezoElSonido){
     fValorMedio[i].cambiarForma();
    }
      }
         }


     for(let i=0;i<fValorbajo.length;i++){   //-------- FIGURAS DE VALOR BAJO
      //  console.log("opacidad figura valor bajo",[i], "=",fValorbajo[i].opacity);
        fValorbajo[i].setColor(195,195,180);
        fValorbajo[i].dibujar(tamS);
        if(!haySonido){
         fValorbajo[i].cambiarForma();
        }
        if (ultimoSonido== "corto"){
         if(!haySonido){
  
          fValorbajo[i].cambiarPosicion();
        
        }
     
        }
        if(ultimoSonido == "largo"){
          fValorbajo[i].mover();
        }
  
         }
         for(let i=0;i<fValorAlto.length;i++){   //-------- FIGURAS DE VALOR ALTO
          // console.log("opacidad figura valor alto",[i], "=",fValorAlto[i].opacity);
          fValorAlto[i].setColor(25,27,30);
           fValorAlto[i].dibujar(tamL);
           fValorAlto[i].mover();
          // fValorAlto[i].cambiarForma();
           if(haySonido){   //----------------------evento para mover y rotar
           fValorAlto[i].bajarOpacidad();   
           }
              }

              ////// -----------------
         antesHabiaSonido = haySonido;
  }
  


function crearTextura(graphics){
  graphics.push();
  graphics.pixelDensity(1);
    graphics.noStroke();
    for (let n = 0; n < 25000; n++) {
      let i = random(width);
      let j = random(height);
    graphics.fill(0,0,0,random(5,100));
    graphics.circle(i,j,random(15,30));
    }
    graphics.pop();

  }
  function reiniciarPrototipo() {
    // Reiniciar figuras
    opBg = 30;
    figuras = [];
    for (let i = 0; i < cantidadDeFiguras; i++) {
      let index = int(random(0, texturas.length));
      figuras.push(new Figura(texturas[index]));
    }
  }
  function keyPressed() {
    if (key === 'r') {
      reiniciarPrototipo();
    }
  }
