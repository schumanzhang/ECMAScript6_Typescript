//when code needs to be self-aware, use classes
class Person {
    constructor(name, age, weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    displayName() {
        console.log(this.name);
    }

    displayAge() {
        console.log(this.age);
    }

    displayWeight() {
        console.log(this.weight);
    }
}

class Programmer extends Person {

    constructor(name, age, weight, language) {
        super(name, age, weight);
        this.language = language;
    }

    displayLanguage() {
        console.log(this.language);
    }
}

let Johnny = new Person('Johnny', 23, 56);
let Michael = new Person('Michael', 21, 189);
Johnny.displayWeight();
Michael.displayWeight();

let Sean = new Programmer('Sean', 56, 345, 'Javascript');

