let currentModel = 'model1'; // Default to model 1

// Function to toggle between models
function toggleModel() {
    const modelSwitch = document.getElementById('modelSwitch');
    
    if (modelSwitch.checked) {
        currentModel = 'model2'; // Switch to model 2
        console.log('Switched to Model 2');
    } else {
        currentModel = 'model1'; // Switch to model 1
        console.log('Switched to Model 1');
    }
    
    loadModelData(currentModel); // Ensure beta coefficients are reloaded when switching models
    updateVariableInputs(); // Update the input fields based on the selected model
}

// Ensure Model 1 is selected by default on page load
window.onload = function () {
    const modelSwitch = document.getElementById('modelSwitch');
    modelSwitch.checked = false; // Default to Model 1 (unchecked state)
    
    currentModel = 'model1'; // Set the default model
    loadModelData(currentModel); // Load beta coefficients for Model 1
    updateVariableInputs(); // Update inputs for Model 1
};