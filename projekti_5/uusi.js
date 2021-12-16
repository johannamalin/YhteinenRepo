function foMu() {
  let fo = document.getElementsByTagName("footer")[0];
  fo.style.position = "relative";
}

function nollaa() {
  let po = document.getElementById("peli");
  console.log(po);
  while (po.hasChildNodes()) {
    po.removeChild(po.firstChild);
  }
  document.getElementById("peO").hidden = false;
  let fo = document.getElementsByTagName("footer")[0];
  fo.style.position = "fixed";
}

function piTe() {
  document.getElementById("peO").hidden = true;
}

let kortit = [
  {nimi: "pa1", img: "1.1.png"},
  {nimi: "pa1", img: "1.2.png"},
  {nimi: "pa2", img: "2.1.png"},
  {nimi: "pa2", img: "2.2.png"},
  {nimi: "pa3", img: "3.1.png"},
  {nimi: "pa3", img: "3.2.png"},
  {nimi: "pa4", img: "4.1.png"},
  {nimi: "pa4", img: "4.2.png"},
  {nimi: "pa5", img: "5.1.png"},
  {nimi: "pa5", img: "5.2.png"},
  {nimi: "pa6", img: "6.1.png"},
  {nimi: "pa6", img: "6.2.png"},
  {nimi: "pa7", img: "7.1.png"},
  {nimi: "pa7", img: "7.2.png"},
  {nimi: "pa8", img: "8.1.png"},
  {nimi: "pa8", img: "8.2.png"},
  {nimi: "pa9", img: "9.1.png"},
  {nimi: "pa9", img: "9.2.png"},
  {nimi: "pa10", img: "10.1.png"},
  {nimi: "pa10", img: "10.2.png"},
  {nimi: "pa11", img: "11.1.png"},
  {nimi: "pa11", img: "11.2.png"},
  {nimi: "pa12", img: "12.1.png"},
  {nimi: "pa12", img: "12.2.png"},
  {nimi: "pa13", img: "13.1.png"},
  {nimi: "pa13", img: "13.2.png"},
  {nimi: "pa14", img: "14.1.png"},
  {nimi: "pa14", img: "14.2.png"},
  {nimi: "pa15", img: "15.1.png"},
  {nimi: "pa15", img: "15.2.png"},
  {nimi: "pa16", img: "16.1.png"},
  {nimi: "pa16", img: "16.2.png"},
  {nimi: "pa17", img: "17.1.png"},
  {nimi: "pa17", img: "17.2.png"},
  {nimi: "pa18", img: "18.1.png"},
  {nimi: "pa18", img: "18.2.png"},
];

let koVa = [];
let koTu = [];
let pi = 0;
let ai = 0;

function kaKo() {
  let ko = document.getElementById("pelivalikko");
  let tau = Array.from(ko.options); //luo taulukon pudotusvalikon tiedoista
  let rM;
  let cM;
  for (let i = 0;i<tau.length;i++) {
    if(tau[i].selected == true) {
      rM = parseInt(tau[i].value), cM = parseInt(tau[i].value.slice(-1));
    }
  }
  let ma = rM * cM;
  let kayKor = kortit.slice(0, ma);
  sek(kayKor);
  return kayKor;
}

function luoPeli() {
  // muuttuja ja funktio nollaavat pelin
  let po = document.getElementById("peli");
  while (po.hasChildNodes()) {
    po.removeChild(po.firstChild);
  }
  /*let ko = document.getElementById("pelivalikko");//hakee pudotusvalikon valinnan
  let tau = Array.from(ko.options); //luo taulukon pudotusvalikon tiedoista
  let rM;
  let cM;
  for (let i = 0;i<tau.length;i++) {
    if(tau[i].selected == true) {
      rM = parseInt(tau[i].value), cM = parseInt(tau[i].value.slice(-1));
    }
  }
  let ma = rM * cM;
  let kayKo = kortit.slice(0, ma);
  sek(kayKo);*/
  //console.log();
  let pAl = document.getElementById('peli');
  let di1 = document.createElement("div");
  di1.setAttribute("class", "pohja");
  //let kuv = document.createElement("img");
  let kayKo = kaKo();
  //console.log(kayKo);
  kayKo.forEach((arr, ind) => {
    let kuv1 = document.createElement('img');
    kuv1.src = "tummakansi.png";
    kuv1.setAttribute("class", kayKo[ind].nimi);
    kuv1.setAttribute("name", kayKo[ind].img);
    kuv1.addEventListener("click", kaanna);
    di1.appendChild(kuv1);
  });
  pAl.appendChild(di1);
  let aiTu = document.createElement("aside");
  aiTu.setAttribute("class", "tualue");
  let tuTe = document.createTextNode(`Aika: ${ai}
  Pisteet: ${pi}`);
  aiTu.appendChild(tuTe);
  pAl.appendChild(aiTu);
}
//let ni = document.querySelector("img").name;
//let tu = document.querySelector("img").className;
function kaanna() {
  console.log();
  let ni = document.querySelector("img").name;
  console.log(ni);
  let nim;
  console.log(ni.name);
  let tu = document.querySelector("img").className;
  //console.log(ni);
  //let va = this.dataset.id;
  //koVa.push(kayKo[va].nimi);
  koVa.push(ni);
  //koTu.push(va);
  koTu.push(tu);
  console.log(koVa);
  let ap = 0;
  //console.log(koTu);
  this.classList.add("flip");
  //console.log(kortit);
  let koKu = kortit.filter(obj => obj.img == ni);
  let oKu = koKu[0].img;
  console.log(oKu);
  this.setAttribute("src", ni);
  ap++
  if (koVa.length == 2) {
    setTimeout(tar(koVa,koTu), 1000);
    ap=0;
  } else {
    setTimeout(function(ni) {
      ni = document.querySelector("img");
      ni.classList.add("flip2");
      ni.setAttribute("src", "tummakansi.png");
      ni = "";
      //console.log(ni);
      }, 1000);
  }
  ni = "";
  nim = "";
  console.log(ni);
}

function tar() {
  //console.log(koVa);
  //console.log(koTu);
  let kuv = document.querySelectorAll("img");
  let pi = 0;
  //let ekaTu = koTu[0];
  //console.log(ekaTu);
  //let tokaTu = koTu[1];
  let ekaNa = koVa[0];
  let tokaNa = koVa[1];
  if (ekaNa == tokaNa){
    pi++;
    console.log(pi);
    koVa = [];
    koTu = []
  } else {
    kuv[ekaNa].setAttribute("src", "tummakansi.png");
    kuv[tokaNa].setAttribute("src", "tummakansi.png");
    koVa = [];
    //koTu = [];
  }
  ni = "";
  koVa = [];
  koKu = [];
  oKu = "";
  koTu = []
  console.log(ni);
}

function sek(kor) {
  kor.sort(() => 0.5 - Math.random());
}

function respo() {
  let ti = window.innerWidth;
  let tu = document.getElementById("vika");
  tu.textContent = ti;
}
