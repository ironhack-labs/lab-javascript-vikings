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
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage; // Reduce health by damage
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
    receiveDamage(damage) {
        this.health -= damage; // Reduce health by damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// Example usage (you can use this to test)
const saxon = new Saxon(60, 25);
console.log(saxon.attack()); // Should use inherited method to output 25
console.log(saxon.receiveDamage(20)); // "A Saxon has received 20 points of damage"
console.log(saxon.receiveDamage(40)); // "A Saxon has died in combat"



// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        if (this.saxonArmy.length === 0 || this.vikingArmy.length === 0) {
            return "No army to attack";
        }
        // Corrected the Math.random usage
        const vikingIdx = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[vikingIdx];

        const saxonIdx = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[saxonIdx];

        const result = randomSaxon.receiveDamage(randomViking.strength);
        
        // Remove Saxon if health drops to or below 0
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(saxonIdx, 1);
        }
        
        return result;
    }

    saxonAttack() {
        if (this.saxonArmy.length === 0) return "No Saxons to attack";
        if (this.vikingArmy.length === 0) return "No Vikings to attack";
    
        // Get a random Saxon
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        
        // Get a random Viking
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomVikingIndex];
    
        // Viking receives damage based on Saxon strength
        const result = randomViking.receiveDamage(randomSaxon.strength);
    
        // If Viking dies, remove from army
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1);
        }
    
        return result;
    }


    attack(isVikingAttack) {
        if(this.saxonArmy.length === 0 || this.vikingArmy.length === 0) {
            return;
        }
        const vikingIdx = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[vikingIdx];
        const saxonIdx = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[saxonIdx];
        let result;
        if(isVikingAttack) {
            result = randomSaxon.receiveDamage(randomViking.strength);
            if(randomSaxon.health <= 0) {
                this.saxonArmy.splice(saxonIdx, 1);
            }
        } else {
            result = randomViking.receiveDamage(randomSaxon.strength);
            if(randomViking.health <= 0) {
                this.vikingArmy.splice(vikingIdx, 1);
            }
        }
        return result;
    }

    // BONUS
    
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}

// Example usage
const war = new War();
const viking = new Viking("Ragnar", 100, 30);
const saxon = new Saxon(60, 25);

war.addViking(viking);
war.addSaxon(saxon);

console.log(war.vikingAttack()); 
console.log(war.saxonAttack()); 
console.log(war.showStatus()); 
