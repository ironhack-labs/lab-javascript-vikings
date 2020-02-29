// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health,
        this.strength = strength
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name,  health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage

        if (this.health > 0) {
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
    receiveDamage(damage) {
        this.health -= damage

        if (this.health > 0) {
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

    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }

    genericAttack(attackingSoldierArmy, defendingSoldierArmy) {
        const randomAttackingSoldierIndex = Math.floor(attackingSoldierArmy.length * Math.random());
        const randomDefendingSoldierIndex = Math.floor(defendingSoldierArmy.length * Math.random());

        const randomAttackingSoldier = attackingSoldierArmy[randomAttackingSoldierIndex];
        const randomDefendingSoldier = defendingSoldierArmy[randomAttackingSoldierIndex];

        let attack = randomDefendingSoldier.receiveDamage(randomAttackingSoldier.strength);

        if (randomDefendingSoldier.health <= 0) {
            defendingSoldierArmy.splice(randomDefendingSoldierIndex, 1);
        }

        return attack
    }

    vikingAttack() {
//         let currentSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
//         let currentViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

//         let attackResult = currentSaxon.receiveDamage(currentViking.strength);
// console.log(currentSaxon)
//         if (currentSaxon.health <= 0) {
//             this.saxonArmy.splice(this.saxonArmy.indexOf(currentSaxon, 1))
//         }

//         return attackResult;
       return this.genericAttack(this.vikingArmy, this.saxonArmy);
    };
 

    saxonAttack() {
        // let currentSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        // let currentViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        // let attackResult = currentViking.receiveDamage(currentSaxon.strength);

        // if (currentViking.health <= 0) {
        //     this.vikingArmy.splice(this.saxonArmy.indexOf(currentViking, 1))
        // }

        // return attackResult;

       return this.genericAttack(this.saxonArmy, this.vikingArmy);
    }

    showStatus() {
        if (!this.saxonArmy.length) {
            return 'Vikings have won the war of the century!'
        }else if (!this.vikingArmy.length) {
            return 'Saxons have fought for their lives and survived another day...'
        } else {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}
