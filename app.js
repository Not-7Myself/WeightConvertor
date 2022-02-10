//Values
const g = [1, 'Gram'];
const kg = [1000, 'Kilogram'];
const lb = [453.6, 'Pound'];
const oz = [28.35, 'Ounce'];
const ton = [1000000, 'Tonner'];

const result = document.querySelector('#endValue')
const input = document.querySelector('input')
const sel = document.querySelector('#select')
const sel2 = document.querySelector('#select2')

const submit = document.querySelector('button').addEventListener('click', convertValue);

//Function to convert Value
function convertValue(e) {
    e.preventDefault();
    console.log(e.target);

    //Calculation Formula
    let selIndex = sel.options[sel.selectedIndex].value
    let sel2Index = sel2.options[sel2.selectedIndex].value
    let ans = input.value * eval(selIndex)[0] / eval(sel2Index)[0]
    console.log(ans);

    //Changing Result
    result.innerHTML = ans ;
}