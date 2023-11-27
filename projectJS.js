// JavaScript source code

console.log("HELLO");

let buttonOne = document.getElementById("myButton");
let infoBox = document.getElementById("personalInfo");

infoBox.hidden = true;

buttonOne.addEventListener('click', function () {
    flyWindow = window.open('about:blank', 'myPop', 'width=500', height = '400',);
    flyWindow.document.write("GOODBYE");
})