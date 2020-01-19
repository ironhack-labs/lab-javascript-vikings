// Soldier
class Soldier {

    constructor(health, strength) {

        this.strength = strength;
        this.health = health;


    }

    receiveDamage(damage) {

        this.health -= damage;



    };
    attack() {

        return this.strength;

    };
}

// Viking
class Viking extends Soldier {

    constructor(name, health, strength) {


        super(health, strength);

        this.name = name;

    }

    receiveDamage(damage) {

        this.health -= damage;

        if (this.health > 0) {

            return `${this.name} has received ${damage} points of damage`;
        }

        if (this.health <= 0) {

            return `${this.name} has died in act of combat`;
        }

    }

    battleCry() {

        return `Odin Owns You All!`;
    }



}

// Saxon
class Saxon extends Soldier {

    attack() {

        return this.strength;
    }

    receiveDamage(damage) {

        this.health -= damage;

        if (this.health > 0) {

            return "A Saxon has received " + damage + " points of damage";
        }

        if (this.health <= 0) {
            return "A Saxon has died in combat";
        }
    }



}

// War
class War {


    constructor() {


        this.saxonArmy = [];
        this.vikingArmy = [];


    }

    addViking(Viking) {

        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon) {

        this.saxonArmy.push(Saxon)
    }


    vikingAttack() {



        let randomSaxo = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        let saxonhealth = randomSaxo.receiveDamage(randomViking.attack());

        if (randomSaxo.health <= 0) {

            this.saxonArmy.splice(randomSaxo, 1);

        }



        return saxonhealth;

    }

    saxonAttack() {

        let randomSaxo = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        let vikinghealth = randomViking.receiveDamage(randomSaxo.attack());

        if (randomViking.health <= 0) {

            this.vikingArmy.splice(randomViking, 1);

        }

        return vikinghealth;



    }

    //Habría previamente hacer un método que indicase qué armada ataca

    // characterAttack() {


    //     if (Viking.attack) {

    //         let randomSaxo = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    //         let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];


    //         let randomSaxo = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    //         let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    //         let saxonhealth = randomSaxo.receiveDamage(randomViking.attack());

    //         if (randomSaxo.health <= 0) {

    //             this.saxonArmy.splice(randomSaxo, 1);

    //         }



    //         return saxonhealth;


    //     }

    //     if (Saxon.attack) {


    //         let randomSaxo = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    //         let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    //         let vikinghealth = randomViking.receiveDamage(randomSaxo.attack());

    //         if (randomViking.health <= 0) {

    //             this.vikingArmy.splice(randomViking, 1);

    //         }

    //         return vikinghealth;

    //     }


    // }

    showStatus() {

        if (this.saxonArmy == 0) {

            return "Vikings have won the war of the century!";

        }

        if (this.vikingArmy == 0) {

            return "Saxons have fought for their lives and survived another day..."


        }

        if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {

            return "Vikings and Saxons are still in the thick of battle."
        }
    }



}