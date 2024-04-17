let x, y;
function setup() {
  createCanvas(400, 400);
  x=-width;
  y=height/2.5;
  noStroke()
  console.log ("It's a baby penguin! Don't judge me >:D")
  console.log("The original picture: https://www.google.com/search?sca_esv=557923302&rlz=1CACRSK_enUS1026&q=penguin&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjB9PXD2-SAAxUEoFsKHX5XDksQ0pQJegQIDRAB&biw=1397&bih=682&dpr=1.38&surl=1&safe=active&ssui=on#imgrc=dmz7bdfKzgiVwM")
  console.log("If you look closely, you'll see many tiny tiny mistakes. This is because it needed to be circular, and where ellipses didn't work, arcs did. BUT ARCS SUCK TO WORK WITH AND I HATE THEM")
}


function draw() {
  background("#CFFCFE");
  fill("skyblue")
  triangle(0,0,0,340,2000,0)//the sky
    fill("skyblue")
  triangle(0,0,0,340,2000,0)//the sky
  
  noStroke();
  fill("yellow");
  ellipse(x,y,24,24)
  
  x = x + 1
  y = y - 0.25
   
  if(x>100) {
    y = y + 0.125
  if(x>150) {
    y = y + 0.0625
  if(x>200) {
    y = y + 0.125
  if(x>250) {
    y = y + 0.0625
  if(x>300) {
    y = y + 0.125
  if(x>400) {
    x=-width;
    y=height/2.5;
            }
          }
        }
      }
    }
  }

  noStroke()
  fill("#CFFCFE")
  rect(200,200,200,200)//ice
  triangle(275,200,375,200,375,175)//ice
  fill("#CFFCFE")
  rect(375,175,50,25)//ice
  fill("#CFFCFE")
  rect(0,325,100,20)//ice
  fill("#C6D7D8")
  triangle(190,100,150,300,300,250)//body
  fill("#BACBCC")
  rect(150,300,20,30)
  fill("#BACBCC")
  ellipse(152,315,10,30)
  fill("#BACBCC")
  ellipse(160,327,20,20)
  fill("#B6C7C8")
  triangle(200,400,300,250,150,300)
  noStroke()
  fill("#B6C7C8")
  ellipse(275,285,70,100)
  fill("#B6C7C8")
  rect(240,285,40,50)
  fill("#C6D7D8")
  triangle(225,100,150,300,300,250)
  fill("#C6D7D8")
  triangle(200,100,150,300,300,250)
  fill("#C5CCCD")
  triangle(150,300,159,255,300,250)
  fill("skyblue")
  rect(175,100,100,50)
  fill("#D6D5B1")
  ellipse(175,330,30,15)
  fill("#D6D5B1")
  ellipse(258,330,33,18)
  fill("#CFFCFE");
  rect(165,335,400,100)
  fill("black")
  triangle(160,330,170,330,163,339)
  fill("black")
  triangle(168,330,185,330,172,343)
  fill("black")
  triangle(180,330,190,330,182,339)
  fill("black")
  ellipse(165,330,10,4)
  fill("black")
  ellipse(175,330,10,4)
  fill("black")
  ellipse(185,330,10,4)
  fill("black")
  triangle(248,325,236,335,248,335)
  triangle(260,323,243,338,258,333)
  triangle(270,323,253,338,268,333)
  arc(259,336,30,25,radians(170),radians(270),CHORD)
  arc(269,336,30,25,radians(170),radians(270),CHORD)
  fill("#B9C9C9")
  triangle(250,280,245,200,280,220)
  triangle(280,220,270,280,250,280)
  arc(260,215,42,35,radians(215), radians(50),CHORD)
  fill("#B7CCCC")
  ellipse(260,280,20,20)
  triangle(249.5,267,275,260,250,280)
  triangle(273.2,261,270,280,249,280)
  fill("#C6D7D8")
  triangle(245,200,244,199,244,248)
  triangle(246.15,200,245.15,199,245.15,248)
  fill("#B7CCCC")
  ellipse(148,270,20,40)
  triangle(140,260,158,270,173,190)
  //head
  fill("black")
  rect(180,100,65,50)
  ellipse(245,125,18,55)
  triangle(212.5,150,252.5,140,245,158)
  triangle(180,150,180,135,175,135)
  arc(216,100,65,40,radians(180),radians(0))
  triangle(247,95,249.5,100,200,150)
  ellipse(205,85,20,10)
  triangle(247,97.5,209,80,215,150)
  triangle(198,81,170,103,247,97.5)
  triangle(170,103,166,110,200,106)
  rect(170,102,20,7)
  rect(166.5,108,20,10)
  fill("white")
  rect(190,105,40,30)
  triangle(230,104,230,130,235,110)
  arc(210,105,40,10,radians(180),radians(0))
  fill("black")
  triangle(200,100,190,108,190,100)
  triangle(200,135,190,125,190,135)
  fill("white")
  triangle(195,130,174,135,179,150)
  rect(180,135,50,15)
  triangle(195,130,190,135,205,135)
  fill("black")
  triangle(220,151,230,141,230,151)
  ellipse(205,117,15,9)
  fill("#3B3B3B")
  triangle(174,135,191,125,158,123)
  triangle(173,135,191,125,196,131)
  fill("#4C4C4C")
  triangle(191,125,174,110,150,124)
}