elPrzyciskklik = document.getElementById('przyciskklik');
elPrzyciskdblklik = document.getElementById('przyciskdblklik');
elPrzyciskover = document.getElementById('przyciskover');
elBlok = document.getElementById('blok');
elKolor = document.getElementById('kolor');

elPrzyciskklik.addEventListener('click', function(){
  elBlok.innerHTML += 'Kliknięcie <br>';
  elBlok.style.backgroundColor = elKolor.value;
})
elPrzyciskdblklik.addEventListener('dblclick', function(){
  elBlok.innerHTML += 'podwójne kliknięcie <br>';
  elBlok.style.backgroundColor = elKolor.value;
})
elPrzyciskover.addEventListener('mouseover', function(){
  elBlok.innerHTML += 'Najechanie myszką <br>';
  elBlok.style.backgroundColor = elKolor.value;
})
