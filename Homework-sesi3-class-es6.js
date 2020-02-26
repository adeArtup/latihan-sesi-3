class Shape{
    constructor(x,y){
        this.id = 1;
        this.x = x;
        this.y = y;
    }

    move(x, y){
        this.x = x;
        this.y = y;
        return this.x+' '+this.y;
    }
}

class Rectangel extends Shape{
    constructor(id, x, y){
        super(id);
        this.x = x;
        this.y = y;
        this.height = x;
        this.width = y;
    }
}

class Circle extends Shape{
    constructor(id, x, y){
        super(id);
        this.x = x;
        this.y = y;
        this.radius = x;
    }
}

class Eye extends Circle{
    constructor(id,x, y){
        super(id);
        this.x = x;
        this.y = y;
        this.radius = x;
    }

    roll(rollAmount){
        this.x = 3;
        this.move(this.x, this.y); 
        return this.x + rollAmount;
        
    }
}

let sp = new Shape()
console.log(sp.move(1,2))

let cir = new Circle()
console.log(cir.move(1,2))

let eyes = new Eye()
console.log(eyes.roll(2))