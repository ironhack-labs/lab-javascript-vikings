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
    /* super.receiveDamage(damage); */
    this.health -= damage

    if (this.health !== 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}
// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    /* super.receiveDamage(damage); */
    this.health -= damage
    if (this.health !== 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
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
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomVikingIdex = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxon = this.saxonArmy[randomSaxonIndex];
    const randomViking = this.vikingArmy[randomVikingIdex];
    let finalCount = randomSaxon.receiveDamage(randomViking.attack());
    
    if(randomSaxon.health <= 0){
      this.saxonArmy.splice(randomSaxonIndex,1); 
    }
    return finalCount;
  }
  saxonAttack(){
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomVikingIdex = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxon = this.saxonArmy[randomSaxonIndex];
    const randomViking = this.vikingArmy[randomVikingIdex];
    let finalcount1 =randomViking.receiveDamage(randomSaxon.attack());
  
  if(randomViking.health <= 0){
    this.vikingArmy.splice(randomVikingIdex,1); 
  }
  return finalcount1;

 } 
}
