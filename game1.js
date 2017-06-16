var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

var health = 100;
var level = 1;
var life = 5 ;
var bonus = 0;

 function upArrowPressed()
           {  if( playerY-5>20)
                playerY-=5;
               drawplayer();
            }

            function downArrowPressed()
           { if(playerY+30<160)
                playerY+=5;
               drawplayer();
            }
            
             function leftArrowPressed()
           { if(playerX-5>0)
                playerX-=5;
               drawplayer();
            }

            function rightArrowPressed()
           { if(playerX+20<300)
                playerX+=5;
               drawplayer();
            }

            function moveSelection(event) {   
                
                    
                switch (event.keyCode) {

                    case 38:
                        upArrowPressed();
                    break;
                        
                    case 87:
                        upArrowPressed();
                    break;

                    case 40:
                        downArrowPressed();
                    break;
                    
                    case 83:
                        downArrowPressed();
                    break;
                        
                    case 39:
                        rightArrowPressed();
                    break;
                        
                    case 37:
                        leftArrowPressed();
                    break;
                        
                        
                
                } 
            };

        function gameLoop()
        {
            
            moveSelection();
            setTimeout("gameLoop()",5000);
        }



function drawmaze()
{
    
    
    c.font = "10px Arial";
    c.strokeText("HEALTH :",10,10);
    c.strokeText(health,55,10);
    c.strokeText("LEVEL :",80,10);
    c.strokeText(level,120,10);
    c.strokeText("LIFE :",140,10);
    c.strokeText(life,170,10);
    c.strokeText("BONUS :",190,10);
    c.strokeText(bonus,235,10);
    
    c.beginPath();
    c.moveTo(0,20);
    c.lineTo(300,20);
    c.lineTo(300,145);
    c.lineTo(0,145);
    c.lineTo(0,20);
    c.lineWidth=8;
    c.strokeStyle="white";
    c.stroke();
    
     c.beginPath();
    c.moveTo(30,20);
    c.lineTo(30,60);
    c.lineTo(40,60);
    c.lineTo(40,80);
    c.lineTo(60,80);
    c.moveTo(60,145);
    c.lineTo(60,100);
    c.moveTo(100,100);
    c.lineTo(100,20);
    c.moveTo(96,100);
    c.lineTo(150,100);
    c.lineTo(150,40);
    
    c.lineTo(150,110);
    c.lineTo(275,110);
    c.lineTo(275,40);
    c.moveTo(200,130);
    c.lineTo(200,50);
    c.moveTo(250,20);
    c.lineTo(250,80);
    c.lineWidth=8;
    
    
    c.strokeStyle="white";
    c.stroke();
    
    
    
}

var playerX = 5;
var playerY = 40 ;


function drawplayer()
{
    
    //c.beginPath();
    //c.arc(playerX,playerY,5,0,2*3.14,false);
    //c.stroke(); 
  base_image = new Image();
  base_image.src = 'bheem.jpg';
   // c.clearRect();
  base_image.onload = function(){
    c.drawImage(base_image, playerX, playerY,15,10);
     
  }
   
}

drawmaze();