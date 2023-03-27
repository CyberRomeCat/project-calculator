let numBtns = document.querySelectorAll('.num');
let opBtns = document.querySelectorAll('.op');
const resetBtn = document.getElementById('reset');
let eqBtn = document.querySelector('.equal');

opBtns.forEach(op => op.addEventListener('click',getOperate));
numBtns.forEach(num => num.addEventListener('click',getNum));
resetBtn.addEventListener('click',() => {
    num = '';
    inputNum = '0';
    operator = '';
    inputOper = '';
    display.innerText = num;
});
eqBtn.addEventListener('click',() => {
        inputNum = operate(operator,inputNum,num);
        display.innerText = inputNum;
        num = '';
});

let num = '';
let inputNum = '0';
let operator = '';
let inputOper = '';

function getOperate() { 
    inputOper = operator;
    operator = this.innerText;  

    if (inputOper === '' && (operator === '/' || '-')) {
        inputNum = num;
        display.innerText = inputNum;
        num = '';
    } else if (inputOper === '' && (operator === '*')) {
        inputNum = 1;
        inputNum = operate(operator,inputNum,num);
        display.innerText = inputNum;
        num = '';
    } else if (inputOper === '') {
        inputNum = operate(operator,inputNum,num);
        display.innerText = inputNum;
        num = '';
    } else {
        inputNum = operate(inputOper,inputNum,num);
        display.innerText = inputNum;
        num = '';
    };
};

function getNum() {
    num = num.concat(this.innerText);
    display.innerText = num;
}

//operator functions

function add(...args) {
    let sum = 0;
    for (let arg of args) sum += parseFloat(arg);
    return sum;
};

function subtract(...args) {
    let array = [...args];
    const subtract = array.reduce((a, b) => a - b);

    return subtract;
};

function multiply(...args) {
    let sum = 1;
    for (let arg of args) sum *= parseFloat(arg);
    return sum;
};

function divide(...args) {
    let array = [...args];
    const division = array.reduce((a, b) => a / b);


    return division;
};

function operate(op,...nums) {
      if (op === '-') {
        return subtract(...nums)
    }  if (op === '*') {
        return multiply(...nums)
    } if (op === '/') {
        return divide(...nums)
    } if (op === '+') {
        return add(...nums)
    }
};

