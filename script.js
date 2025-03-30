// Load names from localStorage when the page loads
document.addEventListener("DOMContentLoaded", () => {
    const storedNames = JSON.parse(localStorage.getItem("names")) || [];
    updateTable(storedNames);
});

// Handle form submission
document.getElementById("nameForm").addEventListener("submit", (e) => {
    e.preventDefault();

    // Get the name from the input field
    const nameInput = document.getElementById("nameInput");
    const name = nameInput.value.trim();

    if (name) {
        // Retrieve existing names from localStorage
        let names = JSON.parse(localStorage.getItem("names")) || [];

        // Add the new name to the array
        names.push(name);

        // Save the updated array back to localStorage
        localStorage.setItem("names", JSON.stringify(names));

        // Update the table with the new name
        updateTable(names);

        // Clear the input field
        nameInput.value = "";
    }
});

// Function to update the table with names
function updateTable(names) {
    const tableBody = document.querySelector("#nameTable tbody");
    tableBody.innerHTML = ""; // Clear existing rows

    names.forEach((name, index) => {
        const row = document.createElement("tr");

        const numberCell = document.createElement("td");
        numberCell.textContent = index + 1;

        const nameCell = document.createElement("td");
        nameCell.textContent = name;

        row.appendChild(numberCell);
        row.appendChild(nameCell);

        tableBody.appendChild(row);
    });
}
