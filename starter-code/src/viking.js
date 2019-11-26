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
        this.health -= damage;
    };
}

class Viking extends Soldier {
    constructor (name, health, strength) {
        super (health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) 
          return (`${this.name} has received ${damage} points of damage`);
        else
          return (`${this.name} has died in act of combat`);
    };
    battleCry() {
      return ("Odin Owns You All!");
    };

}

// Saxon
class Saxon extends Soldier {
    constructor (health, strength) {
        super (health, strength);
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) 
          return (`A Saxon has received ${damage} points of damage`);
        else
          return (`A Saxon has died in combat`);
    };

}

// War
class War {
  constructor () {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }  
  addViking(viking) {
    this.vikingArmy.push(viking);
  };
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  };
  vikingAttack()  {
    let s = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];  
    let v = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let res = s.receiveDamage(v.strength);
    if (s.health <= 0) 
      this.saxonArmy.splice(this.saxonArmy.indexOf(s),1);
    return res;  
  };
  saxonAttack() {
    let s = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];  
    let v = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let res = v.receiveDamage(s.strength);
    if (v.health <= 0) 
      this.vikingArmy.splice(this.vikingArmy.indexOf(v),1);
    return res;  
  };

  showStatus() {
      /* 
      Returns the current status of the War based on the size of the armies.

should be a function
should receive 0 arguments
if the Saxon array is empty, should return "Vikings have won the war of the century!"
if the Viking array is empty, should return "Saxons have fought for their lives and survived another day..."
if there are at least 1 Viking and 1 Saxon, should return "Vikings and Saxons are still in the thick of battle."
*/

};
}
