function Soldier(health, strength){
  this.health = health
  this.strength = strength 
  this.attack = () => {
      return this.strength
  }
    this.receiveDamage = (damage) => {
    this.attack ()
    this.health -= damage 
  }
}

function Viking (name, health, strength){
  Soldier.call(this, health, strength)
  this.name = name || "sinNombre"
  this.receiveDamage = (damage) =>{
      this.health -= damage
      if (this.health <= 0){
        return this.name + ' has died in act of combat' 
      }
      if(this.health > 0){
        return this.name + " has received " + damage  + " points of damage"
      } 
  }
  this.battlecry = () =>{
    return console.log("Odin owns you")
  }
}

function Saxon (health, strength){
  Soldier.call(this, health, strength)
  this.receiveDamage = (damage) =>{
      this.health -= damage
      if (this.health > 0){
        return 'A Saxon has received ' + damage + ' points of damage'
      }
      if(this.health <= 0){
        return "A Saxon has died in combat"
      } 
  }
}