function respo() {
  let ti = window.innerWidth;
  let tu = document.getElementById("vika");
  tu.textContent = ti;
}

function luoPeli() {
  // muuttuja ja funktio nollaavat pelin
  let po = document.getElementById("peli");
  while (po.hasChildNodes()) {
    po.removeChild(po.firstChild);
  }
  // tähän tulisi kortit
  let test = [9,3,4,5,2,4,2,7,3,8,4,6,7,8,1,6];
  //let al = document.getElementById("peli");
  let ko = document.getElementById("pelivalikko"); //hakee pudotusvalikon valinnan
  let tau = Array.from(ko.options); //luo taulukon pudotusvalikon tiedoista
  let rM; //rivien määrä muuttuja
  let cM; //solujen määrä muuttuja
  let kL = 0; // pelin toiminta
  let ver = -1; // pelin toiminta
  let vaL; // pelin toiminta
  //let se = (tau) => tau.sort((function(a,b){return 0.5 - Math.random()}));
  // Määrittää pelialueen koon
  for (let i = 0;i<tau.length;i++) {
    if(tau[i].selected == true) {
      rM = parseInt(tau[i].value), cM = parseInt(tau[i].value.slice(-1));
    }
  }
  let kor = se(test); // pelin toiminta
  let alk  = document.getElementById("peli"); // hakee pelialueen
  let tbl = document.createElement("table"); // lou tablen
  //let tuAl = document.getElementById("tulokset")
  let tu = document.createElement("aside"); // luo alueen johon tulee aika ja pisteet
  let tuTe = document.createTextNode(`Aika: ${rM}
    Pisteet: ${cM}`); //aika & pisteet tekstialueen luonti
  tu.appendChild(tuTe); //aika & pisteet alueeseen liitetään aika & pisteet tekstialue
  alk.appendChild(tu); // pelialueeseen liitetään aika & pisteet alue
  //console.log();
  let tBo = document.createElement("tbody"); // luodaan elementti
  //alla rakennetaan taulukko ja samaalla muokattaan sen muotoiluita
  for (let i = 0; i < rM; i++) {
    let row = document.createElement("tr"); // rivi
    for (let j = 0; j < cM; j++) {
      let cll = document.createElement("td"); // solu
      if (cM == 6) {
        cll.style.width = "20vw";
        cll.style.height = "30vh";
        tbl.style.width = '80%';
        tbl.style.margin = '2% 10% 2% 10%';
        tu.style.margin = '8% 0 0 2.5%';
      } else {
        tbl.style.width = '60%';
        tbl.style.margin = '2% 20% 2% 20%';
      }
      let clTe = document.createElement("img"); // luodaan soluun kuva elementti
      clTe.src = "tummakansi.png"; // kuvaelementtiin määritetään kuva
      //clTe
      clTe.setAttribute('id', 'tK'); // kuvalle id
      clTe.setAttribute('class', "ve"); // kuvalle class
      //kuvalle EventListener ja mitä tehdään.
      clTe.addEventListener('click', function () {
        clTe.src = 'vaaleakansi.png';
        stop(clTe);
      })
      clTe.style.width = "100%"; // kuvan muotoilua
      clTe.style.height = "auto"; // kuvan muotoilua
      //console.log(clTe);
      //cll.addEventListener( 'click', function () {
        //;})
      cll.setAttribute('class', "an"); // solulle class
      cll.setAttribute("alt", kor[(kL)]); // solulle alt
      cll.setAttribute("id", "cll" + kL); // solulle id
      cll.setAttribute("name", kL); // solulle name
      console.log(cll);
      cll.appendChild(clTe); // kuva liitetään soluun
      row.appendChild(cll); // solu liitetään riviin
    }
    tBo.appendChild(row); // rivi liitetään tbodyyn
  }
  tbl.appendChild(tBo); // tbody liitetään tableen
  alk.appendChild(tbl); // table liitetään sectioniin
  tbl.setAttribute("border", "2"); // tablen muotoilua
}

//piilottaa "Valitse peli ja se tulostuu tähän" - tekstin, kun valitaan peli
function piTe() {
  document.getElementById("peO").hidden = true;
}

// Tyhjennä painikkeen toiminnot
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

function kello() {
  let sek;
  let min;

}

//Footerin sijainnin ohjaus
function foMu() {
  let fo = document.getElementsByTagName("footer")[0];
  fo.style.position = "relative";
}

//pelin toiminta (kesken)
function se(test) {
  test.sort(function(a,b){return 0.5 - Math.random()});
  return test;
}

//pelin toiminta (kesken)
function nay(numero,ver) {
  let tun = document.getElementById("cll"+numero);
  let alT = document.getAttribute("alt");
  if (ver != -1) {
    vaL = ver.getAttribute("alt");
  } else {
    vaL = ver;
  }
  tun.innerHTML = "testing" + alT;
  if (alT == vaL) {
    alT = tun.getAttribute("alt");
  }
}

//kuvan palautus käännetystä takaisin
function stop(st) {
  setTimeout(function(){
  st.src = "tummakansi.png";
}, 1000);
}

//Alla olevat ovat animoituun kuvankääntöön, mikä ei toimi eikä ole käytössä
function kaan() {
  let ku = document.querySelector('.an');
  //return ku.classList.toggle('hover');
  return ku.addEventListener( 'click', function () {
    ku.classList.toggle('hover');
  })
}

function kaan2() {
  let ku = document.querySelector('.ve');
  ku.addEventListener( 'click', function () {
    ku.classList.toggle('hov');
  })
  console.log(ku);
  return ku.classList.toggle('hov');
}
