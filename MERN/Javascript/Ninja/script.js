class Ninja {
    constructor(nombre, salud, velocidad, fuerza){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName(){
        console.log(this.nombre);
    }
    showStats(){
        console.log(this);
    }
    drinkSake(){
        this.salud += 10;
    }
}

const ninja = new Ninja("Fu", 100);
ninja.sayName();
ninja.showStats();
ninja.drinkSake();
ninja.showStats();


class Sensei extends Ninja{
    constructor(nombre){
        super(nombre, 200, 10, 10);
        this.sabiduria = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}

// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
console.log(superSensei.nombre);
superSensei.speakWisdom();
// -> "Lo que un  programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"
