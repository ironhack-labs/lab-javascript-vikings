// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
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
    constructor(name, health, strength) {
        super();
        this.name = name
        this.health = health;
        this.strength = strength;
    }

    receiveDamage(damage) {
        this.health -= damage

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }
        else if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return 'Odin Owns You All!'
    }
}



// Saxon
class Saxon extends Soldier{
    constructor(health, strength) {
        super();
        this.health = health;
        this.strength = strength
    }
    
    attack() {
        return this.strength
   }

    receiveDamage(damage) {
        this.health -= damage

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        else if (this.health <= 0) {
            return `A Saxon has died in combat`
        }
    }
}



// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = []
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }

    vikingAttack() {
        // should make a Saxon receiveDamage() equal to the strength of a Viking
        // should return result of calling receiveDamage() of a Saxon with the strength of a Viking
        
        if (Saxon.health <= 0) {
            this.saxonArmy.pop(Saxon)
        }
    }
    saxonAttack()
        // should make a Viking receiveDamage() equal to the strength of a Saxon
        // should return result of calling receiveDamage() of a Viking with the strength of a Saxon

        if (Viking.health <= 0) {
            this.vikingArmy.pop(Viking)
        }

    showStatus()

        if (!this.saxonArmy) {
            return `Vikings have won the war of the century!`
        }
        else if (!this.vikingArmy) {
            return `Saxons have fought for their lives and survived another day...`
        }
        else if (this.vikingArmy >0 && this.saxonArmy >0) {
            return `Vikings and Saxons are still in the thick of battle.`
        }
}