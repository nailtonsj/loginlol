const inputs = document.querySelectorAll(".input");
const button = document.querySelector(".login__button");
const play = document.querySelector("#audio");
const audio = document.querySelector("#musica");
console.log(audio);
play.addEventListener("click", function () {
  console.log("clicou");
});
play.addEventListener("click", function () {
  audio.classList.add("muted");
});
const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;

  span.classList.add("span-active");
};

const handleFocusOut = ({ target }) => {
  if (target.value === "") {
    const span = target.previousElementSibling;
    span.classList.remove("span-active");
  }
};

const handleChange = () => {
  const [username, password] = inputs;

  if (username.value && password.value.length >= 8) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", "");
  }
};

inputs.forEach((input) => input.addEventListener("focus", handleFocus));
inputs.forEach((input) => input.addEventListener("focusout", handleFocusOut));
inputs.forEach((input) => input.addEventListener("input", handleChange));
