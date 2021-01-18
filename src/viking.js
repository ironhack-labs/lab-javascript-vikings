// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack () {
        return this.strength;
    }

    receiveDamage (damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor (name, health, strength) {        
        super(health, strength);
        this.name = name;
    }

    receiveDamage (damage) {
        this.health -= damage;
        if (this.health > 0) {            
            return `${this.name} has received ${damage} points of damage`;
        }

        if (this.health <= 0) {            
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry () {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage (damage) {
        this.health -= damage;
        if (this.health > 0) {            
            return `A Saxon has received ${damage} points of damage`;
        }

        if (this.health <= 0) {            
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {

    vikingArmy = [];
    saxonArmy = [];

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }

    addSaxon (Saxon) {
        this.saxonArmy.push(Saxon);
    }

    //SUPER BONUS
    soldierAttack () {
        let strength = this.attack()

        if(this.name) {
            let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
            let result = this.saxonArmy[saxonIndex].receiveDamage(strength);

            if(this.saxonArmy[saxonIndex].health <= 0){  
                this.saxonArmy.splice(saxonIndex, 1);
            }
            return result;
        } else {
            let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
            let result = this.vikingArmy[vikingIndex].receiveDamage(strength);

            if(this.vikingArmy[vikingIndex].health <= 0){  
                this.vikingArmy.splice(vikingIndex, 1);
            }
            return result;
        }          
    }
        
    vikingAttack() {
        
        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let vikingStrength = this.vikingArmy[vikingIndex].strength;
        
        let result = this.saxonArmy[saxonIndex].receiveDamage(vikingStrength);

        if(this.saxonArmy[saxonIndex].health <= 0){  
            this.saxonArmy.splice(saxonIndex, 1);
        }

        return result;
    }

    saxonAttack() {
        let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let saxonStrength = this.saxonArmy[saxonIndex].strength;

        let result = this.vikingArmy[vikingIndex].receiveDamage(saxonStrength);

        if(this.vikingArmy[vikingIndex].health <= 0){  
            this.vikingArmy.splice(vikingIndex, 1);
        }

        return result;

    }

    showStatus() {
        if (this.saxonArmy.length <= 0) {
            return "Vikings have won the war of the century!";
        }

        if (this.vikingArmy.length <= 0) {
            return "Saxons have fought for their lives and survived another day...";
        }

        if (this.saxonArmy.length === 1 && this.vikingArmy.length === 1) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}


