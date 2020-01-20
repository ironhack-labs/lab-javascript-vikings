// Soldier
class Soldier {

    constructor(health, strength) {

        this.health = health;
        this.strength = strength;

    }





    //METODOS

    attack() {

        return this.strength;
    }

    receiveDamage(damage) {

        this.health = this.health - damage;
        console.log("hola")


    }

}

// Viking
class Viking extends Soldier {

    constructor(name, health, strength) {
        super(health, strength);

        this.name = name;
        this.health = health;
        this.strength = strength;

    }

    //METODOS

    receiveDamage(damage) {
        //console.log(damage)

        // console.log(typeof damage)
        // console.log(typeof this.health)
        // console.log(this.health)
        // console.log(damage)


        this.health = this.health - damage;
        //console.log(this.health)
        if (this.health > 0) {

            return (`${this.name} has received ${damage} points of damage`)

        } else {
            return (`${this.name} has died in act of combat`)
        }



    }

    battleCry() {

        return (`Odin Owns You All!`);

    }
}

// Saxon
class Saxon extends Soldier {

    constructor(health, strength) {
        super(health, strength);

    }

    //METODOS

    attack() {

        return this.strength;

    }

    receiveDamage(damage) {
        //console.log(damage);
        console.log(this.health)
        this.health = this.health - damage;

        if (this.health > 0) {

            return (`A Saxon has received ${damage} points of damage`)

        } else {
            return (`A Saxon has died in combat`)
        }

    }


}

// War
class War {

    //constructor(health, strength) {

    //  super(health, strength)

    //}

    vikingArmy = [];
    saxonArmy = [];


    addViking(newViking) {

        this.vikingArmy.push(newViking)

    }

    addSaxon(newSaxon) {

        this.saxonArmy.push(newSaxon);



    }
    vikingAttack() {


        let saxonTarget = Math.floor(Math.random() * this.saxonArmy.length);
        let vikingAttacker = Math.floor(Math.random() * this.vikingArmy.length);

        //console.log(this.vikingArmy[vikingAttacker].strength);
        this.saxonArmy[saxonTarget].receiveDamage(this.vikingArmy[vikingAttacker].strength);

        if (this.saxonArmy[saxonTarget].health <= 0) {

            this.saxonArmy.splice(saxonTarget[1[1]]);
            return "A Saxon has died in combat";
        }



    }
    saxonAttack() {


        let vikingTarget = Math.floor(Math.random() * this.vikingArmy.length);
        let saxonAttacker = Math.floor(Math.random() * this.saxonArmy.length);

        //console.log(this.vikingArmy[vikingAttacker].strength);
        this.vikingArmy[vikingTarget].receiveDamage(this.saxonArmy[saxonAttacker].strength);

        if (this.vikingArmy[vikingTarget].health <= 0) {

            this.vikingArmy.splice(vikingTarget[1[1]]);

            return "A Viking has died in combat";
        } else {

            return (`${this.vikingArmy[vikingTarget].name} has received ${this.saxonArmy[saxonAttacker].strength} points of damage`)
        }



    }
    showStatus() {}

}