// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(num) {
        this.health -= num;
    }
}
// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }
    receiveDamage(num) {
        this.health -= num;
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`;
        } else {
            return `${this.name} has received ${num} points of damage`;
        }
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}
// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }
    attack() {
        super.attack();
        return this.strength;
    }
    receiveDamage(num) {
        this.health -= num;
        if (this.health <= 0) {
            return `A Saxon has died in combat`;
        } else {
            return `A Saxon has received ${num} points of damage`;
        }
    }
}

function random(array) {
    return array[Math.floor((Math.random(array) * array.length))];
}
// War
class War {
    constructor() {}
    vikingArmy = [];
    saxonArmy = [];
    addViking(viking) {
        this.vikingArmy.push(viking);
    };
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    };
    vikingAttack() {
        let randomSaxon = random(this.saxonArmy);
        let randomViking = random(this.vikingArmy);
        let damageReceived = randomSaxon.receiveDamage(randomViking.strength);
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1);
        }
        return damageReceived;
    };
    saxonAttack() {
        let randomSaxon = random(this.saxonArmy);
        let randomViking = random(this.vikingArmy);
        let damageReceived = randomViking.receiveDamage(randomSaxon.strength);
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomViking, 1);
        }
        return damageReceived;
    };
    showStatus() {
        if (this.saxonArmy.length <= 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length <= 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else return "Vikings and Saxons are still in the thick of battle."
    };
}
// REFACTORISATION
// class War {
//     constructor() { }
//     vikingArmy = [];
//     saxonArmy = [];
//     addViking(viking) {
//         this.vikingArmy.push(viking);
//     };
//     addSaxon(saxon) {
//         this.saxonArmy.push(saxon);
//     };
//     vikingAttack() {
//         return this.attack(this.vikingArmy, this.saxonArmy);
//     };
//     saxonAttack() {
//         return this.attack(this.saxonArmy, this.vikingArmy);
//     };
//     attack(attackers, receivers) {
//         let attacker = random(attackers);
//         let receiver = random(receivers);
//         let damageReceived = receiver.receiveDamage(attacker.strength);
//         if (receiver.health <= 0) {
//             receiver.splice(receiver, 1);
//         }
//         return damageReceived;
//     }