// Soldier

class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }
  receiveDamage(theDamage) {
    this.health -= theDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(NtheDamage) {
    this.health -= NtheDamage;
    if (this.health > 0) {
      return `${this.name} has received ${NtheDamage} points of damage`;
    } else if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(StheDamage) {
    this.health -= StheDamage;
    if (this.health > 0) {
      return `A Saxon has received ${StheDamage} points of damage`;
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
  addViking(vikinObj) {
    this.vikingArmy.push(vikinObj);
  }
  addSaxon(saxonObj) {
    this.saxonArmy.push(saxonObj);
  }
  //   vikingAttack() {
  //     ramSaxIndex = Math.floor(Math.random() * this.saxonArmy.length);
  //     ramVikIndex = Math.floor(Math.random() * this.vikingArmy.length);
  //     console.log(ramSaxIndex);
  //     console.log(ramVikIndex);

  //     let attackresult = this.saxonArmy[ramSaxIndex].receiveDamage(
  //       this.vikingArmy[ramVikIndex].attack()
  //     );
  //     if (this.saxonArmy[ramSaxIndex].health <= 0) {
  //       this.saxonArmy.splice(ramSaxIndex, 1);
  //     }
  //   }

  genericAttak(attackarmy, defenarmy) {
    const ramDefArmIndex = Math.floor(Math.random() * attackarmy.length);
    const ramAttakArmIndex = Math.floor(Math.random() * defenarmy.length);

    const ramdomAttaker = attackarmy[ramAttakArmIndex];
    const ramdomDefender = defenarmy[ramDefArmIndex];

    const amountofAttak = ramdomAttaker.attack();
    const result = ramdomDefender.receiveDamage(amountofAttak);

    if (ramdomDefender.health <= 0) {
      defenarmy.splice(ramDefArmIndex, 1);
    }

    return result;
  }

  vikingAttack() {
    return this.genericAttak(this.vikingArmy, this.saxonArmy);
  }

  saxonAttack() {
    return this.genericAttak(this.saxonArmy, this.vikingArmy);
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
