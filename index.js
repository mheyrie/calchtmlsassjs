const displayResult = document.querySelector('.display-calculations');
const oneBtn = document.querySelector(".one").addEventListener("click", toAddOne);
const twoBtn = document.querySelector(".two").addEventListener("click", toAddTwo);
const threeBtn = document.querySelector(".three").addEventListener("click", toAddThree);
const fourBtn = document.querySelector(".four").addEventListener("click", toAddFour);
const fiveBtn = document.querySelector(".five").addEventListener("click", toAddFive);
const sixBtn = document.querySelector(".six").addEventListener("click", toAddSix);
const sevenBtn = document.querySelector(".seven").addEventListener("click", toAddSeven);
const eightBtn = document.querySelector(".eight").addEventListener("click", toAddEight);
const nineBtn = document.querySelector(".nine").addEventListener("click", toAddNine);
const zeroBtn = document.querySelector(".zero").addEventListener("click", toAddZero);
const dotBtn = document.querySelector(".dot").addEventListener("click", dots);
const addBtn = document.querySelector(".add").addEventListener("click", addition);
const substractBtn = document.querySelector(".substract").addEventListener("click", substraction);
const multiplyBtn = document.querySelector(".multiply").addEventListener("click", mulitplication);
const divideBtn = document.querySelector(".divide").addEventListener("click", division);
const equalsBtn = document.querySelector(".equals").addEventListener("click", equation);
const clearBtn = document.querySelector(".clear").addEventListener("click", clear);

let calculation = localStorage.getItem("calculation") || "";

function updateDisplay() {
    displayResult.textContent = calculation || '0';  // Note This Display '0' if calculation is empty
}

function updateCalculation(value){
    calculation += value
    updateDisplay()
    console.log(calculation)
    saveCalculation()
}

function saveCalculation(){
    localStorage.setItem("calculation", calculation)
}

function toAddOne(){
    updateCalculation("1") 
}

function toAddTwo(){
    updateCalculation("2") 
}

function toAddThree(){
    updateCalculation("3") 
}

function toAddFour(){
    updateCalculation("4") 
}

function toAddFive(){
    updateCalculation("5") 
}

function toAddSix(){
    updateCalculation("6") 
}

function toAddSeven(){
    updateCalculation("7") 
}

function toAddEight(){
    updateCalculation("8") 
}

function toAddNine(){
    updateCalculation("9") 
}

function toAddZero(){
    updateCalculation("0") 
}

function dots(){
    updateCalculation(".") 
}

function addition(){
    updateCalculation(" + ") 
}

function substraction(){
    updateCalculation(" - ") 
}

function mulitplication(){
    updateCalculation(" * ") 
}

function division(){
    updateCalculation(" / ") 
}

function equation(){
    calculation = eval(calculation)
    updateDisplay()
    console.log(calculation)
}

function clear(){
    calculation = ""
    updateDisplay()
    saveCalculation()
    console.log(`Cleared: 0${calculation}`)
}


