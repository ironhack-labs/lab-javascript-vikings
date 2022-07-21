class Soldier {
    constructor(health, strength) {
      this.health = health;
      this.strength = strength;
    }
    attack() {
      return this.strength;
    }
    receiveDamage(damage) {
      this.damage = damage;
      this.health -= this.damage;
    }
  }
  
  // Viking
  class Viking extends Soldier {
    constructor(name, health, strength) {
      super(health, strength);
      this.name = name;
    }
    // attack() {
    //   return super.attack();;
    // }
    receiveDamage(damage) {
      // super.receiveDamage()
      this.health = this.health - damage
      if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`;
      } else {
        return `${this.name} has died in act of combat`;
      }
    }
    battleCry() {
      return 'Odin Owns You All!';
    }
  }
  
  // Saxon
  class Saxon extends Soldier {
    // attack() {
    //   return super.attack();
    // }
    receiveDamage(damage) {
      // super.receiveDamage()
      // this.health > 0;
      this.health = this.health - damage
      if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`;
      } else {
      return `A Saxon has died in combat`;
      }
    }
  }
  
  // War
  class War {
    vikingArmy = [];
    saxonArmy = [];
  
    addViking(viking) {
      this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
      this.saxonArmy.push(saxon);
  
    }
    vikingAttack() {
      let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
      let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
      let saxonSoldier = this.saxonArmy[randomSaxonIndex];
      let vikingSoldier = this.vikingArmy[randomVikingIndex];
  
      let attackPower = vikingSoldier.attack();
      let saxonDamage = saxonSoldier.receiveDamage(attackPower);
      if (saxonSoldier.health <= 0) {
        this.saxonArmy.splice(this.saxonArmy.indexOf(saxonSoldier), 1 )
        // this.saxonArmy.pop(saxonSoldier)
      }
      return saxonDamage;
    }
  
    saxonAttack() {
      let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
      let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
      let saxonSoldier = this.saxonArmy[randomSaxonIndex];
      let vikingSoldier = this.vikingArmy[randomVikingIndex];
      let points = saxonSoldier.attack();
      let vikingDamage = vikingSoldier.receiveDamage(points);
      if (vikingSoldier.health <= 0) {
        this.vikingArmy.splice(this.vikingArmy.indexOf(vikingSoldier),1 )
      }
      return vikingDamage;
    }
  
    showStatus() {
      if (this.saxonArmy.length === 0) {
        return 'Vikings have won the war of the century!';
      } else if (this.vikingArmy.length === 0) {
        return 'Saxons have fought for their lives and survived another day...';
      } else {
        return 'Vikings and Saxons are still in the thick of battle.';
      }
    }
  }
  
  // The following is required to make unit tests work.
  /* Environment setup. Do not modify the below code. */
  if (typeof module !== 'undefined') {
    module.exports = { Soldier, Viking, Saxon, War };
  }