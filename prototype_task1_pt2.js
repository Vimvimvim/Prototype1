var titleBox = document.getElementById("titleBox");

var backButtonToggle = false;

var dateBox = document.getElementById("date");

var descriptionBox = document.getElementById("description");
var closingStmt = document.getElementById("closingstatement") ;

var prevButton = document.getElementById("left");

var homeButton = document.getElementById("homeButt");

var nextButton = document.getElementById("right");
nextButton.onclick = function(e) {
  descriptionBox.style.display = 'none';
  titleBox.style.display = 'none';
  dateBox.style.display = 'none';
  nextButton.style.display = 'none';
  closingStmt.style.display = 'inline';
  homeButton.style.display = 'inline';
  backButtonToggle = true;
}

prevButton.onclick = function(e){
  if (backButtonToggle){
    descriptionBox.style.display = 'inline';
    titleBox.style.display = 'block';
    dateBox.style.display = 'block';
    nextButton.style.display = 'block';
    closingStmt.style.display = 'none';
    homeButton.style.display = 'none';
    backButtonToggle = false;
  } else {
    window.location.href = "prototype_task1_pt1.html";
  }
}

homeButton.onclick = function(e) {
  window.location.href = "index.html";
}

var titleButton = document.getElementById("title");
titleButton.onclick = function(e) {
  window.location.href = "index.html";
}

function inputFocus(i){
  if(i.value==i.defaultValue){
    i.value="";
    i.style.color = "#000";
  }
}

function inputBlur(i){
  if(i.value=="") {
     i.value=i.defaultValue;
     i.style.color="#888"; 
     i.size = 15;
  }
}

function expand(i){
  if(i.value.length > i.size){
    i.size = i.size + 1;
  } 
}