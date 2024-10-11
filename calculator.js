let display = document.getElementById('display');
let historyList = document.getElementById('historyList');
let history = [];  // Array to store history

// Function to append characters to the display
function appendCharacter(character) {
    display.value += character;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character from the display
function deleteChar() {
    display.value = display.value.slice(0, -1);
}

// Function to evaluate the expression
function calculate() {
    try {
        // Store the current operation before evaluating the result
        let operation = display.value;
        let result = eval(display.value);
        
        // Update the display with the result
        display.value = result;
        
        // Save the operation and result in a JSON object
        let calculation = {
            "operation": operation,  // Store the original operation here
            "result": result         // Save the result
        };
        
        // Add the JSON object to the history array
        history.push(calculation);
        
        // Display the calculation in the history list
        let historyItem = document.createElement('li');
        historyItem.innerText = `${calculation.operation} = ${calculation.result}`;
        historyList.appendChild(historyItem);
        
        // Optionally log the history to the console to verify JSON format
        console.log(JSON.stringify(history, null, 2));

    } catch (error) {
        display.value = 'Error';  // Display error if eval() fails
    }
}


