/*
  Użytkownik podaje w formularzu dwa sowje ulubione kolory
  Po zatwierdzeniu formularza przyciskiem na ekranie wyswietli
  się komunikat w formacie :
  Pierwszy kolor: ...
  Drugi kolor: ...
*/

var elKolor1 = document.getElementById('kolor1');
var elKolor2 = document.getElementById('kolor2');
var elKolor = document.getElementById('kolor');
var elPrzycisko = document.getElementById('przycisko');
var elKomunikat = document.getElementById('komunikat');
var kolor1, kolor2, kolor;

function wyswietl(){
  kolor1 = elKolor1.value;
  kolor2 = elKolor2.value;
  kolor = elKolor.value;
  let pom = 'Pierwszy kolor:<span style="color:'  + kolor + '">' + kolor1 + '</span>';
  pom += '<br>Drugi kolor:<span style="color:'  + kolor + '">' + kolor2 + '</span>';
  pom += '<br>Wartośc koloru: ' + kolor;
  //elKomunikat.style.color = kolor;
  elKomunikat.innerHTML = pom;

}

elPrzycisko.addEventListener('click', wyswietl);

/*

*/
