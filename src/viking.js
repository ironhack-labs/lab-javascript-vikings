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
    return this.health <= 0
      ? `${this.name} has died in act of combat`
      : `${this.name} has received ${damage} points of damage`;
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
// should return "A Saxon has received DAMAGE points of damage", if the Saxon is still alive
// should return "A Saxon has died in combat", if the Saxon dies
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    return this.health <= 0
      ? `A Saxon has died in combat`
      : `A Saxon has received ${damage} points of damage`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    this.getRandom = function (armyArray) {
      const randomIndex = Math.floor(Math.random() * armyArray.length);
      const army = armyArray[randomIndex];
      return army;
    };
  }
  addViking(vikingObject) {
    this.vikingArmy.push(vikingObject);
  }
  addSaxon(saxonObject) {
    this.saxonArmy.push(saxonObject);
  }
  vikingAttack() {
    const Saxon = this.getRandom(this.saxonArmy);
    const Viking = this.getRandom(this.vikingArmy);
    const damageSaxon = Saxon.receiveDamage(Viking.strength);
    if (Saxon.health <= 0) {
      this.saxonArmy.pop(Saxon);
    }
    return damageSaxon;
  }
  saxonAttack() {
    const Saxon = this.getRandom(this.saxonArmy);
    const Viking = this.getRandom(this.vikingArmy);
    const damageViking = Viking.receiveDamage(Saxon.strength);
    if (Viking.health <= 0) {
      this.vikingArmy.pop(Viking);
    }
    return damageViking;
  }
  showStatus() {
    if(this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    } else if(this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survived another day..."
    } else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}