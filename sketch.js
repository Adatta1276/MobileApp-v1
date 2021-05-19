/*LINKS : https://p5js.org/
https://p5js.org/reference/
https://brm.io/matter-js/
https://brm.io/
https://github.com/
https://studio.code.org/
https://studio.code.org/docs/gamelab/
*/



//VARs and LETs
var canvas,placeInfo;
var strokeLife,msgLife;
var msg;

let compass,bearingToNorth;

let fr = 1000;


var database;
var CodeCheckDatabase;
var resetButton;
var resetText;
var dummySprite;

//loading geo-position
function preload() {
  placeInfo =  getCurrentPosition();
  
}

//logging data on console and initialising compass
function setup() {

  canvas = createCanvas(1080,1920)

   database = firebase.database();
   console.log(database);
   CodeCheckDatabase = new DataVals();

//add touches functionality for everything  since it's a mobile app
 /* canvas.doubleClicked(screenFull);

  frameRate(fr);*/




  if(geoCheck() == true){
    //geolocation is available
    console.log("Thanks !! Your location is ON")
   
    //message
   
    
  
  }
  
  
  else{
    //error getting geolocation
   console.log("Please turn on the location on your device");


  }
  
  console.log(placeInfo.latitude)
      console.log(placeInfo.longitude)
      console.log(placeInfo.accuracy)
      console.log(placeInfo.altitude)
      console.log(placeInfo.altitudeAccuracy)
      console.log(placeInfo.heading)
      console.log(placeInfo.speed)

compass = new Compass()

compass.init(compassReady);


dummySprite = createSprite(960, 40, 201,40);
dummySprite.shapeColor = "red";
 

//screenFull();
  

}

//drawing ellipse and markings
function draw() {
background(0,0,255)


CodeCheckDatabase.checkDataAvailability();



if (compass.position !== null) {
  // continually call the north angle - note that 
  // this will only change if you change the device
  // orientation
  //fill(0,100,155);
  //stroke("red")
  noFill()
  //strokeWeight(3)
  ellipse(width/2,height/2,500,500);
  
  fill("green");
  stroke("black");
  strokeWeight(7);
  line(width/2,(height/2)-248,width/2,(height/2)-200)
  line(width/2,(height/2)+248,width/2,(height/2)+200)
  line((width/2)-248,(height/2),width/2-200,height/2);
  line((width/2)+248,(height/2),width/2+200,height/2);



//calling compasss init function
  compassReady();
  
  //visualize the pin moving
  //text('angle to north', width * 0.5, height * 0.25)
  //noStroke();

  //MARKINGS
  strokeWeight(2)
  drawPin(width * 0.5, height * 0.5, bearingToNorth);
  drawPin(width * 0.5, height * 0.5, bearingToNorth+135.06);
  

  noStroke();
  fill(0);
  textSize(20);
  text("x : "+mouseX,50,1870);
  text("y : "+mouseY,150,1870)

  //CodeCheckDatabase.updateData();

  //text("design the reset button for resetting all values in the database using a rounded rectangle u idiot", width/2-500,height/2-500)


  
 
}

  noStroke();
 


  fill("#ff3300");
  resetButton =  rect(860, 20, 201, 40, 2000);

  textFont("JetBrains Mono Light");
  fill(0);
  textSize(30);
  

  dummySprite.display();
  resetText = text("RESET", 917.5,50)

  if(mousePressedOver(dummySprite)) {
    showResetNotification();
    console.log("hi sup");
  }




}


//compass init function
function compassReady() {
  bearingToNorth = compass.getBearingToNorth();
}

//drawing pins
function drawPin(x, y, pinAngle) {
  push();
  //check definition of translate, else use an alternative from p5JS or other librarian.
  translate(x, y);
  // 1. normalize for p5: p5 handles 0 degrees at +90deg from the web browser
  rotate(degrees(-90))
  // 2. rotate accordingly
  //for(rotate(degrees(0)); rotate(degrees(pinAngle)); rotate(degrees(1))) {
    
  
  rotate(degrees(pinAngle));
    stroke("red");
    fill("red")
   line(0, 0, 50, 0);
   //stroke("red")
  ellipse(0, 0, 10);
  pop();
  //}
  
  //rotate(degrees(pinAngle))
  
  /*line(0, 0, 50, 0);
  ellipse(0, 0, 10);
  pop();*/
}

//fullscreen function, need to diagnose error
function screenFull() {
  let fs = fullscreen();
  fullscreen(!fs);
}

function drawMagneticArrow() {
 
}


function showResetNotification() {
  fill(255);
  stroke(0,70);
  rect(width/2-150,height/2,400,250,50);


} 


