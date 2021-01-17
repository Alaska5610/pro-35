//Create variables here

var dog , happyDog;
var database;
var foodS , foodStock;
var DHI , DI;

function preload()
{

  DHI = loadImage('images/dogImg1.png');
  DI = loadImage('images/dogImg.png');
	
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(250,250,10,10);
  dog.addImage("dog" , DI);
  dog.scale = 0.2;

  database = firebase.database();

  foodStock = database.ref('Food')
 // foodStock.on("value" , readStock);
  
}


function draw() {  
background(46, 139, 87)

if(keyWentDown(UP_ARROW)){
  writeStoke(foodS);
  dog.addImage("happy" , DHI);
}

textSize(15);
fill("black");
text("NOTE: Press UP_ARROW to feed Drago milk" , 10,490);

  drawSprites();
  
  //text("NOTE: Press UP_ARROW to feed Drago milk" , 490,10);

}

function readStock(data){
  foodS = data.val();
}

function writeStoke(x){

  if(x<=0){
    x=0;
  }else{
    x = x-1;
  }

  database.ref('/').update({
    Food : x
  })
}



