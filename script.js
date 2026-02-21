// -----------------------------
// Calming Quotes and Self-Care Tips
// -----------------------------

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

// -----------------------------
// Mood & Journal Tracker (Overview Table Only)
// -----------------------------

const moodForm = document.getElementById('moodForm');
const saveJournalBtn = document.getElementById('saveJournal');
const overviewTable = document.getElementById('overviewTable');

// Load saved entries on page load
window.onload = () => {
  showQuote();
  showTip();

  const savedEntries = JSON.parse(localStorage.getItem('entries')) || [];
  savedEntries.forEach(entry => addOverviewRow(entry.date, entry.mood, entry.note));
};

// Save mood
moodForm.addEventListener('submit', e => {
  e.preventDefault();
  const mood = document.getElementById('mood').value;
  const entry = { date: new Date().toLocaleDateString(), mood: mood, note: "" };

  const savedEntries = JSON.parse(localStorage.getItem('entries')) || [];
  savedEntries.push(entry);
  localStorage.setItem('entries', JSON.stringify(savedEntries));

  addOverviewRow(entry.date, entry.mood, entry.note);
  moodForm.reset();
});

// Save journal
saveJournalBtn.addEventListener('click', () => {
  const text = document.getElementById('journalEntry').value;
  if (text.trim() !== "") {
    const entry = { date: new Date().toLocaleDateString(), mood: "", note: text };

    const savedEntries = JSON.parse(localStorage.getItem('entries')) || [];
    savedEntries.push(entry);
    localStorage.setItem('entries', JSON.stringify(savedEntries));

    addOverviewRow(entry.date, entry.mood, entry.note);
    document.getElementById('journalEntry').value = "";
  }
});

// Add row to overview table
function addOverviewRow(date, mood, note) {
  const row = document.createElement('tr');
  row.innerHTML = `<td>${date}</td><td>${mood}</td><td>${note}</td>`;
  overviewTable.appendChild(row);
}