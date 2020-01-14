// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(dmg) {
        this.health -= dmg;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(dmg) {
        this.health -= dmg;
        if (this.health > 0) {
            return `${this.name} has received ${dmg} points of damage`;
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
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(dmg) {
        this.health -= dmg;
        if (this.health > 0) {
            return `A Saxon has received ${dmg} points of damage`;
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
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        const message = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].attack());
            // this.saxonArmy[ ].health = this.vikingArmy[randomViking].
            this.saxonArmy.forEach(saxon => {
                (saxon.health <= 0 ? this.saxonArmy.splice(randomSaxon, 1) : void(0));
            });
        return message;
    }

    saxonAttack() {
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let message = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].attack());
        this.vikingArmy.forEach(viking => {
            (viking.health <= 0 ? this.vikingArmy.splice(randomViking, 1) : void(0));
        })
        return message;
    }

    showStatus() {
        if(this.saxonArmy.length === 0) return "Vikings have won the war of the century!";
        if(this.vikingArmy.length === 0) return "Saxons have fought for their lives and survived another day...";
        if((this.saxonArmy.length >= 1) && (this.vikingArmy.length >= 1)) return "Vikings and Saxons are still in the thick of battle.";
    }
}