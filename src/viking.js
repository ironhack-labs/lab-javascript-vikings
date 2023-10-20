// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `"${this.name} has received ${this.damage} points of damage"`;
        } else {
            return `"${this.name} has died in an act of combat"`;
        }
    }
    battleCry() {
        return ("Odin Owns You All!")
    }
}

class Saxon extends Soldier { 
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return (`A Saxon has received ${this.damage} points of damage`);
        } else {
            return ("A Saxon has died in combat");
        }
    }
}

class War { 
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = []; 
    }
    addViking(viking) {
        this.vikingArmy += viking;
    }
    addSaxon(saxon) {
        this.saxonArmy += saxon;
    }
    vikingAttack() {
        Saxon.receiveDamage(damage = Viking.strength);
        if (Saxon.health < 1) {
            this.saxonArmy -= saxon;}
    }
    saxonAttack() {
        Viking.receiveDamage(damage = Saxon.strength);
        if (Viking.health < 1) {
            this.vikingArmy -= viking;}
    }
    showStatus(){
        if (this.saxonArmy = []) {
            return ("Vikings have won the war of the century!");}
        else {(this.vikingArmy = []) 
            return ("Saxons have fought for their lives and survived another day...");}   

    }

    }
//}
//receiveDamage(){

//}
//battleCry(){

//}