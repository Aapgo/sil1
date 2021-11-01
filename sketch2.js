var level1background,level2background,level3background,level4background,level5background,startbackground
var score,lives;
var play,playimg,about,aboutimg,sound,soundimg,nosound,nosoundimg;
var gameState="wait"


function preload(){


}


function setup(){
createCanvas(windowWidth,windowHeight)

/*play=createSprite(windowWidth/2,windowHeight/2,100,20)

about=createSprite(windowWidth/2,windowHeight/2.5,100,20)

sound=createSprite(windowWidth/2,windowHeight/3,100,20)

nosound=createSprite(windowWidth/2,windowHeight/3.5,100,20)*/

play= createButton('     PLAY    ')
play.position(windowWidth/2,windowHeight/3.5)


about= createButton('     ABOUT    ')
about.position(windowWidth/2,windowHeight/3)

sound= createButton('       SOUND      ')
sound.position(windowWidth/2,windowHeight/2.5)

nosound= createButton('    STOP SOUND     ')
nosound.position(windowWidth/2,windowHeight/2)





}



function draw(){
background("cyan")



drawSprites()
}