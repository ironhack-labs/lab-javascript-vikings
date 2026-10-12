// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damageReceived) {
    this.health = this.health - damageReceived;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damageReceived) {
    this.health = this.health - damageReceived;
    if (this.health > 0) {
      return `${this.name} has received ${damageReceived} points of damage`;
    } else if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damageReceived) {
    this.health = this.health - damageReceived;
    if (this.health > 0) {
      return `A Saxon has received ${damageReceived} points of damage`;
    } else if (this.health <= 0) {
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

  addViking(vikingObj) {
    this.vikingArmy.push(vikingObj);
  }

  addSaxon(saxonObj) {
    this.saxonArmy.push(saxonObj);
  }

  warAttack (attackingArmy, defendingArmy){
    let attackingArmySize = attackingArmy.length;
    let defendingArmySize = defendingArmy.length;

    if (attackingArmySize === 0 || defendingArmySize === 0){
      return 'One army is already the victor.';
    }

    let randomAttackNum = Math.floor(Math.random() * attackingArmySize);
    let randomDefendNum = Math.floor(Math.random() * defendingArmySize);
    let randomAttack = attackingArmy[randomAttackNum];
    let randomDefend = defendingArmy[randomDefendNum];
    let result = randomDefend.receiveDamage(randomAttack.strength);

    if (randomDefend.health <=0){
      defendingArmy.splice(randomDefendNum, 1);
    }

    return result;
  }

  vikingAttack() {
    return this.warAttack (this.vikingArmy, this.saxonArmy);
  }

  saxonAttack() {
    return this.warAttack (this.saxonArmy, this.vikingArmy);
  }

  showStatus() {
    let victoryMessage = "";
    if (this.saxonArmy.length === 0) {
      victoryMessage = "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      victoryMessage =
        "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
      victoryMessage = "Vikings and Saxons are still in the thick of battle.";
    }
    return victoryMessage;
  }
}

//Before making code more efficient

//  vikingAttack() {
//     let vikingArmySize = this.vikingArmy.length;
//     let saxonArmySize = this.saxonArmy.length;
//     let randomVikingNum = Math.floor(Math.random() * vikingArmySize);
//     let randomSaxonNum = Math.floor(Math.random() * saxonArmySize);
//     let randomViking = this.vikingArmy[randomVikingNum];
//     let randomSaxon = this.saxonArmy[randomSaxonNum];
//     let result = randomSaxon.receiveDamage(randomViking.strength);

//     if (randomSaxon.health <= 0) {
//       this.saxonArmy.splice(randomSaxonNum, 1);
//     }
//     return result;
//   }

//   saxonAttack() {
//     let vikingArmySize = this.vikingArmy.length;
//     let saxonArmySize = this.saxonArmy.length;
//     let randomVikingNum = Math.floor(Math.random() * vikingArmySize);
//     let randomSaxonNum = Math.floor(Math.random() * saxonArmySize);
//     let randomViking = this.vikingArmy[randomVikingNum];
//     let randomSaxon = this.saxonArmy[randomSaxonNum];
//     let result = randomViking.receiveDamage(randomSaxon.strength);

//     if (randomViking.health <= 0) {
//       this.vikingArmy.splice(randomVikingNum, 1);
//     }
//     return result;
//   }
