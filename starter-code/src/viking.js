// Soldier
class Soldier {
    constructor (health, strength) {
    this.health = health;
    this.strength = strength;
    }
        //should be a function
        //should receive 0 arguments
        //should return the strength property of the Viking
        
    attack(){
        
        return this.strength
    
    }
    receiveDamage (damage){ 
        this.health = this.health - damage

    }
} 
//Modify the Soldier class and add 2 methods to it: attack(), and receiveDamage().
//should receive 2 arguments (health & strength)
//should receive the health property as its 1st argument
//should receive the strength property as its 2nd argument

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health,strength)
        this.name = name;

    }
    receiveDamage (damage){ 
        this.health = this.health - damage
        if(this.health > 0) {
            return `${this.name } has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry (){
        return "Odin Owns You All!"
    }  
}


// Saxon
class Saxon extends Soldier{
   receiveDamage(damage){
        this.health = this.health - damage
        if(this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
   }
}


// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(name) {
        this.vikingArmy.push(name)
    }

    addSaxon(name) {
        this.saxonArmy.push(name)
    }

    vikingAttack() {
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon = this.saxonArmy[randomSaxonIndex];
        let randomViking = this.vikingArmy[randomVikingIndex];

        let value = randomSaxon.receiveDamage(randomViking.strength)

        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1);
        }

        return value;
    }

    saxonAttack() {
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon = this.saxonArmy[randomSaxonIndex];
        let randomViking = this.vikingArmy[randomVikingIndex];

        let value2 = randomViking.receiveDamage(randomSaxon.strength)

        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1);
        }

        return value2;
    }

    showStatus() {

        if (this.saxonArmy.length <= 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length <= 0) {
            return "Saxons have fought for their lives and survive another day...";
        }

        if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return "Vikings and Saxons are still in the thick of battle."
        }



    }
}

