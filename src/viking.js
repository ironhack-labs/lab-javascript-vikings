// Soldier
class Soldier {

  constructor (health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
      return this.strength;
  };

  receiveDamage(damage) {
      this.health = this.health - damage;
  };
}


// Viking
class Viking extends Soldier {
  constructor (name, health, strength) {
    super (health, strength)
    this.name = name;
  }

  receiveDamage(damage){
    this.health = this.health - damage;

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;

    } else { return `${this.name} has died in act of combat`;

      };
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier{

  receiveDamage(damage){
    this.health = this.health - damage;

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;

    } else { return `A Saxon has died in combat`;

      };
  }
}
    

// War
class War{
  this.vikingArmy = [];
  this.saxonArmy = [];



  addViking(Viking){
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon){
    this.saxonArmy.push(Saxon);
  }

  vikingAttack(){

    const saxonRandom = saxonArmy[Math.floor(Math.random()*saxonArmy.length)];
    const vikingRandom = vikingArmy[Math.floor(Math.random()*vikingArmy.length)];

    const result = saxonRandom.receiveDamage(vikingRandom.attack());
    result.filter(saxonRandom === 0);
  }
  

  saxonAttack(){
    const saxonRandom = saxonArmy[Math.floor(Math.random()*saxonArmy.length)];
    const vikingRandom = vikingArmy[Math.floor(Math.random()*vikingArmy.length)];

    const result = vikingRandom.receiveDamage(saxonRandom.attack());
    result.filter(vikingRandom === 0);
    
  }

  showStatus(){

    if (saxonArmy.length === 0) { 
      console.log("Vikings have won the war of the century!");

    } else if (vikingArmy.length === 0) {
      console.log("Saxons have fought for their lives and survived another day...");
    }
      else (vikingArmy.length > 0  && saxonArmy.length > 0) 
      console.log("Vikings and Saxons are still in the thick of battle.");
  }
}






// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
