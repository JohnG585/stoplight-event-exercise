(function() {
  'use strict';

  // YOUR CODE HERE
  var slow = document.querySelector("#slowLight");
  var slowB = document.querySelector("#slowButton");
  var stop = document.querySelector("#stopLight");
  var stopB = document.querySelector("#stopButton");
  var go = document.querySelector("#goLight");
  var goB = document.querySelector("#goButton");
  stopB.addEventListener("click", function() {
    stop.classList.toggle("stop");
  });
  goB.addEventListener("click", function() {
    go.classList.toggle("go");
  });
  slowB.addEventListener("click", function() {
    slow.classList.toggle("slow");
  });
})();
