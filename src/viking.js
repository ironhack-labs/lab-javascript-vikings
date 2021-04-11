// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage){
        this.health = this.health - damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
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
    receiveDamage(damage) {
        this.health = this.health - damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    vikingArmy = []
    saxonArmy = []
    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        const randomSaxon = this.saxonArmy[Math.floor(Math.random()* this.saxonArmy.length)];
        const randomViking = this.vikingArmy[Math.floor(Math.random()* this.vikingArmy.length)];
        const damageReceived = randomViking.strength;
        const attackResult = randomSaxon.receiveDamage(damageReceived)
        if (randomSaxon.health <= 0) {this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon),1)};
        return attackResult 
        }

    saxonAttack(){
        const randomSaxon = this.saxonArmy[Math.floor(Math.random()* this.saxonArmy.length)];
        const randomViking = this.vikingArmy[Math.floor(Math.random()* this.vikingArmy.length)];
        const damageReceived = randomSaxon.strength;
        const attackResult = randomViking.receiveDamage(damageReceived)
        if (randomViking.health <= 0) {this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking),1)};
        return  attackResult
        }

    showStatus(){
        if (this.saxonArmy.length === 0 && this.vikingArmy.length > 0){
            return 'Vikings have won the war of the century!'
        } else if (this.vikingArmy.length === 0 && this.saxonArmy.length > 0) {
            return 'Saxons have fought for their lives and survived another day...'
        } else {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }

//superbonus to check with TA
    attack(attackerArmy, attackedArmy){
        const randomAttacked = this.attackedArmy[Math.floor(Math.random()* this.attackedArmy.length)];
        const randomAttacker = this.attackerArmy[Math.floor(Math.random()* this.attacker.length)];
        const damageReceived = randomAttacker.strength;
        const attackResult = randomAttacked.receiveDamage(damageReceived)
        if (randomAttacked.health <= 0) {this.attackedArmy.splice(this.attackedArmy.indexOf(randomAttacked),1)};
        return attackResult
    }
}

