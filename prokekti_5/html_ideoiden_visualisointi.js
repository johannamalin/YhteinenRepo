function luoPeli() {
  let al = document.getElementById("peli");
  let rM = 4;
  let cM = 4;
  console.log(rM, cM);
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
}
