// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
        attack() {
            return this.strength
    }
        receiveDamage(dmg) {
            this.health = this.health - dmg
        }
    }
// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        this.name = name;
        super(health, strength)
    }
        receiveDamage (dmg) {
            this.health = this.health - dmg;
            if (this.health > 0) {
                return `${this.name} has received ${this.dmg} points of damage`
            } else {
                return `${this.name} has died in act of combat`
            }
        }
        battleCry () {
            return 'Odin Owns You All!!!'
        }
}
// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
            super(health, strength)
        }
        receiveDamage (dmg) {
        this.health = this.health - dmg;
        if (this.health > 0) {
            return `A Saxon has received ${this.dmg} points of damage`
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

    addViking(add) {
        this.addViking.push(add)
    }
    addSaxon(saxon) {
        this.addSaxon.push(saxon)
    }
    vikingAttack() {
        var randomSaxon = Math.floor(Math.random()*this.saxonArmy.length + 1);
        var randomViking = Math.floor(Math.random()*this.vikingArmy.length + 1);
        var result = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
        if (this.saxonArmy[randomSaxon].health <= 0) {
            this.saxonArmy.pop()
        }
        return result
    }
    saxonAttack() {
        var randomSaxon = Math.floor(Math.random()*this.saxonArmy.length + 1);
        var randomViking = Math.floor(Math.random()*this.vikingArmy.length + 1);
        var result = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
        if (this.vikingArmy[randomViking].health <= 0) {
            this.vikingArmy.pop()
        }
        return result
    }
    showStatus() {
        if (this.vikingArmy.length == 0) {
            return "Saxons have fought for their lives and survived another day..."
        }
        if (this.saxonArmy.length == 0) {
            return "Vikings have won the war of the century!"
        }
        if (this.vikingArmy.length == 1 && this.saxonArmy.length == 1) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }


}