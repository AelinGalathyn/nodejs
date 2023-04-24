const Szamologep = require('./Szamologep')
document.addEventListener("DOMContentLoaded", () =>{
    const a_input=document.getElementById('a_input');
    const b_input=document.getElementById('b_input');
    const btnPlusz = document.getElementById('btnPlusz');
    const btnMinusz = document.getElementById('btnMinusz');
    const btnSzoroz = document.getElementById('btnSzoroz');
    const btnOszt = document.getElementById('btnOszt');
    const eredmeny = document.getElementById('eredmeny');
    const szamolo = new Szamologep();
    btnPlusz.addEventListener("click", () => {eredmeny.innerHTML = szamolo.osszeg(a_input.value, b_input.value)});
    btnMinusz.addEventListener("click", () => {eredmeny.innerHTML = szamolo.kulonbseg(a_input.value, b_input.value)});
    btnSzoroz.addEventListener("click", () => {eredmeny.innerHTML = szamolo.szorzat(a_input.value, b_input.value)});
    btnOszt.addEventListener("click", () => {eredmeny.innerHTML = szamolo.hanyados(a_input.value, b_input.value)});
})