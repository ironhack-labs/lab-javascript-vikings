class Soldier {
  constructor(health, strength) {
    this.strength = strength;
    this.health = health;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damege) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      console.log(`${this.name} has received ${damage} points of damage`);
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

const arxiles = new Viking('Arhiles', 10, 20);
console.log(arxiles);
arxiles.receiveDamage(11);
console.log(arxiles);

// Saxon

class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      console.log(`Saxon has received ${damage} points of damage`);
      return `A Saxon has received ${damage} points of damage`;
    } else {
      console.log(`A Saxon has died in act of combat`);
      return `A Saxon has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

const enemyThor = new Saxon(5, 15);
enemyThor.receiveDamage(Math.floor(Math.random() * 10));
console.log(enemyThor);

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];

  }

  addViking(Viking){
    this.vikingArmy+= Viking
  }

  addSaxon(Saxon){
    this.saxonArmy+=Saxon
  }
  
  vikingAttack(){
    this.saxonArmy.damage = this.Viking.strength
    if (Saxon.health === 0) {
      this.saxonArmy--
    } 
    return Saxon.receiveDamage(Viking.strength)
  }
  
  saxonAttack(){
    this.vikingArmy.damage = this.Saxon.strength;
    if (Viking.health === 0) {
      this.vikingArmy--
    } 
    return Viking.receiveDamage(Saxon.strength)
  }
  
  showStatus(){
    if(this.saxonArmy === 0){
      console.log("Vikings have won the war of the century!");
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy === 0){
      console.log("Saxons have fought for their lives and survived another day...")
      return "Saxons have fought for their lives and survived another day...";
    } else {
      console.log("Vikings and Saxons are still in the thick of battle.");
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
