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

function animateLlama() {
  let [container] = document.getElementsByClassName("resume__block");
  let llama = document.getElementById("llama");

  const tl = anime.timeline({
    easing: "linear",
    loop: true,
    duration: 3500,
  });

  tl.add({
    targets: "#llama",
    translateX: container.offsetWidth - llama.offsetWidth,
  })
    .add({
      targets: "#llama",
      scaleX: -1,
      duration: 300,
    })
    .add({
      targets: "#llama",
      translateX: 0,
    })
    .add({
      targets: "#llama",
      scaleX: 1,
      duration: 300,
    });
}

animateLlama();
