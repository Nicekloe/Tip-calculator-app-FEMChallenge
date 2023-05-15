
/*Define variables and pull the inputs from fields*/
let billAmount = document.querySelector('.bill-amount');
let billClass = document.querySelector('.bill');

let peopleClass = document.querySelector('.people');
let peopleError = document.querySelector('.people-error');

//let tipError = document.querySelector(".tip-error");
let tips = document.querySelectorAll('.button');
let tipChosen = document.getElementsByClassName('active');
let customTipInput = document.querySelector('.custom-tipInput');
let numberOfPeople = document.querySelector('.number-of-people');

let tipPerPerson = document.querySelector('.tip-amount-display');
let totalBillPerPerson = document.querySelector('.total-amount-display');

let resetButton = document.querySelector('.reset');
let inputs = document.querySelectorAll('.input');


console.log(billAmount);


/*Adding event listeners on fields and buttons*/

tips.forEach((tip) => {
    tip.addEventListener('click', ActivateTip);
})

customTipInput.addEventListener('click', ActivateCustomTip);

resetButton.addEventListener('click', resetAllInputs);

billAmount.oninput = function(event){
    ActivateResetButton();

    if(customTipInput.value !== '' && (numberOfPeople.value !== '' || numberOfPeople.value > 0)){
        Calculate();
    }
}

customTipInput.oninput = function(){
    ActivateResetButton();

    if((billAmount.value !== '' || bill.value < 0 ) && (numberOfPeople.value!== '' || numberOfPeople.value > 0)){
        Calculate();
    }
}

numberOfPeople.oninput = function(){
    ActivateResetButton();

    if(numberOfPeople.value <= 0 || numberOfPeople.value === ''){
        peopleError.innerText = `Value can't be zero`;
        peopleError.style.color = 'red';
        //peopleError.classList.add('error');
        numberOfPeople.style.borderColor = 'red';

        tipPerPerson.innerText = '$0.00';
        totalBillPerPerson.innerText  = '$0.00'; 
    }
    else{
        peopleError.innerText = ``;
        numberOfPeople.style.borderColor = '';
        Calculate();
       }
}


/*Define functions*/
//Functions for displaying errors

function Calculate(){
    let totalBillAmountPerPerson;
    let tipAmountPerPerson;
    let tipPercentage;

    //Set the tip percentage as per what
    //has been chosen by user
    if(tipChosen.length == 0){
        tipPercentage = 0;
    }
    else{
        if(customTipInput.classList.contains('active')){
            tipPercentage = customTipInput.value;
        }
        else{
            console.log(tipChosen)
            tipPercentage = tipChosen[0].value;
        }
    }

    tipAmountPerPerson = (((billAmount.value * tipPercentage) / 100) / numberOfPeople.value);
    totalBillAmountPerPerson = ((billAmount.value / numberOfPeople.value) + tipAmountPerPerson);

    tipAmountPerPerson = tipAmountPerPerson.toFixed(2);
    totalBillAmountPerPerson = totalBillAmountPerPerson.toFixed(2);

    //Round to 02 decimals
    tipPerPerson.innerText = tipAmountPerPerson;
        totalBillPerPerson.innerText  = totalBillAmountPerPerson; 
}


function ActivateTip(){
    tips.forEach((tip) => {
        tip.classList.remove('active');
        tip.style.backgroundColor = '';
    });
    this.classList.add('active');
    this.style.backgroundColor = 'rgb(103, 221, 194)';

    customTipInput.classList.remove('active');
    Calculate();
}


function ActivateCustomTip(){
    tips.forEach((tip) => {
        tip.classList.remove('active');
    });
    this.classList.add('active');
    
    if((billAmount.value !== '' || billAmount.value < 0) && (numberOfPeople.value !== '' || numberOfPeople.value > 0)){
        Calculate();
    }

}


/*Button Reset functions*/
function ActivateResetButton(){
    if(customTipInput.value === '' && billAmount.value === '' && numberOfPeople.value === ''){
        resetButton.disabled = true;
        resetButton.classList.remove('reset');
        numberOfPeople.style.borderColor = '';
    }
    else{
        resetButton.disabled = false;
        resetButton.classList.add('reset');
    }
}

function resetAllInputs(){
    tips.forEach((tip) =>{
        tip.classList.remove('active');
    });

    inputs.forEach((input) => {
        input.value = '';
    });

    tipPerPerson.innerText = '$0.00';
    totalBillPerPerson.innerText = '$0.00';

    resetButton.disabled = true;
    peopleError.innerText = ``;
    numberOfPeople.style.borderColor = '';
    resetButton.classList.remove('reset');
    resetButton.classList.add('reset-inactive');
}
