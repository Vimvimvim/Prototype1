var emotionDisp = document.getElementById("emotionDisp");

emotionDisp.innerHTML = "";

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
      
      if (!(emotionDisp.innerHTML.indexOf(current.innerHTML) > -1)){
        if (emotionDisp.innerHTML != ""){
          emotionDisp.innerHTML += ", "; 
        }
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

var nextButton = document.getElementById("right");
homeButton.onclick = function(e) {
  window.location.href = "prototype_task1_pt2.html";
}

var prevButton = document.getElementById("left");
prevButton.onclick = function(e) {
  window.location.href = "index.html";
}

var homeButton = document.getElementById("title");
homeButton.onclick = function(e) {
  window.location.href = "index.html";
}