let promien = parseFloat(prompt("Podaj promień koła"));

function ObliczPole(promien){
  return (promien * promien * Math.PI);
};

function Pole(){
  let pole = ObliczPole(promien);
  document.write("Pole koła o promieniu: " + promien + "cm<sup>2</sup> równa się: " + pole + "cm<sup>2</sup>");
}
 
Pole(promien);

let a = parseFloat(prompt("Podaj długość podstawy trójkąta"));
let h = parseFloat(prompt("Podaj wysokość trójkąta"));

function ObliczPoleTrojkata(a,h){
  return ((a*h)/2);
}

function PoleTrojkata(){
  let pole = ObliczPoleTrojkata(a,h);
  document.write("Pole trójkąta o boku równym: " + a + "cm<sup>2</sup> i wysokości równej: " + h + "cm<sup>2</sup> równa się: " + pole + "cm<sup>2</sup>");
}

PoleTrojkata(a,h);
