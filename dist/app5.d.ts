declare function abon(arg: unknown): void;
declare const aaaa = true;
declare const aaa: {
    isPrivate: boolean;
    isPublic: boolean;
};
declare const bb: {
    isPrivate: true;
    isPublic: boolean;
};
declare const cc: {
    isPrivate: true;
    isPublic: boolean;
};
declare const dd: {
    readonly isPrivate: true;
    readonly isPublic: false;
};
declare const ee: number[];
declare const ff: [string, number];
declare const gg: (string | number)[];
type ListItem = [string, number];
declare const hh: ListItem;
declare function merge<T extends unknown[], U extends unknown[]>(a: T, b: U): [...T, ...U];
declare const ii: [string, number, string, number];
declare const jj: [string, number, ...number[]];
declare const kk: string[];
declare enum STEPS {
    Intro = "Intro",
    Selection = "Selection",
    Panier = "Panier",
    Paiement = "Paiement"
}
declare const step: STEPS;
declare enum OTHERS {
    Intro = 0,
    Selection = 1,
    Panier = 2,
    Paiement = 3
}
declare const other: OTHERS;
