// script.js
function calculateFuelCost() {
    // Get input values
    const distance = parseFloat(document.getElementById('distance').value);
    const efficiency = parseFloat(document.getElementById('efficiency').value);
    const price = parseFloat(document.getElementById('price').value);

    // Validate inputs
    if (isNaN(distance) || isNaN(efficiency) || isNaN(price)) {
        alert("Please enter valid numbers in all fields.");
        return;
    }

    // Calculate total fuel cost
    const totalFuel = distance / efficiency;
    const totalCost = totalFuel * price;

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        Total Fuel Required: ${totalFuel.toFixed(2)} liters<br>
        Total Cost: ₹${totalCost.toFixed(2)}
    `;
}