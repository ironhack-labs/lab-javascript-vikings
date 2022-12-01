// Soldier
class Soldier {

  constructor (health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
  }

}

// Viking
class Viking extends Soldier {

  constructor (name, health, strength) {
    super (health, strength);
    this.name = name; 
  }

  attack() {
    return super.attack();
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }

}

// Saxon
class Saxon extends Soldier {
  //no need to include constructor

  attack() {
    return super.attack();
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return 'A Saxon has died in combat';
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

    vikingAttack() {
      let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
      let randomViking = Math.floor(Math.random() * this.vikingArmy.length);

      let viking = this.vikingArmy[randomViking];
      let saxon = this.saxonArmy[randomSaxon];

      let attack = saxon.receiveDamage(viking.strength);

      if (saxon.health <= 0) {
        this.saxonArmy.splice(saxon);
      } return attack;
      
    }

    saxonAttack() {
      let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
      let randomViking = Math.floor(Math.random() * this.vikingArmy.length);

      let viking = this.vikingArmy[randomViking];
      let saxon = this.saxonArmy[randomSaxon];

      let attack = viking.receiveDamage(saxon.strength);

      if (viking.health <= 0) {
          this.vikingArmy.splice(viking)
      } return attack
    }

    showStatus() {
      if ((this.vikingArmy.length > 0) && (this.saxonArmy.length > 0)) {
        return 'Vikings and Saxons are still in the thick of battle.';
      } else if (this.saxonArmy.length === 0) {
        return 'Vikings have won the war of the century!';
      } else if (this.vikingArmy.length === 0) {
        return 'Saxons have fought for their lives and survived another day...';
      }
    }
    
}