
const input = document.querySelector('input');
const buttons = document.querySelectorAll('button');


let currentInput = "";   //for storing input


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerHTML; 

        if (value === 'AC') {
            
            currentInput = "";
            input.value = "0";
        } else if (value === 'DEL') {
            
            currentInput = currentInput.slice(0, -1);
            input.value = currentInput || "0"; 
        } else if (value === '=') {
            
            try {
                currentInput = eval(currentInput).toString(); // Evaluate the expression
                input.value = currentInput;
            } catch (error) {
                input.value = "error"; 
                currentInput = ""; 
            }
        } else {
            
            currentInput += value;
            input.value = currentInput;
        }
    });
});
