/*
  Użytkownik podaje w formularzu dwa swoje ulubione kolory
  Po zatwierdzeniu formularza przyciskiem na ekrnaie wyświetli się komunikat w
  formacie:
  Pierwszy kolor: ...
  Drugi kolor: ...
*/

var elkolor1 = document.getElementById('kolor1');
var elkolor1 = document.getElementById('kolor2');
var elPrzycisk = document.getElementById('przycisk');

function wyswietl(){
  alert('test');
}

elPrzycisk.addEventListener('click', wyswietl);
