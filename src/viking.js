// Soldier
class Soldier {
  constructor (salud, fuerza) {
    this.health = salud 
    this.strenght = fuerza
  }
  attack() {
    return this.strenght
  }
  receiveDamage(damage) {
    this.health - damage
  }
}

//viking
class Viking extends Soldier {
  constructor(nombre, salud, fuerza) {
    super(salud, fuerza)
    this.name = nombre
  }
  receiveDamage(damage) {
    this.health = this.health - damage
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else { 
      return `${this.name} has died in act of combat`
    }
  }
  battleCry() {
  return "Odin Owns You All"
}
}
      // Saxon 
      class Saxon extends Soldier {
        receiveDamage (damage) {
          this.health = this.health - damage
          if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
          } else {
            return `A Saxon has died in combat`
          }
        }
      }