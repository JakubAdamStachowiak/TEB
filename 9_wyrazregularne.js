//true lub false, prawda lub falsz

let tekst = 'TekstK2owal';

let regEx = /^tekst$/i;
regEx = /[c]/i; //false
regEx = /[4]/i; //false
regEx = /[0-9]/i;
regEx = /[a-z]/i;
regEx = /[A-Z]/i;

let imie = prompt('Podaj mail');
let regimie = /^[a-zA-Ząężźśćńół]{2}$/;
regimie = /^[a-zA-Ząężźśćńół\s]{2}$/;

regEx = /\S/; //Bez spacji nie chcemy spacji
regEx = /\./;

regEx = /[a-z]+@/; //mail




let regmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

regmail = /\w/; //litera cyfra lub znak podkreslenia
regmail = /\d/; //cyfry
regmail = /(szkola)/; //

let sprawdz = regmail.test(regmail);

console.log('mail: '+sprawdz);
