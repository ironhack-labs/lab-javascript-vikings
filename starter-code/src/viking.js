// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health -=  damage;
    }
}

// Viking     -- extends Soldier
class Viking extends Soldier{

    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage){
        if(this.health > 0){
            this.health -=  damage;
            return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry(){
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier{

    receiveDamage(damage){
        if(this.health > 0){
            this.health -=  damage;
            return `A Saxon has received ${damage} points of damage`
        }
        else {
            return `A Saxon has died in combat`;
        }
    }

}

// War
class War {

    constructor(){
        this.vikingArmy = [],
        this.saxonArmy = []
    }

    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        randomNumbers.randomSaxon = (Math.random() * this.saxonArmy.length) + 1;
        randomNUmbers.randomViking = (Math.random() * this.vikingArmy.length) + 1;
        var resultAtack = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
        if(this.saxonArmy[randomSaxon].health <= 0){
            this.saxonArmy.splice(randomSaxon);
        }
        //result resultAtack;
    }

    saxonAttack(){
        randomNumbers.randomSaxon = (Math.random() * this.saxonArmy.length) + 1;
        randomNUmbers.randomViking = (Math.random() * this.vikingArmy.length) + 1;
        var resultAtack = this.vikingArmy[randomViking].receiveDamage(this.randomViking[randomSaxon].strength);
        if(this.vikingArmy[randomViking].health <= 0){
            this.vikingArmy.splice(randomViking);
        }
        return resultAtack;
    }

    showStatus(){
        if(this.saxonArmy.length == 0){
            return `Vikings have won the war of the century!`;
        }
        if(this.vikingArmy.length == 0){
            return `Saxons have fought for their lives and survived another day...`;
        }
        if(this.saxonArmy.length > 0 && this.vikingArmy.length > 0){
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    }
} 