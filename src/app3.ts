class Point{
    x = 0;
    y = 0;
}

abstract class Geometry{
    x = 0;
    y = 0;
    
    abstract surface(): number;
}

class Triangle extends Geometry{
    x = 2;
    y = 2;

    surface(): number {
        return this.x * this.y;
    }
}




function getX(p: Point){
    return p.x;
}