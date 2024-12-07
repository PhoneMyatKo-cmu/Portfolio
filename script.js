var menuFlag = false;
console.log(document.querySelector("main"));
function openMenu() {
  let menu = document.querySelector(".menu");
  if (menuFlag) {
    console.log("in if");
    menu.style.display = "none";
    menuFlag = false;
  } else {
    console.log("in else");
    menu.style.display = "block";
    menuFlag = true;
  }
  console.log(menuFlag);
  console.log("called.");
}

let menuIcon = document.querySelector(".hamburger-icon");
console.log(menuIcon);
