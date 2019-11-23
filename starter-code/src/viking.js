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
class Viking extends Soldier{

    constructor(name, health, strength) {
      super(health, strength);
      this.name = name;
    }

    receiveDamage(damage) {
      this.health -= damage;
      return (this.health > 0) ?  `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
    }

    battleCry() {
      return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier{

  receiveDamage(damage) {
    this.health -= damage;
    return (this.health > 0) ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
  }
}

// War
class War {

  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let randSaxon = Math.floor(Math.random() * (this.saxonArmy.length));
    let randViking = Math.floor(Math.random() * (this.vikingArmy.length));

    let attackResult = this.saxonArmy[randSaxon].receiveDamage(this.vikingArmy[randViking].attack());

    if(this.saxonArmy[randSaxon].health <= 0) this.saxonArmy.splice(randSaxon-1,1);

    return attackResult;

  }

  saxonAttack() {
    let randSaxon = Math.floor(Math.random() * (this.saxonArmy.length));
    let randViking = Math.floor(Math.random() * (this.vikingArmy.length));

    let attackResult = this.vikingArmy[randViking].receiveDamage(this.saxonArmy[randSaxon].attack());

    if(this.vikingArmy[randViking].health <= 0) this.vikingArmy.splice(randViking-1,1);

    return attackResult;

  }

  showStatus() {
    if (this.saxonArmy.length == 0) return "Vikings have won the war of the century!";
    if (this.vikingArmy.length == 0) return "Saxons have fought for their lives and survived another day...";
    return "Vikings and Saxons are still in the thick of battle.";
  }
}
