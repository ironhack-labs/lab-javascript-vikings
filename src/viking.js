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
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
        return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;    
        }      
    }   
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0){
        return `A Saxon has received ${damage} points of damage`;
        }
        else {
        return `A Saxon has died in combat`; 
        }
        
    }
}


// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(objViking){
        this.vikingArmy.push(objViking);
    }
    addSaxon(objSaxon){
           this.saxonArmy.push(objSaxon);
    }
    vikingAttack() {
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randomSaxon = this.saxonArmy[randomSaxonIndex];
    
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let randomViking = this.vikingArmy[randomVikingIndex];
        
        let result = randomSaxon.receiveDamage(randomViking.strength);
        
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1);
        }
        
        return result;
    }
    saxonAttack() {
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let randomViking = this.vikingArmy[randomVikingIndex];
        
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randomSaxon = this.saxonArmy[randomSaxonIndex];
        
        let result = randomViking.receiveDamage(randomSaxon.strength);
        
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1);
        }
        
        return result;
    }
    showStatus() {
        if  (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day...";
        }
        else if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        }
        else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
    
}
