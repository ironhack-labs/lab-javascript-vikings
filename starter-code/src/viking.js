// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
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
  constructor(nameArg, healthArg, strengthArg) {
    super(healthArg, strengthArg);
    this.name = nameArg;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// // Saxon
class Saxon extends Soldier {
  constructor(healthArg, strengthArg) {
    super(healthArg, strengthArg);
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// // War
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
    let randSax = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randVik = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    console.log(randSax);

    randSax.receiveDamage(randVik.strength);

    if (randSax.health <= 0){
      this.saxonArmy.splice(this.saxonArmy.indexOf(randSax), 1);
      return 'A Saxon has died in combat';
    
    }
    
      

    }
    saxonAttack() {
      let randSax = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
      let randVik = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

      randVik.receiveDamage(randSax.strength);

      if (randVik.health <= 0){
        this.vikingArmy.splice(this.vikingArmy.indexOf(randVik), 1);
      }

      return `${randVik.name} has received ${randSax.strength} points of damage`
      
    }
    showStatus(){
      if (this.saxonArmy.length === 0){
        return "Vikings have won the war of the century!"}
      else if (this.vikingArmy.length === 0){
        return "Saxons have fought for their lives and survive another day..."
      }
      else {
        return "Vikings and Saxons are still in the thick of battle."
      }
      }
    }


