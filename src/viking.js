// Soldier
class Soldier {
  constructor (health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack(){
    return this.strength;
  }

  receiveDamage(strength){
    this.health -= strength;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name,health,strength){
    super(health, strength);
    this.name = name;
  }

  receiveDamage(strength){
    this.health -= strength;
    
    if (this.health > 0){
      return `${this.name} has received ${strength} points of damage`;
    }else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry(){
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(strength){
    this.health -= strength;
    
    if (this.health > 0){
      return `A Saxon has received ${strength} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon){
    this.saxonArmy.push(Saxon);
  }

  vikingAttack(){
    const SaxonSoldier = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const VikingSoldier = this.vikingArmy[0];

    let result = SaxonSoldier.receiveDamage(VikingSoldier.attack());

    if(SaxonSoldier.health <= 0){
      this.saxonArmy.splice(-1);
    }

    return result;
  }

  saxonAttack(){
    const VikingSoldier = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const SaxonSoldier = this.saxonArmy[0];

    let result = VikingSoldier.receiveDamage(SaxonSoldier.attack());

    if(VikingSoldier.health <= 0){
      this.vikingArmy.splice(-1);
    }

    return result;
  }

  showStatus(){
    while (this.vikingArmy.length && this.saxonArmy.length){
      return `Vikings and Saxons are still in the thick of battle.`;
    }
    if (!this.vikingArmy.length && this.saxonArmy.length){
      return `Saxons have fought for their lives and survived another day...`;
    }
    if (this.vikingArmy.length && !this.saxonArmy.length){
      return `Vikings have won the war of the century!`;
    }
  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
