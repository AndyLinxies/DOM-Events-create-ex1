//Ex1
let div1= document.getElementById('content');
let h2 = document.createElement('h2');
div1.appendChild(h2);
h2.innerText = "Part 6 - Exercice 1";

//Ex2
let p = document.createElement('p');
p.innerText = 'lorem ipsum';
//div1.appendChild(p);
//Le insertBefore insert toujours AVANT. pour qu'il insert APRES (en dernier) on doit mettre .nextSibling après lastChild
div1.insertBefore(p, div1.lastChild.nextSibling);

//Ex3
let h1 = document.createElement('h1');
h1.innerText = "Le DOM - Création de HTML";
div1.insertBefore(h1, div1.firstChild)

//Ex4
let div2 = document.getElementById('secondaire');
div2.innerHTML = div1.innerHTML;
div2.firstElementChild.nextElementSibling.innerText = 'Exercice 2';

//Ex5
div3 = document.createElement('div');
div3.id = 'mariere';

let ol = document.createElement('ol');
let li1  = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
ol.appendChild(li1);
ol.appendChild(li2);
ol.appendChild(li3);
div3.appendChild(ol);
li1.innerText = "createElement";
li2.innerText = "inserBefore";
li3.innerText = "appenChild"
//on place la div3 par rapport à un element existant (div2) (ou qu'on peut creer)
div2.parentNode.insertBefore(div3,div2.parentNode.lastChild);