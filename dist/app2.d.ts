declare function reverse<T>(arr: readonly T[]): T[];
declare class A {
    private a;
    constructor(a: number);
    geta(): number;
}
declare const aInstance: A;
declare class Collection<T> {
    private items;
    constructor(items: T[]);
    add(item: T): this;
    first(): T | null;
    isEqual(a: this): boolean;
}
declare const a: Collection<string | number>;
declare const b: string | number | null;
declare const c: Collection<string | number>;
declare const a1: Collection<number>;
declare class Subscriber {
    on(this: HTMLInputElement, name: string, cb: Function): void;
}
