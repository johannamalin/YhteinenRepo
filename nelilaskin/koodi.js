let lu = "";
let nu = "";
let tau = ["+", "-", "*", "/", ",", "%"];
let ind = 0;

let lisaa = (lu) => {nu += lu; document.getElementById("tulos").innerText = nu;}

function laske() {

}

let tyhjennys = (nu) => {nu = ""; document.getElementById("tulos").innerText = nu;}

function kumitus() {
  for (let i = 0; i < nu.lenght; i++) {
    for (let j = 0; j < tau.lenght; j++) {
      if (nu[i] == tau[j]) {
        ind = 0;
      }
    }
  }
  nu = nu.substring(0, ind);
  document.getElementById("tulos").innerText = nu;
}
