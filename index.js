
const numberInput = document.getElementById("numberInput");
const errorMessage = document.getElementById("errorMessage");
const output = document.getElementById("output");

numberInput.addEventListener("input", function () {
    const value = numberInput.value;
    const number = parseInt(value);

   
    errorMessage.textContent = '';
    output.textContent = '';

    
    if (isNaN(number)) {
        return;
    }

   
    if (number < 0) {
        errorMessage.textContent = "Enter a positive value"
        return;
    }

   
    if (number % 2 === 0) {
       
        output.innerHTML = `Next 3 even numbers: <span>${number + 2}</span>, <span>${number + 4}</span>, <span>${number + 6}</span>`;
    } else {
       
        output.innerHTML = `Next 3 odd numbers: <span>${number + 2}</span>, <span>${number + 4}</span>, <span>${number + 6}</span>`;
    }
})