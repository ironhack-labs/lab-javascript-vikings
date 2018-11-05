// Soldier
function Soldier(health, strength) {
  this.health = health
  this.strength = strength
  this.attack=()=>{
    return this.strength
  }
  this.receiveDamage= function (damage){
    this.health = this.health - damage
  }
}

// Viking
function Viking(name,health, strength) {
  Soldier.call(this,health,strength)
  this.name = name
  this.receiveDamage = (damage)=>{
      this.health = this.health - damage
      if (this.health > 0) return this.name + " has received "+ damage +" points of damage"
      else return this.name + " has died in act of combat"
  }
  this.battleCry= ()=>{
    return "Odin Owns You All!"
  }
}

// Saxon
function Saxon(health,strength) {
  Soldier.call(this,health,strength)
  this.receiveDamage=(damage)=>{
      this.health = this.health - damage
      if (this.health > 0) return "A Saxon has received " + damage + " points of damage"
      else return "A Saxon has died in combat"   
  }

}

// War
function War() {}
