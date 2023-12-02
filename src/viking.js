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
  // attack (){} from soldier
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  // no constructor because inherits perfectly
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
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
    // choose random soldiers
    let saxonSoldier =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let vikingSoldier =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    // saxon receives damage
    let result = saxonSoldier.receiveDamage(vikingSoldier.strength);
    // remove dead saxons
    for (let i = 0; i < this.saxonArmy.length; i++){
        if (this.saxonArmy[i].health<0){
            this.saxonArmy.splice(i,1);
        }
    }
    return result;
  }
  saxonAttack() {
        // choose random soldiers
        let saxonSoldier =
        this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
      let vikingSoldier =
        this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
      // viking receives damage
      let result = vikingSoldier.receiveDamage(saxonSoldier.strength);
      // remove dead vikings **** DOES NOT WORK ****
      for (let i = 0; i < this.vikingArmy.length; i++){
          if (this.vikingArmy[i].health < 0){
              this.vikingArmy.splice(i,1);
          }
      }
      return result;
  }

  showStatus() {}

}
