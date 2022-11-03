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
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(VikingObject) {
    vikingArmy.push(VikingObject);
  }

  addSaxon(SaxonObject) {
    SaxonArmy.push(SaxonObject);
  }

  vikingAttack() {
    Saxon.receiveDamage(Viking.strength);
    if (Saxon.health <= 0) {
        // remove Saxon from army
    }
    return Saxon.receiveDamage(Viking.strength);
  }

  saxonAttack(){
    Viking.receiveDamage(Saxon.strength);
    if (Viking.health <= 0) {
        // remove Viking from army
    }
    return Viking.receiveDamage(Saxon.strength);
  }
}
