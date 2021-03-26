// Iteration 1 - Soldier

let soldier;
const strength = 150;
const health = 300;

class Soldier {
  constructor(health, strength) {
    (this.health = health), (this.strength = strength);
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    if (damage > 0) {
      this.health -= damage;
    }
  }
}

//   soldier = new Soldier(health, strength);
//   const strength = 150;
//   const health = 300;

// Iteration 2 - Viking

// let viking;
// const name = 'Harald';
// const strength = 150;
// const health = 300;

class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength);{
      this.name = name;
    }
  }

  receiveDamage(damage) {
    if (damage > 0) {
      this.health -= damage;
      if (this.health > 0){
        return `${this.name} has received ${damage} points of damage`;
      } else {
        return `${this.name} has died in act of combat`;
      }
    }
  }

  battleCry(){
    return "Odin Owns You All!";
  }
}

// // Iteration 3 - Saxon

// // War
// class War {}
