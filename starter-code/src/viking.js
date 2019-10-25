// Soldier
class Soldier {
    constructor(health, strength){
       this.health = health;
       this.strength = strength; 
    }

    attack() {
        return this.strength;
    }

    receiveDamage(dmg) {
        this.health -= dmg;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health,strength);
            this.name = name;
    }
    receiveDamage(dmg) {
        this.health -= dmg;
        if(this.health <= 0){
            return `${this.name} has died in act of combat`;
        }
        return `${this.name} has received ${dmg} points of damage`;
    }
    battleCry() {
        return `Odin Owns You All!`; 
    }

}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength) {
        super(health, strength);
    }

    receiveDamage(dmg) {
        this.health -= dmg;
        if(this.health <= 0){
            return `A Saxon has died in combat`;
        }
        return `A Saxon has received ${dmg} points of damage`;
    }
}

// War
class War {
    constructor() {
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
        let vikingIdx = Math.floor(Math.random() * this.vikingArmy.length);
        let saxonIdx = Math.floor(Math.random() * this.saxonArmy.length);
        let message = this.saxonArmy[saxonIdx].receiveDamage(this.vikingArmy[vikingIdx].strength);
        this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health >0);
        return message;
    }

    saxonAttack(){
        let saxonIdx = Math.floor(Math.random() * this.saxonArmy.length);
        let vikingIdx = Math.floor(Math.random() * this.vikingArmy.length);
        let message = this.vikingArmy[vikingIdx].receiveDamage(this.saxonArmy[saxonIdx].strength);
        this.vikingArmy = this.vikingArmy.filter(viking => viking.health >0);
        return message;
    }

    showStatus(){
        if(this.saxonArmy.length === 0){ return `Vikings have won the war of the century!`;};
        if(this.vikingArmy.length === 0){ return `Saxons have fought for their lives and survive another day...`;};
        return "Vikings and Saxons are still in the thick of battle.";
    }
}
