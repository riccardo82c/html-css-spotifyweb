function toggleTheme() {
 // If document have an attribute data-theme with value dark, set attribute to light, else set to dark.
 if (document.documentElement.getAttribute('data-theme') === 'dark')
  document.documentElement.setAttribute('data-theme', 'light')
 else
  document.documentElement.setAttribute('data-theme', 'dark')
}
