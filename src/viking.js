// Soldier
class Soldier {

  constructor (health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack () {
      return this.strength;
  };

  receiveDamage (damage) {
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
    return 'Odin Owns you All!';
  }
}

// Saxon
class Saxon extends Soldier{

  receiveDamage(damage){
    this.health = this.health - damage;

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;

    } else { return `A Saxon has died in act of combat`;

      };
  }
}
    

// War
class War{
  constructor (vikingArmy, saxonArmy) {
  this.vikingArmy = [];
  this.saxonArmy = [];
  }


  addViking(Viking){
    this.vikingArmy = this.vikingArmy + this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon){
    this.saxonArmy = this.saxonArmy + this.saxonArmy.push(Saxon);
  }

  vikingAttack(){
    Saxon.receiveDamage() = Viking.this.strength;

    if (Saxon.this.health = 0) { 
      return this.saxonArmy = this.saxonArmy - Saxon;
    }
    return receiveDamage();
  }

  saxonAttack(){
    Viking.receiveDamage() = Saxon.this.strength;

    if (Viking.this.health = 0) { 
      return this.vikingArmy = this.vikingArmy - Viking;
    }
    return receiveDamage();
  }

  showStatus(){

    if (this.saxonArmy.length === 0) { 
      return "Vikings have won the war of the century!";

    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    }
      else (this.vikingArmy.length > 0  && this.saxonArmy.length > 0) 
      return "Vikings and Saxons are still in the thick of battle";
  }
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
