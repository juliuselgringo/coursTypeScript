"use strict";
// Tuple & Enum
function abon(arg) {
    if ((arg instanceof HTMLInputElement)) {
        arg.value = "Hello";
    }
}
// literal
const aaaa = true;
const aaa = { isPrivate: true, isPublic: false };
const bb = { isPrivate: true, isPublic: false };
const cc = { isPrivate: true, isPublic: false };
const dd = { isPrivate: true, isPublic: false };
// tuple
const ee = [1, 2, 3];
const ff = ['tomate', 2];
const gg = ['tomate', 2];
const hh = ["banane", 3];
function merge(a, b) {
    return [...a, ...b];
}
const ii = merge(ff, hh);
const jj = merge(ff, [1, 2, 3]);
console.log(ff[0].toUpperCase());
const kk = [];
console.log(kk[0]?.toUpperCase());
// console.log(kk[0].toUpperCase());
/*
if(kk[0]){
    console.log(kk[0].toUpperCase());
}
*/
// Enum
var STEPS;
(function (STEPS) {
    STEPS["Intro"] = "Intro";
    STEPS["Selection"] = "Selection";
    STEPS["Panier"] = "Panier";
    STEPS["Paiement"] = "Paiement";
})(STEPS || (STEPS = {}));
const step = STEPS.Selection;
console.log(step);
var OTHERS;
(function (OTHERS) {
    OTHERS[OTHERS["Intro"] = 0] = "Intro";
    OTHERS[OTHERS["Selection"] = 1] = "Selection";
    OTHERS[OTHERS["Panier"] = 2] = "Panier";
    OTHERS[OTHERS["Paiement"] = 3] = "Paiement";
})(OTHERS || (OTHERS = {}));
const other = OTHERS.Panier;
console.log(other);
