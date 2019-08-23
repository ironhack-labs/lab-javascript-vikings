// Soldier
class Soldier {

  constructor (health, strength) {
    this.health = health
    this.strength = strength
  }

  attack () {
    return this.strength
  }

  receiveDamage (damage) {
    this.health -= damage
  }
  
}

// Viking
class Viking extends Soldier {

  constructor (name, health, strength) {
    super(health, strength)
    this.name = name
  }

  receiveDamage (damage) {
    this.health -= damage

    if (this.health <= 0) return `${this.name} has died in act of combat`
    
    return `${this.name} has received ${damage} points of damage`
  }

  battleCry () {
    return `Odin Owns You All!`
  }
  
}

// Saxon
class Saxon extends Soldier {

  constructor (health, strength) {
    super(health, strength)
  }

  receiveDamage (damage) {
    this.health -= damage

    if (this.health <= 0) return `A Saxon has died in combat`
    
    return `A Saxon has received ${damage} points of damage`
  }
  
}

// War
class War {

  constructor () {
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking (vikingObject) {
    this.vikingArmy.push(vikingObject)
  }

  addSaxon (saxonObject) {
    this.saxonArmy.push(saxonObject)
  }

  vikingAttack () {
    let vikingAttackDamage = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].attack()
    
    let vikingAttackResult = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
      .receiveDamage(
        vikingAttackDamage
      )

    this.saxonArmy = this.saxonArmy.filter( (saxonSoldier) => saxonSoldier.health > 0  )

    return vikingAttackResult
  }

  saxonAttack () {
    let saxonAttackDamage = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].attack()
    
    let saxonAttackResult = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
      .receiveDamage(saxonAttackDamage)

    this.vikingArmy = this.vikingArmy.filter( (vikingSoldier) => vikingSoldier.health > 0 )

    return saxonAttackResult
  }

  showStatus () {

    return (this.saxonArmy.length === 0) ?
      `Vikings have won the war of the century!` :
        (this.vikingArmy.length === 0) ?
          `Saxons have fought for their lives and survive another day...` :
            `Vikings and Saxons are still in the thick of battle.`
  }
  
}
