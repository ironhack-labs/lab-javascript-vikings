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
        super(health, strength, name)
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if(this.health <= 0 ){
            return `${this.name} has died in act of combat`;
        } else {
            return `${this.name} has received ${damage} points of damage`;
        }
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}
// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        this.health -= damage;
        let message;

        if(this.health <= 0 ){
            return message = `A Saxon has died in combat`;
        } else {
            return message = `A Saxon has received ${damage} points of damage`;
        }
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        let chooseSaxon = Math.floor(Math.random() * this.saxonArmy.length); 
        let chooseViking = Math.floor(Math.random() * this.vikingArmy.length); 

        this.saxonArmy[chooseSaxon].receiveDamage(this.vikingArmy[chooseViking].strength);

        if (this.saxonArmy[chooseSaxon].health <= 0){
            this.saxonArmy.splice(chooseSaxon, 1);
            return `A Saxon has died in combat`;
        } else {
            return `A Saxon has received ${this.vikingArmy[chooseViking.strength]} points of damage`;
        }
    }

    saxonAttack() {
        let chooseViking = Math.floor(Math.random() * this.vikingArmy.length); 
        let chooseSaxon = Math.floor(Math.random() * this.saxonArmy.length); 

        this.vikingArmy[chooseViking].receiveDamage(this.saxonArmy[chooseSaxon].strength);

        if (this.vikingArmy[chooseViking].health <= 0){
            this.vikingArmy.splice(chooseViking, 1);
            return `${this.vikingArmy[chooseViking]} has died in act of combat`;
        } else {
            return `${this.vikingArmy[chooseViking]} has received ${this.saxonArmy[chooseSaxon].strength} points of damage`;
        }
    }

    showStatus () {
        if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1){
            return `Vikings and Saxons are still in the thick of battle.`
        } else if (!this.saxonArmy.length) {
            return `Vikings have won the war of the century!`;
        } else if (!this.vikingArmy.length) return `Saxons have fought for their lives and survived another day...`;{

        }
    }


    armiesAttack(attackingArmy, defendingArmy){
        let defendingSoldier = Math.floor(Math.random() * defendingArmy.length); 
        let atackingSoldier = Math.floor(Math.random() * attackingArmy.length);

        this.defendingArmy[defendingSoldier].receiveDamage(this.attackingArmy[atackingSoldier].strength);
        if (this.Army[defendingSoldier].health <= 0){
            this.defendingArmy.splice(defendingSoldier, 1);
        }
    }
}
