function luoPeli() {
  let al = document.getElementById("peli");
  let ko = document.getElementById("pelivalikko");
  let tau = Array.from(ko.options);
  let rM;
  let cM;
  for (let i = 0;i<tau.length;i++) {
    if(tau[i].selected == true) {
      rM = parseInt(tau[i].value), cM = parseInt(tau[i].value.slice(-1));

    }
  }
  console.log(tau);
  console.log(typeof rM, typeof cM);
  let alk  = document.getElementById("peli");
  let tbl = document.createElement("table");
  let tBo = document.createElement("tbody");
  for (let i = 0; i < rM; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < cM; j++) {
      let cll = document.createElement("td");
      let clTe = document.createTextNode("row" + i +",cell"+ j);
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
  document.getElementById("ai").hidden = false;
  document.getElementById("pi").hidden = false;
}

function piilota() {
  document.getElementById("ai").hidden = true;
  document.getElementById("pi").hidden = true;
}
