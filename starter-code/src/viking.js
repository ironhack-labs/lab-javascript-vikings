// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health
    this.strength = strength
  }

  attack(){
    return this.strength
  }

  receiveDamage(damage){
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name,health,strength){
    super(health,strength)
    this.name = name
  }

attack(){
  this.strength = super.attack()
  return this.strength
}

receiveDamage(damage){
  this.health -= damage
  if(this.health > 0){
    return `${this.name} has received ${damage} points of damage`
  }
  else{
    return `${this.name} has died in act of combat`
  }
}

battleCry(){
  return `Odin Owns You All!`
}
}

// Saxon
class Saxon extends Soldier{
  constructor(health,strength){
    super(health,strength)
  }

  attack(){
    this.strength = super.attack()
    return this.strength
  }

  receiveDamage(damage){
    this.health -= damage
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`
    }
    else{
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking(viking){
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }
  vikingAttack(){
    let random_viking = Math.floor(Math.random() * (this.vikingArmy.length)) + 0
    let random_saxon = Math.floor(Math.random() * (this.saxonArmy.length)) + 0
    let damage = this.vikingArmy[random_viking].strength
    
    let result = this.saxonArmy[random_saxon].receiveDamage(damage)
    if (this.saxonArmy[random_saxon].health <= 0){
      this.saxonArmy.splice(random_saxon,1)
    }
    return result
  }
  saxonAttack(){
    let random_viking = Math.floor(Math.random() * (this.vikingArmy.length)) + 0
    let random_saxon = Math.floor(Math.random() * (this.saxonArmy.length)) + 0
    let damage = this.saxonArmy[random_saxon].strength
    
    let result = this.vikingArmy[random_viking].receiveDamage(damage)
    if (this.vikingArmy[random_viking].health <= 0){
      this.vikingArmy.splice(random_viking,1)
    }
    return result
  }

  
  showStatus(){
    if (this.saxonArmy.length == 0){
      return 'Vikings have won the war of the century!'
    }

    if(this.vikingArmy.length == 0){
      return 'Saxons have fought for their lives and survive another day...'
    }

    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0){
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  }
      }


