//Types
//Boolean
var isDone = false;
//Number
var hex = 0xf00d;
//String
var color = 'red';
//Array
var list = [1, 2, 3];
var fullList = [1, 2, 3];
//Object
var books = [
    { name: 'Book_1', autor: 'Tom' },
    { name: 'Book_2', autor: 'Ben' },
    { name: 'Book_3', autor: 'Scott' },
];
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(Color);
var Direction;
(function (Direction) {
    Direction["up"] = "Up";
    Direction["rigth"] = "Right";
    Direction["down"] = "Down";
    Direction["left"] = "Left";
})(Direction || (Direction = {}));
console.log(Direction.rigth);
//Tuple
var x;
x = ['hello', 11];
var hour = '60';
hour = 60;
hour = true;
var carFord = {
    name: 'Focus',
    color: 'blue',
    year: 2017,
    isUser: true
};
