const displayP = document.querySelector('#btnText')
let p = document.getElementById('clickText');


function toggleText() {
  if (p.style.display === "block") {
    p.style.display = "none";
    displayP.textContent = "Click for details";
  } else {
    p.style.display = "block";

    displayP.textContent = "Click to minimize";
  }
}
