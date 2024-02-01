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
    constructor(name,health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health>0) {
            return `${this.name} has received ${damage} points of damage`
        }
        else if (this.health<=0) {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health>0) {
            return `A Saxon has received ${damage} points of damage`
        }
        else if (this.health<=0) {
            return `A Saxon has died in combat`
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
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let v1 = this.vikingArmy[randomViking];
        let s1 = this.saxonArmy[randomSaxon];
        let afterDamage = s1.receiveDamage(v1.strength);
        if (s1.health<=0) {
            this.saxonArmy.splice(randomSaxon, 1);
        }
        return afterDamage;
    }
    saxonAttack() {
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let v1 = this.vikingArmy[randomViking];
        let s1 = this.saxonArmy[randomSaxon];
        let afterDamage = v1.receiveDamage(s1.strength);
        if (v1.health<=0) {
            this.vikingArmy.splice(randomViking, 1);
        }
        return afterDamage;
    }
    generalAttack () {
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let v1 = this.vikingArmy[randomViking];
        let s1 = this.saxonArmy[randomSaxon];
        if (saxonAttack) {
        let afterDamage = v1.receiveDamage(s1.strength);
        if (v1.health<=0) {
            this.vikingArmy.splice(randomViking, 1);
        }
    }
        else if (vikingAttack) {
            let afterDamage = s1.receiveDamage(v1.strength);
            if (s1.health<=0) {
                this.saxonArmy.splice(randomSaxon, 1);
            } 
        }
        return afterDamage;
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }
        else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        }
        else if (this.saxonArmy.length>=1 && this.vikingArmy.length>=1) {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
