// Tuple & Enum

function abon(arg: unknown){
    if((arg instanceof HTMLInputElement)){
        arg.value = "Hello";
    }
}

// literal
const aaaa = true;
const aaa = {isPrivate: true, isPublic: false};
const bb = {isPrivate: true as true, isPublic: false};
const cc = {isPrivate: true as const, isPublic: false};
const dd = {isPrivate: true as const, isPublic: false} as const;

// tuple
const ee = [1,2,3];
const ff: [string, number] = ['tomate', 2];
const gg: (string | number)[] = ['tomate', 2];

type ListItem = [string, number];

const hh: ListItem = ["banane", 3];

function merge<T extends unknown[], U extends unknown[]>(a:T, b:U): [...T, ...U]{
    return [...a, ...b]
}

const ii = merge(ff, hh);
const jj = merge(ff, [1,2,3]);

console.log(ff[0].toUpperCase());

const kk = [] as string[];

 console.log(kk[0]?.toUpperCase());

// console.log(kk[0].toUpperCase());

/*
if(kk[0]){
    console.log(kk[0].toUpperCase());
}
*/

// Enum
enum STEPS{
    Intro = 'Intro',
    Selection = 'Selection',
    Panier = 'Panier',
    Paiement = 'Paiement'
}

const step:  STEPS = STEPS.Selection;
console.log(step);

enum OTHERS{
    Intro,
    Selection,
    Panier,
    Paiement
}

const other: OTHERS = OTHERS.Panier;
console.log(other);