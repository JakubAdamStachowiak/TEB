function witaj(imie){
  document.write('Witaj ' + imie + '!<br>');
}

let imie = 'Janusz';
witaj(imie);

/*function poleProstokata(a, b){

  let pole = a * b;
  return pole;
}

let bokA = prompt("Podaj bok A: ")
let bokB = prompt("Podaj bok B: ")

let wyswietl = 'Pok a: ' + bokA + ' cm';
  wyswietl += '<br>Bok b: ' + bokB + ' cm';
  wyswietl += '<br>Pole prostokąta wynosi: ' + poleProstokata(bokA, bokB);
  wyswietl +='cm<sup>2</sup>'

document.write(wyswietl);
*/

  /*
    Funkcja zwracająca dwie wartości
    Napisz funckje zwracająca objętość i pole
*/
function poleObjetosc(szerokosc, dlugosc, wysokosc){
  let pole = szerokosc * dlugosc;
  let objetosc = pole * wysokosc;
  let wynik = [pole, objetosc];
  return wynik;

}
  let pole = poleObjetosc(2, 3, 4)[0];
  console.log('Pole wynosi: ' + pole);

  let objetosc = poleObjetosc(2, 3, 4)[1];
  console.log('Objętość wynosi: ' + objetosc);

/*
  Utwórz funkcje obliczającą pole i obwód kołaf
  promien podaje użytkownik z klawiatury w polu tekstowy,
  przycisk wywołuje funkcje i wyświetla wynik w bloku na stronie w formacie
  Pole koła: ...;
  Obwód koła: ...;
  Wynik pola i obwodu a być wyświetlony w kolorze zielonym, wykorzystaj
  do tego klasy w arkuszu stylu.
  Wynik zaokrągli do dwóch miejsc po przecinku
*/

var elPrzycisko = document.getElementById('przycisk');
var elPromien = document.getElementById('promień');

function kolo(szerokosc, dlugosc, wysokosc){
  let pole = szerokosc * dlugosc;
  let objetosc = pole * wysokosc;
  let wynik = [pole, objetosc];
  return wynik;

}
  let pole = poleObjetosc(2, 3, 4)[0];
  console.log('Pole wynosi: ' + pole);

  let obwód = poleObjetosc(2, 3, 4)[1];
  console.log('Objętość wynosi: ' + obwód);
