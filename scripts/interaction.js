// Light and Dark mode toggle
window.addEventListener("DOMContentLoaded", () => {
  let icon = document.getElementById("toggle");
  if (getUserPreference() == "light") {
    document.body.classList.toggle("light-theme")
    icon.children[0].src = "/assets/svgs/dark-mode.svg";
  }
  else if (getUserPreference() == "dark") {
    document.body.classList.toggle("dark-theme")
    icon.children[0].src = "/assets/svgs/light-mode.svg";
  }
})


function getUserPreference() {
  return localStorage.getItem('theme') || 'system';
}
function saveUserPreference(userPreference) {
  localStorage.setItem('theme', userPreference);
}

function toggle_dark_mode() {
  document.body.classList.toggle("light-theme")
  let icon = document.getElementById("toggle");
  if (getUserPreference() == "dark") {
    saveUserPreference("light")
    console.log(getUserPreference())
    icon.children[0].src = "/assets/svgs/dark-mode.svg";
  }
  else if (getUserPreference() == "light") {
    saveUserPreference("dark")
    console.log(getUserPreference())
    icon.children[0].src = "/assets/svgs/light-mode.svg";
  }
}

// animation and interaction
/*
function reveal() {
  var reveals = document.getElementsByClassName("reveal-animation");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

*/
