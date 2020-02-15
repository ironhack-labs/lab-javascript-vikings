// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiv// Soldier
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
            this.health -= damage;
            if (this.health > 0) {
                console.log(`${this.name} has received ${damage} points of damage!`)
            } else if (this.health <= 0) {
                console.log(`${this.name} has died in act of combat`);
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
        receiveDamage(damage) {
            this.health -= damage;
            if (this.health > 0) {
                console.log(`A Saxon has received ${damage} points of damage`);
            } else if (this.health <= 0) {
                console.log(`A Saxon has died in combat`);
            }
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
        addSaxon(saxon) {
            this.saxonArmy.push(saxon);
        }
    
        vikingAttack() {
            // Math.floor(Math.random() * Math.floor(max))
            let randomSaxon = Math.floor(Math.random() * Math.floor(this.saxonArmy.length))
            let randomViking = Math.floor(Math.random() * Math.floor(this.vikingArmy.length))
    
            let result = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
            if (this.saxonArmy[randomSaxon].health <= 0) {
                this.saxonArmy.splice(randomSaxon, 1);
            }
            return result
        }
    
        saxonAttack() {
            let randomSaxon = Math.floor(Math.random() * Math.floor(this.saxonArmy.length))
            let randomViking = Math.floor(Math.random() * Math.floor(this.vikingArmy.length))
    
            let result = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
            if (this.vikingArmy[randomViking].health <= 0) {
                this.vikingArmy.splice(randomViking, 1);
            }
            return result
        }
        showStatus() {
            let status ="";
            if (this.vikingArmy.length === 0) {
                status = "Saxons have fought for their lives and survived another day...";
            } else if (this.saxonArmy.length === 0) {
                status = "Vikings have won the war of the century!"
            } else if (this.vikingArmy.length >= 1 || this.saxonArmy.length >= 1) {
                status ="Vikings and Saxons are still in the thick of battle."
            } return status;
        }
    }eDamage(damage){
        this.health -= damage;
    }

}
