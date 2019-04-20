/*//Tworzenie tablicy za pomocą literału tablicy
let kolory = ['czerwony', 'zielony', 'niebieski'];

console.log(kolory[0]);//czerwony

//tworzenie tablicy za pomocą konstruktora Array
let samochody = new Array('Fiat', 'BMW', 'Audi');
console.log('Ostatni samochod: ' + samochody[samochody.length - 1]);

samochody.push('Ferrari');
console.log('Ilość elementów w tablicy: '+samochody.length);
console.log('Ostatni samochod: ' + samochody[samochody.length - 1]);

//Tablice wielowymiarowe tablica dwuwymiarowa
let tab = new Array(
  new Array('Jan', 'Kowal', 'Poznań'),
  new Array('Anna', 'Nowak', 'Gniezno'),
  new Array('Damian', 'Staszak', 'Kamionki')
);
console.log(tab[0]); //wyswietlenie jednej tablicy
console.log(tab[1][0]);// wyswietlenie jednogo elementu tablicy

//Zadanie Utworz tablice wielowymiarowa ktora bedzie zawierala trzech pilkarzy
//wyswietl na ekranie krzysztofa piątka w formacie:
//Imię:...
//Nazwisko...
//Narodowosc:...


let pilka = new Array(
  new Array('Krzysztof','Piątek','Polska'), //0
  new Array('Cristiano','Ronaldo','Portugalia'), //1
  new Array('Jakub','Błaszczykowski','Polska') //2
)
document.write('Imię: '+pilka[0][0]+'<br>'+'Nazwisko: '+ pilka[0][1]+'<br>'+'Narodowość: '+pilka[0][2]+'<hr');

let imiona = ['anna', 'Julia', 'Zenon', 'Krystyna'];

console.log(imiona);
let posortowane = imiona.sort();
console.log(imiona);
//odwrotnosc czyli sortowanie w odwrotnej kolejnosci
let odwrotnosc = imiona.reverse();
console.log(imiona);


console.log(odwrotnosc.indexOf('anna'));//0
console.log(odwrotnosc.indexOf('Janusz'));//-1

odwrotnosc.pop();
console.log(imiona);

odwrotnosc.push('Jan');
console.log(odwrotnosc);

//Tablica z liczbami
let liczby = [1, 4, 10, 45, 100, -1, 8];
console.log(liczby);

let sortliczby = liczby.sort();
console.log(liczby);

liczby.sort(
function (a, b){
return a - b;
}
);

console.log(liczby);
*/
//Utworz formularz z loginem(text) i haslem(password) zapisz dane do tablicy. Uzytkownik wybiera kolor w jakim
//login i haslo ma byc wyswietlony na ekranie w naglowku trzeciego stopnia. wyswietl dane w formacie:
// login: ... haslo :... kolor: ...
let login, pass, kolor;
let przycisk = document.getElementById('zatwierdz')
let komunikat = document.getElementById('komunikat')
let tablica = new Array();


function formularz(){
  login = document.getElementById('login').value;
  pass = document.getElementById('haslo').value;
  kolor = document.getElementById('kolor').value;

tablica.push( new Array(login, pass, kolor));


console.log(tablica);
let wyswietl = '';
for(let i=0; i<tablica.length; i++){
  for(let j=0; j<tablica[i].length; j++){
    switch (j) {
      case 0:
        wyswietl += '<h3>Login: ';
        break;
          case 1:
              wyswietl += ', hasło: ';
              break;
              case 2:
              wyswietl +=', kolor: '
            break;
    }
    wyswietl += '<span style="color:'+tablica[i][2]+'">'+tablica[i][j]+'</span>';
  }
  wyswietl += '</h3>';
}
komunikat.innerHTML = wyswietl;
}

przycisk.addEventListener('click', formularz);
