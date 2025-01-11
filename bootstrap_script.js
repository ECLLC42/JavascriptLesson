// ========== GLOBAL SCOPE STARTS ==========

// DOM Element Objects (global variables)
const inputs = document.querySelectorAll('input');        // NodeList object (collection of DOM elements)
const totalElement = document.getElementById('total');     // DOM Element object
const alertElement = document.getElementById('alert');     // DOM Element object
const incomeInput = document.getElementById('income');     // DOM Element object

// Event Listener - Arrow Function with Block Scope
inputs.forEach(input => {  // 'input' parameter is block-scoped
    // BLOCK SCOPE STARTS
    input.addEventListener('input', calculateTotal);  // Adds event listener to each input
    // BLOCK SCOPE ENDS
});

// ========== FUNCTION SCOPE STARTS ==========
// Main calculation function declaration
function calculateTotal() {
    // Function-scoped Variables
    let total = 0;  // Number type, mutable (let allows reassignment)
    
    // All constants below are function-scoped
    // Number type variables created using Number() constructor
    const groceries = Number(document.getElementById('groceries').value) || 0;
    const fuel = Number(document.getElementById('fuel').value) || 0;
    const entertainment = Number(document.getElementById('entertainment').value) || 0;
    const rent = Number(document.getElementById('rent').value) || 0;
    const cellphone = Number(document.getElementById('cellphone').value) || 0;
    const utilities = Number(document.getElementById('utilities').value) || 0;

    // Mathematical operation (addition)
    total = groceries + fuel + entertainment + rent + cellphone + utilities;
    
    // String Template Literal using backticks and ${} for interpolation
    totalElement.textContent = `$${total}`;

    // Function-scoped number variable
    const income = Number(incomeInput.value) || 0;

    // More String Template Literals
    document.getElementById('budget').textContent = `Budget: $${income}`;
    document.getElementById('totalExp').textContent = `Total Exp: $${total}`;

    // ========== IF-ELSE BLOCK SCOPE STARTS ==========
    if (income > 0) {  // Condition creates block scope
        if (total > income) {  // Nested block scope
            // String assignment
            alertElement.textContent = "You have exceeded budget!";
            // DOM manipulation - adding CSS class
            alertElement.classList.add('warning');
        } else {  // Another block scope
            alertElement.textContent = "You are within budget";
            alertElement.classList.remove('warning');
        }
    } else {  // Final block scope
        alertElement.textContent = "Enter income to see budget status";
        alertElement.classList.remove('warning');
    }
    // ========== IF-ELSE BLOCK SCOPE ENDS ==========
}
// ========== FUNCTION SCOPE ENDS ==========

// ========== GLOBAL SCOPE ENDS ==========

/*
DATA TYPES USED:
1. Objects:
   - DOM Elements (document.getElementById returns object)
   - NodeList (document.querySelectorAll returns object)
   - classList (object for managing CSS classes)

2. Numbers:
   - total (calculation result)
   - income (user input)
   - all expense values

3. Strings:
   - Alert messages
   - Template literals for budget displays
   - CSS class names

4. Booleans:
   - Implicit in if conditions (income > 0, total > income)

5. Functions:
   - calculateTotal (function declaration)
   - Arrow function in forEach
   - Built-in methods like addEventListener

SCOPE LEVELS:
1. Global Scope:
   - All constant declarations at top
   - Available everywhere in the file

2. Function Scope (calculateTotal):
   - All variables declared inside function
   - Only available inside calculateTotal

3. Block Scope:
   - Inside forEach arrow function
   - Inside if-else statements
   - Limited to their respective blocks
*/ 