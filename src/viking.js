// Soldier
class Soldier {
  constructor(health, strength) {
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
  }

  receiveDamage(damage2){
    super.receiveDamage(damage2);
    if (this.health > 0){
      return `${this.name} has received ${damage2} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    } // return (this.health > 0) ? `${this.name} has received ${damage2} points of damage` : `${this.name} has died in act of combat`;
  }
  

  battleCry(){
    return 'Odin Owns You All!';    
  }
}


// Saxon
class Saxon extends Soldier {
  receiveDamage(damage3){
    super.receiveDamage(damage3);
    return (this.health > 0) ? `A Saxon has received ${damage3} points of damage` : `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor(){
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
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];    
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const havoc = randomSaxon.receiveDamage(randomViking.attack());
    if (randomSaxon.health <= 0){
      this.saxonArmy.splice(randomSaxon, 1); // 1 -> elimina o elemento caído de randomSaxon
    }
    return havoc;
  }
    /* same as:
    vikingAttack(){
      let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
      let randomViking = this.vikingArmy[randomVikingIndex];
      let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
      let randomSaxon = this.saxonArmy[randomSaxonIndex];
      const havoc = randomSaxon.receiveDamage(randomViking.attack());
      if (randomSaxon.health <= 0){
        this.saxonArmy.splice(randomSaxonIndex, 1); 
      }
      return havoc;
    }
    */

  saxonAttack(){
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const niceTry = randomViking.receiveDamage(randomSaxon.attack());
    if (randomViking.health <= 0){
      this.vikingArmy.splice(randomViking, 1);
    }
    return niceTry;
  }

  showStatus(){
    if (!this.saxonArmy.length){
      return 'Vikings have won the war of the century!';
    } else if (!this.vikingArmy.length){
      return 'Saxons have fought for their lives and survived another day...';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }  
}

/*
const war = new War();
war.addViking(new Viking('Conan', 125, 100));
war.addSaxon(new Saxon(100, 60));
console.log(war);

war.vikingAttack();
console.log(war);
*/

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
