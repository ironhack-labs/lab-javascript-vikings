
////////////////////////////
////////////////////////////

// Soldier
class Soldier {

  constructor (healthArg, strengthArg){

      this.health = healthArg;
      this.strength = strengthArg;
    };

    attack() {
      return this.strength;
    };

    receiveDamage(theDamage) {
      this.health -= theDamage;

    };

}  // End of Class soldier

// Viking
class Viking extends Soldier {

  constructor(nameArg, healthArg, strengthArg) {
    super(healthArg, strengthArg);

    this.name = nameArg;
  };

  receiveDamage(theDamage) {
    this.health -= theDamage;

    if (this.health > 0) {
      return `${this.name} has received ${theDamage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    };

  };

  battleCry() {
    return "Odin Owns You All!";
  };

}  // End of Class Viking

// Saxon
class Saxon extends Soldier {

  constructor (healthArg, strengthArg) {
    super(healthArg, strengthArg);
  };

  receiveDamage(theDamage) {
    this.health -= theDamage;
    if (this.health > 0) {
      return `A Saxon has received ${theDamage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    };

  };


}  // End of Class Saxon

// War
class War {
  constructor (){

    this.vikingArmy = [];
    this.saxonArmy = [];
  };

  addViking(VikingObj) {
    this.vikingArmy.push(VikingObj);
  };
  addSaxon(SaxonObj) {
    this.saxonArmy.push(SaxonObj);
  };

  vikingAttack() {
    //Math.floor(Math.random() * 6) + 1 :=: (1 -> 6)
    let saxRandom = Math.floor(Math.random() * this.saxonArmy.length);
    let vikRandam = Math.floor(Math.random() * this.vikingArmy.length);
    let vikDamage = this.vikingArmy[vikRandam].strength;
    this.saxonArmy[saxRandom].receiveDamage(vikDamage);

    if (this.saxonArmy[saxRandom].health <= 0) {
      this.saxonArmy.splice(saxRandom, 1);

      return "A Saxon has died in combat"
    };

  };

  saxonAttack() {
    let saxRandom = Math.floor(Math.random() * this.saxonArmy.length);
    let vikRandam = Math.floor(Math.random() * this.vikingArmy.length);
    let saxDamage = this.saxonArmy[saxRandom].strength;
    this.vikingArmy[vikRandam].receiveDamage(saxDamage);

    if (this.vikingArmy[vikRandam].health > 0) {
      return `${this.vikingArmy[vikRandam].name} has received ${saxDamage} points of damage`;
    }

    if (this.vikingArmy[vikRandam].health <= 0) {
      this.vikingArmy.splice(vikRandam, 1);
      return "A viking has died in combat"
    };
  };
  showStatus() {
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return "Vikings and Saxons are still in the thick of battle.";
      }else if (this.saxonArmy.length === 0) {
        return "Vikings have won the war of the century!";
      } else if (this.vikingArmy.length  === 0) {
        return "Saxons have fought for their lives and survive another day...";
      }
  };

}  // End of Class War
