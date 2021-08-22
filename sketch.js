var canvas, backgroundImage;

var questions;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(windowWidth,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background("pink");

}
