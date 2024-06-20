// Soldier
class Soldier {
        constructor (health, strength) {
            this.health = health;
            this.strength = strength
        }
        attack () {
            return this.strength //  should be a function,  should receive 0 arguments, should return the `strength` property of the `Soldier`
        }
        receiveDamage(damage) {       // should be a function, should receive 1 argument (the damage)
            this.health = this.health - damage  // should remove the received damage from the `health` property
            // **shouldn't return** anything
    }
}


// Viking
class Viking extends Soldier { // extends means we are copy pasting everything from the previous class 
    constructor (name, health, strength) {
    super(health, strength);  //  extends and super need to go together - otherwise wont work?
    this.name = name;
    }
    attack () {
        return this.strength

    }

    receiveDamage(damage){
        this.health = this.health - damage
        if (this.health > 0) { 
        return `${this.name} has received ${damage} points of damage` }
         else {
          return  `${this.name} has died in act of combat`
    }
    }
    battleCry() {
        return `Odin Owns You All!`
    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
    this.health = this.health - damage
    if (this.health > 0) {
    return `A Saxon has received ${damage} points of damage`
    }
    else {
        return `A Saxon has died in combat`
    }
}
}

    
//BONUS: 

// War
class War {
    constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
}

addViking(viking) {
    this.vikingArmy.push(viking);
}

addSaxon(saxon) {
    this.saxonArmy.push(saxon)
}

// from here to the next // - go through 

vikingAttack(){
    let randomVikingIndex= Math.floor(Math.random()*this.vikingArmy.length); // us choosing a random viking
    let vikingRandom= this.vikingArmy[randomVikingIndex] // us choosing a random viking
    let randomSaxonIndex= Math.floor(Math.random()*this.saxonArmy.length); //random saxon
    let saxonRandom= this.saxonArmy[randomSaxonIndex] //random saxon
    let vikingAttack= vikingRandom.attack()
    let saxonDefend= saxonRandom.receiveDamage(vikingAttack); //did this saxon dies if yes out of the game

    if (saxonRandom.health <= 0){
        this.saxonArmy.splice(saxonRandom,1)
    }
    return saxonDefend
}
saxonAttack(){
    let randomVikingIndex= Math.floor(Math.random()*this.vikingArmy.length); //random viking
    let vikingRandom= this.vikingArmy[randomVikingIndex]
    let randomSaxonIndex= Math.floor(Math.random()*this.saxonArmy.length);
    let saxonRandom= this.saxonArmy[randomSaxonIndex]
    let saxonAttack= saxonRandom.attack()
    let vikingDefend= vikingRandom.receiveDamage(saxonAttack); //did this viking dies if yes out of the game

    if (vikingRandom.health <= 0){
        this.vikingArmy.splice(vikingRandom,1)
    }
    return vikingDefend; }

//to here //

showStatus() {
 if(this.saxonArmy.length === 0 ){
    return `Vikings have won the war of the century!`
 }
 else if (this.vikingArmy.length === 0 ){ 
    return `Saxons have fought for their lives and survived another day...`
 }
 else  {
    return `Vikings and Saxons are still in the thick of battle.`
 } 

 }
}


