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
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return 'Odin Owns You All!';
    }

}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        else {
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
        let randomSaxon = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())];
        let randomViking = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];
        let attack = randomSaxon.receiveDamage(randomViking.attack());

        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1)
        };
        return attack;
        
    }
    saxonAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())];
        let randomViking = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];
        let attack = randomViking.receiveDamage(randomSaxon.attack());

        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomViking, 1)
        };
        return attack;
    }
    showStatus() {
        if (!this.saxonArmy.length) {
            return "Vikings have won the war of the century!";
        }
        else if (!this.vikingArmy.length) {
            return "Saxons have fought for their lives and survived another day...";
        }
        else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }

}
