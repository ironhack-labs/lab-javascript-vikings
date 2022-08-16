// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack () {
        return this.strength;
    }
    receiveDamage (theDamage) {
        this.health -= theDamage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    receiveDamage (theDamage) {
        this.health -= theDamage
        if (this.health > 0) {
            return `${this.name} has received ${theDamage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry () {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage (theDamage) {
        this.health -= theDamage
        if (this.health > 0) {
            return `A Saxon has received ${theDamage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        let chosenSaxon = Math.floor(Math.random())
        chosenSaxon = Saxon.receiveDamage() == Viking.strength
        this.saxonArmy -= this.addSaxon
        return Saxon.receiveDamage - Viking.strength
    }
    saxonAttack() {
        let chosenViking = Math.floor(Math.random())
        chosenViking = Viking.receiveDamage() == Saxon.strength
        this.vikingArmy -= this.addViking
        return Viking.receiveDamage - Saxon.strength
    }
    showStatus() {
        switch (new War()){
            case this.saxonArmy === 0:
                return "Vikings have won the war of the century!";
                break;
            case this.vikingArmy = []:
                return "Saxons have fought for their lives and survived another day...";
                break;
            default:
                return "Saxons have fought for their lives and survived another day...";
        }
    }
}
