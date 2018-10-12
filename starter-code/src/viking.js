// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
    this.alive = true;
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
    super.receiveDamage(damage);
    if (this.health > 0) {
      var message = this.name + " has received " + damage + " points of damage";
    }
    else var message = this.name + " has died in act of combat";
    this.alive = false;
    return message;
  }

  battleCry() {
    return "Odin Owns You All!";
  }

}
// Saxon

class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      var message = "A Saxon has received " + damage + " points of damage";
    }
    else var message = "A Saxon has died in combat";
    this.alive = false;

    return message;

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

  vikingAttack() {

    if ((this.saxonArmy.length != 0) && (this.vikingArmy.length != 0 )) {
    
      var indexSaxon = Math.floor(Math.random()*this.saxonArmy.length);
      var indexViking = Math.floor(Math.random()*this.vikingArmy.length)

      var saxon = this.saxonArmy[indexSaxon];
      var viking = this.vikingArmy[indexViking];


    var message = saxon.receiveDamage(viking.strength);
    this.removeDead();
    return message;
    }

  }

  saxonAttack() {

    if ((this.saxonArmy.length != 0) && (this.vikingArmy.length != 0 )) {
    
      var indexSaxon = Math.floor(Math.random()*this.saxonArmy.length);
      var indexViking = Math.floor(Math.random()*this.vikingArmy.length)

      var saxon = this.saxonArmy[indexSaxon];
      var viking = this.vikingArmy[indexViking];


    var message = viking.receiveDamage(saxon.strength);
    this.removeDead();
    return message;
    }

  }

  removeDead() {
    this.saxonArmy = this.saxonArmy.filter(function(saxon) {
      return saxon.alive;
    })
    this.vikingArmy = this.vikingArmy.filter(function(viking) {
      return viking.alive;
    })
  }

  showStatus() {
    if (this.saxonArmy.length < 1) {
      var message = "Vikings have won the war of the century!";
    }
    else if (this.vikingArmy.length < 1) {
      var message = "Saxons have fought for their lives and survive another day...";
    }
    else message = "Vikings and Saxons are still in the thick of battle."

    return message;

  }
}
