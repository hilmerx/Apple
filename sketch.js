var plist =[];
var middleX = document.documentElement.clientWidth/2;
var middleY = document.documentElement.clientHeight/2;
var x;
var y;
var strokeVar = 10;
var hsbloop=0;
var hiscore=0;
var nr=0;
var appleList=[];
var snakeLength = 3;
var appleX;
var appleY;
var randAppleX;
var randAppleY;




function setup(){
createCanvas(document.documentElement.clientWidth,document.documentElement.clientHeight);
  x=middleX-middleX%10;
  y=middleY-middleY%10;
  plist=[[middleX-middleX%10,middleY-middleY%10,hsbloop]]
  // appleList = [[600,400]];
  randAppleX=random(10, width-10);
  randAppleY=random(10, height-10);
  appleList = [[randAppleX-randAppleX%10, randAppleY-randAppleY%10]];

  // for (var i =0; i<100; i++){
    // console.log(middleY-middleY%10);
  // }
frameRate(15);



}

function draw(){
  rectMode(CENTER);


  // for (var i = 0; i<;i++){
      background("black");
  if (plist.length>hiscore){
  hiscore = plist.length
  }
  textSize(32);
  text("high score="+hiscore, 10, 30);

  // }

  stroke(121,121,255);
  noStroke();
  // strokeWeight(strokeVar);
  // noFill();
  for (var i =0; i<plist.length; i++){
    fill('hsb('+((plist.length*10-i*10+59)%50+150)+', 100%, 100%)');
     // fill('white');

    rect(plist[i][0],plist[i][1],10,10);  
  }
  if(appleList[0]){
  walk();
  }
  if(plist.length>snakeLength){
    plist.shift();
  }
  // clear();
  fill("red");
  rectMode(CENTER);

    for(var i = 0; i<appleList.length; i++){
      // rect(200,100,10,10);
      rect(appleList[i][0],appleList[i][1],10,10);  

    }
// console.log(  dist(plist[plist.length-1][0],plist[plist.length-1][1],appleList[0][0],appleList[0][1]));

  }
var life1=0;
var life2=0;
var life3=0;
var life4=0;

function walk(){

  // if(life1>0&&life2>0&&life3>0&&life4>0){
  //   plist.length = 0; 
  //   plist=[[middleX,middleY,hsbloop]];

  //   console.log(plist);
  //   life1=0;
  //   life2=0;
  //   life3=0;
  //   life4=0;
  //   x=middleX;
  //   y=middleY;

  // }
  var tempArr=[];
  // var nr = floor(Math.random()*4);
  var dirList=[];
  var dir;
  //check directions
  var up=true;
  var down=true;
  var left=true;
  var right=true;
  for (var i = 0;i<plist.length;i++){
    if (plist[plist.length-1][0] === plist[i][0] && plist[plist.length-1][1]-10=== plist[i][1]||plist[plist.length-1][1]-10<5){
      up=false;
    }
    if (plist[plist.length-1][0] === plist[i][0] && plist[plist.length-1][1]+10=== plist[i][1]||plist[plist.length-1][1]+10>height-5){
      down=false;
    }
    if (plist[plist.length-1][0]-10 === plist[i][0] && plist[plist.length-1][1]=== plist[i][1]||plist[plist.length-1][0]-10<5){
      left=false;
    }
    if (plist[plist.length-1][0]+10 === plist[i][0] && plist[plist.length-1][1]=== plist[i][1]||plist[plist.length-1][0]+10>width-5){
      right=false;
    }
  }
  
  if(!up&&!down&&!left&&!right){//DEATH
        plist.length = 0;
        plist=[[middleX-middleX%10,middleY-middleY%10,hsbloop]];
        snakeLength=3;
        return;
  }


  if(left){
    // dirList.push(dist(plist[plist.length-1][0]-10,plist[plist.length-1][1],appleList[0][0],appleList[0][1]);));//left
    dirList.push(abs((plist[plist.length-1][0]-10)-appleList[0][0])+abs(plist[plist.length-1][1]-appleList[0][1]));//left
  }else{
    dirList.push(10000)
  }
  if(right){
    // dirList.push(dist(plist[plist.length-1][0]+10,plist[plist.length-1][1],appleList[0][0],appleList[0][1]));//right
    dirList.push(abs((plist[plist.length-1][0]+10)-appleList[0][0])+abs(plist[plist.length-1][1]-appleList[0][1]));//right
  }else{
    dirList.push(10000);
  }
  if(up){
    // dirList.push(dist(plist[plist.length-1][0],plist[plist.length-1][1]-10,appleList[0][0],appleList[0][1]));//up
    dirList.push(abs(plist[plist.length-1][0]-appleList[0][0])+abs((plist[plist.length-1][1]-10)-appleList[0][1]));//up

  }else{
    dirList.push(10000);
  }
  if(down){
    // dirList.push(dist(plist[plist.length-1][0],plist[plist.length-1][1]+10,appleList[0][0],appleList[0][1]));//down
    dirList.push(abs(plist[plist.length-1][0]-appleList[0][0])+abs((plist[plist.length-1][1]+10)-appleList[0][1]));//down
  }else{
    dirList.push(10000);
  }
  // console.log(dist(plist[plist.length-1][0]-10,plist[plist.length-1][1],appleList[0][0],appleList[0][1]));
  // console.log(dirList);

  var smallest = min(dirList[0],dirList[1],dirList[2],dirList[3]);
  // console.log(dirList);
  for (var i =0; i<dirList.length;i++){
    if(smallest===dirList[i]){
      dir = i;
    }
  }

  dirList.length=0;

// console.log(i);


  switch(dir){
    case 0: 
            x=x-10;
            for (var i=0; i<plist.length;i++){
              if(plist[i][0]===x&&plist[i][1]===y){
                // console.log("conflict 1!");
                life1++;
                x=x-10;
                return;
              }
            }
            live();          

            if(hsbloop>255){
              hsbloop=0;
            }
            hsbloop=hsbloop+3;
            tempArr =[x,y,hsbloop];
            plist.push(tempArr);
            break;

    case 1: x=x+10;
            for (var i=0; i<plist.length;i++){
              if(plist[i][0]===x&&plist[i][1]===y){
                // console.log("conflict 2!");
                life2++;
                x=x+10;
                return; 
              }
            }
            live();          
            if(hsbloop>255){
              hsbloop=0;
            }
            hsbloop=hsbloop+3;
            tempArr =[x,y,hsbloop];
            plist.push(tempArr);


            break;
    case 2: y=y-10;
            for (var i=0; i<plist.length;i++){
              if(plist[i][0]===x&&plist[i][1]===y){
                // console.log("conflict 3!");
                life3++;
                y=y-10;
                return;
              }
            }
            live();          
            if(hsbloop>255){
              hsbloop=0;
            }
            hsbloop=hsbloop+3;
            tempArr =[x,y,hsbloop];
            plist.push(tempArr);


            break;
    case 3: y=y+10;
            for (var i=0; i<plist.length;i++){
              if(plist[i][0]===x&&plist[i][1]===y){
                // console.log("conflict 4!");
                life4++;
                y=y+10;
                return;
              }
            }
            live();
            if(hsbloop>255){
              hsbloop=0;
            }
            hsbloop=hsbloop+3;
            tempArr =[x,y,hsbloop];
            plist.push(tempArr);


            break;


  }
  var newApple=false;
  if(plist[plist.length-1][0] === appleList[0][0] && plist[plist.length-1][1] === appleList[0][1]){
      appleList.shift();
      snakeLength = snakeLength+3;

      while(newApple===false){
        // console.log("pop");
        newApple=true;
        randAppleX=random(10, width-10);
        randAppleY=random(10, height-10);
        appleX=randAppleX-randAppleX%10;
        appleY=randAppleY-randAppleY%10;
        for (var i = 0;i<plist.length;i++){
          if(appleX===plist[i][0]&&appleY===plist[i][1]){
            newApple=false;
            console.log("FALSE");
            break;
          }
        }
        if(newApple){
          // appleList.push([appleX-appleX%10, appleY-appleY%10]);
        }
      }



  }
}
function  live(){
life1=0;
life2=0;
life3=0;
life4=0;
}
  // function keyPressed() {
  //   if (keyCode === RIGHT_ARROW) {
  //     nr=0;
  //   } else if (keyCode === LEFT_ARROW) {
  //     nr=1;
  //   }else if (keyCode === DOWN_ARROW) {
  //     nr=2;
  //   }else if (keyCode === UP_ARROW) {
  //     nr=3;
  //   }
  // }  
function mousePressed(){
  appleList.push([mouseX-mouseX%10, mouseY-mouseY%10]);
  // console.log(mouseX);
}
