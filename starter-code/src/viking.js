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

    vikingAttack = () => {
        let saxonFoe = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let vikingFoe = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

        saxonFoe.receiveDamage(vikingFoe.strength)

        if (saxonFoe.health <= 0) {
            console.log(this.saxonArmy.splice(saxonFoe, 1))
            this.saxonArmy.splice(saxonFoe, 1)
        }

    };

    // saxonAttack = () => {
    //     let saxonFoe = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    //     let vikingFoe = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

    //     vikingFoe.receiveDamage(saxonFoe.strength)

    //     if (vikingFoe.health <= 0) {
    //         this.vikingArmy.splice(vikingFoe, 1)
    //     }

    // };

    // showStatus = () => {
    //     if (this.saxonArmy.lenght == 0) {
    //         //console.log(this.saxonArmy.lenght)
    //         return ('Vikings have won the war of the century!');
    //     } else if (this.vikingArmy.lenght == 0) {
    //         //console.log(this.vikingArmy.lenght)
    //         return ('Saxons have fought for their lives and survived another day...');
    //     } else if (this.vikingArmy.lenght == 1 && this.saxonArmy.lenght == 1) {
    //         //console.log(this.vikingArmy.lenght, this.saxonArmy.lenght)
    //         return ('Vikings and Saxons are still in the thick of battle.');
    //     };
    // };

};

