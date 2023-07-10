//Types

//Boolean
const isDone: boolean = false;

//Number
const hex: number = 0xf00d;

//String
const color: string = 'red';

//Array
const list: number[] = [1, 2, 3];
const fullList: Array<number> = [1, 2, 3]

//Object
const books: object[] = [
    {name:'Book_1', autor: 'Tom'},
    {name:'Book_2', autor: 'Ben'},
    {name:'Book_3', autor: 'Scott'},
]

//Enum
enum Color {
    Red = 1,
    Green = 2,
    Blue
}
let c: Color = Color.Green;
console.log(Color);

enum Direction {
    up = 'Up',
    rigth = 'Right',
    down = 'Down',
    left = 'Left'
}
console.log(Direction.rigth)

//Tuple
let x: [string, number];
x = ['hello', 11];

let hour: any = '60';
hour = 60;
hour = true;

interface Car {
    name: string;
    color: string;
    year: number;
    isUser: boolean;
}
let carFord: Car = {
    name: 'Focus',
    color: 'blue',
    year: 2017,
    isUser: true
}