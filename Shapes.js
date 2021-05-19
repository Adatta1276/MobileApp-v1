class RoundedRectangle {
    constructor(x,y,w,h,r1,r2,r3,r4,stroke,weight,fill,hoverResponse) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r1 = r1;
        this.r2 = r2;
        this.r3 = r3;
        this.r4 = r4;
        this.stroke = stroke;
        this.weight = weight;
        this.fill = fill;
        //hoverResponse must be either true or false
        this.hoverResponse = hoverResponse;

    }

    display() {
      var posX = this.x;
      var posY = this.y;
      
     push();
     stroke(this.stroke);
     strokeWeight(this.weight);
     fill(this.fill);


    

     /*if(this.hoverResponse === true || this.hoverResponse === TRUE) {

     }

     else if(this.hoverResponse === false || this.hoverResponse === FALSE){

     }*/

     
     pop();


     

    }

    properties(propNum,propArrray) {
     propNum = 0;
     //all properties will be loaded inside propArrray (it's an array 😁);
     propArrray = []; 
   
      
    }
}

