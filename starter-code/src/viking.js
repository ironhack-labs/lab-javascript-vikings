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
        return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
    } 

    battleCry() {
        return  "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health = this.health - damage;
        return this.health > 0 ? `A Saxon has received ${damage} points of damage` : "A Saxon has died in combat";
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(v) {
        this.vikingArmy.push(v);
    }

    addSaxon(s) {
        this.saxonArmy.push(s);
        // console.log(new Saxon(s.health, s.strength));
    }

    vikingAttack() {
        const vr  = Math.floor(Math.random() * this.vikingArmy.length);
        const sr = Math.floor(Math.random() * this.saxonArmy.length);

        let v = this.vikingArmy[vr];
        let s = this.saxonArmy[sr];

        console.log(this.vikingArmy, this.saxonArmy);
        
        let t = s.receiveDamage(v.strength);
        if(s.health <= 0) this.saxonArmy.splice(sr - 1, 1);
        return t;
    }

    saxonAttack() {
        const vr  = Math.floor(Math.random() * this.vikingArmy.length);
        const sr = Math.floor(Math.random() * this.saxonArmy.length);

        let v = this.vikingArmy[vr];
        let s = this.saxonArmy[sr];

        // console.log(this.vikingArmy, this.saxonArmy);
        
        let t = v.receiveDamage(s.strength);vr
        if(v.health <= 0) this.vikingArmy.splice( - 1, 1);
        return t;
    }

    showStatus() {
        if(!this.saxonArmy.length) {
            return "Vikings have won the war of the century!";
        } else if(!this.vikingArmy.length) {
            return "Saxons have fought for their lives and survive another day...";
        }   else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
