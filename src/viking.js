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
        this.damage = damage;
        const currentHealth = this.health - this.damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.damage = damage;
        const currentHealth = this.health - this.damage;
        if(this.health > 0){return `${this.name} has received ${this.damage} points of damage`}
        else{return `${this.name} has died in act of combat`}
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.damage = damage;
        const currentHealth = this.health - this.damage;
        if(this.health > 0){return `A Saxon has received ${this.damage} points of damage`}
        else{return `A Saxon has died in combat`}
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(vikingArmy){
        const newViking = this.vikingArmy.push();
    }
    addSaxon(saxonArmy){
        const newSaxon = this.saxonArmy.push();
    }
    vikingAttack(){
        let attackOfViking = Saxon.receiveDamage;
        delete this.saxonArmy[0];
        return attackOfViking;
    }
    saxonAttack(){
        let attackOfSaxon = Viking.receiveDamage;
        delete this.vikingArmy[0];
        return attackOfSaxon;
    }
    showStatus(){
        if (this.saxonArmy = []){return "Vikings have won the war of the century!"}
        else if (this.vikingArmy = []){return "Saxons have fought for their lives and survived another day..."}
        else {return "Vikings and Saxons are still in the thick of battle."}
    }
}

let viking1 = new Viking('Raul', 100, 70);
let saxon1 = new Saxon(70, 50);