// Soldier
class Soldier {
    constructor(health, strength){
        this.health= health
        this.strength= strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength)
        this.name = name
       
    }
receiveDamage(damage){
    this.health -= damage
    if (this.health > 0 ){
        return `${this.name} has received ${damage} points of damage`
    }
    else {
        
        return `${this.name} has died in act of combat`

        
    }  
}
battleCry(){
    return "Odin Owns You All!"
}


}




// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength)
        this.health= health
        this.strength= strength
    }
    receiveDamage(damage){
        this.health -= damage
        if (this.health > 0 ){
            return `A Saxon has received ${damage} points of damage`
        }
        else {
            
            return "A Saxon has died in combat"
    
           
            
        }  
}}

class War {
// Now we get to the good stuff: WAR! Our War constructor function will allow us to have a Viking army and a Saxon army that battle each other.
// Modify the War constructor and add 5 methods to its prototype:
        constructor() {
            this.vikingArmy = []
            this.saxonArmy = []}


//  When we first create a War, the armies should be empty. We will add soldiers to the armies later.
// should receive 0 arguments
// should assign an empty array to the vikingArmy property
// should assign an empty array to the saxonArmy property
// addViking() method
// Adds 1 Viking to the vikingArmy. If you want a 10 Viking army, you need to call this 10 times.
// should be a function
// should receive 1 argument (a Viking object)
// should add the received Viking to the army
// shouldn't return anything
addViking(Viking) {
this.vikingArmy.push(Viking)}            
                        

//  When we first create a War, the armies should be empty. We will add soldiers to the armies later.
// should receive 0 arguments
// should assign an empty array to the vikingArmy propert
// should assign an empty array to the saxonArmy property
// addViking() method
// Adds 1 Viking to the vikingArmy. If you want a 10 Viking army, you need to call this 10 times.
// should be a function
// should receive 1 argument (a Viking object)
// should add the received Viking to the army
// shouldn't return anything
addViking(Viking) {
this.vikingArmy.push(Viking)}

//addSaxon() method
// The Saxon version of addViking().
// should be a function
// should receive 1 argument (a Saxon object)
// should add the received Saxon to the army
// shouldn't return anything
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)}
    

// vikingAttack() method
// A Saxon (chosen at random) has their receiveDamage() method called with the damage equal to the strength of a Viking (also chosen at random). This should only perform a single attack and the Saxon doesn't get to attack back.
// should be a function
// should receive 0 arguments
// should make a Saxon receiveDamage() equal to the strength of a Viking
// should remove dead saxons from the army
// should return result of calling receiveDamage() of a Saxon with the strength of a Viking
vikingAttack() {
let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
let saxonDamageReceived = randomSaxon.receiveDamage(randomViking.strength)
this.saxonArmy = this.saxonArmy.filter(function(saxon){return saxon.health > 0})
return saxonDamageReceived}
    


// saxonAttack() method
// The Saxon version of vikingAttack(). A Viking receives the damage equal to the strength of a Saxon.
// should be a function
// should receive 0 arguments
// should make a Viking receiveDamage() equal to the strength of a Saxon
// should remove dead vikings from the army
// should return result of calling receiveDamage() of a Viking with the strength of a Saxon
saxonAttack() {
let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
let vikingDamageReceived = randomViking.receiveDamage(randomSaxon.strength)
this.vikingArmy = this.vikingArmy.filter(function(viking){return viking.health > 0})
return vikingDamageReceived}
   

// showStatus() method
// Returns the current status of the War based on the size of the armies.
// should be a function
// should receive 0 arguments
// if the Saxon array is empty, should return "Vikings have won the war of the century!"
// if the Viking array is empty, should return "Saxons have fought for their lives and survive another day..."
// if there are at least 1 Viking and 1 Saxon, should return "Vikings and Saxons are still in the thick of battle."
showStatus() {
if (this.saxonArmy <= 0) {
return "Vikings have won the war of the century!"
} else if (this.vikingArmy <= 0) {
return "Saxons have fought for their lives and survive another day..."
} else {
return "Vikings and Saxons are still in the thick of battle."}}}        