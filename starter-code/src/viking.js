// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = 300;
        this.strength = 150;

    };
    attack() {
        return this.strength;
    };
    receiveDamage(damage) {
        this.health = this.health - damage;
    };
};

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = 'Harald';

    };
    attack() {
        return this.strength;
    };
    receiveDamage(damage) {
        this.health = this.health - damage;
        // if the Viking is still alive, it should return "NAME has received DAMAGE points of damage"
        // if the Viking dies, it should return "NAME has died in act of combat"
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    };

    battleCry() {
        return `Odin Owns You All!`;
    };

};

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
        this.health = 60;
        this.strength = 25;
    };

    attack() {
        return this.strength;
    };

    receiveDamage(damage) {
        this.health = this.health - damage;
        // if the Saxon is still alive, it should return "A Saxon has received DAMAGE points of damage"
        // if the Saxon dies, it should return "A Saxon has died in combat"
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    };


};

// War
class War {
    constructor() {

        // Creamos dos arrays para guardar los ejercitos
        this.vikingArmy = [];
        this.saxonArmy = [];
    };
    addViking(Viking) {
        this.vikingArmy.push(Viking);

    };
    addSaxon(Saxon) {

        this.saxonArmy.push(Saxon);
    };
    vikingAttack() {
        // Escoger un Saxon y un Viking al azar
        let randSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        // Daño recibido por un Viking
        let damage = randSaxon.receiveDamage(randViking.strength);

        // Comprobar si el Saxon esta vivo

        if (randSaxon.health <= 0) {
            //Buscar el indice del Vikingo escogido al azar para eliminarlo
            let index = this.saxonArmy.indexOf(randSaxon);

            // Lo eliminamos con el metodosplice()
            this.saxonArmy.splice(index, 1);
        }

        return damage

    };
    saxonAttack() {
        // Escoger un Saxon y un Viking al azar
        let randSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        // Daño recibido por un Saxon

        let damage = randViking.receiveDamage(randSaxon.strength);

        // Comprobar si el Viking esta vivo

        if (randViking.health <= 0) {

            //Buscar el indice del Vikingo escogido al azar para eliminarlo
            let index = this.vikingArmy.indexOf(randViking);

            // Lo eliminamos con el metodosplice()
            this.vikingArmy.splice(index, 1);
        }

        return damage

    };

    showStatus() {

        if (this.saxonArmy == 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy == 0) {
            return `Saxons have fought for their lives and survive another day...`
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
};