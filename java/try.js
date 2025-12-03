// const { createElement } = require("react")

var body = document.getElementById("tbody");
var header = document.getElementsByTagName("h1")[0];
var button = document.getElementById("btn");
var par = document.getElementById("sol");

function m() {
  if (body.style.backgroundColor==" " ||body.style.backgroundColor == "white") {
  
    body.style.backgroundColor = "black";
    localStorage.setItem('mood','black') 
    header.style.color = "white";
    button.innerText = "change to white";
    button.style.color = "red";
    par.style.color = "blue";
    localStorage.setItem('btn','change to white')
    localStorage.setItem('style','white')
  } else {
    
    body.style.backgroundColor = "white";
    localStorage.setItem('mood','white') 
    header.style.color = "black";
    button.innerText = "change to black";
    button.style.color = "green";
    par.style.color = "yellow";
    localStorage.setItem('btn','change to black')
    localStorage.setItem('style','black')

  }
}
var dd=localStorage.getItem('style')
var ss=localStorage.getItem('btn')
var mm=localStorage.getItem('mood')
body.style.backgroundColor=mm
button.innerText=ss
header.style.color=dd

function o() {
  var number1 = +document.getElementById("num1").value;
  var operaiton = document.getElementById("op").value;
  var number2 = +document.getElementById("num2").value;

  if (operaiton == "+") {
    r = number1 + number2;
  } else if (operaiton == "-") {
    r = number1 - number2;
  } else {
    r = "undefined";
  }
  document.getElementById("sol").innerText = "here you are " + r;
}

localStorage.setItem("Name", "ghalyah");
localStorage.setItem("Mhmad", "25");
localStorage.removeItem("backgroundColor");

var h2 = document.createElement("hs");
h2.innerHTML = localStorage.getItem("Name");
body.appendChild(h2);

localStorage.removeItem('Name')