let zmienna = 18;         //ZMIENNE TWORZYC LETEM


document.write(zmienna)

let imie="Janusz";
document.write("<br>Twoje imie: <br> "+imie+ "<br>");

//+ konkatenacja
let a = 5 , b = 3, suma;
suma = a+b;
document.write("suma wynosi: "+suma);

//potegowania
let potega = Math.pow(a, b);
//alert(potega);       //125

//reszta z dzielenia
let modulo = 11%4
console.log(modulo);

//typy danych
let c = 3, d = 12.5;

console.log(typeof(c));   //number
console.log(typeof(d));

d="tekst"
console.log(typeof(d)); //string


let prawda = true;
console.log(typeof(prawda)); //boole

let nic = null;
console.log(typeof(nic)); //object

let pusta;
console.log(typeof(pusta)); //undefined

//systemy liczbowe
let dziesietny = 10;

let oktalny = 012;

// 012=> 1*8^1+2 *8^0 = 8+2= 10

console.log(oktalny);

let szesnastkowy= 0xA;

console.log(szesnastkowy);

//prompt
let liczba = prompt("Podaj pierwsza liczbe");
console.log('Pierwsza liczba wynosi: '+liczba );

console.log(typeof(liczba));

//zadanie 1 uzytkownik wprowadza z klawiatury dwie liczby (moga byc zmienno przecinkowe)
// wyswietl na ekranie sume tych liczb w formacie:
//suma a i b wynosi:....

let l1 = prompt("podaj pierwsza liczbe");
let l2 = parseInt(prompt("podaj druga liczbe"));
l1 = parseInt(l1);

let dodawanie = l1+l2;
document.write("<br>Suma "+ l1 + " i "+ l2 +" wynosi: "+dodawanie);

//zadanie 2 uzytkownik wprowadza z klawiatury dwie liczby (moga byc zmienno przecinkowe)
// wyswietl na ekranie sume tych liczb w formacie:
//suma a i b wynosi:....

let l3 = prompt("podaj pierwsza liczbe");
let l4 = parseFloat(prompt("podaj druga liczbe"));
l3 = parseFloat(l3);

let dodawanie1 = l3+l4;
document.write("<br>Suma "+ l3 + " i "+ l4 +" wynosi: "+dodawanie1);


//camel case
// liczba pierwsza zmienna pomocnicza mam na imie

/*napisz program ktory obliczy pole prostokata
dane podaje uzytkownik z klawiatury liczby zmiennoprzecinkowe
wynik wyswietl na ekranie w formacie: "Bok a = ......., bok b = ......,
pole wynosi : ....cm^2"
*/
let p = parseFloat(prompt("Podaj bok: a"));
let o = parseFloat(prompt("Podaj bok: b"));

let mnozenie = p*o;
document.write("<br> Bok a = "+p+ ",bok b = "+o+",pole wynosi: " +mnozenie+"cm<sup>2</sup>");
