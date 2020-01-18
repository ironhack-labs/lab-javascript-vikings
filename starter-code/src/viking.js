// Soldier
class Soldier {

    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    };

    // Métodos prototype
    attack = () => { return (this.strength) };
    receiveDamage = damage => { this.health = this.health - damage };

};

// Viking
class Viking extends Soldier {

    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    };

    //Métodos prototype
    receiveDamage = damage => {
        this.health = this.health - damage
        if (this.health > 0) {
            return (`${this.name} has received ${damage} points of damage`)
        } else {
            return (`${this.name} has died in act of combat`)
        }
    };
    battleCry = () => { return ('Odin Owns You All!') };
};

// Saxon
class Saxon extends Soldier {

    constructor(health, strength) {
        super(health, strength);
    };

    //Métodos prototype
    receiveDamage = damage => {
        this.health = this.health - damage
        if (this.health > 0) {
            return (`A Saxon has received ${damage} points of damage`);
        } else {
            return ('A Saxon has died in combat');
        };
    };


};

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    };

    //Métodos prototype
    addViking = viking => { this.vikingArmy.push(viking) };
    addSaxon = saxon => { this.saxonArmy.push(saxon) };

    radomize = () => {

    };

    vikingAttack = () => {
        let saxonFoe = Math.floor(Math.random() * this.saxonArmy.length)
        let vikingFoe = Math.floor(Math.random() * this.vikingArmy.length)
        this.saxonArmy[saxonFoe].receiveDamage(this.vikingArmy[vikingFoe].strength)

        if (this.saxonArmy[saxonFoe].health <= 0) {
            this.saxonArmy.splice(saxonFoe, 1)
            return ('A Saxon has died in combat')

        } else {

            return (`A Saxon has received ${damage} points of damage`);


        };

    };

    saxonAttack = () => {
        let saxonFoe = Math.floor(Math.random() * this.saxonArmy.length)
        let vikingFoe = Math.floor(Math.random() * this.vikingArmy.length)
        let vikingName = this.vikingArmy[vikingFoe].name
        this.vikingArmy[vikingFoe].receiveDamage(this.saxonArmy[saxonFoe].strength)

        if (this.vikingArmy[vikingFoe].health > 0) {
            return (`${this.vikingArmy[vikingFoe].name} has received ${this.saxonArmy[saxonFoe].strength} points of damage`);
        } else {
            this.vikingArmy.splice(vikingFoe, 1)
            return (`${vikingName} has died in act of combat`);


        };



    };

    showStatus = () => {

        if (this.saxonArmy.length == 0) {

            return ('Vikings have won the war of the century!');
        } else if (this.vikingArmy.length == 0) {
            console.log(this.vikingArmy.length)
            return ('Saxons have fought for their lives and survived another day...');
        } else if (this.vikingArmy.length == 1 && this.saxonArmy.length == 1) {

            return ('Vikings and Saxons are still in the thick of battle.');
        };
    };
};
