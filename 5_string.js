/*
let text = 'Teb Edukacja';
console.log(text);
console.log(text.length + ' znaków');

let dlugosc = text.length;//12
document.write('Długość tekstu: '+ dlugosc);

let pierwszy = text.charAt(0);

let ostatni = text.charAt(text.length - 1);  //a

console.log(pierwszy);
console.log(ostatni);


console.log(text.charAt(4)); //E

//ASCII
console.log(text.charCodeAt(0)) //84


Sprawdz czy zmienna o nazwie tekst ma minimum jedną dużą literę


let tekst = 'Janusz';
let znak;

for(var i=0; i<tekst.length;i++){
znak = tekst.charCodeAt(i);
if(znak >= 65 && znak <=90){
  document.write('<br>Jest duża litera: '+ tekst.charAt(i));
  break;
}else{document.write("<br>Brak dużej litery");
break;}
}
let duze = tekst.toUpperCase();

let male = tekst.toLowerCase();
console.log(male);
console.log(duze);
//console.log(ostatni);*/

/*
Uzytkownik podaje z klawiatury swoje imie i nazwisko, zamien znaki
aby pierwsza litera byla duza a pozostale male utworz funkcje o nazwie
zamiana
*/
var elimie=document.getElementById('imie');
var elnazwisko=document.getElementById('nazwisko');
