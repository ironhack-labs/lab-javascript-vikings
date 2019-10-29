// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(theDamage) {
    this.health -= theDamage;
  }
}

// Viking

class Viking extends Soldier {
  constructor(name,health,strength){
    super(health,strength);
    this.name = name;
  }

  receiveDamage(theDamage) {
    super.receiveDamage(theDamage);
    if(this.health > 0) {
      return `${this.name} has received ${theDamage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}
//let Viking = new Viking("Thor", 200, 36);

// Saxon
class Saxon extends Soldier {
  receiveDamage(theDamage) {
    super.receiveDamage(theDamage);
    if(this.health > 0) {
      return `A Saxon has received ${theDamage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
  
}
//let Viking = new Viking("Thor", 200, 36);
//let Saxon = new Saxon(40, 98);

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    //console.log(randomViking);
    let ranVikingStrength = randomViking.strength;
    //this.vikingArmy[randomViking].strength = this.saxonArmy[randomSaxon].receiveDamage();
    let attackVikResult = randomSaxon.receiveDamage(ranVikingStrength);

    if(randomSaxon.health <=0) {
      this.saxonArmy.splice(randomSaxon, 1);
      return "A Saxon has died in combat";
    }
    return attackVikResult;
  }
  saxonAttack() {
    let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    //console.log(randomViking);
    let ranSaxonStrength = randomSaxon.strength;
    //this.vikingArmy[randomViking].strength = this.saxonArmy[randomSaxon].receiveDamage();
    let attackSaxResult = randomViking.receiveDamage(ranSaxonStrength);

    if(randomViking.health <=0) {
      this.vikingArmy.splice(randomViking, 1);
      return "A Viking has died in combat";
    }
    return attackSaxResult;
  }
  showStatus() {
    if(this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}


viking.battleCry;