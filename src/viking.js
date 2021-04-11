// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
        this.strength = strength
    }

    attack() {
        return this.strength        
    }

    receiveDamage(theDamage) {
        return this.health - theDamage
        }
        
    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(theDamage){
        this.health =  this.health - theDamage;
        if(this.health <=0) {
            return `should return ${this.name} has died in act of combat`
        }else {
            return `should return ${this.name} has received DAMAGE points of damage`
        }

    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }

    receiveDamage(theDamage) {
        this.health -= theDamage;
        if(this.health > 0) {
            return `A Saxon has received ${theDamage} points of damage`
        }else {
            return `A Saxon has died in combat`
        }
    }


}

// War
class War() {
    vikingArmy = []
    saxoArmy = []

    addViking(viking) {
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon) {
        this.saxoArmy.push(saxon)
    }

    vikingAttack() {
        let randomIndexSaxon = Math.floor(Math.random()*this.saxoArmy.length);
        let randomIndexViking = Math.floor(Math.random()*this.vikingArmy.length);
        let randomSaxon = this.saxoArmy[randomIndexSaxon];
        let randomViking = this.vikingArmy[randomIndexViking]
        let warResult = randomSaxon.receiveDamage(randomViking.strength);

        if ( randomViking <= 0) {
            this.vikingArmy.splice(randomIndexViking)
        }

        return warResult
    }

    saxonAttack() {
        let randomIndexSaxon = Math.floor(Math.random()*this.saxoArmy.length);
        let randomIndexViking = Math.floor(Math.random()*this.vikingArmy.length);
        let randomSaxon = this.saxoArmy[randomIndexSaxon];
        let randomViking = this.vikingArmy[randomIndexViking]
        let warResult = randomViking.receiveDamage(randomSaxon.strength);

        if ( randomSaxon <= 0) {
            this.saxoArmy.splice(randomIndexSaxon)
        }

        return `${viking.name} has received ${saxon.strength} points of damage`
    }

    showStatus() {
        if(saxoArmy.length === 0 & vikingArmy.length > 0) {
            return `Vikings have won the war of the century!`
        }else if(vikingArmy.length === 0 & saxoArmy.length > 0) {
            return `Saxons have fought for their lives and survived another day...`
        }else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}
