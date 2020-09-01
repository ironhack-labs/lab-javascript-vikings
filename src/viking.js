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
  attack() {
    return super.attack();
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    return this.health > 0
      ? `${this.name} has received ${damage} points of damage`
      : `${this.name} has died in act of combat`;
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);
    return this.health > 0
      ? `A Saxon has received ${damage} points of damage`
      : `A Saxon has died in combat`;
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
    // create random number;
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    //pick a random saxon;
    let randomSaxon = this.saxonArmy[randomSaxonIndex];
    //pick random viking;
    let randomViking = this.vikingArmy[randomVikingIndex];

    //saxon recieve damage from viking
    let resultOfBattle = randomSaxon.receiveDamage(randomViking.strength);

    //condition remove saxon
    if (resultOfBattle === "A Saxon has died in combat") {
      this.saxonArmy.splice(randomSaxonIndex, 1);
      return resultOfBattle;
    }
    return resultOfBattle;
    //return result of recieve damage
  }

  saxonAttack() {
    // create random number;
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    //pick a random saxon;
    let randomSaxon = this.saxonArmy[randomSaxonIndex];
    //pick random viking;
    let randomViking = this.vikingArmy[randomVikingIndex];

    //saxon recieve damage from viking
    let resultOfBattle = randomViking.receiveDamage(randomSaxon.strength);

    //condition remove saxon
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
      return resultOfBattle;
    }
    return resultOfBattle;
    //return result of recieve damage
  }

   //*BONUS*/ 
   generalAttack(attackingArmy, receivingArmy){
    // create random number;
    let receivers = `${receivingArmy.toLowerCase()}Army`
    let attackers = `${attackingArmy.toLowerCase()}Army`
    let randomReceiverIndex = Math.floor(Math.random() * this[receivers].length);
    let randomAttackerIndex = Math.floor(Math.random() * this[attackers].length);
    //pick a random saxon;
    let randomReceiver = this[receivers][randomReceiverIndex];
    //pick random viking;
    let randomAttacker = this[attackers][randomAttackerIndex];
    //saxon recieve damage from viking
    let resultOfBattle = randomReceiver.receiveDamage(randomAttacker.strength);
    //condition remove saxon
    if (randomReceiver.health <= 0) {
    this[receivers].splice(randomReceiverIndex, 1);
    return resultOfBattle;
    }
    return resultOfBattle;
}
   //*BONUS*/


  showStatus() {
    if (this.saxonArmy.length === 0) return "Vikings have won the war of the century!";
    if (this.vikingArmy.length === 0) return "Saxons have fought for their lives and survived another day...";
    return "Vikings and Saxons are still in the thick of battle.";
  }
}


