const themeBtn = document.getElementById("theme-btn");
const lightModeIcon = "#lightbulb-solid";
const darkModeIcon = "#lightbulb-regular";

/**
 * @param {HTMLElement} themeBtn
 */
function toggleTheme(themeBtn) {
  const [use] = themeBtn.getElementsByTagName("use");
  const href = use.getAttribute("href");
  const root = document.documentElement;
  if (href === darkModeIcon) {
    use.setAttribute("href", lightModeIcon);
    root.style.setProperty("color-scheme", "light");
  } else {
    use.setAttribute("href", darkModeIcon);
    root.style.setProperty("color-scheme", "dark");
  }
}

themeBtn.addEventListener("click", function () {
  toggleTheme(this);
});
