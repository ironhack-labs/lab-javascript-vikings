// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
    attack() {
      return this.strength

    }
    receiveDamage(thedamage){
      this.health -= thedamage
      
    }
  
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
  super(health, strength);
  this.name = name;
  }
  battleCry() {
    return "Odin Owns You All!"
  }
  receiveDamage(thedamage) {
    super.receiveDamage(thedamage)
    if (this.health>0){
      return `${this.name} has received ${thedamage} points of damage`
    }else{
      return `${this.name} has died in act of combat`
    }
  }
}

// Saxon
class Saxon extends Soldier{
  constructor(health, strength){
    super(health, strength);
  }
  receiveDamage(damage) {
    super.receiveDamage(damage)
    if (this.health > 0){
      return `A Saxon has received ${damage} points of damage`
    }else{
      return 'A Saxon has died in combat'
    
    }
  }
}

// War
class War {
 vikingArmy = []
 saxonArmy = []
  addViking(Viking){
    this.Viking = Viking
    this.vikingArmy.push(Viking)
  }
  addSaxon(Saxon){
    this.Saxon = Saxon
    this.saxonArmy.push(Saxon)
  }
  vikingAttack(){
    const rndViking = this.vikingArmy[(Math.floor(Math.random() * this.vikingArmy.length))];
    const rndSaxon = this.saxonArmy[(Math.floor(Math.random() * this.saxonArmy.length))];
    const result = rndSaxon.receiveDamage(rndViking.strength)
    this.saxonArmy = this.saxonArmy.filter(function(saxon){
      return saxon.health >0
    });
    return result
    }

  saxonAttack(){
    const rndViking = this.vikingArmy[(Math.floor(Math.random() * this.vikingArmy.length))];
    const rndSaxon = this.saxonArmy[(Math.floor(Math.random() * this.saxonArmy.length))];
    const result = rndViking.receiveDamage(rndSaxon.strength)
    this.vikingArmy = this.vikingArmy.filter(function(viking){
      return viking.health >0
    });
    return result
  }
  showStatus(){
    if (this.saxonArmy == 0){
      return "Vikings have won the war of the century!";
    }else if(this.vikingArmy == 0){
      return "Saxons have fought for their lives and survived another day...";
    }else{
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
