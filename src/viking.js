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
    this.health -= damage;
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
    this.health -= damage;
    if(this.health <= 0){
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damage} points of damage`
    }
  }
  battleCry(){
    return 'Odin Owns You All!';
  }
}
// Saxon
class Saxon extends Soldier{
  attack(){
    return this.strength;
  }
  receiveDamage(damage){
    this.health -= damage;
    if(this.health <= 0){
      return 'A Saxon has died in combat';
    } else {
      return `A Saxon has received ${damage} points of damage`
    }
  }
}

// War
class War {
  constructor (){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking){
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }
  vikingAttack(){
    let randomViking = this.vikingArmy[Math.floor(this.vikingArmy.length*Math.random())];
    let randomSaxonIndex = Math.floor(this.saxonArmy.length*Math.random());
    let randomSaxon = this.saxonArmy[randomSaxonIndex];
    let resultSaxon = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health <= 0){
      this.saxonArmy.splice(randomSaxonIndex,1);
    }
    return resultSaxon;
  }

  saxonAttack(){
    let randomSaxon = this.saxonArmy[Math.floor(this.saxonArmy.length*Math.random())];
    let randomVikingIndex = Math.floor(this.vikingArmy.length*Math.random());
    let randomViking = this.vikingArmy[randomVikingIndex];

    let resultViking = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health <= 0){
      this.vikingArmy.splice(randomVikingIndex,1);
    }
    return resultViking;
  }

  showStatus(){
    if (this.saxonArmy.length === 0){
      return 'Vikings have won the war of the century!';
    }
    if (this.vikingArmy.length === 0){
      return 'Saxons have fought for their lives and survived another day...'
    }
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0){
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
