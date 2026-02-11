// generique
function identity<ArgType>(arg:ArgType):ArgType{
    return arg;
}

const aa = identity<number>(3);

function first<Type>(arg: Type[]):Type{
    return arg[0];
}

const myArr = ["abb","5", 3];
const firstElt = first(myArr);
console.log(firstElt);


// Alias de type
type User = {firstName: string, lastName: String}
type DateString = string;
type id = string | number;

const user:User = {firstName:'julien',lastName:'rou'}
const newid:id = 256;


const compteur = document.querySelector<HTMLButtonElement>("#compteur");
let i = 0;

// Opérateur d'enchainement optionnel test si la variable est null ou undefined et renvoie undefined si c'est le cas 
const increment = (e: Event) => {
    e.preventDefault();
    i++;
    const span = compteur?.querySelector('span');
    if(span){
        span.innerText = i.toString();
    }
    
}
compteur?.addEventListener("click", increment);

// Narrowing
function printId(id: string|number){
    if(typeof id === "number"){
        console.log((id*3).toString())
    }else{
        console.log(id.toUpperCase())
    }
}

function example(a: string|boolean, b: string|number|boolean){
    if(a === b){
        a
    }
}

function otherEx(a: string|Date){
    if(a instanceof Date){
        a
    }
}

function anotherEx(a: string|string[]){
    if(Array.isArray(a)){
        a
    }
}

function ex1(a: MouseEvent|HTMLInputElement){
    if("value" in a){
        a
    }
}

