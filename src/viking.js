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
  attack() {
    return this.strength;
  }

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

  addViking(vikingObj) {
    this.vikingArmy.push(vikingObj);
  }

  addSaxon(saxonObj) {
    this.saxonArmy.push(saxonObj);
  }

  // vikingAttack() {
  //   //to get a random Viking to attack
  //   let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

  //   //to get a random Index from the saxonArmy array for later .splice use
  //   let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

  //   //to get a random saxon to receive the attack
  //   let randomSaxon = this.saxonArmy[randomSaxonIndex];

  //   //the attack
  //   let battleResult = randomSaxon.receiveDamage(randomViking.strength);

  //   //to see if the saxon is dead or not and if yes, remove them from the army
  //   if (randomSaxon.health <= 0) {
  //     this.saxonArmy.splice(randomSaxonIndex, 1);
  //   }
  //   return battleResult;
  // }

  // saxonAttack() {
  //   let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

  //   let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

  //   let randomViking = this.vikingArmy[randomVikingIndex];

  //   let battleResult = randomViking.receiveDamage(randomSaxon.strength);

  //   if (randomViking.health <= 0) {
  //     this.vikingArmy.splice(randomVikingIndex, 1);
  //   }
  //   return battleResult;
  // }

  //REFACTORING BOTH saxonAttack() AND vikingAttack() INTO ONE SINGLE METHOD:

  //attacker and defender are vikingArmy array and saxonArmy array interchangeably;
  //Console.log()s add visual input of the battle for the player
  
  goToWar(attacker, defender) {
    
    console.log(`The ${attacker} is attacking and the ${defender} is defending!`);

    let randomAttIndex = Math.floor(Math.random() * attacker.length);

    let randomAtt = attacker[randomAttIndex];

    let randomDefIndex = Math.floor(Math.random() * defender.length);

    let randomDef = defender[randomDefIndex];

    let battleResult = randomDef.receivesDamage(randomAtt.strength);

    console.log(`The soldier ${randomDef} took ${randomAtt.strength} of damage from ${randomAtt}, his health is at ${randomDef.health} points.`);

    if (randomDef.health <= 0) {
      console.log(`${randomDef} is out of battle. He will be removed from the field.`);
      defender.splice(randomDefIndex, 1);
    }
    console.log(`${randomDef} is not out of battle yet! Let's keep on fighting!`);
    return battleResult;
  }

  //ATTEMPT TO IMPLEMENT AUTOMATION IN THE WAR:

  //army1 and army2 are arrays of saxons and vikings, interchangeably
  battleRoyale(army1, army2) {
    if (!army1.length || !army2.length) {
      return `One or both of the armies don't have soldiers, this can't be a battle`;
    } else {
      while (army1.length > 0 || army2.length > 0) {
        if ((army1.length === 0 && army2.length > 0) || (army1.length > 0 && army2.length === 0)) {
          return this.showWinner();
        } else if (army1.length > army2.length) {
          return this.goToWar(army2, army1);
        } else if (army1.length < army2.length) {
          return this.goToWar(army1, army2);
        }
      }
    }
  }

  //using the method above we don't need the last else in showStatus(), so for the goToWar() method we could use the following method:

  showWinner() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    }
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
