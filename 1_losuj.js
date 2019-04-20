/* zad. 1 wylosuj 20 liczb z przedzialu (-5;5) liczby maja być wylosowane
po nacisniecu przycisku*/
/*
zad. 2 napisz funkcje która zostanie wywołana po najechaniu na przycisk,
użytkownik podaje w polach liczbowych przedział z jakiego
mają być wylosowane liczby w ilości 30

*/

var elPrzycisk = document.getElementById('przycisk');
var elWyswietl = document.getElementById('wyswietl');

var wyswietl;


function losujLiczbe () {
  wyswietl="";
  for (i = 1; i <= 20; i++) {
  losuj = Math.floor(Math.random() * (-6-6+1) + 6); // (b-a+1) + b
  wyswietl += losuj + ", ";
    }
  elWyswietl.innerHTML = "Losowe liczby: " + wyswietl;
  }

elPrzycisk.addEventListener('click', losujLiczbe)
