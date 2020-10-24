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
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
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

  addViking(newViking) {
    this.vikingArmy.push(newViking);
  }

  addSaxon(newSaxon) {
    this.saxonArmy.push(newSaxon);
  }

  vikingAttack() {
    let randomSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let randomViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];

    let damageCall = randomSaxon.receiveDamage(randomViking.strength);

    this.saxonArmy.forEach((saxon, index) => {
      if (saxon.health <= 0) {
        this.saxonArmy.splice(index, 1);
      }
    });

    return damageCall;
  }

  saxonAttack() {
    let randomViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    let randomSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];

    let damageCall = randomViking.receiveDamage(randomSaxon.strength);

    this.vikingArmy.forEach((viking, index) => {
      if (viking.health <= 0) {
        this.vikingArmy.splice(index, 1);
      }
    });

    return damageCall;
  }

  //SUPER BONUS

  genericAttack(attacker, victim) {
    let attackerArmy;
    let victimArmy;

    if (attacker === "viking" && victim === "saxon") {
      attackerArmy = this.vikingArmy;
      victimArmy = this.saxonArmy;
    } else {
      attackerArmy = this.saxonArmy;
      victimArmy = this.vikingArmy;
    }

    let randomAttacker =
      attackerArmy[Math.floor(Math.random() * attackerArmy.length)];
    let randomVictim =
      victimArmy[Math.floor(Math.random() * victimArmy.length)];

    let damageCall = randomVictim.receiveDamage(randomAttacker.strength);

    victimArmy.forEach((victim, index) => {
      if (victim.health <= 0) {
        victimArmy.splice(index, 1);
      }
    });

    return damageCall;
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

let saxon1 = new Saxon(10, 100);
let viking1 = new Viking("bob", 5, 9);
let war1 = new War();
war1.addSaxon(saxon1);
war1.addViking(viking1);

war1.vikingArmy.forEach((viking) => {
  console.log(viking.name);
});

console.log(war1.genericAttack("viking", "saxon"));
console.log(saxon1.health);
console.log(war1.showStatus());
console.log(war1.thisSaxonArmy);
