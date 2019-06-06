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

    this.health = this.health - damage;
  }


}

// Viking
class Viking extends Soldier {

  constructor(name, health, strength) {

    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;

    return (this.health > 0) ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`

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

    this.health = this.health - damage;
    return (this.health > 0) ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`


  }


}

// War
class War {

  constructor() {

    this.vikingArmy = [];
    this.saxonArmy = [];

  }

  addViking(viking) { this.vikingArmy.push(viking); }
  addSaxon(saxon) { this.saxonArmy.push(saxon); }

  vikingAttack() {


    let attackedSaxonIndex = Math.round((this.saxonArmy.length - 1));
    let attackerVikingIndex = Math.round((this.vikingArmy.length - 1));

    //Attacks the Random saxon

    this.saxonArmy[attackedSaxonIndex].receiveDamage(this.vikingArmy[attackerVikingIndex].strength);

    //Captures the health after the attack

    let saxonHealth = this.saxonArmy[attackedSaxonIndex].health

    //Remove Saxons if dead

    if ((saxonHealth) <= 0) { this.saxonArmy.splice(attackedSaxonIndex, 1); }

    return (saxonHealth > 0) ? `A Saxon has received ${this.vikingArmy[attackerVikingIndex].strength} points of damage` : `A Saxon has died in combat`

  }



  saxonAttack() {

    let attackedVikingIndex = Math.round((this.vikingArmy.length - 1));
    let attackerSaxonIndex = Math.round((this.saxonArmy.length - 1));

    //Attacks the Random saxon

    this.vikingArmy[attackedVikingIndex].receiveDamage(this.saxonArmy[attackerSaxonIndex].strength);

    //Captures the health after the attack and name 

    let vikingHealth = this.vikingArmy[attackedVikingIndex].health;
    let vikingName = this.vikingArmy[attackedVikingIndex].name;


    //Remove Saxons if dead

    if ((vikingHealth) <= 0) { this.vikingArmy.splice(attackedVikingIndex, 1); }

    return (vikingHealth > 0) ? `${vikingName} has received ${this.saxonArmy[attackerSaxonIndex].strength} points of damage` : `${vikingName} has died in act of combat`





  }
  showStatus() {

    return (this.saxonArmy.length && this.vikingArmy.length) ? "Vikings and Saxons are still in the thick of battle." : (this.saxonArmy.length) ? "Saxons have fought for their lives and survive another day..." : "Vikings have won the war of the century!";

  }

}

