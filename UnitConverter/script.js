document.addEventListener("DOMContentLoaded", function() {
    const lengthInput = document.getElementById("lengthInput");
    const unitSelect = document.getElementById("unitSelect");
    const convertButton = document.getElementById("convertButton");
    const result = document.getElementById("result");

    convertButton.addEventListener("click", function() {
        const length = parseFloat(lengthInput.value);
        const selectedUnit = unitSelect.value;
        let convertedLength = 0;

        switch (selectedUnit) {
            case "cm":
                convertedLength = length * 100;
                break;
            case "km":
                convertedLength = length / 1000;
                break;
            case "mm":
                convertedLength = length * 1000;
                break;
        }

        result.textContent = `Converted Length: ${convertedLength} ${selectedUnit}`;
    });
});
