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
        this.damage = damage;
        this.health = this.health - this.damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.damage = damage;
        this.health = this.health - this.damage;
        if (this.health > 0) {
            return `${this.name} has received ${this.damage} points of damage`;
        }
        return `${this.name} has died in act of combat`;
    }

    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.damage = damage;
        this.health = this.health - this.damage;
        if (this.health > 0) {
            return `A Saxon has received ${this.damage} points of damage`;
        }
        return `A Saxon has died in combat`;
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    
    addViking(Viking) {
        this.Viking = Viking;
        this.vikingArmy.push(this.Viking);
    }

    addSaxon(Saxon) {
        this.Saxon = Saxon;
        this.saxonArmy.push(this.Saxon);
    }

    vikingAttack() {
        let idSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let idViking = Math.floor(Math.random() * this.vikingArmy.length);
        let saxon = this.saxonArmy[idSaxon];
        let viking = this.vikingArmy[idViking];

        let attackResult = saxon.receiveDamage(viking.attack());

        if (saxon.health <= 0) {
            this.saxonArmy.splice(idSaxon,1);
        }
        
        return attackResult;
    }

    saxonAttack() {
        let idSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let idViking = Math.floor(Math.random() * this.vikingArmy.length);
        let saxon = this.saxonArmy[idSaxon];
        let viking = this.vikingArmy[idViking];

        let attackResult = viking.receiveDamage(saxon.attack());

        if (viking.health <= 0) {
            this.vikingArmy.splice(idViking,1);
        }
        
        return attackResult;
    }

    //SUPER BONUS
    soldierAttack(soldier) {
        this.soldier = soldier;
        let idSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let idViking = Math.floor(Math.random() * this.vikingArmy.length);
        let saxon = this.saxonArmy[idSaxon];
        let viking = this.vikingArmy[idViking];

        if (soldier === 'viking') {
            let attackResult = saxon.receiveDamage(viking.attack());

            if (saxon.health <= 0) {
                this.saxonArmy.splice(idSaxon,1);
            }
            
            return attackResult;
        }

        if (soldier === 'saxon') {
            let attackResult = viking.receiveDamage(saxon.attack());

            if (viking.health <= 0) {
                this.vikingArmy.splice(idViking,1);
            }
            
            return attackResult;
        }

        return `Choose one soldier to attack: viking or saxon.`
        
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`;
        }
        
        if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`;
        }

        if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }

}
