//jshint esversion:6

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
    constructor(name,health,strength){
        super(health,strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];
    addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }
    vikingAttack(){
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let damage =  this.vikingArmy[randomViking].strength;
        let randomSax = Math.floor(Math.random() * this.saxonArmy.length);
        let soldierResponse = this.saxonArmy[randomSax].receiveDamage(damage);
        if (this.saxonArmy[randomSax].health <1){
            this.saxonArmy.splice(randomSax,1);
        }
        return soldierResponse;
    }
    saxonAttack(){
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let damage =  this.saxonArmy[randomSaxon].strength;
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let soldierResponse = this.vikingArmy[randomViking].receiveDamage(damage);
        if (this.vikingArmy[randomViking].health <1){
            this.vikingArmy.splice(randomViking,1);
        }
        return soldierResponse;
    }
    // attack(attackCalled){ //Refactoring, 
    //     let attackerArmy = "";
    //     let victimArmy = "";
    //     if (attackCalled === vikingAttack){
    //         attackerArmy = this.vikingArmy;
    //         victimArmy = this.saxonArmy;
    //     } else {
    //         attackerArmy = this.saxonArmy;
    //         victimArmy = this.vikingArmy;
    //     }
    //     let randomAttacker = Math.floor(Math.random() * this.attackerArmy.length);
    //     let damage =  this.attackerArmy[randomAttacker].strength;
    //     let randomVictim = Math.floor(Math.random() * this.victimArmy.length);
    //     let soldierResponse = this.victimArmy [randomVictim].receiveDamage(damage);
    //     if (this.victimArmy[randomVictim].health <1){
    //         this.victimArmy.splice(randomVictim,1);
    //     }
    //     return soldierResponse;
    // }
    showStatus(){
        if (this.saxonArmy < 1){
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy < 1){
            return "Saxons have fought for their lives and survived another day...";
        }
        else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}