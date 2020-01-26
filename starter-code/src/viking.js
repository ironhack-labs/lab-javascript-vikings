// Soldier
class Soldier {
    constructor(health,strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health-=damage;

    }
}

// Viking
class Viking extends Soldier {
    constructor (name,health,strength) {
        super(health,strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health-=damage;
        if(this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry () {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health-=damage;
        if(this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
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
    attack(a) {
        let chosenSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let chosenViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        if (a===1) {
            let result = chosenSaxon.receiveDamage(chosenViking.strength);
            if(chosenSaxon.health <= 0) {
                this.saxonArmy.splice(this.saxonArmy.indexOf(chosenSaxon),1);
        }
            return result;
        }
        if(a===2) {
            let result = chosenViking.receiveDamage(chosenSaxon.strength);
            if(chosenViking.health <= 0) {
                this.vikingArmy.splice(this.vikingArmy.indexOf(chosenViking),1);
        }
            return result;
        }

    }
    vikingAttack() {
        return this.attack(1);
        // let chosenSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        // let chosenViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        // let result = chosenSaxon.receiveDamage(chosenViking.strength);
        // if(chosenSaxon.health <= 0) {
        //     this.saxonArmy.splice(this.saxonArmy.indexOf(chosenSaxon),1);
        // }
        // return result;
    }
    saxonAttack() {
        return this.attack(2);
        // let chosenSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        // let chosenViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        // let result = chosenViking.receiveDamage(chosenSaxon.strength);
        // if(chosenViking.health <= 0) {
        //     this.vikingArmy.splice(this.vikingArmy.indexOf(chosenViking),1);
        // }
        // return result;
    }
    showStatus() {
        if(this.saxonArmy.length===0) {
            return 'Vikings have won the war of the century!';
        }
        if (this.vikingArmy.length===0) {
            return 'Saxons have fought for their lives and survived another day...';
        } 
        
        return 'Vikings and Saxons are still in the thick of battle.';
        
    }
}
