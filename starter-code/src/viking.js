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
    let vikingHealth = (this.health -= damage);
    if (vikingHealth > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else if (vikingHealth <= 0) {
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
    let saxonHealth = (this.health -= damage);
    if (saxonHealth > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else if (saxonHealth <= 0) {
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
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].attack());
    if (randomSaxon.health === 0) {
      this.saxonArmy.splice(randomSaxon);
    }
    return;
  }
  saxonAttack() {
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    this.vikingArmy[randomViking].receiveDamage(this.vikingArmy[randomSaxon].attack());
    // if (randomViking.health === 0) {
    //   this.randomViking.splice(randomViking);
    // }
    return;
  }
}

// describe('vikingAttack() method', () => {
//   it('should be a function', () => {
//     expect(typeof war.vikingAttack).toBe('function');
//   });

//   it('should receive 0 arguments', () => {
//     expect(war.vikingAttack.length).toEqual(0);
//   });

//   it('should make Saxon receiveDamage() equal to the strength of a Viking', () => {
//     let oldHealth = saxon.health;
//     war.vikingAttack();
//     expect(saxon.health).toEqual(oldHealth - viking.strength);
//   });

//   it('should remove dead saxons from the army', () => {
//     war.vikingAttack();
//     expect(war.saxonArmy.length).toEqual(0);
//   });

//   it('should return result of calling receiveDamage() of a Saxon with the strength of a Viking', () => {
//     expect(war.vikingAttack()).toEqual('A Saxon has died in combat');
//   });
// });

// });
// Math.floor(Math.random()
