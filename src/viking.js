// Soldier
class Soldier {

    constructor (health,strength) {
    this.health = health;
    this.strength = strength
}
//metodos soldier
attack() {
     
    return this.strength
};

receiveDamage(damage) {

    this.health = this.health - damage
}
}

// Viking
class Viking extends Soldier {

    constructor (name,health , strength) {
      super (name,health , strength)

    this.name = name
    this.health = health
    this.strength = strength }

    //metodos viking

    receiveDamage(damage){
        
        this.health = this.health - damage
        let isStillAlive = `${this.name} has received ${damage} points of damage`
        let vikingDies= `${this.name} has died in act of combat`
        if ( this.health > 0 ) {
            return isStillAlive
        } else {
            return vikingDies
        }
    }
    
    battleCry(){
        return `Odin Owns You All!`

    }
}

// Saxon
class Saxon extends Soldier {

//metodos Saxon

receiveDamage(damage){
        
    this.health = this.health - damage
    let isStillAlive = `A Saxon has received ${damage} points of damage`
    let saxonDies= `A Saxon has died in combat`
    if ( this.health > 0 ) {
        return isStillAlive
    } else {
        return saxonDies
    }
}
}
// War
//class War {}
