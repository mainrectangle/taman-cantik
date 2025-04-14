import { showLogin } from "./views/login.js";
import { showHome } from "./views/home.js";

function navigateTo(route) {
  const main = document.getElementById("main");

  switch (route) {
    case "login":
      showLogin(main);
      break;
    case "home":
      showHome(main);
      break;
    default:
      showLogin(main);
  }
}

function parseRoute() {
  const hash = window.location.hash.slice(1); // e.g. "home"
  navigateTo(hash);
}

window.addEventListener("hashchange", parseRoute);
window.addEventListener("load", parseRoute);
