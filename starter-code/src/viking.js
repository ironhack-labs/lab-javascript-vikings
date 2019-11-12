// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health; 
        this.strength = strength;
    }
     attack(){
        return this.strength;
}
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength); // go over this again
        this.name = name; 
    }
    attack(){ // is this right? How should I properly inherit it?
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in the act of combat`;
        }
    }
    battleCry() {
        return `Odin Owns You All!`;
    }
}    

// Saxon
class Saxon extends Soldier {
    attack() { // is this right? How should I properly inherit it?
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A saxon has received ${damage} points of damage`;
        } else {
            return `A saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }
    vikingAttack(){
       let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
       let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
       return `${randomSaxon}.receiveDamage() = ${randomViking}.this.strength`;
    }
    saxonAttack(){

    }
    showStatus(){
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`;
        } else {
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    }
}
