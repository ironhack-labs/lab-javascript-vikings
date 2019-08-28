// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  };
  attack = () => {
    return this.strength
  };
  receiveDamage = (damage) => {
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super (health, strength);
    this.name = name
  };
  receiveDamage = (damage) => {
    if (this.health - damage > 0) {
      this.health -= damage
      return `${this.name} has received ${damage} points of damage`
    }
    else {
      this.health -= damage
      return `${this.name} has died in act of combat`
    }
  };
  battleCry = () => {
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
      super(health, strength);
    };
    receiveDamage = (damage) => {
      if (this.health - damage > 0) {
        this.health -= damage
        return `A Saxon has received ${damage} points of damage`
      }
      else {
        this.health -= damage
        return `A Saxon has died in combat`
      }
    }
}

// War
class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  };
  addViking = (viking) => {
    this.vikingArmy.push(viking)
  };
  addSaxon = (saxon) => {
    this.saxonArmy.push(saxon)
  };
  vikingAttack = () => {
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length)

    let move = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)
    if (this.saxonArmy[randomSaxon].health - this.vikingArmy[randomViking].strength < 0) {
      this.saxonArmy.splice(randomSaxon, 1)
    }
    return move
  };
  saxonAttack = () => {
      let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
      let randomViking = Math.floor(Math.random() * this.vikingArmy.length)
  
      let move = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)
      if (this.vikingArmy[randomViking].health - this.saxonArmy[randomSaxon].strength < 0) {
        this.vikingArmy.splice(randomViking, 1)
      }
      return move
    };
  showStatus = () => {
  //   if the Saxon array is empty, should return "Vikings have won the war of the century!"
  // if the Viking array is empty, should return "Saxons have fought for their lives and survive another day..."
  // if there are at least 1 Viking and 1 Saxon, should return "Vikings and Saxons are still in the thick of battle."
    if(this.saxonArmy.length <= 0) return "Vikings have won the war of the century!"
    else if (this.vikingArmy.length <= 0) return "Saxons have fought for their lives and survive another day..."
    else return "Vikings and Saxons are still in the thick of battle."
  }
}
