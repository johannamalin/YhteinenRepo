function validateForm() {

  let x = document.forms["kyselylomake"]["ikasyotot"].value;
  if (isNaN(x) || x < 1 || x > 99) {
    alert("Kirjoita oikea ikä");
    return false;
  }

  /*if (x < 1) {
    alert("Valitse oikea ikä");
    return false;
  } else if (x > 99) {
    alert("Valitse oikea ikä");
  } else {
    alert("Ikäsi on oikein");
  }
*/
}

function poppari1() {
  var popup = document.getElementById("nimique");
  popup.classList.toggle("show");
}

function poppari2(){
  var popup = document.getElementById("ikaque");
  popup.classList.toggle("show");
}

function poppari3(){
  var popup = document.getElementById("emailque");
  popup.classList.toggle("show");
}
