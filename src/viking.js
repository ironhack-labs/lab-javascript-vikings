// Soldier
class BaseClass {
  constructor(names = [], values = []) {
    names.forEach((n, idx) => (this[n] = values[idx]));
  }
}

class Soldier extends BaseClass {
//class Soldier {  
constructor(health, strength) {
// this.health= health;
// this.strength =strength;
super(['health', 'strength'], arguments);
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    console.log(this);
    // if (this.health > 0) {
    //   //if one can has health less than 0
    //   //const efectiveDamage = this.health- damage;
    //   //this.health =efectiveDamage<0? 0 : efectiveDamage;
    // }
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    const toPrint = this.health > 0
        ? `${this.name} has received ${damage} points of damage`
        : `${this.name} has died in act of combat`;
    return toPrint;
  }
 
  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);
    return this.health > 0
      ? `A Saxon has received ${damage} points of damage`
      : 'A Saxon has died in combat';
  }
}

// War
class War extends BaseClass {
  constructor() {
    super(['vikingArmy', 'saxonArmy'], [[], []]);
  }
  addViking(myViking) {
    if (myViking instanceof Viking) {
      this.vikingArmy.push(myViking);
    } else
      throw new Error(
        'you are trying to add not a Viking to a Viking Army.They are not that much tolerant yet'
      );
  }
  addSaxon(mySaxon) {
    if (mySaxon instanceof Saxon) {
      this.saxonArmy.push(mySaxon);
    } else
      throw new Error(
        'you are trying to add "not a Saxon" to a Saxon Army.They are not that much tolerant yet'
      );
  }
  
  //TODO replace duplicate codes with a generic SoldierAttack()

  vikingAttack() {
    //these are  [Soldjer, index] :
    const vikingInfo = this.#getRandomSoldjerFrom(this.vikingArmy);
    const saxonInfo = this.#getRandomSoldjerFrom(this.saxonArmy);

    const [saxon, saxonIndex] = saxonInfo;
    const [viking, vikingIndex] = vikingInfo;

    const battleResult = saxon.receiveDamage(viking.strength);
    if (saxon.health > 0) {
      this.saxonArmy[saxonIndex] = saxon;
    } else {
      // He is dead so Send him to Valhalla. Odin be in peace with him
      this.saxonArmy.splice(saxonIndex, 1);
    }
    return battleResult;
  }
  saxonAttack() {
    //these are  [Soldjer, index] :
    const vikingInfo = this.#getRandomSoldjerFrom(this.vikingArmy);
    const saxonInfo = this.#getRandomSoldjerFrom(this.saxonArmy);
    const [saxon, saxonIndex] = saxonInfo;
    const [viking, vikingIndex] = vikingInfo;
    const battleResult = viking.receiveDamage(saxon.strength);
    if (viking.health > 0) {
      this.vikingArmy[vikingIndex] = viking;
    } else {
      // He is dead so Send him to Valhalla. Odin be in peace with him
      this.vikingArmy.splice(vikingIndex, 1);
    }
    return battleResult;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    }
    if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    }
    //default :
    return 'Vikings and Saxons are still in the thick of battle.';
  }
  #getRandomSoldjerFrom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return [item, randomIndex];
  }
  // #soldjerAttack(solInfo1, solInfo2, attaker) {
  //   const [saxon, saxonIndex] = solInfo1;
  //   const [viking, vikingIndex] = solInfo2;
  //   switch (attaker) {
  //     case 'Viking':
  //       const battleResult = saxon.receiveDamage(viking.strength);
  //       if (saxon.health > 0) {
  //         this.saxonArmy[saxonIndex] = saxon;
  //       } else {
  //         // He is dead so Send him to Valhalla. Odin be in peace with him
  //         this.saxonArmy.splice(saxonIndex, 1);
  //       }
  //       break;
  //     case 'Saxon':
  //       break;
  //     default:
  //       break;
  //   }
  //   return battleResult;
  // }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
