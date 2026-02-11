declare class Point {
    x: number;
    y: number;
}
declare abstract class Geometry {
    x: number;
    y: number;
    abstract surface(): number;
}
declare class Triangle extends Geometry {
    x: number;
    y: number;
    surface(): number;
}
declare function getX(p: Point): number;
