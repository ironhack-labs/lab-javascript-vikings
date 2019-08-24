// Soldier
class Soldier {
  constructor (healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
  }

  attack() {
    return this.strength
  }

  receiveDamage(attack) {
    this.health -= attack
  }
}

// Viking
class Viking extends Soldier {
  constructor (nameArg, healthArg, strengthArg) {
    super (healthArg, strengthArg);

    this.name = nameArg;
  }
  receiveDamage(attack) {
    this.health -= attack;
    if (this.health > 0) {
      return `${this.name} has received ${attack} points of damage`
    }
    else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry() {
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {
  constructor (healthArg, strengthArg) {
    super (healthArg, strengthArg)
  }
  receiveDamage(attack) {
    this.health -= attack;
    if (this.health > 0) {
      return `A Saxon has received ${attack} points of damage`
    }
    else {
      return `A Saxon has died in combat`
    }
  }

}

// War
class War {
  constructor () {
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
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    let randomVikingStrength = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].attack();
    let vikingHit = randomSaxon.receiveDamage(randomVikingStrength);

    this.saxonArmy = this.saxonArmy.filter( (saxonSoldier) => saxonSoldier.health > 0  )

    return vikingHit;


  }

  saxonAttack() {
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    let randomSaxonStrength = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].attack();
    let saxonHit = randomViking.receiveDamage(randomSaxonStrength);

    this.vikingArmy = this.vikingArmy.filter( (vikingSoldier) => vikingSoldier.health > 0  )
    

    return saxonHit;

  }

  showStatus() {
    
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    }
    else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survive another day...`
    }
    else {
      return `Vikings and Saxons are still in the thick of battle.`
    }

  }
}
