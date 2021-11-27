// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  };

  receiveDamage(theDamage) {
    this.health = this.health-theDamage;
  };

}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(theDamage){
    this.health = this.health-theDamage;
    if(this.health>0) {
      return `${this.name} has received ${theDamage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  };
  battleCry(){
      return (`Odin Owns You All!`);
    };
    
}

// Saxon
class Saxon extends Soldier{
  constructor(health, strength){
    super(health,strength);
  }
  receiveDamage(theDamage) {
    this.health = this.health-theDamage;
    if(this.health>0) {
      return `A Saxon has received ${theDamage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  };
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];
    addViking(viking) {
      this.vikingArmy.push(viking);
    };
    addSaxon(saxon){
      this.saxonArmy.push(saxon);
    };
    vikingAttack() {
      let randomSaxonSoldier = Math.floor(Math.random() * this.saxonArmy.length);
      let randomSaxon = this.saxonArmy[randomSaxonSoldier];
      let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
      let resultVikingAttacks = randomSaxon.receiveDamage(randomViking.strength);

      if (randomSaxon.health <= 0) {
        this.saxonArmy.splice(randomSaxonSoldier,1);
      }
      return resultVikingAttacks;
    };
    saxonAttack(){
      let randomVikingSoldier = Math.floor(Math.random() * this.vikingArmy.length);
      let randomViking = this.vikingArmy[randomVikingSoldier];
      let randomSaxon = this.SaxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
      let resultSaxonAttacks = randomViking.receiveDamage(randomSaxon.strength);

      if (randomViking.health <= 0) {
        this.vikingArmy.splice(randomVikingSoldier, 1);
      }
      return resultSaxonAttacks;
    };

    showStatus(){
    if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else if (this.saxonArmy.length === 0 ) {
        return `Vikings have won the war of the century!`;
    } else {
        return `Vikings and Saxons are still in the thick of battle.`;
     }
  };
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
