// Soldier
class Soldier {
    constructor(health, strength) {
      this.health=health;
      this.strength=strength;
    }
    attack () {
      return this.strength;
    }
  
    receiveDamage(damage) {
      this.health -= damage;
  
    }
  }
  
  const soldier1 = new Soldier(5, 2)
  
  soldier1.receiveDamage(1)
  console.log(soldier1)

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
      super(health, strength)
        this.name = name;
    }
    receiveDamage(damage) {
      super.receiveDamage(damage)
      if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`
      } else {
         return `${this.name} has died in act of combat`
      }
    }
  
    battleCry () {
      return `Odin Owns You All!`
    }
  }

    const viking1 = new Viking("Harald", 3, 5)
    console.log(viking1.receiveDamage(4))
    console.log(viking1)

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
      super(health, strength)
    }
  
    attack () {
        return this.strength;
    }
  
    receiveDamage(damage){
      super.receiveDamage(damage)
      if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`
      } else {
         return `A Saxon has died in combat`
      }
    }
  }
  
  const saxon1 = new Saxon(3, 25)
  console.log(saxon1.receiveDamage(2))
  console.log(saxon1)

// War
class War {}
