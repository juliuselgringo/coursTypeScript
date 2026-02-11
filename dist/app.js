"use strict";
// generique
function identity(arg) {
    return arg;
}
const aa = identity(3);
function first(arg) {
    return arg[0];
}
const myArr = ["abb", "5", 3];
const firstElt = first(myArr);
console.log(firstElt);
const user = { firstName: 'julien', lastName: 'rou' };
const newid = 256;
const compteur = document.querySelector("#compteur");
let i = 0;
// Opérateur d'enchainement optionnel test si la variable est null ou undefined et renvoie undefined si c'est le cas 
const increment = (e) => {
    e.preventDefault();
    i++;
    const span = compteur?.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
compteur?.addEventListener("click", increment);
// Narrowing
function printId(id) {
    if (typeof id === "number") {
        console.log((id * 3).toString());
    }
    else {
        console.log(id.toUpperCase());
    }
}
function example(a, b) {
    if (a === b) {
        a;
    }
}
function otherEx(a) {
    if (a instanceof Date) {
        a;
    }
}
function anotherEx(a) {
    if (Array.isArray(a)) {
        a;
    }
}
function ex1(a) {
    if ("value" in a) {
        a;
    }
}
