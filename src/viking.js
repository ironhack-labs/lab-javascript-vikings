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

    if (this.health)
      return `A Saxon has received ${damage} points of damage`;

    return `A Saxon has died in combat`;
  };
}

class War {}
