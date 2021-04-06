// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack () {
        return this.strength;
    }
    receiveDamage(dmg){
        this.health = this.health - dmg;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength){
        super(health,strength);
        this.name = name;
    }
    attack() {
        return super.attack();
    }
    receiveDamage(dmg){
        super.receiveDamage(dmg);
        return this.health > 0 ? `${this.name} has received ${dmg} points of damage` :
            `${this.name} has died in act of combat`;
    }
    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    constructor (health, strength){
        super(health,strength);
    }
    receiveDamage(dmg){
        super.receiveDamage(dmg);
        return this.health > 0 ? `A Saxon has received ${dmg} points of damage` :
            `A Saxon has died in combat`;
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
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        return this.doAttack(this.vikingArmy, this.saxonArmy);
    }
    saxonAttack(){
        return this.doAttack(this.saxonArmy, this.vikingArmy);
    }
    doAttack(att, def) {
        let attacker = att[Math.floor(Math.random() * att.length)];
        let defIndex = Math.floor(Math.random() * def.length);
        let defender = def[defIndex];
        let result = defender.receiveDamage(attacker.strength);
        if (defender.health <= 0) {
            def.splice(defIndex, 1);
        }
        return result;
    }
    showStatus(){
        return this.saxonArmy.length === 0 && this.vikingArmy.length ?
            `Vikings have won the war of the century!` :
            this.vikingArmy.length === 0 && this.saxonArmy.length ?
                `Saxons have fought for their lives and survived another day...` :
                `Vikings and Saxons are still in the thick of battle.`;
    }
}