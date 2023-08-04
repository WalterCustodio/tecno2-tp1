
class Figura{
  constructor(textura_){
    
    let probabilidad = int(random(100));
     this.tx = textura_;
  
    this.vel = random(-4,4);
    if ( probabilidad < 10){ // 10% de probabilidad de tener figuras de opacidad alta
      this.bajar = true;
     // console.log(probabilidad)
      this.opacity = int(random(150, 255));  
    } else if (probabilidad >10 && probabilidad<65){  // 55% de probabilidad de tener figuras de opacidad baja
      this.opacity = int(random(60,99))
    
    } else { // 35% de probabilidad de tener figuras de opacidad media
      this.opacity = int(random(100, 149)); 
    }

     this.cual = int(random(1, 6));
     console.log(this.cual)
      this.dir = radians(45);
      this.rotacion = radians(random(-3,3)*45);
      this.tam;
      this.variacionAngular= (random(-45,45));
      this.x = int(random (-100, width+100));
      this.y = int(random (-100, height+50));
      this.graphics_ = createGraphics(width ,height);
      this.graphics_.pixelDensity(1)
      this.fg;
      this.c;


 }
//-------------------------------
dibujar(tam_){

  this.tam = tam_;
  this.graphics_.clear();
  this.forma();

  this.fg = this.graphics_.get();
  this.fg.mask(this.tx);

  image(this.fg,0,0);
}
forma(){

   this.graphics_.push();
    this.setColor(this.r,this.g,this.b,this);
   this.graphics_.noStroke();
   this.graphics_.translate(this.x,this.y)
   this.graphics_.rotate(this.rotacion);
   this.graphics_.beginShape();
   if (this.cual == 1 ){
     this.p1x=    1 * this.tam;
     this.p1y=   55 * this.tam;
     this.p2x=   13 * this.tam;
     this.p2y=  283 * this.tam;
     this.p3x=  123 * this.tam;
     this.p3y=  232 * this.tam;
     this.p4x=  117 * this.tam;
     this.p4y=  134 * this.tam;
     this.p5x=  110 * this.tam;
     this.p5y=  136 * this.tam;
     this.p6x=   93 * this.tam;
     this.p6y=   79 * this.tam;
     this.p7x=   65 * this.tam;
     this.p7y=   79 * this.tam;
     this.p8x=   59 * this.tam;
     this.p8y=  111 * this.tam;
     this.p9x=   33 * this.tam;
     this.p9y=    3 * this.tam;
     this.p10x= 13  * this.tam;
     this.p10y= 5   * this.tam;
     this.p11x= -0.2* this.tam;
     this.p11y=  18 * this.tam;
     this.p12x=  1  * this.tam;
     this.p12y=  55 * this.tam;
     this.graphics_.vertex(this.p1x, this.p1y);
     this.graphics_.vertex(this.p2x, this.p2y);
     this.graphics_.vertex(this.p3x, this.p3y);
     this.graphics_.vertex(this.p4x, this.p4y);
     this.graphics_.vertex(this.p5x, this.p5y);
     this.graphics_.vertex(this.p6x, this.p6y);
     this.graphics_.vertex(this.p7x, this.p7y);
     this.graphics_.vertex(this.p8x, this.p8y);
     this.graphics_.vertex(this.p9x, this.p9y);
     this.graphics_.bezierVertex(this.p10x, this.p10y, this.p11x, this.p11y,  this.p12x,  this.p12y);
   }else if (this.cual == 2){
     this.p1x=0  * this.tam;
     this.p1y=0  * this.tam;
     this.p2x=0  * this.tam;
     this.p2y=284* this.tam;
     this.p3x=50 * this.tam;
     this.p3y=334* this.tam;
     this.p4x=120* this.tam;
     this.p4y=85 * this.tam;
     this.p5x=120* this.tam;
     this.p5y=85 * this.tam;
     this.p6x=93 * this.tam;
     this.p6y=88 * this.tam;
     this.p7x=59 * this.tam;
     this.p7y=60 * this.tam;
     this.p8x=59 * this.tam;
     this.p8y=60 * this.tam;
     this.p9x=38 * this.tam;
     this.p9y=43 * this.tam;
     this.p10x=1 * this.tam;
     this.p10y=1 * this.tam;
     this.graphics_.vertex(this.p1x, this.p1y);
     this.graphics_.vertex(this.p2x, this.p2y);
     this.graphics_.vertex(this.p3x, this.p3y);
     this.graphics_.vertex(this.p4x, this.p4y);
     this.graphics_.bezierVertex(this.p5x, this.p5y, this.p6x, this.p6y, this.p7x, this.p7y);
     this.graphics_.bezierVertex(this.p8x, this.p8y, this.p9x, this.p9y,  this.p10x,  this.p10y);
   }else if (this.cual == 3){
    this.p1x=1  *this.tam;
    this.p1y=293*this.tam;
    this.p2x=38 *this.tam;
    this.p2y=317*this.tam; 
    this.p3x=54 *this.tam;
    this.p3y=1  *this.tam;
    this.p4x=45 *this.tam;
    this.p4y=2.5*this.tam;
    this.p5x=32 *this.tam;
    this.p5y=3.7*this.tam; 
    this.p6x=22 *this.tam;
    this.p6y=14 *this.tam;
    this.p7x=22 *this.tam;
    this.p7y=27 *this.tam;
    this.graphics_.vertex(this.p1x, this.p1y);
    this.graphics_.vertex(this.p2x, this.p2y);
    this.graphics_.vertex(this.p3x, this.p3y);
    this.graphics_.vertex(this.p4x, this.p4y);
    this.graphics_.bezierVertex(this.p5x, this.p5y, this.p6x, this.p6y, this.p7x, this.p7y);
   }else if (this.cual == 4){
     this.p1x  = 1  * this.tam;
     this.p1y  = 1  * this.tam;
     this.p2x  = 1  * this.tam;
     this.p2y  = 284* this.tam;
     this.p3x  = 50 * this.tam;
     this.p3y  = 334* this.tam;
     this.p4x  = 120* this.tam;
     this.p4y  = 85 * this.tam;
     this.p5x  = 120* this.tam;
     this.p5y  = 85 * this.tam;
     this.p6x  = 93 * this.tam;
     this.p6y  = 88 * this.tam;
     this.p7x  = 59 * this.tam;
     this.p7y  = 60 * this.tam;
     this.p8x  = 59 * this.tam;
     this.p8y  = 60 * this.tam;
     this.p9x  = 38 * this.tam;
     this.p9y  = 43 * this.tam;
     this.p10x =  1 * this.tam;
     this.p10y =  1 * this.tam;

     this.graphics_.vertex(this.p1x, this.p1y);
     this.graphics_.vertex(this.p2x, this.p2y);
     this.graphics_.vertex(this.p3x, this.p3y);
     this.graphics_.vertex(this.p4x, this.p4y);
     this.graphics_.bezierVertex(this.p5x, this.p5y, this.p6x, this.p6y, this.p7x, this.p7y);
     this.graphics_.bezierVertex(this.p8x, this.p8y, this.p9x, this.p9y,  this.p10x,  this.p10y);
   }else{
    this.p1x  = 1  * this.tam;
    this.p1y  = 1  * this.tam;
    this.p2x  = 28  * this.tam;
    this.p2y  = 360* this.tam;
    this.p3x  = 69 * this.tam;
    this.p3y  = 365 * this.tam;
    this.p4x  = 149* this.tam;
    this.p4y  = 114 * this.tam;
    this.p5x  = 109* this.tam;
    this.p5y  = 113 * this.tam;
    this.p6x  = 78 * this.tam;
    this.p6y  = 72 * this.tam;
    this.p7x  = 79 * this.tam;
    this.p7y  = 73 * this.tam;
    this.p8x  = 62 * this.tam;
    this.p8y  = 45 * this.tam;
    this.p9x  = 62 * this.tam;
    this.p9y  = 13 * this.tam;
    this.p10x =  1 * this.tam;
    this.p10y =  1 * this.tam;

    this.graphics_.vertex(this.p1x, this.p1y);
    this.graphics_.vertex(this.p2x, this.p2y);
    this.graphics_.vertex(this.p3x, this.p3y);
    this.graphics_.vertex(this.p4x, this.p4y);
    this.graphics_.bezierVertex(this.p5x, this.p5y, this.p6x, this.p6y, this.p7x, this.p7y);
    this.graphics_.bezierVertex(this.p8x, this.p8y, this.p9x, this.p9y,  this.p10x,  this.p10y);


   }
   this.graphics_.endShape(CLOSE);
   this.graphics_.pop();

  }
mover(){
       this.dir += radians(random(-5,5));
       this.x = this.x + this.vel  * cos(this.dir);
       this.y = this.y + this.vel  * sin(this.dir);
       
       //    ------------------- espacio toroidal

      this.extra=1000;
      
      this.x = this.x > this.extra ? this.x - this.extra : this.x;
      this.x = this.x <-400 ? this.x + this.extra : this.x;
      
      this.y = this.y > this.extra ? this.y - this.extra : this.y;
      this.y = this.y <-400 ? this.y + this.extra : this.y;
    }

cambiarForma(){
  this.cual = int(random(1, 5));
  this.rotacion = radians(random(-3,3)*45);
}

cambiarPosicion(){
  this.x = int(random (-100, width));
  this.y = int(random (-100, height));
}
setColor(r_,g_,b_){
  this.r = r_;
  this.g = g_;
  this.b = b_;
  this.c = color(r_,g_,b_,this.opacity);
  this.graphics_.fill(this.c);
}
bajarOpacidad(){
  if (this.bajar){
    this.opacity--;
    if (this.opacity <=153){
      this.bajar = false;
    }
  }else if (!this.bajar){
    this.opacity++;
    if(this.opacity > 250){
      this.bajar = true;
    }
  }
}
}
