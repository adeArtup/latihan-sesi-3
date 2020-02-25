class Shape {
    constructor(x,y){
        this._id = 1;
        this._x = x;
        this._y = y;
    }

    move(x,y){
        this._x = x;
        this._y = y;
        return this._x  +" "+ this._y;
    }
}

let Sh = new Shape();
console.log(Sh.move(3,4));

class Rectangel extends Shape{
    constructor(x,y,width,height){
        this.id = 2;
        this.xr = x;
         this.yr = y;
        this._w = width;
        this._h = height;
    }
}

class Circle extends Shape {
    constructor(x,y,radius){

        this.id = 3;
        this.xc = x;
         this.yc = y;
        this._radius = radius;

    }
}

class Eye extends Circle{
    constructor(x,y,color){
        this.id = 4;
        this.xe = x;
         this.ye = y;
        this._color = color;
    }

    roll(rollAmount){
        
    }
}