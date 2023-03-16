
const changeMyColorButton1 = document.getElementById("btn1"); 
const changeMyColorButton2 = document.getElementById("btn2"); 
const myTextBox = document.getElementById("txtbox1"); 


changeMyColorButton1.onclick = changeButton1Style; 
changeMyColorButton2.onclick = changeButton2Style;
myTextBox.onmouseover = changemyTextBoxStyle;
 
function changeButton1Style() {
    changeMyColorButton1.style.backgroundColor = "blue"; 
    changeMyColorButton1.style.color = "white";
    changeMyColorButton1.style.borderStyle = "solid";
 //…
} 

function changeButton2Style() {
    changeMyColorButton2.style.backgroundColor = "blue"; 
    changeMyColorButton2.style.color = "white";
    changeMyColorButton2.style.borderStyle = "solid";
 //…
} 

function changemyTextBoxStyle() {
    myTextBox.style.backgroundColor = "blue"; 
    myTextBox.style.color = "white";
    myTextBox.style.borderStyle = "solid";
 //…
} 
