// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;

    }
    attack() {
        return this.strength;
    }
    receiveDamage (damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }

    receiveDamage (damage) {
        this.health -= damage;
        if(this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return 'Odin Owns You All!';
    }    
}

// Saxon
class Saxon extends Soldier {
    receiveDamage (damage) {
        this.health -= damage;
        if(this.health > 0) {
             return `A Saxon has received ${damage} points of damage`
         } else {
             return `A Saxon has died in combat`
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
        let i = Math.floor(Math.random()*this.vikingArmy.length);
        let j = Math.floor(Math.random()*this.saxonArmy.length);
        
        const attack = this.saxonArmy[j].receiveDamage(this.vikingArmy[i].strength);

        if (this.saxonArmy[j].health <= 0) {
            this.saxonArmy.splice(j, 1);
        }
        return attack;
    }

    saxonAttack() {
        let i = Math.floor(Math.random()*this.vikingArmy.length);
        let j = Math.floor(Math.random()*this.saxonArmy.length);

        const attack = this.vikingArmy[i].receiveDamage(this.saxonArmy[j].strength);

        if (this.vikingArmy[i].health <= 0) {
            this.vikingArmy.splice(i, 1);
        }
        return attack;
    }
}
