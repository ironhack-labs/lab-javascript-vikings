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
    if (this.health > 0)
      return `${this.name} has received ${damage} points of damage`;
    else return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0)
      return `A Saxon has received ${damage} points of damage`;
    else return `A Saxon has died in combat`;
  }
}

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
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

  //getting an objects who is attacked (a Saxon or a Viking) and who attacks (Saxon or Viking)
  attack(who, byWho) {
    return who.receiveDamage(byWho.strength);
  }

  getRandomViking() {
    return this.vikingArmy[
      getRandomIntInclusive(0, this.vikingArmy.length - 1)
    ];
  }

  getRandomSaxon() {
    return this.saxonArmy[getRandomIntInclusive(0, this.saxonArmy.length - 1)];
  }

  removeDiedSoldier(soldier, army) {
    const indexToRemove = army.indexOf(soldier);
    army.splice(indexToRemove, 1);
  }

  vikingAttack() {
    const saxon = this.getRandomSaxon();
    const viking = this.getRandomViking();
    const resultOfAttack = this.attack(saxon, viking);

    if (resultOfAttack.includes("died"))
      this.removeDiedSoldier(saxon, this.saxonArmy);

    return resultOfAttack;
  }

  saxonAttack() {
    const saxon = this.getRandomSaxon();
    const viking = this.getRandomViking();

    const resultOfAttack = this.attack(viking, saxon);

    if (resultOfAttack.includes("died"))
      this.removeDiedSoldier(viking, this.vikingArmy);

    return resultOfAttack;
  }
  showStatus() {}
}
