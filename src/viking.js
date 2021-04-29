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
    return `Odin Owns You All!`;
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
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  simplyAttack(p1) {
    let saxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let viking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];

    if (p1 === "saxon") {
      saxon.receiveDamage(viking.strength);
      if (saxon.health <= 0) {
        let posSax = this.saxonArmy.indexOf("saxon");
        this.saxonArmy.splice(posSax, 1);
        return "A Saxon has died in combat";
      } else {
        return saxon.receiveDamage();
      }
    } else {
      viking.receiveDamage(saxon.strength);
      if (viking.health <= 0) {
        let posVik = this.vikingArmy.indexOf(viking.name);
        this.vikingArmy.splice(posVik, 1);
        return "A Viking has died in combat";
      } else {
        return `${viking.name} has received ${saxon.strength} points of damage`;
      }
    }
  }

  vikingAttack() {
    return this.simplyAttack("saxon");
  }

  /*
    let saxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let viking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    saxon.receiveDamage(viking.strength);

    if (saxon.health <= 0) {
      let posSax = this.saxonArmy.indexOf("saxon");
      this.saxonArmy.splice(posSax, 1);
      return "A Saxon has died in combat";
    } else {
      return saxon.receiveDamage();
    }
  }  */

  saxonAttack() {
    return this.simplyAttack("viking");
  }

  /*
    let saxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let viking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    viking.receiveDamage(saxon.strength);

    if (viking.health <= 0) {
      let posVik = this.vikingArmy.indexOf(viking.name);
      this.vikingArmy.splice(posVik, 1);
      return "A Viking has died in combat";
    } else {
      return `${viking.name} has received ${saxon.strength} points of damage`;
    }
  }
  */

  showStatus() {
    if (this.saxonArmy.length <= 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length <= 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}

/*
(SIMPLIFICACIÓN CÓDIGO)

function fightingWar(p1, p2) {
  let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

  if (p1 === "saxon"){ 
    p1.receiveDamage(p2.stregth);  
    if (saxon.health <= 0) {
      let posSax = this.saxonArmy.indexOf("saxon");
      this.saxonArmy.splice(posSax, 1);
      return "A Saxon has died in combat";
    } else {
      return saxon.receiveDamage();
    }}
  else {
    p2.receiveDamage(p1.stregth);
    if (viking.health <= 0) {
      let posVik = this.vikingArmy.indexOf(viking.name);
      this.vikingArmy.splice(posVik, 1);
      return "A Viking has died in combat";
    } else {
      return `${viking.name} has received ${saxon.strength} points of damage`;
    }
  }
}
*/
console.log(simplyWar(saxon, viking));
