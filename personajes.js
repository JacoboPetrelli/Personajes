let canvas = document.querySelector("#Personajes")
let ctx = canvas.getContext("2d")

class personaje{
    constructor(x, y , angle, r){
        this.x = x;
        this.y = y
        this.angle = angle
        this.r = r
    }
   dibujarse(){
       ctx.translate(this.x, this.y);
       ctx.rotate(this.angle*Math.PI/180);
       ctx.beginPath();
       ctx.arc(0, 0, this.r, 0 , 2*Math.PI);
       ctx.arc(100, 200, this.r/3, 0, 2*Math.PI) 
       ctx.arc(100, 200, this.r/3, 0, 2*Math.PI) 
       ctx.stroke();
       ctx.beginPath();
       ctx.arc(0, 0 , this.r/2, 0.25*Math.PI, 0.75*Math.PI)
       ctx.stroke();
       ctx.rotate(-this.angle*Math.PI/180);
       ctx.translate(-this.x, -this.y)
       ctx.translate(this.x, this.y);
       ctx.rotate(this.angle*Math.PI/180);
       ctx.beginPath();
       ctx.arc(0, 0, this.r, 0 , 1.5*Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.arc(0, 0 , this.r/2, 0.25*Math.PI, 0.75*Math.PI)
       ctx.stroke();
       ctx.rotate(-this.angle*Math.PI/180);
       ctx.translate(-this.x, -this.y)
          
    }
}
let Jacobo = new personaje(200, 100, 180, 50)
let JJ =  new personaje(200, 250, -90, 30)
let JF =  new personaje(350, 210, -45, 30)
let JK = new personaje(100,250, 90, 60 ) 
Jacobo.dibujarse();
JJ.dibujarse();
JF.dibujarse();
JK.dibujarse();