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
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
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
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        let randSax = Math.floor(Math.random() * this.saxonArmy.length);
        let randVik = Math.floor(Math.random() * this.vikingArmy.length);
        let battleResult = this.saxonArmy[randSax].receiveDamage(this.vikingArmy[randVik].strength);
        if (battleResult === 'A Saxon has died in combat') {
            this.saxonArmy.splice(randSax, 1);
        }
        return battleResult;
    }
    saxonAttack() {
        let randSax = Math.floor(Math.random() * this.saxonArmy.length);
        let randVik = Math.floor(Math.random() * this.vikingArmy.length);
        let battleResult = this.vikingArmy[randVik].receiveDamage(this.saxonArmy[randSax].strength);
        if (battleResult.includes('has died in act of combat')) {
            this.vikingArmy.splice(randVik, 1);
        }
        return battleResult;
    }
    ///*---POSSIBLE ALTERNATIVE GENERIC ATTACK METHOD---*///
    // Attack(attacker) {
    //     let atackingArmy;
    //     let defendingArmy;
    //     if (attacker instanceof Viking) {
    //         atackingArmy = this.vikingArmy;
    //         defendingArmy = this.saxonArmy;
    //     }
    //     else {
    //         attackingArmy = this.saxonArmy;
    //         defendingArmy = this.vikingArmy
    //     }
    //     let randAtt = Math.floor(Math.random() * this.attackingArmy.length);
    //     let randDef = Math.floor(Math.random() * this.defendingArmy.length);
    //     let battleResult = this.defendingArmy[randDef].receiveDamage(this.attackingArmy[randAtt].strength);
    //     if (battleResult.includes('died')){
    //         this.defendingArmy.splice(randDef,1);
    //     }
        
    // }
    showStatus() {
        if (this.saxonArmy.length <= 0) {
            return 'Vikings have won the war of the century!';
        }
        if (this.vikingArmy.length <= 0) {
            return 'Saxons have fought for their lives and survived another day...'
        } else {
            return 'Vikings and Saxons are still in the thick of battle.';
        }
    }
}