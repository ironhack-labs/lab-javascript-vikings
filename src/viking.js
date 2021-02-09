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
      return this.health;
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
    receiveDamage(damage) {
      this.health -= damage;
      if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`;
      } else {
        return `A Saxon has died in combat`;
      }
    }
  }
  
  const random = function (max) {
    return Math.floor(Math.random() * Math.floor(max));
  };
  
  // War
  class War {
    constructor() {
      this.vikingArmy = [];
      this.saxonArmy = [];
    }
  
    addViking(Viking) {
      this.vikingArmy.push(Viking);
    }
  
    addSaxon(Saxon) {
      this.saxonArmy.push(Saxon);
    }
  
    vikingAttack() {
      if (this.saxonArmy.length === 0) {
        console.log("The Saxons have been defeated!");
        return "The Saxons have been defeated!";
      }
  
      let randS = random(this.saxonArmy.length);
      let randV = random(this.vikingArmy.length);
  
      let damagedSaxon = this.saxonArmy[randS];
      let attackingViking = this.vikingArmy[randV];
  
      if (damagedSaxon.health <= attackingViking.strength) {
        this.saxonArmy.splice(this.saxonArmy[randS], 1);
        return damagedSaxon.receiveDamage(attackingViking.strength);
      } else {
        return damagedSaxon.receiveDamage(attackingViking.strength);
      }
    }
  
    saxonAttack() {
      let randS = random(this.saxonArmy.length);
      let randV = random(this.vikingArmy.length);
  
      let attackingSaxon = this.saxonArmy[randS];
      let damagedViking = this.vikingArmy[randV];
  
      if (damagedViking.health <= attackingSaxon.strength) {
        this.vikingArmy.splice(this.vikingArmy[randV], 1);
        return damagedViking.receiveDamage(attackingSaxon.strength);
      } else {
        return damagedViking.receiveDamage(attackingSaxon.strength);
      }
    }
  
    // Attempt at the bonus //
  
    attack(attack, damaged) {
      if (attack === damaged) "An army cannot attack itself!";
  
      let randS = random(this.saxonArmy.length);
      let randV = random(this.vikingArmy.length);
      let a, d;
  
      if (attack == "viking") {
        a = this.vikingArmy[randV];
        d = this.saxonArmy[randS];
      } else {
        d = this.vikingArmy[randV];
        a = this.saxonArmy[randS];
      }
  
      if (d.health <= a.strength) {
        if (attack == "viking") {
          this.vikingArmy.splice(this.vikingArmy[randV], 1);
        } else {
          this.saxonArmy.splice(this.saxonArmy[randS], 1);
        }
  
        return d.receiveDamage(a.strength);
      } else {
        return d.receiveDamage(a.strength);
      }
    }
  
    showStatus() {
      if (this.vikingArmy.length === 0) {
        return `Saxons have fought for their lives and survived another day...`;
      } else if (this.saxonArmy.length === 0) {
        return `Vikings have won the war of the century!`;
      } else {
        return `Vikings and Saxons are still in the thick of battle.`;
      }
    }
  }
  
  // let V1 = new Viking("huf", 100, 90);
  // let S1 = new Saxon(95, 40);
  // let S2 = new Saxon(40, 150);
  
  // let war = new War();
  
  // war.addSaxon(S1);
  // war.addSaxon(S2);
  // war.addViking(V1);
  
  // console.log(war);
  // war.saxonAttack();
  // war.vikingAttack();
  // war.saxonAttack();
  // war.vikingAttack();
  // console.log(war);
  