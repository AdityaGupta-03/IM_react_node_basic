class Vehicle {
    constructor(m) {
        this._make = m;
    }

    start() {
        return `${this._make}, engine started`;
    }
}

// class FourWheeler extends Vehicle { }

class FourWheeler extends Vehicle {
    // Must call super constructor in derived class before accessing 'this' or returning from derived constructor 
    constructor(mk = "Honda", md = "Civic") {
        super(mk);
        this._model = md;
    }

    start() {
        var r = super.start();
        return `${r}, model is ${this._model}`;
    }

    move() {
        return `Moving like ${this._model}`;
    }
}

let v = new FourWheeler("Ford", "Mustang");
console.log(v.start());
console.log(v.move());