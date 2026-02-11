"use strict";
class Point {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
class Geometry {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
class Triangle extends Geometry {
    constructor() {
        super(...arguments);
        this.x = 2;
        this.y = 2;
    }
    surface() {
        return this.x * this.y;
    }
}
function getX(p) {
    return p.x;
}
