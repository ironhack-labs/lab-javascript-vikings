class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack = () => this.strength;

  receiveDamage = (damage) => {
    this.health = this.health - damage;
  };
}

class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage = (damage) => {
    this.health = this.health - damage;

    if (this.health > 0)
      return `${this.name} has received ${damage} points of damage`;

    return `${this.name} has died in act of combat`;
  };

  battleCry = () => "Odin Owns You All!";
}

class Saxon extends Soldier {
  receiveDamage = (damage) => {
    this.health = this.health - damage;

    if (this.health > 0)
      return `A Saxon has received ${damage} points of damage`;

    return `A Saxon has died in combat`;
  };
}

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

  getRandomSoldier(soldiers) {
    const soldierIndex = Math.floor(Math.random() * soldiers.length);

    return { soldier: soldiers[soldierIndex], index: soldierIndex };
  }

  getOpponents(soldierType) {
    const soldiers = {};

    if (soldierType === "viking") {
      soldiers.attacker = this.getRandomSoldier(this.vikingArmy);
      soldiers.enemy = this.getRandomSoldier(this.saxonArmy);
      soldiers.enemy.army = this.saxonArmy;
    } else {
      soldiers.attacker = this.getRandomSoldier(this.saxonArmy);
      soldiers.enemy = this.getRandomSoldier(this.vikingArmy);
      soldiers.enemy.army = this.vikingArmy;
    }

    return soldiers;
  }

  doFight(attacker, enemy) {
    const figthMessage = enemy.soldier.receiveDamage(attacker.soldier.attack());

    return figthMessage;
  }

  removeDead(enemyHealth, enemyIndex, enemyArmy) {
    if (enemyHealth <= 0) {
      enemyArmy.splice(enemyIndex, 1);
    }
  }

  soldierAttack(soldierType) {
    const opponents = this.getOpponents(soldierType);

    const attacker = opponents.attacker;
    const enemy = opponents.enemy;

    const attackMessage = this.doFight(attacker, enemy);

    this.removeDead(enemy.soldier.health, enemy.index, enemy.army);

    return attackMessage;
  }

  vikingAttack() {
    return this.soldierAttack("viking");
  }

  saxonAttack() {
    return this.soldierAttack("saxon");
  }

  showStatus() {
    const noVikings = this.vikingArmy.length <= 0;
    const noSaxons = this.saxonArmy.length <= 0;

    const vikingVictory = "Vikings have won the war of the century!";
    const saxonVictory =
      "Saxons have fought for their lives and survived another day...";
    const ongoingBattle =
      "Vikings and Saxons are still in the thick of battle.";

    if (noSaxons) return vikingVictory;

    if (noVikings) return saxonVictory;

    return ongoingBattle;
  }
}
