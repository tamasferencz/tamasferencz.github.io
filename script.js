function darkMode(Element) {
  let x = document.getElementById(Element);
  if (x) {
    x.style.backgroundColor = "#1c1c1c";
    x.style.color = "#d1d1d1";
  }
}

function darkModeText(Element) {
  let x = document.getElementById(Element);
  if (x) {
    x.style.color = "#1c1c1c";
  }
}

function lightMode(Element) {
  let x = document.getElementById(Element);
  if (x) {
    x.style.backgroundColor = "white";
    x.style.color = "black";
  }
}

function lightModeText(Element) {
  let x = document.getElementById(Element);
  if (x) {
    x.style.color = "white";
  }
}

function transparent(Element1, Element2) {
  let x = document.getElementById(Element1);
  let y = document.getElementById(Element2);
  if (x && y) {
    x.style.display = "none";
    y.style.display = "flex";
  }
}

// Automatically enable dark mode on page load
window.addEventListener("DOMContentLoaded", function () {
  // Apply dark mode to all elements (checking if they exist)
  darkMode("body");
  darkModeText("nav-1");
  darkModeText("nav-2");
  darkModeText("nav-3");
  darkModeText("nav-4");
  darkModeText("nav-5");
  darkModeText("header");
  darkMode("My learnings");

  // Feature boxes (exist on both index.html and index2.html)
  darkMode("feature-box-1");
  darkMode("feature-box-2");
  darkMode("feature-box-3");
  darkMode("feature-box-4");
  darkMode("feature-box-5");
  darkMode("feature-box-6");
  darkMode("feature-box-7");
  darkMode("feature-box-8");

  darkMode("section-favorite");
  darkMode("story-1");
  darkMode("story-2");
  darkModeText("card-1");
  darkModeText("card-2");
  darkModeText("card-3");
  darkMode("FullName");
  darkMode("Email");
  darkMode("Message");
  darkModeText("placeholder-name");
  darkModeText("placeholder-email");
  darkModeText("placeholder-message");
  darkModeText("header_logo");
  darkMode("navigation");
  lightModeText("navi-icon");

  // Toggle icons to show sun (light mode) button
  transparent("darkModeIcon", "lightModeIcon");
});
