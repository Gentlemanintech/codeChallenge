function Vehicle(name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
}

Vehicle.prototype.getVehDetails = function () {
    console.log(`Name: ${this.name}\nColor: ${this.color}\nWheels: ${this.wheels}`);
};

function Car(name, color, brand, seats) {
    Vehicle.call(this, name, color, 4);
    this.brand = brand;
    this.seats = seats;
}

// This code below is the one that will make the Car nherit from Vehicle
Car.prototype = Object.create(Vehicle.prototype);


Car.prototype.getDetails = function () {
    console.log(`This ${this.color} ${this.name} is of ${this.brand} company. It has seating for ${this.seats} people.`);
};

const car1 = new Car('Sedan', 'Black', 'Audi', 5);

car1.getDetails();  
car1.getVehDetails();   
