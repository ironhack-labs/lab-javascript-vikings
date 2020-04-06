// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    // Methods
    attack() {
        return this.strength;
    };
    receiveDamage(damage) {
        this.health -= damage;
    };
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    // Methods
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }
        return `${this.name} has died in act of combat`;
    };
    battleCry(){
        return `Odin Owns You All!`;
    };
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
    }
    // Methods
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }
        return `A Saxon has died in combat`;
    };
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    // Methods
    addViking(vikingObj){
        this.vikingArmy.push(vikingObj);
    }
    addSaxon(saxonObj){
        this.saxonArmy.push(saxonObj);
    }
    vikingAttack(){
        let randomNumberS = Math.floor(Math.random() * this.saxonArmy.length);
        let randomSaxon = this.saxonArmy[randomNumberS];
        let randomNumberV = Math.floor(Math.random() * this.vikingArmy.length);
        let randomViking = this.vikingArmy[randomNumberV];
        let newSaxonHealth = randomSaxon.receiveDamage(randomViking.strength);

        if(randomSaxon.health <= 0){
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon),1);
        };

        return newSaxonHealth;
    }
    saxonAttack(){
        let randomNumberV = Math.floor(Math.random() * this.vikingArmy.length);
        let randomViking = this.vikingArmy[randomNumberV];
        let randomNumberS = Math.floor(Math.random() * this.saxonArmy.length);
        let randomSaxon = this.saxonArmy[randomNumberS];
        let newVikingHealth = randomViking.receiveDamage(randomSaxon.strength);

        if(randomViking.health <= 0){
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking),1);
        }

        return newVikingHealth;

    }
    showStatus(){
        if(this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`;
        } else if(this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`;
        }
        return `Vikings and Saxons are still in the thick of battle.`;
    }
}

// TESTS

// let viking1 = new Viking("Viking1", 100, 600);
// let viking2 = new Viking("Viking2", 100, 600);
// let viking3 = new Viking("Viking3", 100, 600);
// let viking4 = new Viking("Viking4", 100, 600);
// let viking5 = new Viking("Viking5", 100, 600);

// let saxon1 = new Saxon(100, 100);
// let saxon2 = new Saxon(200, 200);
// let saxon3 = new Saxon(300, 300);
// let saxon4 = new Saxon(400, 400);
// let saxon5 = new Saxon(500, 500);

// let startWar = new War();

// startWar.addViking(viking1);
// startWar.addViking(viking2);
// startWar.addViking(viking3);
// startWar.addViking(viking4);
// startWar.addViking(viking5);

// startWar.addSaxon(saxon1);
// startWar.addSaxon(saxon2);
// startWar.addSaxon(saxon3);
// startWar.addSaxon(saxon4);
// startWar.addSaxon(saxon5);

// startWar.vikingAttack();

// console.log(startWar);

