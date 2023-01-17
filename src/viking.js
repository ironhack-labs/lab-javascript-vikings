// Soldier
class Soldier {
    constructor (health, strength) {
    this.health =  health;
    this.strength = strength;
    }
    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }


}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super (health, strength)
        this.name = name;
    }
    
    receiveDamage (damage) {
        this.health -= damage;

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }

}
    

// Saxon
class Saxon extends Soldier {
    constructor (health, strength) {
        super (health, strength)
    }

    receiveDamage(damage) {
        this.health -= damage;
    
        if (this.health > 0) {
            return  `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        return this.attack("viking");
    }

    saxonAttack() {
        return this.attack("saxon");
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }

        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        }

        return "Vikings and Saxons are still in the thick of battle.";
    }

    attack(attacker) {
        let randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);
        let randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    
        let viking = this.vikingArmy[randomIndexViking];
        let saxon = this.saxonArmy[randomIndexSaxon];
    
        if (attacker === "viking") {
            return this.receiveDamage(viking, saxon, this.saxonArmy);
        }
    
        if (attacker === "saxon") {
            return this.receiveDamage(saxon, viking, this.vikingArmy);
        }
    }

    receiveDamage(attacker, attacked, attackedArmy) {
        let receiveDamageMessage = attacked.receiveDamage(attacker.strength);
    
        if (attacked.health <= 0) {
            attackedArmy.splice(attackedArmy.indexOf(attacked), 1);
        }
    
        return receiveDamageMessage;
    }
}
