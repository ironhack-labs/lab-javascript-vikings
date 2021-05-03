// Soldier
class Soldier {
  constructor(health, strength){
    //arguments
    this.health = health
    this.strength = strength

    //methods
    this.attack = function() {
      return this.strength
    }
    this.receiveDamage = function(theDamage) {
      this.health = this.health - theDamage
    }
  }
}

// Viking
class Viking extends Soldier{
  constructor (name,health, strength){
    super(health, strength)
    this.name = name

    //methods
    this.receiveDamage = function(theDamage) {
      this.health = this.health - theDamage
      if(this.health > 0){

        return `${this.name} has received ${theDamage} points of damage`
      } else {
        return `${this.name} has died in act of combat`

      }
    }

    this.battleCry = function () {
      return "Odin Owns You All!"
    }
  }

}

// Saxon
class Saxon extends Soldier {
  constructor (health, strength){

    super(health, strength)

    this.receiveDamage = function(theDamage) {
      this.health = this.health - theDamage
      if(this.health > 0){

        return `A Saxon has received ${theDamage} points of damage`
      } else {
        return `A Saxon has died in combat`

      }
    }
  }


}

// War
class War {

  
}
