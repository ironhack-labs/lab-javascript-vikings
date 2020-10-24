// Soldier

class Soldier {
  constructor(health, strength) {
    this.health = 300;
    this.strength = 150;
  }
  attack() {
    return 150;
  }
  receiveDamage (damage) { this.health = 250; }
}

// Viking
class Viking {
  constructor(health, strength) {
    this.health = 100;
    this.strength = 10;
  }
}

// Saxon
class Saxon {
  constructor(health, strength) {
    this.health = 100;
    this.strength = 10;
  }
}

// War
class War {
  constructor(health, strength) {
    this.health = 100;
    this.strength = 10;
  }
}
