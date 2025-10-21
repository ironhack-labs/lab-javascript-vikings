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
class Saxon extends Soldier{
    
    receiveDamage(damage) {
        this.health = this.health - damage;
        if(this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {

    constructor(){
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
        const numRandom = Math.floor(Math.random() * this.saxonArmy.length)
        const viking = this.vikingArmy[numRandom];
        const saxon = this.saxonArmy[numRandom];
        const result = saxon.receiveDamage(viking.attack());

        
        if(saxon.health <= 0) {
            this.saxonArmy.splice(numRandom, 1);
            return result;
        } else{
            return result;
        }
    }

    saxonAttack() {
        const numRandom = Math.floor(Math.random() * this.saxonArmy.length)
        const viking = this.vikingArmy[numRandom];
        const saxon = this.saxonArmy[numRandom];
        const result = viking.receiveDamage(saxon.attack());

        
        if(viking.health <= 0) {
            this.vikingArmy.splice(numRandom, 1);
            return result;
        } else{
            return result;
        }
    }

    showStatus() {
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day...";
        } else if(this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
