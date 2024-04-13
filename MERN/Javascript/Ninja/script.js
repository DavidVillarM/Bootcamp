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


