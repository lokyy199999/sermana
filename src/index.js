// sermana.js

// Function to get the current week number
function getCurrentWeekNumber() {
  const now = new Date();
  const onejan = new Date(now.getFullYear(), 0, 1);
  return Math.ceil(((now - onejan) / 86400000 + onejan.getDay() + 1) / 7);
}

// Function to get the start date of the current week
function getStartOfWeek() {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const diff = now.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1); // adjust when day is Sunday
  return new Date(now.setDate(diff));
}

// Function to get the end date of the current week
function getEndOfWeek() {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const diff = now.getDate() + (6 - dayOfWeek) + (dayOfWeek === 0 ? -6 : 0); // adjust when day is Sunday
  return new Date(now.setDate(diff));
}

// Exporting functions
module.exports = {
  getCurrentWeekNumber,
  getStartOfWeek,
  getEndOfWeek
};
