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
    super.receiveDamage(damage);

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(name, health, strength) {
    super(name, health, strength);
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
    return `A Saxon has died in combat`;
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
    return this.attackOfArmy(this.vikingArmy, this.saxonArmy);

    //   let saxonArmyIndex = Math.floor(Math.random() * this.saxonArmy.length);
    //   let saxonSoldier = this.saxonArmy[saxonArmyIndex];

    //   let vikingArmyIndex = Math.floor(Math.random() * this.vikingArmy.length);
    //   let vikingSoldier = this.vikingArmy[vikingArmyIndex];

    //   let damageOfSaxon = vikingSoldier.attack();
    //   let saxonSoldierSituation = saxonSoldier.receiveDamage(damageOfSaxon);

    //   if (saxonSoldier.health <= 0) {
    //     this.saxonArmy.splice(saxonArmyIndex, 1);
    //   }

    //   return saxonSoldierSituation;
  }

  saxonAttack() {
    return this.attackOfArmy(this.saxonArmy, this.vikingArmy);

    // let saxonArmyIndex = Math.floor(Math.random() * this.saxonArmy.length);
    // let saxonSoldier = this.saxonArmy[saxonArmyIndex];

    // let vikingArmyIndex = Math.floor(Math.random() * this.vikingArmy.length);
    // let vikingSoldier = this.vikingArmy[vikingArmyIndex];

    // let damageOfViking = saxonSoldier.attack();
    // let vikingSoldierSituation = vikingSoldier.receiveDamage(damageOfViking);

    // if (vikingSoldier.health <= 0) {
    //   this.vikingArmy.splice(vikingArmyIndex, 1);
    // }

    // return vikingSoldierSituation;
  }

  attackOfArmy(attackArmy, defenseArmy) {
    let attackSoldierInd = Math.floor(Math.random() * attackArmy.length);
    let attackSoldier = attackArmy[attackSoldierInd];

    let defenseSoldierInd = Math.floor(Math.random() * defenseArmy.length);
    let defenseSoldier = defenseArmy[defenseSoldierInd];

    let damageOfDefenseArmy = attackSoldier.attack();

    let defenseSoldierSituation =
      defenseSoldier.receiveDamage(damageOfDefenseArmy);

    if (defenseSoldier.health <= 0) {
      defenseArmy.splice(defenseSoldierInd, 1);
    }

    return defenseSoldierSituation;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    }
    return "Vikings and Saxons are still in the thick of battle.";
  }
}
