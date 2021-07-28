const form = document.querySelector(".input");
const input = document.querySelector("#in");
const mob = document.querySelector(".error-mob");
const desk = document.querySelector(".error-desk");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  check();
});

function check() {
  const inputValue = input.value.trim();
  if (inputValue === "" || inputValue === null) {
    if (window.innerWidth == 375) {
      mob.setAttribute("style", "display: block");
      input.setAttribute("style", "border: 1px solid hsl(354, 100%, 66%);");
    } else {
      desk.setAttribute("style", "display: block");
      input.setAttribute("style", "border: 1px solid hsl(354, 100%, 66%);");
    }
  } else if (input.value === "example@email/com") {
    if (window.innerWidth == 375) {
      mob.setAttribute("style", "display: block");
      input.setAttribute("style", "border: 1px solid hsl(354, 100%, 66%);");
    } else {
      desk.setAttribute("style", "display: block");
      input.setAttribute("style", "border: 1px solid hsl(354, 100%, 66%);");
    }
  }
  else{
    desk.setAttribute("style", "display: none");
    input.setAttribute("style", "border: 1px solid hsl(223, 100%, 88%);");
  }
}
