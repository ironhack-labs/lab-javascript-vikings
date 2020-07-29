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
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier{
    constructor(name,health,strength){
        super(health,strength)
        this.name = name;
    }
    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health = this.health - damage;
        if(this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry(){
    return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    
    receiveDamage(damage){
        this.health = this.health - damage
        if(this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else{
            return `A Saxon has died in combat`;
        } 
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        let saxonIndex= getRandomInt(0,this.saxonArmy.length);
        let vikingIndex = getRandomInt(0,this.vikingArmy.length)
        let saxon = this.saxonArmy[saxonIndex];
        let viking = this.vikingArmy[vikingIndex];
        let damageSaxon = saxon.receiveDamage(viking.strength)
            
        if(damageSaxon === `A Saxon has died in combat`) {
            this.saxonArmy.splice(saxonIndex, 1);
        }
        return damageSaxon;
    }

    saxonAttack(){
        let saxonIndex= getRandomInt(0,this.saxonArmy.length);
        let vikingIndex = getRandomInt(0,this.vikingArmy.length)
        let saxon = this.saxonArmy[saxonIndex];
        let viking = this.vikingArmy[vikingIndex];
        let damageViking = viking.receiveDamage(saxon.strength)
            
        if(damageViking === `${viking.name} has died in act of combat`) {
            this.vikingArmy.splice(vikingIndex, 1);
        }
        return damageViking;
    }
    showStatus(){
        if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else{
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
    }

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }