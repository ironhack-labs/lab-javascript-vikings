// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor (name , health, strength) {
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage) {
        this.health -= damage
        console.log(this.health)
        if (this.health <= 0) {
            return `${this.name} has died in act of combat` 
        } else {
            return `${this.name} has received ${damage} points of damage`
        }
        
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage
        if (this.health <= 0) {
            return "A Saxon has died in combat"
        } else {
            return `A Saxon has received ${damage} points of damage`
        } 
    }
 }

// War
class War  {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []

    } 
    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack() {
        const saxonRandomIndex = Math.floor(Math.random() * Math.floor(this.saxonArmy.length))
        this.randomSaxon = this.saxonArmy[saxonRandomIndex];
        this.randomViking = this.vikingArmy[Math.floor(Math.random() * Math.floor(this.vikingArmy.length))];
    
        const vikingFight = this.randomSaxon.receiveDamage(this.randomViking.strength)
        if (this.randomSaxon.health <= 0) {
            this.saxonArmy.splice(this.randomSaxon[saxonRandomIndex])
        }
        return vikingFight
        
    }
    saxonAttack() {
        this.randomSaxon = this.saxonArmy[Math.floor(Math.random() * Math.floor(this.saxonArmy.length))];
        const vikingRandomIndex = Math.floor(Math.random() * Math.floor(this.vikingArmy.length))
        this.randomViking = this.vikingArmy[vikingRandomIndex];
        const saxonFight = this.randomViking.receiveDamage(this.randomSaxon.strength)
        if (this.randomViking.health <= 0) {
            this.vikingArmy.splice(this.randomViking[vikingRandomIndex])
        }
        return saxonFight
    }
    showStatus() {
        if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
            return "Vikings and Saxons are still in the thick of battle." 
        } else if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "just test"
        }
    }
}


const newViking = new Viking("azaza",300, 5);
console.log(newViking.receiveDamage(300))
console.log(newViking.health)

const newSaxon = new Saxon(4, 5); 
//console.log(newSaxon.receiveDamage(60))
//console.log(newSaxon.health)
 const newWar = new War();
 newWar.vikingAttack();