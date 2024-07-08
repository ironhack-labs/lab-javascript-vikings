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
        super(health, strength) 
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
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
class Saxon extends Soldier{
    constructor(health, strength) {
        super(health, strength) 
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {

            return `A Saxon has died in combat`;
        } else {
            return `A Saxon has received ${damage} points of damage`;
        }
    } 
}

// War
class War { 
    vikingArmy=[];
    saxonArmy = [];
    addViking(vikingObject){
        
        this.vikingArmy.push(vikingObject);
    }
    addSaxon(saxonObject){
        
        this.saxonArmy.push(saxonObject);
    }
    
    vikingAttack(){
        let vikingAttackStrength = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)].strength;
        
        let saxonNumber = Math.floor(Math.random()*this.saxonArmy.length);
        let saxonVictim = this.saxonArmy[saxonNumber];
        //console.log(saxonVictim);
        let result = saxonVictim.receiveDamage(vikingAttackStrength);
        if (saxonVictim.health <=0) { this.saxonArmy.splice(saxonNumber,1)}
        return result;
    }
    saxonAttack(){
        let saxonAttackStrength = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)].strength;
        //console.log(saxonAttackStrength);
        let vikingNumber = Math.floor(Math.random()*this.vikingArmy.length);
        let vikingVictim = this.vikingArmy[vikingNumber];
        //console.log(vikingVictim);
        let result = vikingVictim.receiveDamage(saxonAttackStrength);
        if (vikingVictim.health <=0) { this.vikingArmy.splice(vikingNumber,1)}
        return result;
    }
    showStatus(){
        let status = "";
        if(this.saxonArmy.length === 0){status = "Vikings have won the war of the century!"}
        else if (this.vikingArmy.length === 0){ status = "Saxons have fought for their lives and survived another day..."}
        else {status = "Vikings and Saxons are still in the thick of battle."}
        
        console.log (status);
        return status;
    }

    }
 console.log(showStatus());