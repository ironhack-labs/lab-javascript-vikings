// Iteration 1 - Soldier

class Soldier {
  constructor(health, strength) {
    (this.health = health), (this.strength = strength);
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    if (damage > 0) {
      this.health -= damage;
    }
  }
}

// Iteration 2 - Viking


class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    {
      this.name = name;
    }
  }

  receiveDamage(damage) {
    if (damage > 0) {
      this.health -= damage;
      if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`;
      } else {
        return `${this.name} has died in act of combat`;
      }
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}


// // Iteration 3 - Saxon

class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
    {
    }
  }

  receiveDamage(damage) {
    if (damage > 0) {
      this.health -= damage;
      if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`;
      } else {
        return `A Saxon has died in combat`;
      }
    }
  }
}


// // Bonus - Iteration 4 - War



class War {

  vikingArmy = [];
  saxonArmy = [];

  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }


vikingAttack(){
  let numberSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  let randomSaxon = this.saxonArmy[numberSaxon];

  let numberViking = Math.floor(Math.random() * this.vikingArmy.length);
  let randomViking = this.vikingArmy[numberViking];

  
  let damagedSaxon = randomSaxon.receiveDamage(randomViking.strength);
  if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(numberSaxon, 1);
  }
  return damagedSaxon;
}
saxonAttack(){
  let numberSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  let randomSaxon = this.saxonArmy[numberSaxon];

  let numberViking = Math.floor(Math.random() * this.vikingArmy.length);
  let randomViking = this.vikingArmy[numberViking];

  let damagedViking = randomViking.receiveDamage(randomSaxon.strength);
  if (randomViking.health <= 0) {
      this.vikingArmy.splice(numberViking, 1);
  }
  return damagedViking;
}

showStatus(){
  if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
  } else {
      return "Vikings and Saxons are still in the thick of battle.";
  }
}
}