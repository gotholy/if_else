function adult() {
  let num = Number(document.querySelector(".checkNum").value);
  let outputNumtest = document.querySelector(".output-checkNum");

  if (document.getElementById("input").value >= 18) {
    outputNumtest.innerHTML = "Ja, Du kannst Shisha rauchen";
  } else {
    outputNumtest.innerHTML = "Du darfst noch nicht Shisha rauchen";
  }
}
