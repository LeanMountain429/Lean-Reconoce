function preload(){
    redneuro= ml5.imageClassifier("DoodleNet")
}
function setup(){
    canvasvar= createCanvas(400,350)
    canvasvar.mouseReleased(detectar)
}
function draw(){
    strokeWeight(5)
    stroke(0)
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)
    }
}
function ooncliick(){
    background("white")
}
function detectar(){
    redneuro.classify(canvasvar,resultshow)
}
function resultshow(error,results){
    if(error){
        console.error(error);
    }
    console.log(results)
    document.getElementById("pareciencia").innerHTML= results[0].label;
    document.getElementById("pareciencia2").innerHTML= Math.round(results[0].confidence*100)+"%";
}