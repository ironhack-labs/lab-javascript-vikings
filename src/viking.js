// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health,
      this.strength = strength
  }
  attack() {
    return this.strength
 }
 receiveDamage(damage){
   this.health = this.health - damage
   return
 }
}


// Viking
class Viking extends Soldier{



}

// Saxon
class Saxon {}

// War
class War {}
