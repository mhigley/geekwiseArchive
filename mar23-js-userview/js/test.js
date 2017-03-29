const food = {
    init: function(type){
        this.type = type;
    },
    eat: function(){
        console.log('you ate the ' + this.type);
    }
};

// food.init('waffle');
// food.eat();

const waffle = Object.create(food);
const carrot = Object.create(food);

food.eat = function(){
    console.log('YOU TOOOTALLY ATE THE ' + this.type.toUpperCase());
}

waffle.init('waffle');
waffle.eat();

carrot.init('carrot');
carrot.eat();
/*
function Container(param){
    function dec(){
        if(secret > 0){
            secret -= 1;
            return true;
        }else{
            return false;
        }
    }

    this.member = param;
    var secret = 3;
    var that = this;
}

var myContainer = new Container('abc');

Container.prototype.stamp = function(string){
    return this.member + string;
}
console.log( myContainer );
console.log( myContainer.stamp('def') );
*/

/*
function Car(){
    this._mileage = 0;
}
Car.prototype.drive = function(miles){
    if(typeof miles == 'number' && miles > 0){
        this._mileage += miles;
    }else{
        throw new Error('drive only accepts positive numbers');
    }
};
Car.prototype.readMileage = function(){
    return this._mileage;
};

var honda = new Car();
honda._mileage = 'pwned';

console.log(honda);
*/
