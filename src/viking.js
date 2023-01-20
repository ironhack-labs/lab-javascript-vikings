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

    if (this.health)
      return `${this.name} has received ${damage} points of damage`;

    return `${this.name} has died in act of combat`;
  };

  battleCry = () => "Odin Owns You All!";
}

class Saxon extends Soldier {
  receiveDamage = (damage) => {
    this.health = this.health - damage;

    if (this.health >= 0) return `A Saxon has received ${damage} points of damage`;

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

  vikingAttack() {
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    const randomViking = this.vikingArmy[randomVikingIndex];
    const randomSaxon = this.saxonArmy[randomSaxonIndex];

    const damageMessage = randomSaxon.receiveDamage(randomViking.attack());
    
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }

    return damageMessage;
  }

  saxonAttack() {
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );

    const randomSaxon = this.saxonArmy[randomSaxonIndex];
    const randomViking = this.vikingArmy[randomVikingIndex];

    const damageMessage = randomViking.receiveDamage(randomSaxon.attack());
    
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }

    console.log(damageMessage);
    return damageMessage;
  }
}
