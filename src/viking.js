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
    // this.health = this.health - damage;
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
    return this.health <= 0
      ? `${this.name} has died in act of combat`
      : `${this.name} has received ${damage} points of damage`;
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health -= damage;
    return this.health <= 0
      ? `A Saxon has died in combat`
      : `A Saxon has received ${damage} points of damage`;
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(vikingSoldier) {
    this.vikingArmy.push(vikingSoldier);
  }

  addSaxon(saxonSoldier) {
    this.saxonArmy.push(saxonSoldier);
  }

  vikingAttack() {
    let result = this.saxonArmy[this.saxonArmy.length - 1].receiveDamage(
      this.vikingArmy[this.vikingArmy.length - 1].strength
    );

    if(this.saxonArmy[this.saxonArmy.length - 1].health <= 0){
        this.saxonArmy.pop();
    }

    return result
  }

  saxonAttack(){
    let result = this.vikingArmy[this.vikingArmy.length - 1].receiveDamage(this.saxonArmy[this.saxonArmy.length - 1].strength);

    if(this.vikingArmy[this.vikingArmy.length - 1].health <= 0){
        this.vikingArmy.pop();
    }

    return result;
  }

  showStatus(){
    return this.saxonArmy.length === 0 
    ? "Vikings have won the war of the century!"
    : this.vikingArmy.length === 0
    ? "Saxons have fought for their lives and survived another day..."
    : "Vikings and Saxons are still in the thick of battle."
  }

  
}
