// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -=damage
         
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super (health, strength)
        this.name = name
    }
    receiveDamage(damage){
        this.health -=damage
        if(this.health>0){
        return `${this.name} has received ${damage} points of damage`
    }
    else{
        return `${this.name} has died in act of combat`
    }
   
        }   
        battleCry(){

            return "Odin Owns You All!"
        }
            }

// Saxon
class Saxon extends Soldier {
    constructor (health, strength){
        super(health, strength)
    }
    receiveDamage(damage){
        this.health -=damage
        
        if(this.health>0){
        return `A Saxon has received ${damage} points of damage`
}
else{
    return "A Saxon has died in combat"
}
    }
}
//Bonus - War
class War{
    constructor(){
    this.vikingArmy = []
    this.saxonArmy =[]
}
addViking(Viking){
this.vikingArmy.push(Viking)
}
addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
}
vikingAttack(){
// Select a random Saxon and Viking from the armies

    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)

    const randomSaxon = this.saxonArmy[randomSaxonIndex]
    const randomViking = this.vikingArmy[randomVikingIndex]

// Saxon receives damage from Viking's attack
    const result = randomSaxon.receiveDamage(randomViking.attack())

    // If the Saxon dies, remove them from the army
    if (randomSaxon.health <= 0) {
        this.saxonArmy.splice(randomSaxonIndex, 1)
    }

      return result
}
saxonAttack(){
// Select a random Viking and Saxon from the armies
 
    const randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length)
    const randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length)

    const randomSaxon = this.saxonArmy[randomSaxonIndex]
    const randomViking = this.vikingArmy[randomVikingIndex]

// Viking receives damage from Saxon's attack

    const result = randomViking.receiveDamage(randomSaxon.attack())

// If the Viking dies, remove them from the army

    if(randomViking.health <=0){
        this.vikingArmy.splice(randomVikingIndex, 1)
    }
        return result
}

//BONUS - Iteration 5 - Show Status 

showStatus(){
//if the Saxon array is empty, should return "Vikings have won the war of the century!"
if(this.saxonArmy.length === 0){
    return "Vikings have won the war of the century!"
}
//if the Viking array is empty, should return "Saxons have fought for their lives and survived another day..."
else if(this.vikingArmy.length === 0){
    return "Saxons have fought for their lives and survived another day..."
}
//if there are at least 1 Viking and 1 Saxon, should return "Vikings and Saxons are still in the thick of battle."
else {
    return "Vikings and Saxons are still in the thick of battle."
}
}
}