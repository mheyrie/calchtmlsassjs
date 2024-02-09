const displayResult = document.querySelector('.display-calculations');
const oneBtn = document.querySelector(".one");
const twoBtn = document.querySelector(".two");
const threeBtn = document.querySelector(".three");
const fourBtn = document.querySelector(".four");
const fiveBtn = document.querySelector(".five");
const sixBtn = document.querySelector(".six");
const sevenBtn = document.querySelector(".seven");
const eightBtn = document.querySelector(".eight");
const nineBtn = document.querySelector(".nine");
const zeroBtn = document.querySelector(".zero");
const dotBtn = document.querySelector(".dot");
const addBtn = document.querySelector(".add");
const substractBtn = document.querySelector(".substract");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");

calculation = "";

function updateDisplay() {
    displayResult.textContent = calculation || '0'; // Display '0' if calculation is empty
}

function toAddOne(){
    calculation += "1"
    updateDisplay()
    console.log(calculation)
}

function toAddTwo(){
    calculation += "2"
    updateDisplay()
    console.log(calculation)
}

function toAddThree(){
    calculation += "3"
    updateDisplay()
    console.log(calculation)
}

function toAddFour(){
    calculation += "4"
    updateDisplay()
    console.log(calculation)
}

function toAddFive(){
    calculation += "5"
    updateDisplay()
    console.log(calculation)
}

function toAddSix(){
    calculation += "6"
    updateDisplay()
    console.log(calculation)
}

function toAddSeven(){
    calculation += "7"
    updateDisplay()
    console.log(calculation)
}

function toAddEight(){
    calculation += "8"
    updateDisplay()
    console.log(calculation)
}

function toAddNine(){
    calculation += "9"
    updateDisplay()
    console.log(calculation)
}

function toAddZero(){
    calculation = "0"
    updateDisplay()
    console.log(calculation)
}

function dots(){
    calculation += "."
    updateDisplay()
    console.log(calculation)
}

function addition(){
    calculation += " + "
    updateDisplay()
    console.log(calculation)
}

function substraction(){
    calculation += " - "
    updateDisplay()
    console.log(calculation)
}

function mulitplication(){
    calculation += " * "
    updateDisplay()
    console.log(calculation)
}

function division(){
    calculation += " / "
    updateDisplay()
    console.log(calculation)
}

function equation(){
    calculation = eval(calculation)
    updateDisplay()
    console.log(calculation)
}

function clear(){
    calculation = ""
    updateDisplay()
    console.log(`Cleared: 0${calculation}`)
}

oneBtn.addEventListener("click", toAddOne);
twoBtn.addEventListener("click", toAddTwo);
threeBtn.addEventListener("click", toAddThree);
fourBtn.addEventListener("click", toAddFour);
fiveBtn.addEventListener("click", toAddFive);
sixBtn.addEventListener("click", toAddSix);
sevenBtn.addEventListener("click", toAddSeven);
eightBtn.addEventListener("click", toAddEight);
nineBtn.addEventListener("click", toAddNine);
zeroBtn.addEventListener("click", toAddZero);
dotBtn.addEventListener("click", dots);
addBtn.addEventListener("click", addition);
substractBtn.addEventListener("click", substraction);
multiplyBtn.addEventListener("click", mulitplication);
divideBtn.addEventListener("click", division);
equalsBtn.addEventListener("click", equation);
clearBtn.addEventListener("click", clear);