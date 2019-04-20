
var i;
var j;


for (var i = 1; i <= 6 ; i++) {
  for (var j = 1; j <= i; j++) {
    document.write('*');
  }
  document.write('<br>');
}

document.write('<hr>');

var elPrzycisk = document.getElementById('przycisk');
var elZnaki = document.getElementById('znaki');
var elLiczby = document.getElementById('liczby');
var elWyswietl = document.getElementById('wyswietl');

function wyswietlZnak () {

var znaki, liczby, wyswietl;

  wyswietl = ' ';
  liczby = elLiczby.value;
  znaki = elZnaki.value;

  for (i = 1; i <= liczby; i++) {
    for (j = 1; j <= i; j++) {
      wyswietl += znaki;
    }
    wyswietl += '<br>';
  }
  elWyswietl.innerHTML = wyswietl;
}
elPrzycisk.addEventListener('click', wyswietlZnak);
