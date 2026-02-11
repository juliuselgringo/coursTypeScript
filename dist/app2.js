"use strict";
function reverse(arr) {
    return [...arr].reverse();
}
class A {
    constructor(a) {
        //3 types de visibilités : public(partout), private(que dans la class), protected(class + enfants)
        this.a = 3;
        this.a = a;
    }
    geta() {
        return this.a;
    }
}
const aInstance = new A(3);
console.log(aInstance.geta());
class Collection {
    constructor(items) {
        this.items = items;
    }
    add(item) {
        this.items.push(item);
        return this;
    }
    first() {
        return this.items[0] || null;
    }
    isEqual(a) {
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
class Subscriber {
    on(name, cb) {
        this;
    }
}
