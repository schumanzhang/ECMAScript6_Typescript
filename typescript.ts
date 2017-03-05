//static typing
var myName: string = 'John';
var myAge: number = 41;
var canVote: boolean = true;
var anything: any = 'Dog'; //dynamic type

anything = 6;

document.getElementById('#stuff').innerHTML = "My name is" + myName;

var strToNum: number = parseInt("5");
var numToStr: number = 5;

const Pi = 3.14;

//interfaces to create complex data types
interface superHero {
    realName: String;
    superName: String;
}

var superman: superHero = {
    realName: 'Clark Kent',
    superName: 'superman'
}

//arrays
var employees: string[] = ['Bob', 'Sally', 'Sam'];

employees.push(5); //this creates error

var superheroes: superHero[] = [];
superheroes.push(superman);

//for loops
var randArray = [3, 4, 5, 6];

for(var val in randArray) {
    console.log(val); //this will console array indexes
}

var strArray = randArray.map(String); //array type conversion

for(var val of strArray) {
    console.log(val); //now this consoles the value of the array
}

//functions, you can define parameter types and the return type
var getSum = function(num1: number, num2: number): number {
    return num1 + num2;
}

//assign default values in function declaration, optional parameter
var getDiff = function(num1: number, num2 = 2, num3?: number): number {
    if (typeof num3 !== 'undefined') {
        return num1 - num2 - num3;
    }
    return num1 - num2;
}

//unlimited/unkown amount of parameters, store in array when passed in
var sumAll = function(...nums: number[]): void{
    var sum = nums.reduce((a, b) => a + b, 0);
}

//Classes
class Animal {
    public favFood: string;

    static numOfAnimals: number = 0;

    constructor(private name: string, private owner: string) {
        Animal.numOfAnimals++;
    }

    ownerInfo() {
        console.log(this.name, this.owner);
    }

    //class methods
    static howManyAnimals(): number {
        return Animal.numOfAnimals;
    }

    //getters and setters
    private _weight: number;

    get weight(): number {
        return this._weight;
    }

    set weight(weight: number) {
        this._weight = weight;
    }
}

//create animal objects