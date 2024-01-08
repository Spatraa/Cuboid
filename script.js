// Get elements from the DOM
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const para = document.getElementById('para');

// Function to calculate the volume of the cuboid
function calculateVolume() {
  const length = parseFloat(input1.value);
  const height = parseFloat(input2.value);
  const breadth = parseFloat(input3.value);
  const volume = length * height * breadth;
  para.textContent = `Volume: ${volume} cubic cm`;
}

// Function to calculate the total surface area of the cuboid
function calculateTSA() {
  const length = parseFloat(input1.value);
  const height = parseFloat(input2.value);
  const breadth = parseFloat(input3.value);
  const TSA = 2 * (length * height + height * breadth + length * breadth);
  para.textContent = `Total Surface Area: ${TSA} square cm`;
}

// Function to calculate the curved surface area of the cuboid
function calculateCSA() {
  const length = parseFloat(input1.value);
  const height = parseFloat(input2.value);
  const breadth = parseFloat(input3.value);
  const CSA = 2 * (length + height) * breadth;
  para.textContent = `Curved Surface Area: ${CSA} square cm`;
}

// Event listeners for each button click
btn1.addEventListener('click', calculateVolume);
btn2.addEventListener('click', calculateTSA);
btn3.addEventListener('click', calculateCSA);
