elPrzyciskplus = document.getElementById('plus');
elPrzyciskminus = document.getElementById('minus');
elWynik = document.getElementById('wynik');
elX = document.getElementById('x');
elY = document.getElementById('y');
var elLiczba = 0;

elPrzyciskplus.addEventListener('click', function(){
  elWynik.innerHTML = 'Wynik: ' + (elX.value + elY.value);
})
elPrzyciskminus.addEventListener('click', function(){
  elWynik.innerHTML = 'Wynik: ' + (elX.value - elY.value);
})
