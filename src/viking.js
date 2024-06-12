// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(theDamage){
    this.health = this.health - theDamage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(theDamage) {
        this.health -= theDamage;
        if (this.health > 0) {
            return `${this.name} has received ${theDamage} points of damage`;
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
    constructor(health, strength){
        super(health, strength);
    }
    attack(){
        return this.strength
    }
    receiveDamage(theDamage){
        this.health -= theDamage;
        if(this.health > 0){
            return `A Saxon has received ${theDamage} points of damage`;
        } else { 
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
    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
      
    vikingAttack() {
        if (this.saxonArmy.length === 0) {
            return "No Saxons left in the army.";
        }

        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonIndex];

        const result = randomSaxon.receiveDamage(randomViking.strength);

        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1);
        }

        return result;
    }

    saxonAttack(){
        if (this.vikingArmy.length === 0) {
            return "No Saxons left in the army.";
        }

        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomVikingIndex];

        const result = randomViking.receiveDamage(randomSaxon.strength);

        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1);
        }

        return result;
    }
    showStatus(){
        
        if(this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`;
        }
        else if(this.vikingArmy.length === 0){
            return `Saxons have fought for their lives and survived another day...`;
        }
        else {
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    }
}



    
