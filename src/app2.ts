function reverse<T>(arr:readonly T[]): T[]{
    return [...arr].reverse();
}

class A {
    //3 types de visibilités : public(partout), private(que dans la class), protected(class + enfants)
    private a = 3;

    constructor(a:number){
        this.a = a;
    }

    public geta(){
        return this.a;
    }
}

const aInstance = new A (3);
console.log(aInstance.geta());


class Collection<T> {
    
    constructor(private items: T[]){

    }

    add(item:T):this{
        this.items.push(item);
        return this;
    }

    first():T | null{
        return this.items[0] || null;
    }

    isEqual(a:this){ // le this ici signifie qu'on attend en paramètre un attribut qui a le ^m type que l'instance
        return a.items === this.items;
    }
}

const a = new Collection(["aze", 2]);

const b = a.first();
console.log(b);

const c = a.add(22);
console.log(c);

const a1 = new Collection([2, 2]);
a.isEqual(a1);

class Subscriber{
    on(this:HTMLInputElement,name:string, cb: Function){
        this
    }
}