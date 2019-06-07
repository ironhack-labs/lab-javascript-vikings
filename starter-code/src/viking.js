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
class Viking extends Soldier{
    constructor (name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health <= 0 ) {
            this.health = 0;
            return `${this.name} has died in act of combat`;
        } else {
            return `${this.name} has received ${damage} points of damage`; 
        }
    }

    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }

    receiveDamage(damage) {
        
        this.health = this.health - damage;
        
        if (this.health <= 0) {
            return `A Saxon has died in combat`;
        } else {
            return `A Saxon has received ${damage} points of damage`; 
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
            let randomSaxonindex = Math.floor(Math.random() * Math.floor(this.saxonArmy.length));
            let randomVikingIndex = Math.floor(Math.random() * Math.floor(this.vikingArmy.length));
            let randomSaxon = this.saxonArmy[randomSaxonindex];
            let randomViking = this.vikingArmy[randomVikingIndex];
    
            let attackResult = randomSaxon.receiveDamage(randomViking.strength);
            
            if (randomSaxon.health <= 0) {
                this.saxonArmy.splice(randomSaxonindex);
            }
            return attackResult;
    
        }
        saxonAttack() {
            let randomSaxonindex = Math.floor(Math.random() * Math.floor(this.saxonArmy.length));
            let randomVikingIndex = Math.floor(Math.random() * Math.floor(this.vikingArmy.length));
            let randomSaxon = this.saxonArmy[randomSaxonindex];
            let randomViking = this.vikingArmy[randomVikingIndex];
    
            console.log(randomSaxon.strength);
    
            let attackResult = randomViking.receiveDamage(randomSaxon.strength);
            
            if (randomViking.health <= 0) {
                this.vikingArmy.splice(randomVikingIndex);
            }
            return attackResult;
        }

        showStatus() {
            if(this.saxonArmy.length < 1) {
                return "Vikings have won the war of the century!";
            }
             if (this.vikingArmy.length < 1) {
                return "Saxons have fought for their lives and survive another day...";
            }
                if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
                return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
