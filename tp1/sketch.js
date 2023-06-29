
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
let AMORTIGUACION = 0.94; // factor de amortiguación
// BOOLEANOS
let haySonido = false;
let antesHabiaSonido = false;
let IMPRIMIR = false;
//
//-----------------------------tiempo
let marcaDeTiempo;
let umbralDeTiempo = 2500;

let ultimoSonido;
//
//------------------sketch-----------------
let bg;
let vel;

let figuras = [];
let cantidadDeFiguras = 100;
let estado;
let img;
//-------------------setup----------------

function setup(){

    createCanvas(800,600);
    estado = "primero";

    //-------------GESTOR -----
    gestorAmp = new GestorSenial(AMP_MIN, AMP_MAX);
    gestorAmp.f = AMORTIGUACION;

    //--------
    bg = createGraphics (width , height);

    //-------------- FIGURAS---------- terminoElSonido = antesHabiaSonido && !haySonido;
    for( let i=0;i<cantidadDeFiguras;i++){
      vel = random(-3,3);
      figuras.push(new Figura(vel));

    }

    //--------------MICROFONO----------
    mic = new p5.AudioIn();
    mic.start();
 
  }


function draw(){

// analizado el sonido
//
gestorAmp.actualizar(mic.getLevel());  

amp = gestorAmp.filtrada;

//console.log(amp)

haySonido = amp > AMP_MIN; 

let empezoElSonido = haySonido && !antesHabiaSonido; 
let terminoElsonido = antesHabiaSonido && !haySonido;

if(empezoElSonido){

 marcaDeTiempo = millis();
}
if(terminoElsonido){

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

bg.background(239,239,230)

    //----separamos entre lentos, vel media y rápidos
    let rapidos = figuras.filter (spd => spd.vel>1.5);
    let medios = figuras.filter (spd => spd.vel >= -2.7 && spd.vel<=1.5);
    let lentos = figuras.filter (spd => spd.vel<-2.7);

   // console.log("figuras = ",figuras.length,"rapidos =", rapidos.length, "medios = ", medios.length, "lentos = ", lentos.length)


      for(let i=0;i<medios.length;i++){   //-------- FIGURAS DE VEL MEDIA
        medios[i].dibujar(1);

        if(haySonido){   //----------------------evento para mover y rotar
          medios[i].mover();
        }

        medios[i].fill(150,150,150,170);  //---------------------controlamos el color
        }
 
    for(let i=0;i<rapidos.length;i++){ // ----------------- FIGURAS RAPIDAS
      rapidos[i].dibujar(1);
   //   rapidos[i].variacion(amp);

   if (ultimoSonido== "largo"){
   rapidos[i].mover();
   }

      rapidos[i].fill(200,200,190,150);   // -----------------------controlamos el color
      }
        console.log(lentos.length)
      for(let i=0;i<lentos.length;i++){      // ------------ FIGURAS LENTAS
       // lentos[i].variacion(amp);

        lentos[i].dibujar(2);

        if(haySonido){ //----------------------evento para mover y rotar

       lentos[i].mover();
 
      //  lentos[i].rotar();
        }
        lentos[i].fill(70,70,75, 200); //---------------------------controlamos el color
        }
        image(bg, 0, 0);
        antesHabiaSonido = haySonido;
//estado == "segundo";

if(estado == "primero" ){

}else if (estado == "segundo") {
  
}else if (estado == "tercero"){
}


if(IMPRIMIR){
  printData();
  }
}
function printData(){

  background(255);
  push();
  textSize(16);
  fill(0);
  let texto;

  texto = 'amplitud: ' + amp;
  text(texto, 20, 20);

  fill(0);
  ellipse(width/2, height-amp * 300, 30, 30);

  pop();

  gestorAmp.dibujar(100, 500);
}

function keyPressed() {
  if (key === 'r') {
    reiniciarPrototipo();
  }
}
