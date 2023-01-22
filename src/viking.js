// Soldier
class Soldier {
    constructor (health, strength){
                this.health = health
                this.strength = strength
            }

        attack(){
            return this.strength
        }

        receiveDamage(damage){
             this.health - damage
        }
}

    soldier1 = new Soldier(100, 100)
    soldier1.receiveDamage(50)
    console.log(soldier1)
    
    
// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
    super(health, strength)
    this.name = name
    this.health = health
    this.strength = strength

    }
    receiveDamage(damage){
        this.health - damage
    if(this.health - damage > 0){
        return `${this.name} has received ${damage} points of damage`
    } 
    else return `${this.name} has died in act of combat`
    }

    battleCry(){
        return "Odin Owns You All!"
    }
}
viking1 = new Viking("Ragnar", 100, 100)
console.log(viking1)
console.log(viking1.receiveDamage(50))

// Saxon
class Saxon extends Soldier {
    super(health, strength){
    this.health = health
    this.strength = strength}

    receiveDamage(damage){
        this.health - damage
        if(this.health - damage > 0){
           return `A Saxon has received ${damage} points of damage`
        }
        else return `A Saxon has died in combat`
    }
}

// War
class War {}
