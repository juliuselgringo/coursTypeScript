interface Point {
    x: number;
}
interface Point {
    y: number;
}
declare const p: Point;
declare class TwoDimensionPoint implements Point {
    x: number;
    y: number;
}
declare function draw(p: Point): void;
