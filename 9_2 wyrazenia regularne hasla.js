'9_2 wyrazenia regularne hasla.js'
elHaslo = document.getElementById('haslo');
elHaslo2 = document.getElementById('haslo2');
elPrzycisk = document.getElementById('przycisk');
elDlugosc = document.getElementById('dlugosc');
elCyfra = document.getElementById('cyfra');
elDuzaLitera = document.getElementById('duza litera');
elMalaLitera = document.getElementById('mala litera');
elZnak = document.getElementById('znak');
elKomunikat = document.getElementById('komunikat');

let regCyfra = /\d/;
let regDuzaLitera = /[A-Z]/;
let regMalaLitera = /[a-z]/;
let regZnakSpecjalny = /\W|_/;

let cyfra, pass, pass2, duzaLitera, malaLitera, znakSpecjalny;

function sprawdz(){
   cyfra = regCyfra.test(elHaslo.value);
   duzaLitera = regDuzaLitera.test(elHaslo.value);
   malaLitera = regMalaLitera.test(elHaslo.value);
   znakSpecjalny = regZnakSpecjalny.test(elHaslo.value);

///////////////////////////////////////
if (cyfra) {
    elCyfra.style.color = '#42f4bc';
    elCyfra.innerHTML = '<del>Cyfra</del>';
}
else {
  elCyfra.style.color = 'black';
  elCyfra.innerHTML = 'Cyfra';
}
///////////////////////////////////////
if(elHaslo.value.length >= 8){
  elDlugosc.style.color = '#42f4bc';
  elDlugosc.innerHTML = '<del>Długość minimum 8 znaków</del>';
}else {
  elDlugosc.style.color = 'black';
  elDlugosc.innerHTML = 'Długość minimum 8 znaków';
}
///////////////////////////////////////
if (duzaLitera) {
    elDuzaLitera.style.color = '#42f4bc';
    elDuzaLitera.innerHTML = '<del>Duża litera</del>';
}
else {
  elDuzaLitera.style.color = 'black';
  elDuzaLitera.innerHTML = 'Duża litera';
}
///////////////////////////////////////
if (malaLitera) {
    elMalaLitera.style.color = '#42f4bc';
    elMalaLitera.innerHTML = '<del>Mała litera</del>';
}
else {
  elMalaLitera.style.color = 'black';
  elMalaLitera.innerHTML = 'Mała litera';
}
///////////////////////////////////////
if (znakSpecjalny) {
    elZnak.style.color = '#42f4bc';
    elZnak.innerHTML = '<del>Znak specjalny</del>';
}
else {
  elZnak.style.color = 'black';
  elZnak.innerHTML = 'Znak specjalny';
}
////////////////////////////////////////
if( elHaslo.value.length >= 8 && cyfra && duzaLitera && malaLitera && znakSpecjalny){
  elKomunikat.style.color = 'green';
  elKomunikat.innerHTML = "<h1>Wpisaleś poprawnie hasło</h1>"
}
else {
  elKomunikat.style.color = 'red';
  elKomunikat.innerHTML = '<h1>Haslo nie spełnia wymagań</h1>';
}
////////////////////////////////////////////
if( elHaslo.value.length >= 8 && cyfra && duzaLitera && malaLitera && znakSpecjalny){
  elKomunikat.innerHTML = '<h1>Hasło spełnia wymagania</h1>';
  elKomunikat.style.color = 'green';
  elHaslo2.disabled = false;
}else{
  elKomunikat.innerHTML = '<h1>Hasło nie spełnia wymagania</h1>';
  elKomunikat.style.color = 'red';
  elHaslo2.disabled = true;
}
}
////////////////////////////////////////////

elHaslo.addEventListener('keyup', sprawdz);

function check() {
  if (elHaslo2.value == elHaslo.value) {
    elPrzycisk.disabled = false;
  }
  else {
    elPrzycisk.disabled = true;
  }
}
elHaslo2.addEventListener('keyup', check);
