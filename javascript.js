window.onload = init;

var gCanvas;
var g2d;
var width = 854;
var height = 480;

var title = "Text Adventure";
var gameState = 0;


}
function replace( hide, show ) {
  document.getElementById(hide).style.display="none";
  document.getElementById(show).style.display="block";
}
function myFunction() {
    alert("Bye Bye! See you next time");
}
function myFunction2() {
    alert("Game over!Bye Bye! See you next time");
}
function draw() {
    if (gameState === 0) {
        g2d.font = "60px Courier New";
        g2d.fillStyle = "#FFFFFF";
        g2d.fillText(title, (width / 2) - (g2d.measureText(title).width / 2), 140);
        
        g2d.font = "24px Courier New";
        g2d.fillStyle = "#CCCCCC";
        g2d.fillText("1.Play Game", (width / 2) - (g2d.measureText(title).width / 2), 300);
        g2d.fillText("2.Exit Game", (width / 2) - (g2d.measureText(title).width / 2), 330);
     }
    
    console.log("Game drawn successfully")
    
}
