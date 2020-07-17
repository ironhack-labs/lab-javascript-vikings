class Soldier {
  constructor(health, strength){
      this.health = health
      this.strength = strength
}
attack() {
  return this.strength
}
receiveDamage(damage) {
  this.health -= damage
}
}

class Viking extends Soldier {
  constructor (name, health, strenght) {
    super (health, strenght)
      this.name = name
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) { 
        return `${this.name} received ${damage} points of damage` 
    } else { 
        return `${this.name} has died in act of combat`
    }
  }
batteCry() {
    return "Odin Owns You All"
}
  }

class Saxon extends Soldier {
    receiveDamage(damage) {
    super.receiveDamage(damage); 
    if (this.health > 0)  {
        return `${this.name} A Saxon has received ${damage} points of damage}`
    } else {
        return `A Saxon has died in combat`
    }
}
    }

class War {
}
