// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  };
  attack(){
    return this.strength;
  }
  receiveDamage(damage){
    this.health -= damage;
  }
};

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  };
  receiveDamage(damage){
    this.health -= damage;
    return (
      (this.health > 0) ?
      `${this.name} has received ${damage} points of damage` :
      `${this.name} has died in act of combat`
    )
  }
  battleCry(){
    return 'Odin Owns You All!';
  }
};

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  };
  receiveDamage(damage){
    this.health -= damage;
    return(
      (this.health > 0) ?
      `A Saxon has received ${damage} points of damage` :
      `A Saxon has died in combat`
    )
  }
};

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  };
  addViking(viking){
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }
  vikingAttack(){
    // Check if there are soldiers to fight
    if (this.vikingArmy.length && this.saxonArmy.length > 0){
      const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
      const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
      const randomViking = this.vikingArmy[randomVikingIndex];
      const randomSaxon = this.saxonArmy[randomSaxonIndex];
      
      // Random Saxon receiveDamage equal to the strength of a random Viking
      const result = randomSaxon.receiveDamage(randomViking.strength);

      // Remove dead Saxons from the army
      if (randomSaxon.health < 1){
        this.saxonArmy.splice(randomSaxonIndex, 1);
      }
      return result;
    } else {
      return `There aren't soldiers to fight`;
    }
  }
  saxonAttack(){
    // Check if there are soldiers to fight
    if (this.vikingArmy.length && this.saxonArmy.length > 0){
      const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
      const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
      const randomViking = this.vikingArmy[randomVikingIndex];
      const randomSaxon = this.saxonArmy[randomSaxonIndex];
      
      // Random Viking receiveDamage equal to the strength of a random Saxon
      const result = randomViking.receiveDamage(randomSaxon.strength);

      // Remove dead Vikings from the army
      if (randomViking.health < 1){
        this.vikingArmy.splice(randomVikingIndex, 1);
      }
      return result;
    } else {
      return `There aren't soldiers to fight`;
    }
  }
  showStatus(){
    if(this.saxonArmy.length === 0){
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0){
        return `Saxons have fought for their lives and survive another day...`;
    } else{
        return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
};