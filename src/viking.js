// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

attack () {
  return (this.strength)
}
receiveDamage(damage){
  (this.health -= damage);
}

}


// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super (health, strength);
    this.name = name
  }
  battleCry(){
    return("Odin Owns You All!")
  }

  receiveDamage(damage){
    this.health -= damage;
    if (this.health > 0){
      return (`${this.name} has received ${damage} points of damage`) 
    } else {
      return (`${this.name} has died in act of combat`)

    }

  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    this.health -= damage;
    if (this.health > 0){
      return (`A Saxon has received ${damage} points of damage`) 
    } else {
      return ('A Saxon has died in combat')

    }

}

}

// War
class War {
  constructor (){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking (Viking){
    this.vikingArmy.push(Viking)
  }
  addSaxon (Saxon){
    this.saxonArmy.push(Saxon)
  }
  vikingAttack (){
  let newViking = this.vikingArmy[Math.floor (Math.random() * this.vikingArmy.length)];
  let newSaxon = this.saxonArmy[Math.floor (Math.random() * this.saxonArmy.length)];
  newSaxon.receiveDamage(newViking.attack())
  this.saxonArmy.forEach((saxon,index) =>{
    if (saxon.health <= 0) this.saxonArmy.splice(index,1);

  }) 
  return ('A Saxon has died in combat')
  }
  saxonAttack (){
    let newSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let newViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    newViking.receiveDamage(newSaxon.attack());
    this.vikingArmy.forEach((viking, item) => {
      if (viking.health  <= 0) {
        this.vikingArmy.splice(item, 1);
      };
    }); return `${newViking.name} has received ${newSaxon.strength} points of damage`
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!'
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    };
  };
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
