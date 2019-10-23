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

// var soldier = new Soldier(150, 300);

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
    if (this.health === 0) return `${this.name} has died in act of combat`;
  }

  //     // if the Viking is still alive, it should return "NAME has received DAMAGE points of damage"
  //     // if the Viking dies, it should return "NAME has died in act of combat"

  battleCry() {
    return "Odin Owns You All!";
  }
}

// var viking = new Viking("Harald", 150, 300);

// Saxon

class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(theDamage) {
    this.health -= theDamage;
    if (this.health > 0)
      return `A Saxon has received ${theDamage} points of damage`;
    if (this.health === 0) return `A Saxon has died in combat`;
    // if the Saxon is still alive, it should return "A Saxon has received DAMAGE points of damage"
    // if the Saxon dies, it should return "A Saxon has died in combat"
  }
}

// var saxon = new Saxon(60, 25)

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
    const randDomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randDomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const oneSaxon = this.saxonArmy[randDomSaxonIndex];
    const oneViking = this.vikingArmy[randDomVikingIndex];
    if (oneSaxon.health === 0) return this.saxonArmy.pop();
    return oneSaxon.receiveDamage(oneViking.strength);
  }

  // console.log("viking attack...", saxon);
  // saxon.receiveDamage(theDamage);
  // if (saxon.health === 0)

  saxonAttack() {
    const randDomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randDomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const oneSaxon = this.saxonArmy[randDomSaxonIndex];
    const oneViking = this.vikingArmy[randDomVikingIndex];
    if (oneViking.health === 0) return this.vikingArmy.pop();
    return oneViking.receiveDamage(oneSaxon.strength);
  }

  showStatus() {
    if (this.saxonArmy.length === 0)
      return "Vikings have won the war of the century!";
    if (this.vikingArmy.length === 0)
      return "Saxons have fought for their lives and survive another day...";
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0)
      return "Vikings and Saxons are still in the thick of battle.";
  }
}
//should make a Saxon receiveDamage() equal to the strength of a Viking
// should remove dead saxons from the army
// should return result of calling receiveDamage() of a Saxon with the strength of a Viking

// if the Saxon array is empty, should return "Vikings have won the war of the century!"
// if the Viking array is empty, should return "Saxons have fought for their lives and survive another day..."
// if there are at least 1 Viking and 1 Saxon, should return "Vikings and Saxons are still in the thick of battle."
