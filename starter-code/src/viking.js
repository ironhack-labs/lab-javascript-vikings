// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength

  attack(){
    return strength
      }
  recieveDamage(damage){
    this.health - damage
    }
}

// Viking
function Viking extends Soilder(name, health, strength) {
  this.name = name
  this.health = health;
  this.strength = strength

  recieveDamage(damage){
    health -= damage
    if (health > 0){
      return this.name = 'has recieved' + damage + 'points of damage'
    }
    else{
      this.name = 'has die in act of combat'
    }
  }
  battleCry(){
    return 'Odin Owns You All!'
  }
}

// Saxon
function Saxon extends Soilder(health, strength) {
  this.health = health;
  this.strength = strength

  attack(){
    return strength
  }
  recieveDamage(damage){
    health -= damage
    if (this.health > 0){
      return 'A Saxon has recieved' + damage + 'points of damage'
    }
    else{
      return 'A saxon has died'
    }
  }

}

// War
function War() {}
