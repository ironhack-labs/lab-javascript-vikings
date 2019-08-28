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
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else return `${this.name} has died in act of combat`;
    }
    battleCry = () => {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else return `A Saxon has died in combat`;
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }
    vikingAttack(){
        let saxonDefender = Math.floor(Math.random()*this.saxonArmy.length);
        let vikingAttacker = Math.floor(Math.random()*this.vikingArmy.length);
        this.saxonArmy[saxonDefender].receiveDamage(this.vikingArmy[vikingAttacker].strength);
        if(this.saxonArmy[saxonDefender].health <= 0){
            this.saxonArmy.splice(saxonDefender, 1);
            return `A Saxon has died in combat`;
        }
    }
    saxonAttack(){
        let vikingDefender = Math.floor(Math.random()*this.vikingArmy.length);
        let SaxonAttacker = Math.floor(Math.random()*this.saxonArmy.length);
        this.vikingArmy[vikingDefender].receiveDamage(this.saxonArmy[SaxonAttacker].strength);
        if(this.vikingArmy[vikingDefender].health <= 0){
            this.vikingArmy.splice(vikingDefender, 1);
            return `A Viking has died in combat`;
        } else return `${this.vikingArmy[vikingDefender].name} has received ${this.saxonArmy[SaxonAttacker].strength} points of damage`;
    }
    showStatus(){
        if(this.saxonArmy.length == 0){
            return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy.length == 0){
            return `Saxons have fought for their lives and survive another day...`;
        } else return `Vikings and Saxons are still in the thick of battle.`;
    }
 }
