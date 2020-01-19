// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  // METODO DE ATAQUE
  attack = () => this.strength;

  // METODO DE DAÑO
  receiveDamage = damage => {
    this.health -= damage;
  };
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  // METODO DE GRITO
  battleCry = () => "Odin Owns You All!";

  // METODO DE DAÑO
  receiveDamage = damage => {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  };
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  // METODO DE DAÑO
  receiveDamage = damage => {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  };
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  soldierViking = () =>
    this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  soldierSaxon = () =>
    this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

  // AÑADIR COMBATIENTES
  addViking = viking => {
    this.vikingArmy.push(viking);
    return;
  };
  addSaxon = saxon => {
    this.saxonArmy.push(saxon);
  };

  // ATAQUES

  attack = (victim, attacker) => {
    victim.receiveDamage(attacker.strength);
    if (victim <= 0) {
      victim.splice(victim, 1);
      return console.log(`${victim} has died for ${attacker}`);
    } else {
      if (victim.name) {
        return console.log(
          `${victim.name} has received ${attacker.strength} points of damage`
        );
      } else {
        return console.log(
          `Saxon has received ${attacker.strength} points of damage`
        );
      }
    }
  };

  // RECUENTO DE MUERTOS
  showStatus = () => {
    if (this.saxonArmy == 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy == 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  };
}

const viking1 = new Viking("manolo", 2, 2);
const viking2 = new Viking("pedro", 2, 2);
const viking3 = new Viking("juan", 2, 2);
const saxon1 = new Saxon(3, 3);
const saxon2 = new Saxon(3, 3);
const saxon3 = new Saxon(3, 3);

const war1 = new War();

war1.addViking(viking1);
war1.addViking(viking2);
war1.addViking(viking3);

war1.addSaxon(saxon1);
war1.addSaxon(saxon2);
war1.addSaxon(saxon3);

war1.attack(war1.soldierSaxon(), war1.soldierViking());
war1.attack(war1.soldierViking(), war1.soldierSaxon());

war1.showStatus();
