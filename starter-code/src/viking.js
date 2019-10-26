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
    this.damage = damage;
    Soldier.health = this.health -= this.damage;
  }
}

const soldier = new Soldier(300, 150);
console.log(soldier.receiveDamage(50));

// Viking
console.log(soldier);

class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.damage = damage;
    Viking.health = this.health -= this.damage;
    if (Viking.health > 0) {
      return `${this.name} has received ${this.damage} points of damage`;
    } else if (Viking.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

let Harald = new Viking("Harald", 150, 300);

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.damage = damage;
    Saxon.health = this.health -= this.damage;
    if (Saxon.health > 0) {
      return `A Saxon has received ${this.damage} points of damage`;
    } else if (Saxon.health <= 0) {
      return `A Saxon has died in combat`;
    }
  }
}
let saxon = new Saxon(60, 25);

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
    var randSax = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    var randVik = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];

    randSax.receiveDamage(randVik.strength);

    if (randSax.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(randSax), 1);
      return `A Saxon has died in combat`; // j'aurais voulu éviter de copier la "string" de la fonction receiveDammage car je n'arrive pas à la retourner ici.
    }
  }

  saxonAttack() {
    var randSax = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    var randVik = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];

    randVik.receiveDamage(randSax.strength);

    if (randVik.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(randVik), 1);
    } else if (randVik.health > 0);
    {
      return `${randVik.name} has received ${randSax.strength} points of damage`;
    }
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
