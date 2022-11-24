// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage (damage) {
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health,strength)
        this.name = name;
    }
    receiveDamage (damage) {
        this.damage = damage;
        this.health = this.health - damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
           return `${this.name} has died in act of combat`
        }
    }
    battleCry () {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage (damage) {
        this.damage = damage;
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
    constructor () {
      this.vikingArmy = []
      this.saxonArmy = []
    }
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        let rdSaxon = Math.floor(Math.random(this.saxonArmy) * this.saxonArmy.length);
        let saxonSoldier = this.saxonArmy[rdSaxon];

        let rdViking = Math.floor(Math.random() * this.vikingArmy.length);
        let vikingSoldier = this.vikingArmy[rdViking];

        let saxonDamage = saxonSoldier.receiveDamage(vikingSoldier.attack());

        if (saxonSoldier.health <= 0) {
            this.saxonArmy.splice(rdSaxon, 1)
        }
        return saxonDamage;
    }
    saxonAttack() {
        let rdViking = Math.floor(Math.random() * this.vikingArmy.length);
        let vikingSoldier = this.vikingArmy[rdViking];

        let rdSaxon = Math.floor(Math.random(this.saxonArmy) * this.saxonArmy.length);
        let saxonSoldier = this.saxonArmy[rdSaxon];

        let vikingDamage = vikingSoldier.receiveDamage(saxonSoldier.attack());

        if (vikingSoldier.health <= 0) {
            this.vikingArmy.splice(rdViking, 1)
        }
        return vikingDamage;
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`
        } else if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
      
}
