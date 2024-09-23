// Soldier
class Soldier {
    constructor(health, strength) {
        this.health=health;
        this.strength=strength;
    }

    attack () {return this.strength;}
    receiveDamage(damage) {this.health -=damage;}
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        return (this.health > 0) ? `${this.name} has received ${damage} points of damage`: `${this.name} has died in act of combat`
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -=damage;
        return (this.health > 0) ? `A Saxon has received ${damage} points of damage`: `A Saxon has died in combat`
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    vikingAttack() {
        let attackedSaxon, outcome;
        attackedSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        outcome = attackedSaxon.receiveDamage(this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)].strength);
        this.saxonArmy=this.saxonArmy.filter(sax => sax.health>0)
        return outcome;
    }

    saxonAttack() {
        let attackedViking, outcome;
        attackedViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        outcome = attackedViking.receiveDamage(this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)].strength);
        this.vikingArmy=this.vikingArmy.filter(viking => viking.health>0)
        return outcome;
    }
    
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    showStatus () {
        let status;
        if (this.saxonArmy.length === 0) {
            status = "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            status = "Saxons have fought for their lives and survived another day...";
        } else if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
            status = "Vikings and Saxons are still in the thick of battle.";
        }
        
        return status;
    }
        
}
