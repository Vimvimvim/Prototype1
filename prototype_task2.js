var titleBox = document.getElementById("titleBox");

var backButtonToggle = false;

var dateBox = document.getElementById("date");

var emotions = document.getElementById("emots");

var descriptionBox = document.getElementById("description");
var closingStmt = document.getElementById("closingstatement") ;

var prevButton = document.getElementById("left");

var homeButton = document.getElementById("homeButt");

var emotionDisp = document.getElementById("emotionDisp");

var nextButton = document.getElementById("right");
nextButton.onclick = function(e) {
  descriptionBox.style.display = 'none';
  titleBox.style.display = 'none';
  dateBox.style.display = 'none';
  emots.style.display = 'none';
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
    emots.style.display = 'block';
    nextButton.style.display = 'block';
    closingStmt.style.display = 'none';
    homeButton.style.display = 'none';
    backButtonToggle = false;
  } else {
    window.location.href = "index.html";
  }
}

homeButton.onclick = function(e) {
  window.location.href = "index.html";
}

var titleButton = document.getElementById("title");
titleButton.onclick = function(e) {
  window.location.href = "index.html";
}

for (var i=0; i<=35; i++) {
  var emotion = document.getElementById(""+i);
  if (emotion != null) {
    emotion.onclick = function (e) {
    var current = e.target;
      if (current.style.backgroundColor != "lightpink"){
        current.style.backgroundColor = "lightpink";
      } else {
        current.style.backgroundColor = "#B6C5E3";
      }
      if (emotionDisp.innerHTML != ""){
        emotionDisp.innerHTML += ", "; 
      }
      if (!(emotionDisp.innerHTML.indexOf(current.innerHTML) > -1)){
        emotionDisp.innerHTML += current.innerHTML;
      }
    }
  }
}

var bigEmotions = ["sad","angry","happy", "fearful", "disgusted", "surprised"];
for (var i=0; i< 7; i++) {
  var curEmotion = document.getElementById(bigEmotions[i]);
  if (curEmotion != null) {
    curEmotion.onclick = function (e) {
    var currentEmotion = e.target;
      if (currentEmotion.style.color == "lightcoral"){
        currentEmotion.style.color = "#3d3d5c";
      } else {
        currentEmotion.style.color = "lightcoral";
        currentEmotion.style.borderColor = "lightcoral";
      }
      if (!(emotionDisp.innerHTML.indexOf(currentEmotion.innerHTML) > -1)){
        if (emotionDisp.innerHTML != ""){
          emotionDisp.innerHTML += ", "; 
        }
        emotionDisp.innerHTML += currentEmotion.innerHTML;
      }
    }
  }
}

function expand(i){
  if(i.value.length > i.size){
    i.size = i.size + 1;
  } 
}