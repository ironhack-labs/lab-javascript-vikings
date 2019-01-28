// Soldier
function Soldier(health, strength) {
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

  recieveDamage(damage){
    health -= damage
    if (health > 0){
      return this.name = 'has recieved' + damage + 'points of damage'
    }
    else{
      this.name = 'has die in act of combat'
    }
  }

  battleCry()
}

// Saxon
function Saxon() {}

// War
function War() {}
