class Person{

    //Private Fields
    #name;
    #age;
    #occupation;
    #motor;
    #ambition;

    constructor(name, age, occupation, motor, ambition){
        this.#name = name;
        this.#age = age;
        this.#occupation = occupation;
        this.#motor = motor;
    }

    //Getters
    get name(){
        return this.#name;
    }

    get age(){
        return this.#age;
    }

    get occupation(){
        return this.#occupation;
    }

    get motor(){
        return this.#motor;
    }

    // Method to display person information in the console
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupation: " + this.occupation);
        console.log("Motor: " + this.motor);
    }

    // Method to display person information in the HTML
    displayInfoHTML() {
        const personElement = document.getElementById('personOne');
        personElement.innerHTML = `
            <strong>Name:</strong> ${this.name}<br>
            <strong>Age:</strong> ${this.age}<br>
            <strong>Occupation:</strong> ${this.occupation}<br>
            <strong>Motor:</strong> ${this.motor}<br>
        `;
    }
}

class Student extends Person {
    constructor(name, age, occupation, motor, major) {
        super(name, age, occupation, motor,);
        this.major = major;
    }

    // Overriding the displayInfo method
    displayInfo() {
        super.displayInfo();
        console.log("Major: " + this.major);
    }

    // Extending the displayInfoHTML method
    displayInfoHTML() {
        super.displayInfoHTML();
        const personElement = document.getElementById('personOne');
        personElement.innerHTML += `<br><strong>Major:</strong> ${this.major}`;
    }
    }

    // Creating an instance of the Student class
    const studentOne = new Student('Ricone', 19, 'student of NBSC', 'xrm 125','Information Technology');

    // Calling methods
    studentOne.displayInfo();