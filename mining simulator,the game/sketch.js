var Ores = ['Iron','Copper','Gold','Lead','Platinum','Aluminium','Bismuth','Australium','Magma','Void']
var Oring = 0
var Ored = 0
var sequence = 20

function preload() {
  
}

function setup() {
    
    createCanvas(1325,650);
    background(200)
Orenumbr = round(random(1,15))
Oring = round(random(0,Ores.length - 1))
Ored = Ores[Oring]
for(var i = 0 ; i<sequence ; i++){
        
    Orenumbr = round(random(1,15))
    Oring = round(random(0,Ores.length - 1))
    Ored = Ores[Oring]
    text("You found "+ Orenumbr + " " + Ored,633,30 + i*20) 
    
    }
}

function draw() {   
if (mouseIsPressed){
    Randomize()
}
}

function Randomize(){
    background(200)
    for(var i = 0 ; i<sequence ; i++){
        
        Orenumbr = round(random(1,15))
        Oring = round(random(0,Ores.length - 1))
        Ored = Ores[Oring]
        text("You found "+ Orenumbr + " " + Ored,633,30 + i*20) 
        
        }
        
        
}  



