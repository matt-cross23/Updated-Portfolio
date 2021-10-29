console.log("Im connected");
var descriptionP = document.getElementById('descript1');
let button1 = document.getElementsByClassName('buttonP');

function showText(){
    descriptionP.style.display == "block";
};

    button1.addEventListener("click", showText);
