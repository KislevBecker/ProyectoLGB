// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const addInputsBtn = document.getElementById('add-inputs-btn');
    const inputsContainer = document.getElementById('inputs-container');

    let counter = 1; // Contador para nombres únicos de inputs

    addInputsBtn.addEventListener('click', function() {
        const inputGroup = document.createElement('div');
        inputGroup.classList.add('input-group');

        // Crear tres inputs
        for (let i = 1; i <= 3; i++) {
            const input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('name', `input-${counter}-${i}`);
            input.setAttribute('placeholder', `Input ${i}`);

            inputGroup.appendChild(input);
        }

        inputsContainer.appendChild(inputGroup);
        counter++;
    });
});
