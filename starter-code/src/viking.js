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
        return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
    } 

    battleCry() {
        return  "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
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
        this.vikingArmy.push(new Viking(v.name, v.health, v.strength));
    }

    addSaxon(s) {
        this.saxonArmy.push(new Saxon(s.health, s.strength));
        // console.log(new Saxon(s.health, s.strength));
    }

    vikingAttack() {
        const vr  = Math.floor(Math.random() * this.vikingArmy.length);
        const sr = Math.floor(Math.random() * this.saxonArmy.length);

        let v = this.vikingArmy[vr];
        let s = this.saxonArmy[sr];

        
        s.receiveDamage(v.strength);
        // this.saxonArmy.forEach((el, i) => {
        //     if(el.health <= 0) this.saxonArmy.splice(i, 1);
        // });

        console.log(v, s);
        
    }

    saxonAttack() {

    }

    showStatus() {

    }
}
