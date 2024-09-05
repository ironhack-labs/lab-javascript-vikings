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
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return "A Saxon has died in combat";
    }
  }
}
// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    
    let anyVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let anyViking = this.vikingArmy[anyVikingIndex];
    let anySaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let anySaxon = this.saxonArmy[anySaxonIndex];
    let damage = anyViking.strength;
    let result = anySaxon.receiveDamage(damage);
    if (anySaxon.health <= 0) {
      this.saxonArmy.splice(anySaxonIndex, 1);
    }
    return result;
  }
  saxonAttack() {
    let anyVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let anyViking = this.vikingArmy[anyVikingIndex];
    let anySaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let anySaxon = this.saxonArmy[anySaxonIndex];
    let damage = anySaxon.strength;
    let result = anyViking.receiveDamage(damage);
    if (anyViking.health <= 0) {
      this.vikingArmy.splice(anyVikingIndex, 1);
    }
    return result;
  }
  showStatus() {
    if(this.saxonArmy.length <= 0){
        return "Vikings have won the war of the century!"
    } else if(this.vikingArmy.length <= 0){
        return "Saxons have fought for their lives and survived another day..."
  } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0){
    return "Vikings and Saxons are still in the thick of battle."
  }
}
}