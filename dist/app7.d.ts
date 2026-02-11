declare class Poisson {
}
declare class Chat {
}
type AnimalOptions = {
    nager: any;
} | {
    sauter: any;
};
type AnimalCondition<T> = T extends {
    nager: any;
} ? Poisson : Chat;
declare function generator<T extends AnimalOptions>(options: T): AnimalCondition<T>;
declare const aba: Poisson;
declare const abb: Chat;
