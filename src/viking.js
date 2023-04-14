// Soldier
class Soldier {
    constructor(healthValue, strengthValue) {
        this.health = healthValue;
        this.strength = strengthValue;
    }
    attack() {
        return this.strength
    }
    receiveDamage(theDamage) {
        this.health -= theDamage

    }
}

// Viking
class Viking extends Soldier {
    constructor(nameValue, healthValue, strengthValue) {
        super(healthValue, strengthValue)
        this.name = nameValue;
    }
    receiveDamage(theDamage) {
        const lifeRest = this.health -= theDamage
        if (lifeRest >= 1) {
            return `${this.name} has received ${theDamage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }

    }
    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(theDamage) {
        const lifeRest = this.health -= theDamage
        if (lifeRest >= 1) {
            return `A Saxon has received ${theDamage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }

    }

}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];

    }
    addViking(aVikingObjet) {
        this.vikingArmy.push(aVikingObjet)
    }
    addSaxon(aSaxonObjet) {
        console.dir(aSaxonObjet)
        this.saxonArmy.push(aSaxonObjet)
    }
    vikingAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

        let hitResult = randomSaxon.receiveDamage(randomViking.strength)

        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1)
        }
        return hitResult

    }

    saxonAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

        let hitResult = randomViking.receiveDamage(randomSaxon.strength)

        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomViking, 1)
        }
        return hitResult

    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`
        }
        else if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`
        }
        else {
            return `Vikings and Saxons are still in the thick of battle.`
        }

    }


}


