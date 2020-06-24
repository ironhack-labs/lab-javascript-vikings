// Soldier
class Soldier {
    //construct soldier object
    constructor(health,strength){
    this.health = health;
    this.strength = strength;
    } 
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
    }
}

// Viking
//copy soldier object and add name for viking.
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength)
        this.name = name
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if(this.health > 0){
            return (`${this.name} has received ${damage} points of damage`);
        } else {
            return (`${this.name} has died in act of combat`)
        }
    }
    battleCry() {
        return (`Odin Owns You All!`)
    }
}


// Saxon
//copy soldier object for Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health = this.health - damage;
        if(this.health > 0){
            return (`A Saxon has received ${damage} points of damage`);
        } else {
            return (`A Saxon has died in combat`)
        }
    }
}

// War
class War {
    //add army arrays
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    //add vikings to vikingArmy array
    addViking(viking){
        this.vikingArmy.push(viking)
    }

    //add saxon to saxonArmy array
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }

   vikingAttack() {
    // Generate random warriors
    let randSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    
    // Call receive damage on Saxon
    let result = randSaxon.receiveDamage(randViking.strength);
    
    // Get index of random saxon
    let idxSaxon = this.saxonArmy.indexOf(randSaxon)

        //remove dead saxon from saxonArmy
        if (randSaxon.health <= 0) {
            this.saxonArmy.splice(idxSaxon, 1);
        }
        return result;
    }

    saxonAttack(){
    // Generate random warriors
    let randSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    
    // Call receive damage on Viking
    let result = randViking.receiveDamage(randSaxon.strength);
    
    // Get index of random saxon
    let idxViking = this.vikingArmy.indexOf(randViking)

    //remove dead viking from vikingArmy
        if (randViking.health <= 0) {
            this.vikingArmy.splice(idxViking, 1);
        }
        return result;
    }
    
    showStatus(){
        if (this.saxonArmy.length === 0){
            return ("Vikings have won the war of the century!")
        } else if(this.vikingArmy.length === 0) {
            return ("Saxons have fought for their lives and survived another day...")
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }

}

