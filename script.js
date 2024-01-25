const additionButton = document.querySelector('#addition');
const fieldOne = document.querySelector('#field-one');
const fieldTwo = document.querySelector('#field-two');

const substractionButton =document.querySelector('#substraction');
const divisionButton = document.querySelector('#division');
const multiButton = document.querySelector('#multiplication');
const resetButton = document.querySelector('#reset');
const resultValue = document.querySelector('#resultValue');

additionButton.addEventListener('click', () => {
    const valueOne = +fieldOne.value;
    const valueTwo = +fieldTwo.value;
    const result = valueOne + valueTwo;
    console.log(valueOne + valueTwo);
    if (result<0) {

        resultValue.innerHTML = resultValue.style.color="Red";
           
    }else{
        resultValue.innerHTML = resultValue.style.color="green";
        
    }
    resultValue.innerHTML = result;
} );

substractionButton.addEventListener('click',()=> {
    const firstValue = +fieldOne.value;
    const secondValue = +fieldTwo.value;
    const result = firstValue-secondValue;
    if (result<0) {

        resultValue.innerHTML = resultValue.style.color="Red";
           
    }else{
        resultValue.innerHTML = resultValue.style.color="green";
        
    }
    resultValue.innerHTML = result;
});

multiButton.addEventListener('click',()=>{
    const firstValue = +fieldOne.value;
    const secondValue = +fieldTwo.value;
    const result = firstValue*secondValue;
    if (result<0) {

        resultValue.innerHTML = resultValue.style.color="Red";
           
    }else{
        resultValue.innerHTML = resultValue.style.color="green";
        
    }
    resultValue.innerHTML=result;
});

divisionButton.addEventListener('click', ()=> {
    const firstValue = +fieldOne.value;
    const secondValue = +fieldTwo.value;
    const result = firstValue/secondValue;
    if (result<0) {

        resultValue.innerHTML = resultValue.style.color="Red";
           
    }else{
        resultValue.innerHTML = resultValue.style.color="green";
        
    }
    if(result == 'Infinity')
    {
        resultValue.innerHTML='Cannot divisible by 0';    
    }
    else{
        resultValue.innerHTML=result;
    }
});

resetButton.addEventListener('click', ()=>{
    fieldOne.value="";
    fieldTwo.value="";
    resultValue.innerHTML ="";
});

