let lu = "";
let nu = "";
let tau = ["+", "-", "*", "/", ",", "%"];
let ind = 0;
let ind2;
let lu2 = [];

let lisaa = (lu) => {nu += lu; document.getElementById("tulos").innerText = nu;}

function laske() {
  if (nu.search("%") > 0) {
    lu2 = nu.split("%");
    nu = lu2[0]*lu2[1]/100;
    document.getElementById("tulos").innerText = nu;
  } else {
    document.getElementById("tulos").innerText = eval(nu);
    nu = eval(nu);
  }
}

let tyhjennys = () => {nu = ""; document.getElementById("tulos").innerText = nu;}

function kumitus(lisaa) {
  console.log(nu, typeof nu);
  for (let i = 0; i < nu.lenght; i++) {
    for (let j = 0; j < tau.lenght; j++) {
      console.log(nu,tau);
      if (nu[i] == tau[j]) {
        ind = 0;
      }
    }
  }
  nu = nu.subString(0, ind);
  console.log(nu);
  document.getElementById("tulos").innerText = nu;
}
