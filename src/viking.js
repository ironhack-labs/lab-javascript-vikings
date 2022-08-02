function selectRandom(array){
  let rand = Math.floor(Math.random() * array.length);
  return(array[rand]);
}


// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() { return (this.strength); }
  receiveDamage(damage) { this.health -= damage; }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    return (this.health > 0 ? `${this.name} has received ${damage} points of damage`
	    : `${this.name} has died in act of combat`);
  }
  battleCry() { return ('Odin Owns You All!'); }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    return (this.health > 0 ? `A Saxon has received ${damage} points of damage`
	    : `A Saxon has died in combat`);
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];
  addViking(viking) { this.vikingArmy.push(viking); }
  addSaxon(saxon) { this.saxonArmy.push(saxon); }
  vikingAttack() {
    let randomSaxon = selectRandom(this.saxonArmy);
    let randomViking = selectRandom(this.vikingArmy);
    let outcome = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health <= 0)
      this.saxonArmy.pop(randomSaxon);
    return (outcome);
  }
  saxonAttack() {
    let randomViking = selectRandom(this.vikingArmy);
    let randomSaxon = selectRandom(this.saxonArmy);
    let outcome = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health <= 0)
      this.vikingArmy.pop(randomViking);
    return (outcome);
  }
  showStatus() {
    if (this.saxonArmy.length === 0)
      return ('Vikings have won the war of the century!');
    else if (this.vikingArmy.length === 0)
      return ('Saxons have fought for their lives and survived another day...');
    else
      return ('Vikings and Saxons are still in the thick of battle.');
  }

}
