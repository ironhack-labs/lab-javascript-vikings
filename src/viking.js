
// Soldier
class Soldier { 
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
        attack() {
            return this.strength;
        }
        receiveDamage(damage) {
            this.health = this.health - damage;
        } 
}

// Viking 
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    battleCry() {
        return "Odin Owns You All!";
    }   
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `${name} has received ${this.damage} points of damage`;
        } else {
            return `${name} has died in the act of combat`;
        }
    }
}

// Saxon
class Saxon extends Soldier {
constructor(health, strength, receiveDamage) { 
    super(health, strength);
}
receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`;
    } else {
        return `A Saxon has died in combat`;
    }

}


}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];
    addViking(viking) {
        this.vikingArmy.push(viking);
    };
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    };

    vikingAttack() {
        let oldHealth = saxon.health;
        saxon.health = oldHealth - viking.strength;
        if (saxon.health <=0){
            saxonArmy.splice(0, 1);
        }

    }

    saxonAttack() {
        let oldHealth = viking.health;
        viking.health = oldHealth - saxon.strength;
        if (viking.health <=0){
            vikingArmy.splice(viking.name);
        }

    }


    showStatus() {
        if (this.saxonArmy.length == 0) {
            return "Vikings have won the war of the century!";
        }
        if (this.vikingArmy.length == 0) {
            return "Saxons have fought for their lives and survived another day...!";
        }
        return "Vikings and Saxons are still in the thick of battle.";

    }

}
 