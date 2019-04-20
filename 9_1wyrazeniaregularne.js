/*
Uzytkownik wprowadza w formularzu kod pocztowy
sprawdz wyrazeniem regularnym czy wprowadzil prawidlowe dane np
61-200, 61200
*/
let kod = document.getElementById('kodp');
let guzik = document.getElementById('guzik');
let elkomunikat = document.getElementById('komunikat');
let kodzik, komunikat;



function nowaf(){
  komunikat = '';
  kodzik = kod.value;

  let regEx = /[0-9]{2}\-[0-9]{3}|[0-9]{5}/g;
  var sprawdz = regEx.test(kodzik);

  komunikat += 'Kod pocztowy '+sprawdz;
  elkomunikat.innerHTML = komunikat;
}


guzik.addEventListener('click', nowaf);
