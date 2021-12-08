function respo() {
  let ti = window.innerWidth;
  let tu = document.getElementById("vika");
  tu.textContent = ti;
}

function luoPeli() {
  let po = document.getElementById("peli");
  //console.log(po);
  while (po.hasChildNodes()) {
    po.removeChild(po.firstChild);
  }
  let test = [9,3,4,5,2,4,2,7,3,8,4,6,7,8,1,6];
  //let al = document.getElementById("peli");
  let ko = document.getElementById("pelivalikko");
  let tau = Array.from(ko.options);
  let rM;
  let cM;
  let kL = 0;
  let ver = -1;
  let vaL;
  //let se = (tau) => tau.sort((function(a,b){return 0.5 - Math.random()}));
  for (let i = 0;i<tau.length;i++) {
    if(tau[i].selected == true) {
      rM = parseInt(tau[i].value), cM = parseInt(tau[i].value.slice(-1));
    }
  }
  //console.log(tau);
  let kor = se(test);
  let alk  = document.getElementById("peli");
  let tbl = document.createElement("table");
  let tuAl = document.getElementById("tulokset")
  let tu = document.createElement("aside");
  let tuTe = document.createTextNode(`Aika: ${rM}
    Pisteet: ${cM}`);
  tu.appendChild(tuTe);
  alk.appendChild(tu);
  //console.log();
  let tBo = document.createElement("tbody");
  for (let i = 0; i < rM; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < cM; j++) {
      let cll = document.createElement("td");
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
      let clTe = document.createElement("img");
      clTe.src = "tummakansi.png";
      clTe
      clTe.setAttribute('id', 'tK');
      clTe.setAttribute('class', "ve");
      clTe.addEventListener('click', function () {
        clTe.src = 'vaaleakansi.png';
        stop(clTe);
      })
      clTe.style.width = "100%";
      clTe.style.height = "auto";
      //console.log(clTe);
      //cll.addEventListener( 'click', function () {
        //;})
      cll.setAttribute('class', "an");
      cll.setAttribute("alt", kor[(kL)]);
      cll.setAttribute("id", "cll" + kL);
      cll.setAttribute("name", kL);
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

function kello() {
  let sek;
  let min;

}

function foMu() {
  let fo = document.getElementsByTagName("footer")[0];
  fo.style.position = "relative";
}

function se(test) {
  test.sort(function(a,b){return 0.5 - Math.random()});
  return test;
}

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

function stop(st) {
  setTimeout(function(){
  st.src = "tummakansi.png";
}, 1000);
}

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
