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
        return this.health > 0 ? `${this.name} has received ${damage} points of damage` : 
        `${this.name} has died in act of combat`;
    }

    battleCry() {
        return 'Odin Owns You All!';
    }    
}

// Saxon
class Saxon extends Soldier {
    receiveDamage (damage) {
        this.health -= damage;
        return this.health > 0 ? `A Saxon has received ${damage} points of damage` :
        `A Saxon has died in combat`
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

        if (this.saxonArmy[j].health <= 0) this.saxonArmy.splice(j, 1);
        return attack;
    }

    saxonAttack() {
        let i = Math.floor(Math.random()*this.vikingArmy.length);
        let j = Math.floor(Math.random()*this.saxonArmy.length);

        const attack = this.vikingArmy[i].receiveDamage(this.saxonArmy[j].strength);

        if (this.vikingArmy[i].health <= 0) this.vikingArmy.splice(i, 1);
        return attack;
    }

    /* SUPER BONUS
    anyAttack(army1, army2) {
        let i = Math.floor(Math.random()*this.army1.length);
        let j = Math.floor(Math.random()*this.army2.length);

        const attack = this.army1[i].receiveDamage(this.army2[j].strength);

        if (this.army1[i].health <= 0) this.army1.splice(i, 1);
        return attack;
    }
    */

    showStatus() {
        return this.saxonArmy.length === 0 ? `Vikings have won the war of the century!` : 
               this.vikingArmy.length === 0 ? `Saxons have fought for their lives and survived another day...` :
               `Vikings and Saxons are still in the thick of battle.`;
    }
}
