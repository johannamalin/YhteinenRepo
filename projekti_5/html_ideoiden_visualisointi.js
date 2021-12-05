function respo() {
  let ti = window.innerWidth;
  let tu = document.getElementById("vika");
  tu.textContent = ti; 
}

function luoPeli() {
  let po = document.getElementById("peli");
  console.log(po);
  while (po.hasChildNodes()) {
    po.removeChild(po.firstChild);
  }
  let test = [9,3,4,5,2,4];
  //let al = document.getElementById("peli");
  let ko = document.getElementById("pelivalikko");
  let tau = Array.from(ko.options);
  let rM;
  let cM;
  let gRII = (min, max) => {min = Math.ceil(min);max = Math.floor(max);return Math.floor(Math.random() * (max - min + 1) + min);}
  for (let i = 0;i<tau.length;i++) {
    if(tau[i].selected == true) {
      rM = parseInt(tau[i].value), cM = parseInt(tau[i].value.slice(-1));

    }
  }
  console.log(tau);
  let alk  = document.getElementById("peli");
  let tbl = document.createElement("table");
  let tuAl = document.getElementById("tulokset")
  let tu = document.createElement("aside");
  let tuTe = document.createTextNode(`Aika: ${rM}
    Pisteet: ${cM}`);
  tu.appendChild(tuTe);
  alk.appendChild(tu);
  console.log(tbl);
  let tBo = document.createElement("tbody");
  for (let i = 0; i < rM; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < cM; j++) {
      let cll = document.createElement("td");
      if (cM == 6) {
        cll.style.width = "23vw";
        cll.style.height = "23vh";
      }
      let clTe = document.createTextNode("");
      cll.setAttribute("tun", gRII(1, cM * cM));
      console.log(cll);
      cll.appendChild(clTe);
      row.appendChild(cll);
    }
    tBo.appendChild(row);
  }
  tbl.appendChild(tBo);
  alk.appendChild(tbl);
  tbl.setAttribute("border", "2");
}

function piTe() {
  document.getElementById("peO").hidden = true;
  /*document.getElementById("ai").hidden = false;
  document.getElementById("pi").hidden = false;*/
}

function piilota() {
  /*document.getElementById("ai").hidden = true;
  document.getElementById("pi").hidden = true;*/
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

function foMu() {
  let fo = document.getElementsByTagName("footer")[0];
  fo.style.position = "relative";
}
