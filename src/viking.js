// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health ;
        this.strength = strength ;
    }

    attack() {
        return this.strength ;
    }

    receiveDamage(damage) {
        this.health -= damage ;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength) ;
        this.name = name ;
    }

    receiveDamage(damage) {
        super.receiveDamage(damage) ;
        return this.health > 0 ? this.name + " has received " + damage + " points of damage" : this.name + " has died in act of combat"
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}



// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage) ;
        return this.health > 0 ? `A Saxon has received ${damage} points of damage` : "A Saxon has died in combat"
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [] ;
        this.saxonArmy = [] ; 
    }

    addViking(viking) {
        this.vikingArmy.push(viking) ;
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon) ;
    }

    armyAttack (winners, loosers) {
        let randomWinner = winners[Math.floor(Math.random()*winners.length)] ;
        let randomLooser = loosers[Math.floor(Math.random()*loosers.length)] ;
        let warTelegram = randomWinner.receiveDamage(randomLooser.strength) ;

        this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0) ;
        this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0) ;

        return warTelegram ;
    }

    vikingAttack() {
        return this.armyAttack(this.saxonArmy, this.vikingArmy)
    }

    saxonAttack() {
        return this.armyAttack(this.vikingArmy, this.saxonArmy)    
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!' ;
        } else if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...'
        } else {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }

}

let warInstance = new War() ;
let saxon1 = new Saxon(100,10) ;
let saxon2 = new Saxon(200,15) ;

let viking1 = new Viking("Francis", 100,10) ;
let viking2 = new Viking("Francoise", 300,50) ;

warInstance.addSaxon(saxon1)
warInstance.addSaxon(saxon2)

warInstance.addViking(viking1)
warInstance.addViking(viking2)

console.log(warInstance)

warInstance.vikingAttack() ;
console.log(warInstance)


