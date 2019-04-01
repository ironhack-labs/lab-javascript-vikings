// Soldier

function Soldier(health,strength){
  this.health = health
  this.strength = strength
  this.attack = () =>{
   // console.log(`Soldado tiene Salud: ${this.health} /  Fuerza: ${this.strength} y tiene  Ataque:${this.strength}`)
    return this.strength
  }
   this.receiveDamage = (damage) =>{
    this.health -=damage
     //console.log(`Al Soldado le queda ${this.health} vida`)
   }
}
const soldier1 = new Soldier(4,2)
console.log(soldier1.attack())
console.log(soldier1.receiveDamage(1))

// Viking
function Viking(name, health, strength){
  Soldier.call(this,health,strength)
  this.name= name
  this.receiveDamage = (damage) =>{
    this.health -=damage
     console.log(`Al Vikingo le queda ${this.health} vida`)
     if(this.health>0){
       console.log(`${this.name} has received ${damage} points of damage` )
      return `${this.name} has received ${damage} points of damage`  
     }
     else{
      return `${this.name} has died in act of combat`
     }
   }
   this.battleCry = () =>{
    return "Odin Owns You All!"
     //console.log(`Al Soldado le queda ${this.health} vida`)
   }

}
Viking.prototype = Object.create(Soldier.prototype)
const viking1 = new Viking("Ragnar", 8, 2)


// Saxon
let Saxon = function(health,strenght){
  Soldier.call(this,health,strenght)
  this.receiveDamage = (damage) => {
    this.health =this.health-damage
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`
    }else{
      return `A Saxon has died in combat`
    }
  }
 }
 
 Saxon.prototype = Object.create(Soldier.prototype)

// War
function War (){
  this.addViking = (viking) =>{
    new Array()
  }
  this.addSaxon = (saxon) =>{
    new Array()
  }
  this.vikingAttack = () =>{

  }
  this.saxonAttack = () =>{

  }
  this.showStatus = () =>{

  }

}

