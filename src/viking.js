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
        if(this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }

    receiveDamage(damage) {
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
    constructor() {
    this.vikingArmy = [];
    this.saxonArmy =[];
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    attack(attacker, victim) {
        let randomAttacker = this.attacker[Math.floor(Math.random() * this.attacker.length)];
        let randomVictim = this.victim[Math.floor(Math.random() * this.victim.length)];    
        let result = randomVictim.receiveDamage(randomAttacker.strength);
            if(randomVictim.health <= 0) {
            this.victim.splice(randomVictim, 1);
            return result;
            }
        // let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        // let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        // if(attacker === Viking) {
        //     let result = randomSaxon.receiveDamage(randomViking.strength);
        //     if(randomSaxon.health <= 0) {
        //     this.saxonArmy.splice(randomSaxon, 1);
        //     return result;
        //     }
        // } else if(attacker === Saxon) {
        //     let result = randomViking.receiveDamage(randomSaxon.strength);
        //     if(randomViking.health <= 0) {
        //     this.vikingArmy.splice(randomViking, 1);
        //     return result;
        //     }
        // } else {
        //     return 'This fighter is not participating in the war!'
        // }
    }

    vikingAttack() {
        this.attack(Viking, Saxon);
        // let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        // let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        // let result = randomSaxon.receiveDamage(randomViking.strength);
        // if(randomSaxon.health <= 0) {
        //     this.saxonArmy.splice(randomSaxon, 1);
        // }
        // return result;
    }

    saxonAttack() {
        this.attack(Saxon, Viking);
        // let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        // let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        // let result = randomViking.receiveDamage(randomSaxon.strength);
        // if(randomViking.health <= 0) {
        //     this.vikingArmy.splice(randomViking, 1);
        // }
        // return result;
    }

    showStatus() {
        if(this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } 
        return "Vikings and Saxons are still in the thick of battle.";
    }


}
