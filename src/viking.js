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
  receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
    else if (this.health <= 0) {
      return "A Saxon has died in combat";
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    this.saxonArmy[randomSaxon].receiveDamage(
      this.vikingArmy[randomViking].strength
    );
    if (this.saxonArmy[randomSaxon].health <= 0) {
      this.saxonArmy.splice(randomSaxon);
      return "A Saxon has died in combat";
    } else {
      return `${this.saxonArmy[randomSaxon].name} has received ${this.vikingArmy[randomViking].strength} points of damage`;
    }
  }
  saxonAttack() {
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    this.vikingArmy[randomViking].receiveDamage(
      this.saxonArmy[randomSaxon].strength
    );
    if (this.vikingArmy[randomViking].health <= 0) {
      this.vikingArmy.splice(randomViking);
    } else {
      return `${this.vikingArmy[randomViking].name} has received ${this.saxonArmy[randomSaxon].strength} points of damage`;
    }
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


// SOME CODE TO TRY THE EPIC WAR!!!!

//  const guerra = new War();

//  const viking1 = new Viking("Alex", 200, 30);
//  const viking2 = new Viking("Eric", 300, 50);

//  const saxon1 = new Saxon(300, 20);
//  const saxon2 = new Saxon(200, 40);
//  const saxon3 = new Saxon(100, 60);

//  guerra.addSaxon(saxon1);
//  guerra.addSaxon(saxon2);
//  guerra.addSaxon(saxon3);

//  guerra.addViking(viking1);
//  guerra.addViking(viking2);

//  console.log(guerra.saxonArmy);
//  setTimeout(() => {
//    guerra.vikingAttack();
//    guerra.vikingAttack();
//    guerra.vikingAttack();
//    guerra.vikingAttack();
//    guerra.vikingAttack();
//    guerra.vikingAttack();
//    console.log(guerra.saxonArmy);
//  }, 5000);

//  const soldier1 = new Soldier(100, 10);
//  console.log(
//    "Soldier health: " + soldier1.health + " and strength: " + soldier1.strength
//  );

//  console.log(saxon1.receiveDamage(50));
//  console.log(saxon1.health);

//  setTimeout(() => {
//      console.log(guerra.showStatus())
//  }, 6000);
