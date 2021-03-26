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
// 
// // Iteration 3 - Saxon

// // War
// class War {}
