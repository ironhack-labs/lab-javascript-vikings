// Soldier
class Soldier {
  constructor (health, strength) {
  this.health = health;  
  this.strength = strength;
  }
 
  attack () {
    return this.strength;
  }

  receiveDamage (damage) {
    this.health -= damage
  }

}

// Viking

class Viking extends Soldier {
  constructor(name, health, strength) {
  super(health,strength); 
  this.name = name;
   //calls the parent constructor
 
  }
 
  attack () {
    return super.attack ();
  }

  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    }
    else { 
      return `${this.name} has died in act of combat`
    }
  }

  battleCry () {
    return "Odin Owns You All!"
  }


}

// Saxon
class Saxon extends Soldier{
  constructor(health, strength) {
    super(health,strength);
  
  }
  attack () {
    return super.attack ();
  }

  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
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

addViking(Viking) {
  //let newViking = new Viking()
  this.vikingArmy.push(Viking)
}

addSaxon(Saxon) {
  this.saxonArmy.push(Saxon)
}

vikingAttack() {
  
  let randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length)
  let randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length)
  
  let randomSaxon = this.saxonArmy[randomSaxonNumber];
  let randomViking = this.vikingArmy[randomVikingNumber];

  let result = randomSaxon.receiveDamage(randomViking.strength);  
    
  if (result = `A Saxon has died in combat`) {
    this.saxonArmy.splice(randomSaxonNumber,1) 
  }

  return result;
}

saxonAttack() {
  let randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length)
  let randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length)
  
  let randomSaxon = this.saxonArmy[randomSaxonNumber];
  let randomViking = this.vikingArmy[randomVikingNumber];

  let result = randomViking.receiveDamage(randomSaxon.strength);  
    
  if (result.includes(`has died in act of combat`)) {
    this.vikingArmy.splice(randomVikingNumber,1) 
  }

  return result;

}

showStatus() {
if (this.saxonArmy.length <= 0) {
  return `Vikings have won the war of the century!` 
  }
else if (this.vikingArmy.length <= 0) {
  return `Saxons have fought for their lives and survive another day...`
  }
else {
  return `Vikings and Saxons are still in the thick of battle.`
  }

}

}
