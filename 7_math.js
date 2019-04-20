let a = 13.3;
let b = 29.5;
let c = 1;

let pierwiastek = Math.sqrt(a);

let min = Math.min(a, b, c);
let max = Math.max(a, b, c);
let zaokraglenie = Math.round(a, b);


console.log("Pierwiastek: " + pierwiastek);
console.log("Min: " + min);
console.log("Max: " + max);
console.log("round: " + zaokraglenie)


//abs, round, floor
let x = -56;
let y = -13.1;
let z = -14.9;

document.write('<br>' + Math.abs(x) + '<br>');// 56
document.write('<br>' + Math.abs(y) + '<br>');// 13.1
document.write('<br>' + Math.abs(z) + '<br>');// 14.9

document.write('<br>' + Math.round(x) + '<br>');// -56
document.write('<br>' + Math.round(y) + '<br>');// -13
document.write('<br>' + Math.round(z) + '<br>');// -15

document.write('<br>' + Math.floor(x) + '<br>');// -56
document.write('<br>' + Math.floor(y) + '<br>');// -14
document.write('<br>' + Math.floor(z) + '<br>');// -15

//Potęgowanie


  let potega = Math.pow(2, 10);

  console.log(potega); //1024

//losowanie

  let losuj = Math.random();

  console.log(losuj);

  //wysoluj liczbe z przedzialu od 0 do 10

  losuj = Math.floor(Math.random() * 11);

  console.log(losuj);

  /* zad. 1 wylosuj 20 liczb z przedzialu (-5;5) liczby maja być wylosowane
  po nacisniecu przycisku*/
  /*
  zad. 2 napisz funkcje która zostanie wywołana po najechaniu na przycisk,
  użytkownik podaje w polach liczbowych przedział z jakiego
  mają być wylosowane liczby w ilości 30

  */

  let losuj1 = Math.random();

  losuj1 = Math.floor(Math.random() * -6);

  function losujLiczbe () {


  }
