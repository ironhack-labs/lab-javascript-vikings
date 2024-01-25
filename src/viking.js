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
class Viking extends Soldier  {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        }
        return `${this.name} has received ${damage} points of damage`
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(damage) {
        const oldHealth = this.health;
        this.health = oldHealth - damage;
        if (this.health <= 0) {
            return `A Saxon has died in combat`
        }
        return `A Saxon has received ${damage} points of damage`
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(vikingObject) {
        this.vikingArmy.push(vikingObject);
    }
    addSaxon(saxonObject) {
        this.saxonArmy.push(saxonObject);
    }
    vikingAttack() {
        const attackerIndex = Math.floor(Math.random()*this.vikingArmy.length)
        const vikingAttacker = this.vikingArmy[attackerIndex];
        const targetIndex = Math.floor(Math.random()*this.saxonArmy.length);
        const saxonTarget = this.saxonArmy[targetIndex];
        const attackOutcome = saxonTarget.receiveDamage(vikingAttacker.strength);
        if (saxonTarget.health <= 0) {
            this.saxonArmy.splice(targetIndex, 1);
        }
        return attackOutcome;
    }
    saxonAttack() {
        const attackerIndex = Math.floor(Math.random()*this.saxonArmy.length)
        const saxonAttacker = this.saxonArmy[attackerIndex];
        const targetIndex = Math.floor(Math.random()*this.vikingArmy.length);
        const vikingTarget = this.vikingArmy[targetIndex];
        const attackOutcome = vikingTarget.receiveDamage(saxonAttacker.strength);
        if (vikingTarget.health <= 0) {
            this.vikingArmy.splice(targetIndex, 1);
        }
        return attackOutcome;
    }
    armyAttack(attackFaction, targetFaction) {
            const attackArmy = attackFaction;
            const targetArmy = targetFaction;
            const attacker = attackArmy[Math.floor(Math.random()*attackArmy.length)];
            const targetIndex = Math.floor(Math.random()*targetArmy.length)
            const target = targetArmy[targetIndex];
            const attackOutcome = target.receiveDamage(attacker.strength);
            if (target.health <= 0) {
                targetArmy.splice(targetIndex, 1);
            }
            //console.log(attackOutcome);
            return attackOutcome;
        }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1){
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}

/* Testing that everything works as intended
const war = new War();
const newViking1 = new Viking("Gustaff", 150, 50);
const newViking2 = new Viking("Haldur", 150, 50);
const newSaxon1 = new Saxon(50, 50);
const newSaxon2 = new Saxon(50, 50);
const newSaxon3 = new Saxon(50, 50);
const newSaxon4 = new Saxon(50, 50);
const newSaxon5 = new Saxon(50, 50);
const newSaxon6 = new Saxon(50, 50);

war.addViking(newViking1);
war.addViking(newViking2);
war.addSaxon(newSaxon1);
war.addSaxon(newSaxon2);
war.addSaxon(newSaxon3);
war.addSaxon(newSaxon4);
war.addSaxon(newSaxon5);
war.addSaxon(newSaxon6);

let hasBattleEnded = false;;
while ( hasBattleEnded === false) {
    if (war.vikingArmy.length <= 0 || war.saxonArmy.length <= 0) {
        hasBattleEnded = true;
    }
    if (war.vikingArmy.length > 0) {
        //war.vikingAttack();
        war.armyAttack(war.vikingArmy, war.saxonArmy);
    } else {
        console.log(war.showStatus());
        hasBattleEnded = true;
        break;
    }
    if (war.saxonArmy.length > 0) {
        //war.saxonAttack();
        war.armyAttack(war.saxonArmy, war.vikingArmy);
    } else {
        console.log(war.showStatus());
        hasBattleEnded = true;
        break;
    }
    console.log(war.showStatus());
    console.log(war.vikingArmy, war.saxonArmy)
}
*/