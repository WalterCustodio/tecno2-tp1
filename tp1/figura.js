
class Figura{

    constructor(vel_){
        this.vel = vel_;
        
        this.cual = int(random(1, 4));

        this.x = random (-200,width-50);
        this.y = random (-200, height-150);
      //rotación
      //  this.rotacion = radians(45);
      // CONTROL DE VELOCIDAD_

       // console.log(this.vel)
      // DIRECCIÓN
      this.dir = radians(45);


      this.variacionOp = 0;

      this.tinte;

      this.variacionAngular;
}

//-------------------------------

dibujar(tam_){

  if (this.cual == 1) {
    //----puntos figura 1
      this.p1x=    1 * tam_+  this.x;
      this.p1y=   55 * tam_+  this.y;
      this.p2x=   13 * tam_+  this.x;
      this.p2y=  283 * tam_+  this.y;
      this.p3x=  123 * tam_+  this.x;
      this.p3y=  232 * tam_+  this.y;
      this.p4x=  117 * tam_+  this.x;
      this.p4y=  134 * tam_+  this.y;
      this.p5x=  110 * tam_+  this.x;
      this.p5y=  136 * tam_+  this.y;
      this.p6x=   93 * tam_+  this.x;
      this.p6y=   79 * tam_+  this.y;
      this.p7x=   65 * tam_+  this.x;
      this.p7y=   79 * tam_+  this.y;
      this.p8x=   59 * tam_+  this.x;
      this.p8y=  111 * tam_+  this.y;
      this.p9x=   33 * tam_+  this.x;
      this.p9y=    3 * tam_+  this.y;
      this.p10x  =13 * tam_+  this.x;
      this.p10y   =5 * tam_+  this.y;
      this.p11x=-0.2 * tam_+  this.x;
      this.p11y  =18 * tam_+  this.y;
      this.p12x   =1 * tam_+  this.x;
      this.p12y  =55 * tam_+  this.y;
       bg.beginShape();
       bg.vertex(this.p1x, this.p1y);
       bg.vertex(this.p2x, this.p2y);
       bg.vertex(this.p3x, this.p3y);
       bg.vertex(this.p4x, this.p4y);
       bg.vertex(this.p5x, this.p5y);
       bg.vertex(this.p6x, this.p6y);
       bg.vertex(this.p7x, this.p7y);
       bg.vertex(this.p8x, this.p8y);
       bg.vertex(this.p9x, this.p9y);
       bg.bezierVertex(this.p10x, this.p10y, this.p11x, this.p11y,  this.p12x,  this.p12y);
       bg.endShape(CLOSE);

        }else if (this.cual == 2) {

        this.p1x=0  * tam_ +this.x;
        this.p1y=0  * tam_ +this.y;
        this.p2x=0  * tam_ +this.x;
        this.p2y=284* tam_ +this.y;
        this.p3x=50 * tam_ + this.x;
        this.p3y=334* tam_ +this.y;
        this.p4x=120* tam_ +this.x;
        this.p4y=85 * tam_ + this.y;
        this.p5x=120* tam_ +this.x;
        this.p5y=85 * tam_ + this.y;
        this.p6x=93 * tam_ + this.x;
        this.p6y=88 * tam_ + this.y;
        this.p7x=59 * tam_ + this.x;
        this.p7y=60 * tam_ + this.y;
        this.p8x=59 * tam_ + this.x;
        this.p8y=60 * tam_ + this.y;
        this.p9x=38 * tam_ + this.x;
        this.p9y=43 * tam_ + this.y;
        this.p10x=1 * tam_ + this.x;
        this.p10y=1 * tam_ + this.y;

        bg.beginShape();

        bg.noStroke();
        bg.vertex(this.p1x, this.p1y);
        bg.vertex(this.p2x, this.p2y);
        bg.vertex(this.p3x, this.p3y);
        bg.vertex(this.p4x, this.p4y);
        bg.bezierVertex(this.p5x, this.p5y, this.p6x, this.p6y, this.p7x, this.p7y);
        bg.bezierVertex(this.p8x, this.p8y, this.p9x, this.p9y,  this.p10x,  this.p10y);
        bg.endShape(CLOSE);
      }else if (this.cual == 3) {
        this.p1x=1  *tam_ +   this.x;
        this.p1y=293*tam_ + this.y;
        this.p2x=38 *tam_ +  this.x;
        this.p2y=317*tam_ + this.y;
        this.p3x=54 *tam_ +  this.x;
        this.p3y=1  *tam_ +   this.y;
        this.p4x=45 *tam_ +  this.x;
        this.p4y=2.5*tam_ + this.y;
        this.p5x=32 *tam_ +  this.x;
        this.p5y=3.7*tam_ + this.y;
        this.p6x=22 *tam_ +  this.x;
        this.p6y=14 *tam_ +  this.y;
        this.p7x=22 *tam_ +  this.x;
        this.p7y=27 *tam_ +  this.y;
          
        bg.beginShape();
        bg.noStroke();
        bg.vertex(this.p1x, this.p1y);
        bg.vertex(this.p2x, this.p2y);
        bg.vertex(this.p3x, this.p3y);
        bg.vertex(this.p4x, this.p4y);
        bg.bezierVertex(this.p5x, this.p5y, this.p6x, this.p6y, this.p7x, this.p7y);
        bg.endShape(CLOSE);


      }
    }

mover(){

       this.dir += radians(random(-5,5));
       this.x = this.x + this.vel  * cos(this.dir);
       this.y = this.y + this.vel  * sin(this.dir);
       
       //    ------------------- espacio toridal

       this.extra=1000;
       
       this.x = this.x > this.extra ? this.x - this.extra : this.x;
       this.x = this.x <-400 ? this.x + this.extra : this.x;
       
       this.y = this.y > this.extra ? this.y - this.extra : this.y;
       this.y = this.y <-400 ? this.y + this.extra : this.y;
    }

    mover2(){

      this.dir += radians(random(-5,5));
      this.x = this.x + (this.vel*-1) * cos(this.dir);
      this.y = this.y + (this.vel*-1)  * sin(this.dir);
      
      //    ------------------- espacio toridal

      this.extra=1000;
      
      this.x = this.x > this.extra ? this.x - this.extra : this.x;
      this.x = this.x <-400 ? this.x + this.extra : this.x;
      
      this.y = this.y > this.extra ? this.y - this.extra : this.y;
      this.y = this.y <-400 ? this.y + this.extra : this.y;
   }


fill(tinteR,tinteG,tinteB,op_){
    push();
    noStroke();
    bg.fill(tinteR,tinteG,tinteB+5, op_)
    pop();
    }

rotar(){
     // translate(this.x,this.y);
     // rotate(HALF_PI);
    }

variacion(amplitud_){

 // this.variacionOp = map(amplitud_, AMP_MIN, AMP_MAX,-0.3,0.3);

  //console.log("variacion", this.variacionOp)

}

  }

