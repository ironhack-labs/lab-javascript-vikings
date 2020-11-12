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
        
        if (this.health > 0) {
            this.health -= damage;
        }
        return;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        if (this.health > 0) {
            this.health = this.health - damage;
        }
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`;
        } else {
             return `${this.name} has received ${damage} points of damage`;
        }
    }
    battleCry() {
        return `Odin Owns You All!`;
    };
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        if (this.health > 0) {
            this.health -= damage;
        }
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
        this.vikingArmy=[];
        this.saxonArmy=[];
        this.idViking=0;
        this.idSaxon=0;
        this.message;
    }
    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }
    vikingAttack() {
        this.idViking=Math.floor(Math.random()*this.vikingArmy.length);
        this.idSaxon=Math.floor(Math.random()*this.saxonArmy.length);
        this.message= this.saxonArmy[this.idSaxon].receiveDamage(this.vikingArmy[this.idViking].attack());
        if (this.saxonArmy[this.idSaxon].health <= 0) {
            this.saxonArmy.splice(this.idSaxon, 1);
        }
        return this.message;
    }
    saxonAttack() {
        this.idViking=Math.floor(Math.random()*this.vikingArmy.length);
        this.idSaxon=Math.floor(Math.random()*this.saxonArmy.length);
        this.message= this.vikingArmy[this.idViking].receiveDamage(this.saxonArmy[this.idSaxon].attack());
        if (this.vikingArmy[this.idViking].health <= 0) {
            this.vikingArmy.splice(this.idViking, 1);
        }
        return this.message;
    }
    showStatus() {
        
        if (this.saxonArmy.length===0) {
            return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy.length===0) {
            return `Saxons have fought for their lives and survived another day...`;
        } else {
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    }
}
