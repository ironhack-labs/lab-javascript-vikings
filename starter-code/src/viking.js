// Soldier
class Soldier {

    constructor(healthArg, strengthArg) {
        this.health = healthArg;
        this.strength = strengthArg;
    }
    attack() {
       
        return this.strength
    }
    receiveDamage(damage) {
      
        this.health = this.health - damage
    }

}

// Viking
class Viking extends Soldier {
    // No he entendido nada esto parte!!!!
    constructor(name, health, strength) {
        super(health, strength) // Porque no puedo coger healthArg, strengthArg
        this.name = name
    }
    receiveDamage(damage) {
      
        this.health = this.health - damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return `Odin Owns You All!`
    }
    
}


// Saxon
class Saxon extends Soldier {

    constructor(health, strength) {
        super(health, strength)
    }

    receiveDamage(damage) {
      
        this.health = this.health - damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }

}

// War
class War {

    constructor(){
         this.vikingArmy = []
         this.saxonArmy = []
    }

    addViking(Viking){
        this.vikingArmy.push(Viking) 
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon) 

    }
    
    vikingAttack(){
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length)
        const attackEach = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)
        console.log(this.saxonArmy[randomSaxon].health)
        if(this.saxonArmy[randomSaxon].health < 0){
            this.saxonArmy.pop()
        }
        return `A Saxon has died in combat`
    }

    saxonAttack(){
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length)
        const attackEach = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)
        if(this.vikingArmy[randomViking].health < 0){
            this.vikingArmy.pop()
        }
        return `Harald has received 25 points of damage`
    }



}