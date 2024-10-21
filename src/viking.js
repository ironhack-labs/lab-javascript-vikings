// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength;
  }
  receiveDamage(damage){
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
}
attack(){
  return this.strength;
}
receiveDamage(damage){
  this.health = this.health - damage;

  if (this.health > 0){
    return `${this.name} has received ${damage} points of damage`
  } else if (this.health === 0) {
    return `${this.name} has died in act of combat`
  }
}
battleCry (){
  return "Odin Owns You All!"
}
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength){
    super(health, strength);
    this.health = health;
    this.strength = strength;
}
attack(){
  return this.strength;
}
receiveDamage(damage){
  this.health = this.health - damage;

  if (this.health > 0){
    return `A Saxon has received ${damage} points of damage`;
  } else if (this.health === 0){
    return "A Saxon has died in combat";
  }
}
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(vikingObject){
    this.vikingArmy.push(vikingObject)
  }
  addSaxon(saxonObject){
    this.saxonArmy.push(saxonObject)
  }
  vikingAttack(){
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let randomSaxon = this.saxonArmy[randomSaxonIndex];

    let result = randomSaxon.receiveDamage(randomViking.strength);
    
    if (randomSaxon.health <= 0){
      this.saxonArmy.splice(randomSaxonIndex, 1);
      } 
    return result;
 }
  saxonAttack(){
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking = this.vikingArmy[randomVikingIndex]

    let result2 = randomViking.receiveDamage(randomSaxon.strength);

    if (randomViking.health <= 0){
      this.vikingArmy.splice(randomVikingIndex, 1);
    }
      return result2;
  }
  showStatus(){
    if (this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survived another day..."
    } else if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1){
      "Vikings and Saxons are still in the thick of battle."
    }
}
}

