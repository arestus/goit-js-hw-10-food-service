const themeRef = document.querySelector('.theme-switch__toggle');
const bodyRef = document.querySelector('body');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const savedStorage = localStorage.getItem('themes');

if (savedStorage === Theme.DARK) {
  themeRef.checked = true;
  bodyRef.classList.add(Theme.DARK);
}

themeRef.addEventListener('change', () => {
  if (themeRef.checked) {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('themes', Theme.DARK);
  } else {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);

    localStorage.setItem('themes', Theme.LIGHT);
  }
});
