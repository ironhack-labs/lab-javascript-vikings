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
  this.health -= Number(damage);
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
      //return "NAME has received DAMAGE points of damage"
      return this.name +" has received " + damage + " points of damage";
    } else {
      //return "NAME has died in act of combat"
      return this.name + " has died in act of combat";
    }
  }

  battleCry() {
    return "Odin Owns You All!"
  }
}


// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
  
      return "A Saxon has received " + damage + " points of damage";
    } else {
 
      return "A Saxon has died in combat";
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
    new Viking("Harald Jr", 300, 150);
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    new Saxon(60, 25);
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    var randomIndexS = Math.floor(Math.random() * this.saxonArmy.length);
    var randomIndexV = Math.floor(Math.random() * this.vikingArmy.length);

    this.saxonArmy[randomIndexS].receiveDamage(this.vikingArmy[randomIndexV].strength);

    if (this.saxonArmy[randomIndexS].health < 0) {
    this.saxonArmy.splice([randomIndexS], 1);
    return "A Saxon has died in combat";
    }
  }

  saxonAttack() {

    var randomIndexS = Math.floor(Math.random() * this.saxonArmy.length);
    var randomIndexV = Math.floor(Math.random() * this.vikingArmy.length);

    this.vikingArmy[randomIndexV].receiveDamage(this.saxonArmy[randomIndexS].strength);

    if (this.vikingArmy[randomIndexV].health < 0) {
      this.vikingArmy.splice([randomIndexV], 1);
      return viking[randomIndexV].name + " has received " + saxon[randomIndexS].strength + " points of damage"
    }
  }
  
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    }
     else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day..." ;
    } else if ((this.vikingArmy.length !== 0) && (this.saxonArmy.length !== 0)) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}

