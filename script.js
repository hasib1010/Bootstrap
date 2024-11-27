// Theme toggle functionality
const themeToggleBtn = document.getElementById('themeToggleBtn');

// Check if the user previously selected a theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.setAttribute('data-theme', 'dark');
}

// Add event listener to switch themes
themeToggleBtn.addEventListener('click', function() {
  // Toggle between light and dark theme
  if (document.body.getAttribute('data-theme') === 'dark') {
    document.body.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');  // Store user preference
  } else {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');  // Store user preference
  }
});
