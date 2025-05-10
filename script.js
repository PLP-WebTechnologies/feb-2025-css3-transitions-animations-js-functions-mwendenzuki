// JavaScript: Store and Retrieve Preferences
function storePreference(key, value) {
  localStorage.setItem(key, value);
}

function getPreference(key) {
  return localStorage.getItem(key);
}

// Retrieve and apply stored theme preference
const currentTheme = getPreference("theme");
if (currentTheme === "dark") {
  document.body.style.backgroundColor = "#333";
} else {
  document.body.style.backgroundColor = "white";
}

// Apply theme toggle action
document.getElementById("themeToggle").addEventListener("click", () => {
  const currentTheme = getPreference("theme");
  if (currentTheme === "dark") {
    storePreference("theme", "light");
    document.body.style.backgroundColor = "white";
  } else {
    storePreference("theme", "dark");
    document.body.style.backgroundColor = "#333";
  }
});

// Trigger animation on button click
document.getElementById("animateButton").addEventListener("click", () => {
  const button = document.querySelector("button");
  button.classList.add("fadeIn"); // Add animation class to trigger fade-in
});
