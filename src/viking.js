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
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength)
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

function random(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
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
    const saxon = random(this.saxonArmy);
    const viking = random(this.vikingArmy);
    const damage = saxon.receiveDamage(viking.strength);
    if (saxon.health <= 0) {
      const index = this.saxonArmy.indexOf(saxon);
      this.saxonArmy.splice(index, 1);
    }
    return damage;
  }

  saxonAttack() {
    const saxon = random(this.saxonArmy);
    const viking = random(this.vikingArmy);
    const damage = viking.receiveDamage(saxon.strength);
    if (viking.health <= 0) {
      const index = this.vikingArmy.indexOf(viking);
      this.vikingArmy.splice(index, 1);
    }
    return damage;
  }

  showStatus() {
    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day..."
    } else if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    } else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }

}


const war = new War;

war.addSaxon(new Saxon(100, 15));
war.addSaxon(new Saxon(100, 10));
war.addSaxon(new Saxon(100, 5));

war.addViking(new Viking("Ragnar", 100, 20));
war.addViking(new Viking("Rollo", 100, 15));
war.addViking(new Viking("Thorsten", 100, 10));


for (let i = 0; i < 20; i++) {
  war.saxonAttack();
  war.vikingAttack();
  console.log(war.showStatus());
}
