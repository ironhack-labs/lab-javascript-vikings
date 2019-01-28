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
        if(this.health>0){
            return this.name + " has received " + damage + " points of damage";
        }
        else{
            return this.name + " has died in act of combat";
        }
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health>0){
            return "A Saxon has received " + damage + " points of damage";
        }
        else {
            return "A Saxon has died in combat";
        }
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
        let randomNum1 = Math.floor(Math.random() * this.vikingArmy.length);
        let randomViking = this.vikingArmy[randomNum1];
        let randomNum2 = Math.floor(Math.random() * this.saxonArmy.length);
        let randomSaxon = this.saxonArmy[randomNum2];
        let result = randomSaxon.receiveDamage(randomViking.strength);
        if(randomSaxon.health < 0){
            this.saxonArmy.splice(0, randomNum2 + 1);
        }
        return result;
    }
    saxonAttack(){
        let randomNum1 = Math.floor(Math.random() * this.vikingArmy.length);
        let randomViking = this.vikingArmy[randomNum1];
        let randomNum2 = Math.floor(Math.random() * this.saxonArmy.length);
        let randomSaxon = this.saxonArmy[randomNum2];
        let result = randomViking.receiveDamage(randomSaxon.strength);
        if(randomViking.health < 0){
            this.vikingArmy.splice(0, randomNum1 + 1);
        }
        return result;
    }
    showStatus(){
        if(this.saxonArmy.length > 0 && this.vikingArmy.length > 0){
            return "Vikings and Saxons are still in the thick of battle.";
        }
        else if(this.saxonArmy.length == 0){
            return "Vikings have won the war of the century!";
        }
        else {
            return "Saxons have fought for their lives and survive another day...";
        }

    }
}
