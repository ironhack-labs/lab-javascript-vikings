// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength
    }
    attack () {
        return this.strength
    }
    receiveDamage(damage) {
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier { 
    constructor(name, health, strength) {
        super(health, strength) //Question for T.A.: does super always come before the arguments? When i tried switching this super line and the one after, it wasn't correct on Jasmine
        this.name = name
    }
    receiveDamage(damage) {
        this.health = this.health - damage
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`}
        else return `${this.name} has died in act of combat`

    }
    battleCry() {
    return "Odin Owns You All!" // Question  for t.a. - why is console log not required here before the string?
    }
}

// Saxon
class Saxon extends Soldier{
    // Note to self: these next few lines are not needed here because Saxon is inheriting exactly from Soldier
    // constructor(health,strength){
    //     super(health,strength)
    // }
    receiveDamage(damage) {
        this.health = this.health - damage
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`}
        else return `A Saxon has died in combat`
    }
}

// War

class War {
    constructor(){
        this.vikingArmy = [] //note to self: this is what a construtor looks like when you're assigning an empty array with no arguments
        this.saxonArmy = []
    }
    addViking(viking) {
    this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        let randomVikingIndex= Math.floor(Math.random()*this.vikingArmy.length);
        let vikingRandom= this.vikingArmy[randomVikingIndex]
        
        let randomSaxonIndex= Math.floor(Math.random()*this.saxonArmy.length);
        let saxonRandom= this.saxonArmy[randomSaxonIndex]
        
        let vikingAttack= vikingRandom.attack()
        
        let saxonDefend= saxonRandom.receiveDamage(vikingAttack);
        if (saxonRandom.health <= 0){
            this.saxonArmy.splice(saxonRandom,1)
        }
        return saxonDefend
        }
    
    saxonAttack() {

    }
    showStatus() {
       
    }
}
