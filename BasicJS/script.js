// GLOBAL SCOPE STARTS HERE
// These are global variables (accessible everywhere in the file)
// Using const for variables that won't be reassigned

// DOM Element Objects (global scope)
const inputs = document.querySelectorAll('input');        // NodeList object
const totalElement = document.getElementById('total');     // DOM Element object
const alertElement = document.getElementById('alert');     // DOM Element object
const incomeInput = document.getElementById('income');     // DOM Element object

// Event Listener - Function Expression in Global Scope
// Arrow function creates its own block scope
inputs.forEach(input => {  // BLOCK SCOPE STARTS
    // 'input' parameter is block-scoped to this arrow function
    input.addEventListener('input', calculateTotal);
});  // BLOCK SCOPE ENDS

// FUNCTION SCOPE STARTS - calculateTotal function declaration
function calculateTotal() {
    // Variables declared with let/const are function-scoped
    let total = 0;  // Number type, can be reassigned because it's let
    
    // All these are function-scoped number variables
    const groceries = Number(document.getElementById('groceries').value) || 0;
    const fuel = Number(document.getElementById('fuel').value) || 0;
    const entertainment = Number(document.getElementById('entertainment').value) || 0;
    const rent = Number(document.getElementById('rent').value) || 0;
    const cellphone = Number(document.getElementById('cellphone').value) || 0;
    const utilities = Number(document.getElementById('utilities').value) || 0;

    // Mathematical operation reassigning total
    total = groceries + fuel + entertainment + rent + cellphone + utilities;
    
    // String template literal using backticks
    totalElement.textContent = `$${total}`;

    // Function-scoped number variable
    const income = Number(incomeInput.value) || 0;

    // More string template literals
    document.getElementById('budget').textContent = `$${income}`;
    document.getElementById('totalExp').textContent = `$${total}`;

    // Function-scoped DOM Element object
    const alertElement = document.getElementById('alert');
    
    // IF-ELSE BLOCK SCOPE STARTS
    if (income > 0) {  // BLOCK SCOPE
        if (total > income) {  // NESTED BLOCK SCOPE
            // String literal
            alertElement.textContent = "You have exceeded budget!";
            // Accessing DOM object methods
            alertElement.classList.add('warning');
        } else {  // NESTED BLOCK SCOPE
            alertElement.textContent = "You are within budget";
            alertElement.classList.remove('warning');
        }
    } else {  // BLOCK SCOPE
        alertElement.textContent = "Enter income to see budget status";
        alertElement.classList.remove('warning');
    }
    // IF-ELSE BLOCK SCOPE ENDS
}  // FUNCTION SCOPE ENDS
// GLOBAL SCOPE ENDS

// Types used in this file:
// - Numbers (total, income, all expense values)
// - Strings (alert messages, template literals)
// - Objects (DOM elements)
// - NodeList (inputs collection)
// - Functions (calculateTotal, arrow function in forEach)
// - Boolean (implicit in if conditions)

// Scopes:
// - Global Scope: Outer-most scope, contains all variables and functions
// - Function Scope: Inside calculateTotal function
// - Block Scope: Inside forEach arrow function and if-else statements 