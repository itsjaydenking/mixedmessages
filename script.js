const greetings = ["Hello there!", "Greetings!", "Hi!", "Hey!", "Good day!"];

const positiveActions = [
  "keep pushing forward",
  "embrace the challenges",
  "stay positive",
  "keep smiling",
  "believe in yourself",
];

const encouragingResults = [
  "and you'll achieve great things.",
  "and success will come your way.",
  "and you'll be unstoppable.",
  "and happiness will follow.",
  "and your dreams will come true.",
];

function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function generateMessage() {
  const greeting = getRandomElement(greetings);
  const action = getRandomElement(positiveActions);
  const result = getRandomElement(encouragingResults);

  return `${greeting} Remember to ${action}, ${result}`;
}

function displayMessage() {
  const message = generateMessage();
  document.getElementById("message").innerText = message;
}
