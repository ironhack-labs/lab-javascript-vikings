// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        return `${this.name} has died in act of combat`;
    }
    battleCry() {
        return  'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
    }
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        return `A Saxon has died in combat`;
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking){
        this.vikingArmy.push(viking);
    };
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    };
    vikingAttack(){
        // select randomly a viking & a saxon
        let attackerIndex = Math.floor(Math.random()*this.vikingArmy.length);
        let victimIndex = Math.floor(Math.random()*this.saxonArmy.length);
        // attack & save the return message, if the saxon is dead remove from saxon's army
        let message = this.saxonArmy[victimIndex].receiveDamage(this.vikingArmy[attackerIndex].strength);
        if (this.saxonArmy[victimIndex].health <= 0) {
            this.saxonArmy.splice(victimIndex,1);
        }
        return message;
    };
    saxonAttack(){
        // select randomly a saxon & a viking
        let attackerIndex = Math.floor(Math.random()*this.saxonArmy.length);
        let victimIndex = Math.floor(Math.random()*this.vikingArmy.length);
        // attack & save the return message, if the viking is dead remove from viking's army
        let message = this.vikingArmy[victimIndex].receiveDamage(this.saxonArmy[attackerIndex].strength);
        if (this.vikingArmy[victimIndex].health <= 0) {
            this.vikingArmy.splice(victimIndex,1);
        }
        return message;
    };
    showStatus(){
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!';
        } else if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...';
        } else {
            return 'Vikings and Saxons are still in the thick of battle.';
        }
    };
}
