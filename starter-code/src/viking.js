// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg
    this.strength = strengthArg
    this.attack = () =>{
    return this.strength
    } 
    this.receiveDamage = (damageValue) =>{ 
        this.health = this.health - damageValue
    }
}

// Viking
/*function Viking {
    
} */

let soldier1 = new Soldier(300, 300) 

let Viking = function(name,healthArg, strengthArg){
    Soldier.call(this, healthArg, strengthArg)
    this.name = name
    this.battleCry = () =>{
        console.log("Odin Owns You All!!!")
        return "Odin Owns You All!"
    }
    this.receiveDamage = (damage) => {
        this.health = this.health - damage
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } return `${this.name} has died in act of combat`        
    }
  }

Viking.prototype = Object.create(Soldier.prototype)

let vikingo1 = new Viking('Rad', 300, 300) 
/*
// Saxon
function Saxon {}
 */
let Saxon = function(healthArg, strengthArg){
    Soldier.call(this, healthArg, strengthArg)
    this.receiveDamage = (damage) => {
        this.health = this.health - damage
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        } return `A Saxon has died in combat`        
    }
  }
  Saxon.prototype = Object.create(Soldier.prototype)


/*
// War
function War {}
 */