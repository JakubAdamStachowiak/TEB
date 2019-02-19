/* choinka
*
**
***
****

var i;
var j;
for(i = 1; i <= 4; i++)
{
  for(j = 1; j <= i; j++){
      document.write('*');
  }
  document.write('<br>');
}
*/

/*
  użytkownik podaje z klawiatury maksymalny poziom choinki i wartosc jaka ma sie wyswietlic
*/

document.write('<hr>');

var i, j;

var elIlosc = document.getElementById('ilosc');
var elZnak = document.getElementById('znak');
var elPrzycisk = document.getElementById('przycisk');
var elWyswietl = document.getElementById('wyswietl');
var ilosc, znak, wyswietl = '';

function wyswietlznaki()
{
  ilosc = elIlosc.value;
  znak = elZnak.value;
  for(i = 0; i <= ilosc; i++){
    for(j = 1; j <= i; j++){
      wyswietl += znak;
    }
    wyswietl += '<br>';
  }
  //wyswietl = ilosc + znak;
  elWyswietl.innerHTML = wyswietl;
}
elPrzycisk.addEventListener('click', wyswietlznaki);

//pętla while

i = 0;
while (i < 5){
  document.write(i + ' ');
  i++;
}

i = 0;
while (i++ < 6){
  document.write(i + ' ');
}

// do while

var pass1 = 'walentynki', pass2 = '', licznik = 0;

do{
  pass2 = prompt('Podaj hasło');
  licznik++;
}while (pass1 != pass2 && licznik < 3);

if(licznik == 3){
  alert('Błędne hasło!');
}
else if (pass1 == pass2){
  alert('Poprawne hasło!');
}
