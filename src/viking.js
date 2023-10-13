// Soldier
// Pass the arguments
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    // Create a method attack
    attack(){
        return this.strength;
    }

    // Create a method receiveDamage
    receiveDamage(damage){
        this.health -= damage;
    }
}


// Viking
// is a extend Soldier
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    attack(){
        return this.strength;
    }
    // Create a method receiveDamage
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return (`${this.name} has received ${damage} points of damage`);
        }
        else {
            return (`${this.name} has died in act of combat`);
        }
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}


// Saxon
// Saxon should extend Soldier
class Saxon extends Soldier {
    // Create a method receiveDamage
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return (`A Saxon has received ${damage} points of damage`);
        }
        else {
            return (`A Saxon has died in combat`);
        }
    }
}


// War
// 
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    // addViking()
    addViking(viking){
        this.vikingArmy.push(viking);
    }

    // addSaxon()
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    // vikingAttack()
    vikingAttack(){
        let randonViking = this.vikingArmy[(Math.floor(Math.random() * this.vikingArmy.length))];
        let randonSaxon = this.saxonArmy[(Math.floor(Math.random() * this.saxonArmy.length))];

        let result = randonSaxon.receiveDamage(randonViking.strength);

        if (randonSaxon.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy[randonSaxon]);
        }
        return result;
    }

    // saxonAttack()
    saxonAttack(){
        let randonViking = this.vikingArmy[(Math.floor(Math.random() * this.vikingArmy.length))];
        let randonSaxon = this.saxonArmy[(Math.floor(Math.random() * this.saxonArmy.length))];

        let result = randonViking.receiveDamage(randonSaxon.strength);

        if (randonViking.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy[randonViking]);
        }
        return result;
    }
    // showStatus()
    showStatus(){
        if (this.saxonArmy.length < 1){
            return ("Vikings have won the war of the century!");
        }
        else if (this.vikingArmy.length < 1){
            return ("Saxons have fought for their lives and survived another day...");
        }
        else if (this.saxonArmy.length === 1  && this.vikingArmy.length === 1 ){
            return ("Vikings and Saxons are still in the thick of battle.");
        }
    }
}
