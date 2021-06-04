// Soldier
/*Soldier class should receive 2 arguments (health & strength), 

✓ should receive 2 arguments (health & strength) (1 ms)
✕ should receive the health property as its 1st argument
✕ should receive the strength property as its 2nd argument
      
receiveDamage: 
should receive 1 argument (the damage)
should remove the received damage from the health property
shouldn't return anything
      
      */

class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  };
  receiveDamage(damage) {
    this.health -= damage;
  };
}








// Viking


class Viking extends Soldier {

  constructor(name, health, strength) {
    super(health, strength);
    this.name= name ;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return(`${this.name} has received ${damage} points of damage`);
    } else {
      return(`${this.name} has died in act of combat`);
    }
  };

  battleCry() {
    return("Odin Owns You All!");
  };

}






// Saxon
/*
receiveDamage() method
(This method needs to be re-implemented for Saxon because the Saxon version needs to have different return values.)

should be a function
should receive 1 argument (the damage)
should remove the received damage from the health property
if the Saxon is still alive, it should return "A Saxon has received DAMAGE points of damage"
if the Saxon dies, it should return "A Saxon has died in combat"

*/
class Saxon extends Soldier {

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return(`A Saxon has received ${damage} points of damage`);
    } else {
      return(`A Saxon has died in combat`);
    };
  };
}

// War
/*
vikingAttack() method
A Saxon (chosen at random) has their receiveDamage() 
method called with the damage equal to the strength of a Viking (also chosen at random). 
This should only perform a single attack and the Saxon doesn't get to attack back.

- should be a function
- should receive 0 arguments
- should make a Saxon receiveDamage() equal to the strength of a Viking
- should remove dead saxons from the army
- should return result of calling receiveDamage() of a Saxon with the strength of a Viking

saxonAttack() method
The Saxon version of vikingAttack(). A Viking receives the damage equal to the strength of a Saxon.

- should be a function
- should receive 0 arguments
- should make a Viking receiveDamage() equal to the strength of a Saxon
- should remove dead vikings from the army
- should return result of calling receiveDamage() of a Viking with the strength of a Saxon

*/
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(newViking) {
    this.vikingArmy.push(newViking);
  };

  addSaxon(newSaxon) {
    this.saxonArmy.push(newSaxon);
  };

  vikingAttack() {
      let saxonVictim = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())];
      let vikingAttacker = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];
      let attackResult = saxonVictim.receiveDamage(vikingAttacker.strength);
      if(saxonVictim.health < vikingAttacker.strength) {
        this.saxonArmy.splice(this.saxonArmy.indexOf(saxonVictim), 1);
        ;}

      return attackResult;
    };


  saxonAttack() {
    let saxonAttacker = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())];
    let vikingVictim = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];
    let attackResult = vikingVictim.receiveDamage(saxonAttacker.strength);
    if(vikingVictim.health < saxonAttacker.strength) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(vikingVictim), 1);
      ;}

    return attackResult;
  };

  showStatus() {
    if(this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!";
    }
    else if(this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survived another day...";
    }
    else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  };


};


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
