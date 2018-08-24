// Soldier
class Soldier {
  constructor(healthArg, strengthArg){
    this.healthArg = healthArg
    this.strengthArg = strengthArg
  }
  attack (){
    return this.strengthArg
  }
  receiveDamage (damage){
    this.attack ()
    this.receiveDamage -= damage
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, healthArg, strengthArg,){
  super(healthArg, strengthArg,)
  this.name = name
  }
  receiveDamage (damage){
    this.healthArg -= damage
    if (this.healthArg > 0){
      return this.name + ' has received ' + damage + ' points of damage'
    }
    if (this.healthArg <= 0){
      return this.name + ' has died in act of combat'  
    }
  }

  battleCry() {
    return 'Odin Owns You All'
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(healthArg, strengthArg){
  super(healthArg, strengthArg)
  }
  receiveDamage (damage){
    this.healthArg -= damage
    if (this.healthArg > 0){
      return 'A Saxon has received ' + damage + ' points of damage'
    }
    if (this.healthArg === 0){
      return 'A Saxon has died in act of combat'  
    }
  }
}

// War
class War {
  constructor (vikingArmy, saxonArmy){
    
  }
}
