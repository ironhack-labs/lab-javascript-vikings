// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
  
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
      super(health, strength);
      this.name = name;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if(this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry() {
    return `Odin Owns You All!`
  }  
}


// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health -= damage;
    if(this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking) { 
    this.vikingArmy.push(Viking);
  } 
  addSaxon(Saxon) { 
    this.saxonArmy.push(Saxon)
  }
  vikingAttack() { 
    let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]; 
    let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    saxon.receiveDamage(viking.strength);
      if(saxon.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(saxon, 1));  
      return `A Saxon has died in combat`
    }
    return `A Saxon has received ${viking.strength} points of damage`
  }
  saxonAttack() { 
    let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]; 
    let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    viking.receiveDamage(saxon.strength);
      if(viking.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(viking, 1));  
      return `${viking.name} has died in act of combat`
    }
    return `${viking.name} has received ${saxon.strength} points of damage`
  }
  
  showStatus() { 
    if(this.saxonArmy.length <= 0) {
      return "Vikings have won the war of the century!"
    } 
    if(this.vikingArmy.length <= 0) {
    return "Saxons have fought for their lives and survive another day..."
    } 
    if(this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}
