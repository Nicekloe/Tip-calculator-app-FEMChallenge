/*Define variables and pull the inputs from fields*/
let billAmount = document.querySelector(".bill-amount");
let billClass = document.querySelector(".bill");
let peopleClass = document.querySelector(".people");
let peopleError = document.querySelector(".people-error");
let tipError = document.querySelector(".tip-error");
let tipChosen = document.querySelector(".tips button");
let customTipInput = document.querySelector(".custom-tipInput");
let numberOfPeople = document.querySelector(".number-of-people");
let tipPerPerson = document.querySelector(".tip-amount-display");
let totalBillPerPerson = document.querySelector(".total-amount-display");
let resetButton = document.querySelector(".reset");

//Variables
let bill = 0;
let tip = 0;
let numberOfPeopleValue = parseInt(numberOfPeople.value);
let totalBillAmountPerPerson = 0;
let tipAmountPerPerson = 0;


console.log(billAmount);





/*Define functions*/
//Functions for displaying errors

function TipCheck(value){
    tip = parseFloat(value);
    if(tip <= 0){
        tipError.style.display = 'block';
    }
    else{
        tipError.style.display = 'none';
    }
    Calculate();
    //resetButton();
}

function PeopleCheck(value){
    numberOfPeopleValue = parseFloat(value);
    if(numberOfPeopleValue <= 0){
        peopleError.style.display = 'block';
        peopleClass.style.borderColor = 'hsla(0, 83%, 44%, 0.714)';

    }
    else{
        peopleError.style.display = 'none';
        peopleClass.style.borderColor = 'hsl(0189, 41%, 97%)';
    }
    Calculate();
}


function Calculate(){
    //Let's check the values for nullability
    if(bill & tip & numberOfPeopleValue){
        resetButton.disabled = false;
        tipAmountPerPerson = ((bill * tip / 100) / numberOfPeopleValue);
        totalBillAmountPerPerson = (bill / numberOfPeopleValue) + tipAmountPerPerson;

        //display these values
        tipPerPerson.innerText = `$${tipAmountPerPerson.toFixed(2)}`;
        totalBillPerPerson.innerText = `$${totalBillAmountPerPerson.toFixed(2)}`;

    }
    else{
        resetButton.disabled = true;
    }
}

function resetColor() {
    tipChosen.forEach((e) => {
        e.style.background = 'hsl(183, 100%, 15%)';
        e.style.color = '#ffffff'
    })
}

//Set the value for each chosen tip
tipChosen.forEach((e) => {
    e.addEventListener('click', () => {
        customTipInput.value = '';
        resetColor();
        e.style.background = 'hsl(172, 67%, 45%)';
        e.style.color = '#000'
        if (e.innerText.includes('50')) {
            tip = 50;
            Calculate()
        }
        else if (e.innerText.includes('25')) {
            tip = 25;
            Calculate()
        }
        else if (e.innerText.includes('15')) {
            tip = 15;
            Calculate()
        }
        else if (e.innerText.includes('10')) {
            tip = 10;
            Calculate()
        }
        else if (e.innerText.includes('5')) {
            tip = 5;
            Calculate()
        }
    })
})


function reset() {
    bill = 0;
    tip = 0;
    numberOfPeopleValue = 0;
    totalBillAmountPerPerson = 0;
    tipAmountPerPerson = 0;
    numberOfPeople.value = numberOfPeopleValue;
    totalBillAmountPerPerson.innerText = `$0.00`;
    tipAmountPerPerson.innerText = `$0.00`
    customTipInput.value = '';
    billAmount.value = ''
    resetColor();
    resetBtn.disabled = true;
}