var button = document.querySelector("button");
var boody = document.querySelector("body");
var h1 = document.querySelector("h1");




button.addEventListener("click",colorChanger);


function colorChanger(){
  var arr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
  var hex = "#";

  while(hex.length < 7){
    hex += arr[Math.floor(Math.random() * arr.length)];
  
  }
  return boody.style.backgroundColor = hex , h1.textContent = hex;

}


