type ShapeType = {
    side?: number;
    area: number;
    calculateArea: () => void;
    calculatePerimeter: () => number;
}

interface Shape {
    side?: number;
    area: number;
    calculateArea: () => void;
    calculatePerimeter: () => number;
}
interface Figure {
    draw: () => void;
}

class Circle implements Shape, Figure {
    constructor(public radius: number, public area: number = 0) {}
    
    calculateArea() {
        this.area = this.radius * this.radius * 3.14;
    }
    calculatePerimeter(): number {
        return 2 * 3.14 * this.radius;
    }
    draw() {

    }
}
let ci: Shape = new Circle(12);
ci.calculateArea();
console.log(ci.calculatePerimeter(), ci.area);
