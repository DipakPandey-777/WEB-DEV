const toggleBtn = document.getElementById('modeToggle');

// Load the saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else {
    // Default to light if nothing is saved
    document.documentElement.setAttribute('data-theme', 'light');
  }
});

// Toggle and save theme when button is clicked
toggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme); // Save it!
});


const toggleBtn1 = document.getElementById('menu-toggle');
const navMenu1 = document.getElementById('ul-one');

toggleBtn1.addEventListener('click', () => {
  navMenu1.classList.toggle('show');

  // Switch icon between ☰ and ✖
  toggleBtn1.textContent = navMenu1.classList.contains('show') ? '✖' : '☰';
});


document.querySelectorAll('h3').forEach(h3 => {
  const words = h3.textContent.split(' ');
  h3.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');
});
