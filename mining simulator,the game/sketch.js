var Ores = ['iron','copper','gold']
var Oring = 0
var Ored = 0


function preload() {
  
}

function setup() {
    createCanvas(1325,600);
Orenumbr = round(random(1,30))
Oring = round(random(0,Ores.length))
Ored = Ores[Oring]
console.log(Oring)
}

function draw() {
background(220)
//"You found" + Round(random(1,30)) + Ores[Oring]
text("You found "+ Orenumbr + " " + Ored,300,300)
}



