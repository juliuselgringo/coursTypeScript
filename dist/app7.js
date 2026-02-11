"use strict";
class Poisson {
}
class Chat {
}
function generator(options) {
    if ("nager" in options) {
        return new Poisson();
    }
    else {
        return new Chat();
    }
}
const aba = generator({ nager: 'aze' });
const abb = generator({ sauter: 'aze' });
