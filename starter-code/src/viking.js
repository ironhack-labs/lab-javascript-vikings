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

    receiveDamage(damage) {
        this.health = this.health - damage;

        if(this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health = this.health - damage;

        if(this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
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

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }
    
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }
    
    vikingAttack() {


        let randomViking = Math.floor(this.vikingArmy.length*Math.random());
        let randomSaxon = Math.floor(this.saxonArmy.length*Math.random());

        const result = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);

        if (this.saxonArmy[randomSaxon].health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1);
        }

        return result;
    }
    
    saxonAttack() {
        let randomViking = Math.floor(this.vikingArmy.length*Math.random());
        let randomSaxon = Math.floor(this.saxonArmy.length*Math.random());

        const result = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);

        if (this.vikingArmy[randomViking].health <= 0) {
            this.vikingArmy.splice(randomViking, 1);
        }

        return result;
    }
    
    showStatus() {
        if(this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }

    attack(soldier) {
        let randomViking = Math.floor(this.vikingArmy.length*Math.random());
        let randomSaxon = Math.floor(this.saxonArmy.length*Math.random());

        if(soldier !== 'viking' && soldier !== 'saxon') {
            return 'invalid soldier';
        }
        
        if(soldier === 'viking') {
            const result = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);

            if (this.saxonArmy[randomSaxon].health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1);
            }
            return result;

        }
        
        const result = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);

        if (this.vikingArmy[randomViking].health <= 0) {
            this.vikingArmy.splice(randomViking, 1);
        }
        return result;
    }
}
