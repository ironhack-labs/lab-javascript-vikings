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
        this.health -= damage;
        if(this.health>0) {
            return `${this.name} has received ${damage} points of damage`;
        } else if (this.health<=0) {
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
        this.health -= damage;
        if(this.health>0) {
            return `A Saxon has received ${damage} points of damage`;
        } else if (this.health<=0) {
            return "A Saxon has died in combat";
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
        let i = Math.floor(Math.random()*this.saxonArmy.length);
        let j = Math.floor(Math.random()*this.vikingArmy.length);
        let result = this.saxonArmy[i].receiveDamage(this.vikingArmy[j].attack());
        if (this.saxonArmy[i].health <= 0) {
            this.saxonArmy.pop(this.saxonArmy[i]);
        } 
        return result;
    }

    saxonAttack() {
        let i = Math.floor(Math.random()*this.vikingArmy.length);
        let j = Math.floor(Math.random()*this.saxonArmy.length);
        let result = this.vikingArmy[i].receiveDamage(this.saxonArmy[j].attack());
        if (this.vikingArmy[i].health <= 0) {
            this.vikingArmy.pop(this.vikingArmy[i]);
        }
        return result;

    }

    showStatus() {
        if (this.saxonArmy.length===0) {
            return "Vikings have won the war of the century!";
        }
        if (this.vikingArmy.length===0) {
            return "Saxons have fought for their lives and survived another day...";
        }
        if (this.vikingArmy.lenght!==0 || this.saxonArmy.length!==0) {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }

}
