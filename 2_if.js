var k = document.getElementById('komunikat');
var x = prompt('Podaj co obliczyć', 'k - kwadrat, p - prostokąt, t - trójkąt');
var pole, boka, bokb;

if(x == 'k'){
  boka = prompt(' Podaj długość boku ');
  pole = boka * boka;
  k.innerHTML = 'Pole kwadratu wynosi: ' + pole + "cm<sup>2</sup>";

}
else if(x == p){
  boka = prompt(' Podaj długość boku a ');
  bokb = prompt(' Podaj długość boku b ');
  pole = boka * bokb;
  k.innerHTML = 'Pole prostokąta wynosi: ' + pole + "cm<sup>2</sup";
}
else if(x == 't'){
  boka = prompt('Podaj długość podstawy');
  bokb = prompt('Podaj długość wysokości');
  pole = (boka * bokb) / 2;
  k.innerHTML = 'Pole trójkąta wynosi: ' + pole + "cm<sup>2</sup>";
}
