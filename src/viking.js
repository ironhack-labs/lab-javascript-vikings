// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
            this.strength = strength
    }
    attack() {
        return this.strength; // uses the strength of that instance 
    }
    receiveDamage(damage) {
        this.health -= damage // this.health = this.health - damage works the same too 
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) { // has an additional property so you must use constructor 
        super(health, strength) // call these properties from Soldier 
        this.name = name // additional property 
    }
    receiveDamage(damage) {
        this.health -= damage;

        if (this.health > 0) return `${this.name} has received ${damage} points of damage` // add string literal and pass as a variable this.name and damage
       
        if (this.health <= 0) return `${this.name} has died in act of combat` //string interpolation
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;

        if (this.health > 0) return `A Saxon has received ${damage} points of damage` // or `A Saxon has received` + damage + ` the rest of the string`
        
        if (this.health <= 0) return `A Saxon has died in combat`; // no variables   
    }
}

// War
class War {
    constructor() { // need to use constructor because you need to add some properties 
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) { // you could make your viking name newViking to be more specific with variable names 
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
// you could make a helper function because this function will be reused to make it simplier
//then pass the getRandom as the index in randomViking

    /* getRandom(army)  {
        return Math.floor(Math.random() * army.length)
    }*/



    vikingAttack() {
        const randomArrVIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomArrVIndex];
        const randomArrSIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomArrSIndex];

        // should make Saxon receiveDamage() equal to the strength of a Viking
        const damageDone = randomSaxon.receiveDamage(randomViking.attack());

        // should remove dead saxons from the army
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomArrSIndex, 1); //need to include the index, not the name of the item
        }
        // should return result of calling receiveDamage() of a Saxon with the strength of a Viking
        return damageDone;
    }
    saxonAttack() {
        const randomArrVIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomArrVIndex];
        const randomArrSIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomArrSIndex];

        // should make Saxon receiveDamage() equal to the strength of a Viking
        let damageDone = randomViking.receiveDamage(randomSaxon.attack());

        // should remove dead saxons from the army
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomViking, 1);
        }
        // should return result of calling receiveDamage() of a Saxon with the strength of a Viking
        return damageDone;
    }

    // since attack is being used in both saxon and viking attack, you could make that function 
    // use it in both methods and call it to make it more simple 

    showStatus() {
        if (this.saxonArmy.length === 0) return `Vikings have won the war of the century!`
        
        if (this.vikingArmy.length === 0) return `Saxons have fought for their lives and survived another day...`
        
        return `Vikings and Saxons are still in the thick of battle.`
    }
}
