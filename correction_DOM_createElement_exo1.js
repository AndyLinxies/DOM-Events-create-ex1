//1
let exo1 = document.querySelector('#content');
let h2 = document.createElement('h2');
exo1.appendChild(h2);
h2.innerHTML = "Part 6 - Exercice 1";

//2
let exo2 = document.createElement('p');
exo2.innerHTML = "lorem ipsum";
exo1.appendChild(exo2);

//3
let h1 = document.createElement('h1');
h1.innerText = "Le DOM - Création de HTML";
exo1.insertBefore(h1, exo1.firstChild);

//4
let div2 = document.getElementById("secondaire");
div2.innerHTML = exo1.innerHTML;
let nouvel_h2 = document.createElement('h2');
nouvel_h2.innerText = "Part 6 - Exercice 2";
div2.replaceChild(nouvel_h2, div2.children[1]);

//5
let div = document.createElement('div');
let body = document.body;
body.insertBefore(div, body.lastChild);
div.setAttribute('id', 'matiere');
let ol = document.createElement('ol');
div.appendChild(ol);

//methode de la hess
let li1 = document.createElement('li');
ol.appendChild(li1);
li1.innerText = "fumer des gros joints";
let li2 = document.createElement('li');
ol.appendChild(li2);
li2.innerText = "shlaser un type";
let li3 = document.createElement('li');
ol.appendChild(li3);
li3.innerText = "nhas pendant les cours de cactus";

//methode boucle 
let li1;
for (let i = 1; i <= 3; i++) {
    li1 = document.createElement('li');
    ol.appendChild(li1);
    li1.innerText = "matiere"+i;
}
