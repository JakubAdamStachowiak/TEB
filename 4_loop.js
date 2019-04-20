'4_loop.js'
/*var i;
for(var i = 1; i<=10;i++){
document.write(i+' ');
}

  i = 1 inicjalizacja
  i <= 10 warunek
  i++ uaktualnianie
*/

//inkrementacja i++
//dekrementacja i--
//preinkrementacja ++i
//postinkrementacja i++

/*
     Napisz program ktroy wyswietli liczby z przedzialu
     <13; 20>  wykorzystaj petle for kazda liczba ma byc zapisana wmnowej linii

var i;
for(var i = 13; i<=20; i++){
  document.write(i+"<br>");
}

// napisz program ktory wypisze lcizby z przedzialu
// 5;30 ktore sa podzielne przez 5
var i;

for(var i = 5; i<=30; i++5){
if(i%5 == 0){
  document.write(i+ " ");
}
}*/
/*
Wypisz liczby parzyste z przedzialu od 10 do 50
po kazdej lcizbie wyswietl przecinek i  spacje po ostatniej liczbie wyswietl kropke
10, 12, 14... 50.
*/
var i;
for (i = 10; i<=50; i++){
  if(i%2 == 0 && i<=48){
    document.write(i+", ")
  }else if(i==50){document.write(i+".")}
}
