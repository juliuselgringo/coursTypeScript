interface Point{
    x: number;
}

// on peux modifier et fusionner les déclarations des propriétés

interface Point{
    y: number;
}

const p: Point = {x:0, y:0};

class TwoDimensionPoint implements Point{
    x = 0;
    y = 0;
}

function draw(p:Point){}

draw(new TwoDimensionPoint);