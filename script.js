// Array of calming quotes
const quotes = [
  "Taking time to reflect is the first step toward growth.",
  "Every small step counts toward healing.",
  "Your feelings are valid, and noticing them is powerful.",
  "Self-care is not selfish; it’s essential.",
  "Peace begins with a pause."
];

// Array of self-care tips
const tips = [
  "Take three deep breaths and notice how your body feels.",
  "Write down one thing you’re grateful for today.",
  "Step outside for a few minutes and enjoy fresh air.",
  "Stretch gently for 2 minutes to release tension.",
  "Drink a glass of water slowly and mindfully."
];

// Pick a random quote
function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}

// Pick a random tip
function showTip() {
  const randomIndex = Math.floor(Math.random() * tips.length);
  document.getElementById("tip").innerText = tips[randomIndex];
}

// Run when page loads
window.onload = function() {
  showQuote();
  showTip();
};