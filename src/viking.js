// Soldier
class Soldier {
    constructor (health, strength) {
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
    constructor (name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    attack() {
        return super.attack();
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) return `${this.name} has received ${damage} points of damage`;
        else return `${this.name} has died in act of combat`;
    }
    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) return `A Saxon has received ${damage} points of damage`;
        else return `A Saxon has died in combat`;
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

        // let attacker = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        // let victimIndex = Math.floor(Math.random() * this.saxonArmy.length);
        // let victim = this.saxonArmy[victimIndex];

        // let result = victim.receiveDamage(attacker.strength);
        // if (victim.health <= 0) {
        //     this.saxonArmy.splice(victimIndex, 1);
        // } 
        // return result;

         return this.launchAttack(this.vikingArmy, this.saxonArmy);
    }

    saxonAttack() {
        // let attacker = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        // let victimIndex = Math.floor(Math.random() * this.vikingArmy.length);
        // let victim = this.vikingArmy[victimIndex];

        // let result = victim.receiveDamage(attacker.strength);
        // if (victim.health <= 0) {
        //     this.vikingArmy.splice(victimIndex, 1);
        // } 
        // return result;

        return this.launchAttack(this.saxonArmy, this.vikingArmy);
    }

    launchAttack(attackingArmy, victimArmy) {
        let attacker = attackingArmy[Math.floor(Math.random() * attackingArmy.length)];
        let victimIndex = Math.floor(Math.random() * victimArmy.length);
        let victim = victimArmy[victimIndex];

        let result = victim.receiveDamage(attacker.strength);
        if (victim.health <= 0) {
            victimArmy.splice(victimIndex, 1);
        } 
        return result;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) return 'Vikings have won the war of the century!';
        if (this.vikingArmy.length === 0) return 'Saxons have fought for their lives and survived another day...';
        return 'Vikings and Saxons are still in the thick of battle.';  
    }
}
