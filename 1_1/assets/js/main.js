function adult() {
  let num = Number(document.querySelector(".checkAge").value);
  let outputAgetest = document.querySelector(".output");

  if (num > 17) {
    outputAgetest.innerHTML = "Volljährig";
  } else {
    outputAgetest.innerHTML = "Minderjährig";
  }
}
