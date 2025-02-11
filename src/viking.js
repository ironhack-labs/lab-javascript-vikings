// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    // Métodos

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
    }

}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super (health, strength);
        this.name = name;
        
    }

    // Métodos

    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0)
        { 
            return `${this.name} has received ${damage} points of damage`;  
        }
        else if(this.health <= 0) {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry () {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0) { 
            return `A Saxon has received ${damage} points of damage`;  
        }
        else if(this.health <= 0) {
            return `A Saxon has died in combat`;
        }
    }

}

// War
class War {

        constructor() {
            this.vikingArmy = [];
            this.saxonArmy = [];
        }


    // Métodos

    addViking(unVikingo) {
        this.vikingArmy.push(unVikingo);
    }

    addSaxon(unSajon) {
        this.saxonArmy.push(unSajon);
    }

    vikingAttack() {
        
        // Creamos los números aleatorios para Saxones y Vikingos
        let randomSaxon = Math.floor(Math.random() * this.vikingArmy.length);
        let randomVikingo = Math.floor(Math.random() * this.saxonArmy.length);


        // Asignamos el Saxon Atacado y el Vikingo Atacante
        let saxonAtacado = this.saxonArmy[randomSaxon];
        let vikingoAtacante = this.vikingArmy[randomVikingo];

        console.log(saxonAtacado.health + " este es el Saxon");
        console.log(vikingoAtacante.name + " este es el Vikingo");

        console.log(vikingoAtacante.strength + " esto es la Fuerza del Vikingo");

        console.log(saxonAtacado.receiveDamage(vikingoAtacante.strength));

        // return this.saxonArmy[randomSaxon].receiveDamage(vikingoAtacante.strength);

        // Saxon recibe daño de la fuerza del Vikingo
        return saxonAtacado.receiveDamage(vikingoAtacante.strength);
    }

    saxonAttack()  {}

    showStatus() {}




}
