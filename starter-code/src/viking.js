// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength
    }
    attack() {
        return this.strength;
    }
    receiveDamage(theDamage) {
        this.health -= theDamage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(theDamage) {
        // receiveDamage.super(theDamage);
        this.health -= theDamage;
        if (this.health > 0)
            return `${this.name} has received ${theDamage} points of damage`
        return `${this.name} has died in act of combat`;
    }
    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(theDamage) {
        // receiveDamage.super(theDamage);
        this.health -= theDamage;
        if (this.health > 0)
            return `A Saxon has received ${theDamage} points of damage`;
        return `A Saxon has died in combat`;
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    myrandom(arr) {
        return Math.floor(Math.random() * arr.length);
    }
    vikingAttack() {
        let indexSaxon = this.myrandom(this.saxonArmy);
        let indexViking = this.myrandom(this.vikingArmy);

        let result = this.saxonArmy[indexSaxon].receiveDamage(this.vikingArmy[indexViking].attack());
        if (this.saxonArmy[indexSaxon].health <= 0)
            this.saxonArmy.splice(indexSaxon, 1);
        return result;
    }

    saxonAttack() {
            let indexSaxon = this.myrandom(this.saxonArmy);
            let indexViking = this.myrandom(this.vikingArmy);
            let result = this.vikingArmy[indexViking].receiveDamage(this.saxonArmy[indexSaxon].attack());
            if (this.vikingArmy[indexViking].health <= 0) this.vikingArmy.splice(indexViking, 1);
            return result;

        }
        //refactor vikig and saxon attack
    armyAttack(armyAttack) {
        //'viking' for vikinkArmy attack ---"saxon for saxonArmy attack"
        switch (armyAttack) {
            case "viking":
                {
                    let attackArr = this.vikingArmy;
                    let receivedArr = this.saxonArmy;
                    let indexAttack = this.myrandom(this.vikingArmy);
                    let indexReceived = this.myrandom(this.saxonArmy);
                }
                break;
            case "saxon":
                {
                    let attackArr = this.saxonArmy;
                    let receivedArr = this.vikingArmy;
                    let indexAttack = this.myrandom(this.saxonArmy);
                    let indexReceived = this.myrandom(this.vikingArmy);
                }
                break;
        }
        let result = receivedArr[indexReceived].receiveDamage(attackArr[indexAttack].attack());
        if (receivedArr[indexReceived].health <= 0) receivedArr.splice(indexReceived, 1);
        return result;
    }
    showStatus() {
        if ((this.vikingArmy.length && this.saxonArmy.length) >= 1)
            return `Vikings and Saxons are still in the thick of battle.`
        else if (!this.vikingArmy.length) return `Saxons have fought for their lives and survived another day...`
        else return `Vikings have won the war of the century!`
    }
}