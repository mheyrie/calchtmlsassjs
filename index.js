const oneBtn = document.querySelector(".one");
const twoBtn = document.querySelector(".two");
const threeBtn = document.querySelector(".three");
const addBtn = document.querySelector(".add");
const equalsBtn = document.querySelector(".equals");

calculation = "";

function toAddOne(){
    calculation += 1
    console.log(calculation)
}

function toAddTwo(){
    calculation += 2
    console.log(calculation)
}

function toAddThree(){
    calculation += 3
    console.log(calculation)
}

function addition(){
    calculation += " + "
    console.log(calculation)
}

function equation(){
    calculation = eval(calculation)
    console.log(calculation)
}

oneBtn.addEventListener("click", toAddOne);
twoBtn.addEventListener("click", toAddTwo);
threeBtn.addEventListener("click", toAddThree);
addBtn.addEventListener("click", addition);
equalsBtn.addEventListener("click", equation);