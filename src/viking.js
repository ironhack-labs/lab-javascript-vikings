// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack () {
        return this.strength;
    }

    receiveDamage (theDamage) {
        this.health -= theDamage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage (theDamage) {
        this.health -= theDamage;
        if (this.health > 0) {
            return `${this.name} has received ${theDamage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry () {
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier{
    receiveDamage (theDamage) {
        this.health -= theDamage;
        if (this.health > 0) {
            return `A Saxon has received ${theDamage} points of damage`;
        } else {
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
    
    addViking (vikingObj) {
        this.vikingArmy.push(vikingObj);
    }

    addSaxon (saxonObj) {
        this.saxonArmy.push(saxonObj);
    }

    vikingAttack () {
        let saxonRandom = Math.floor(Math.random() * (this.saxonArmy.length));
        console.log("Viking attack -> saxonRandom: " + saxonRandom);
        let vikingRandom = Math.floor(Math.random() * (this.vikingArmy.length));
        console.log("Viking attack -> vikingRandom: " + vikingRandom);
        let vikingAttackRes = this.saxonArmy[saxonRandom].receiveDamage(this.vikingArmy[vikingRandom].strength);
        if (vikingAttackRes === "A Saxon has died in combat") {
            this.saxonArmy.splice(saxonRandom,1);
        }
        return vikingAttackRes;
    }

    saxonAttack () {
        let saxonRandom = Math.floor(Math.random() * (this.saxonArmy.length));
        console.log("Saxon attack -> saxonRandom: " + saxonRandom);
        let vikingRandom = Math.floor(Math.random() * (this.vikingArmy.length));
        console.log("Saxon attack -> vikingRandom: " + vikingRandom);
        let saxonAttackRes = this.vikingArmy[vikingRandom].receiveDamage(this.saxonArmy[saxonRandom].strength);
        if (saxonAttackRes === `${this.vikingArmy[vikingRandom].name} has died in act of combat`) {
            this.vikingArmy.splice(vikingRandom,1);
        }
        return saxonAttackRes;
    }

    showStatus () {
        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 1 && this.saxonArmy.length === 1) {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}

let vikingOne = new Viking('Odin', 10, 10);
let saxonOne = new Saxon(5, 5);
let vikingTwo = new Viking('Niamh', 8, 8);
let saxonTwo = new Saxon(4, 4);
let vikingThree = new Viking('Vicky', 6, 6);
let saxonThree = new Saxon(3, 3);
let war = new War();
war.addViking(vikingOne);
war.addSaxon(saxonOne);
war.addViking(vikingTwo);
war.addSaxon(saxonTwo);
war.addViking(vikingThree);
war.addSaxon(saxonThree);
console.log("The war starts: -------------");
console.log(war);

let index = 0;
 while (war.vikingArmy.length > 0 && war.saxonArmy.length > 0) {
    if (index % 2 === 1) {
        war.vikingAttack();
        console.log(war);
    } else {
        war.saxonAttack();
        console.log(war);
    }
    console.log(`${index} pass: ` + war);
    index++;
 }

//console.log('Army Viking is: ' + war.vikingArmy[0].name);

// console.log(
//   'Viking One is: ' + vikingOne.name,
//   vikingOne.strength,
//   vikingOne.health
// );
// console.log('Saxon One is: ' + saxonOne.strength, saxonOne.health);

//console.log("Viking Two is: " + vikingTwo.name, vikingTwo.strength, vikingTwo.health);
//console.log("Saxon Two is: " + saxonTwo.strength, saxonTwo.health );
//console.log("Viking One is: " + vikingThree.name, vikingThree.strength, vikingThree.health);
//console.log("Saxon One is: " + saxonThree.strength, saxonThree.health );

console.log('The message is: ' + war.showStatus());

