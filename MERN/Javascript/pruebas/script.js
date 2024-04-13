const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    function actuallyPrintingNames() {
        for (let index = 0; index < names.length; index++) {
            const name = names[index];
            console.log(name + ' was found at index ' + index);
        }
    }
    actuallyPrintingNames();
}
printNames(beatles);


const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

const { email } = person;
const [firstAnimal, secondAnimal, ...otherAnimals] = animals;
console.log(email);

console.log(firstAnimal, secondAnimal, otherAnimals);

const password = '12345';
const { password: hashpass } = person;


const persona = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
        },
        {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
    };

const {addresses: [a, b]} = persona

console.log([a, b]);

const { addresses: [ , { city: london }] } = persona;
console.log(london);

const { firstName, lastName, ...attributes } = persona;
console.log(attributes);

const personCopy = { ...persona };

const sayHello = name => console.log(`Hello ${name}`);

const square = n => n * n;

// notación a mano para devolver un objeto
// NOTA: el primer conjunto de corchetes define el cuerpo de la función
// y el segundo conjunto de corchetes son para crear el objeto literal
const returnObjLonghand = () => {
    return { 
        firstName: 'John',
        lastName: 'Wick'
    }
}
/**
  *  
  * los corchetes se interpretan como la apertura del cuerpo de 
  * la función en lugar de corchetes para crear un objeto literal 
  */
// rodear el retorno implícito entre parentesis resuelve el problema
const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick' });

class Deck {
    constructor() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        suits.forEach(suit => {
            faces.forEach(face => {
                deck.push(this.createCard(suit, face));
            });
        });
        this.deck = deck;
    }
}

let canAfford = (precioItem, cuentaBalance) => {
    return precioItem > cuentaBalance
    ? `No puedes pagarlo! Te faltan $${precioItem-cuentaBalance}`
    : "Lo puedes pagar";
};

let cuentaBancaria = 20000;
let auto = 30000;

let autoEntrega= auto * 0.4;

console.log(canAfford(auto, cuentaBancaria));
console.log(canAfford(autoEntrega, cuentaBancaria));

//clase principal Vehicle
class Vehicle{
    constructor(manufacturer, model, color) {
        this.miles = 0;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
    }
    drive(){
        this.miles += 10;
        console.log(`You drove your ${ this.constructor.name } and it now has ${this.miles} miles on it.`);
    }
    parentFunction(){
        return "This is coming from the parent!";
    }
}

const car = new Vehicle ("Mercedes", "AMG", "plateado");
car.drive();
console.log(`Condujiste ${car.miles} millas`);

//Clase M5 hijo
class M5 extends Vehicle{
    constructor(color){
        super("BMW","M5",color);
        this.hp = 616;
    }

    printSpecSummary(){
        console.log(
            `BMW M5 with a 4.4L V8 Twin Turbo Engine packing ${this.hp}HP and 553 lb-ft TQ`
        );
    }
    childFunction(){
        const message = super.parentFunction();
        console.log(message);
    }
}

const bm = new M5("blue");
console.log(bm);
bm.printSpecSummary();
bm.drive();
bm.childFunction();
