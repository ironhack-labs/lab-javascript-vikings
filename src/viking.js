// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health,
    this.strength = strength
  }

  attack(){
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }

}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength, ) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;

    if(this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry(){
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;

    if(this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return "A Saxon has died in combat";
    }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [],
    this.saxonArmy = []
  }
  addViking(viking){
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }

  vikingAttack(){
    const randomIndexOfViking = Math.floor(Math.random() * this.vikingArmy.length);
    const randomIndexOfSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const viking = this.vikingArmy[randomIndexOfViking]; //Random Viking
    const saxon = this.saxonArmy[randomIndexOfSaxon]; //Random Viking
    // The Viking attack the Saxon
    const attack = saxon.receiveDamage(viking.strength);
    // Check Saxon's life
    if (saxon.health <= 0) {
      this.saxonArmy.splice(randomIndexOfSaxon, 1);
    }
    return attack;
    // To test Iterarion 5
    // return this.genericAttack(this.vikingArmy, this.saxonArmy)
  }
  saxonAttack(){
    const randomIndexOfViking = Math.floor(Math.random() * this.vikingArmy.length);
    const randomIndexOfSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const viking = this.vikingArmy[randomIndexOfViking]; //Random Viking
    const saxon = this.saxonArmy[randomIndexOfSaxon]; //Random Viking
    // The Saxon attack the Viking
    const attack = viking.receiveDamage(saxon.strength);
    // Check Viking's life
    if (viking.health <= 0) {
      this.vikingArmy.splice(randomIndexOfViking, 1);
    }
    return attack;
    // To test Iterarion 5
    // return this.genericAttack(this.saxonArmy, this.vikingArmy)
  }


  showStatus(){
    if(this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day..."
    } else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }

  genericAttack(attackerArmy, defenderArmy){
    const randomIndexOfAttacker = Math.floor(Math.random() * attackerArmy.length);
    const randomIndexOfDefender = Math.floor(Math.random() * defenderArmy.length);
    const attacker = attackerArmy[randomIndexOfAttacker]; //Random Attacker
    const defender = defenderArmy[randomIndexOfDefender]; //Random Defender
    // The Saxon attack the Viking
    const attack = defender.receiveDamage(attacker.strength);
    // Check Viking's life
    if (defender.health <= 0) {
      defenderArmy.splice(randomIndexOfDefender, 1);
    }
    return attack;
  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
