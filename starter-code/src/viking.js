// Soldier
class Soldier {
  constructor (health , strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function () {
      return strength;
    }
    this.receiveDamage = function (damage) {
      this.health -= damage;
    }
  }
}
  
// Viking
class Viking extends Soldier {
  constructor (name, health, strength) {
    super(health, strength);
    this.name = name;
    this.receiveDamage = function (damage) {
      this.health -= damage;
      if (this.health >= 1) {
        return (`${this.name} has received ${damage} points of damage`);
      } else {
        return (`${this.name} has died in act of combat`);
      }

    }
    this.battleCry = function () {
      return (`Odin Owns You All!`);
    }
  }
}

// Saxon
class Saxon extends Soldier {
  constructor (health, strength) {
    super(health, strength);
    this.receiveDamage = function (damage) {
      this.health -= damage;
      if (this.health >= 1) {
        return (`A Saxon has received ${damage} points of damage`);
      } else {
        return (`A Saxon has died in combat`);
      }

    
    }
  }
}





// War
class War {
  constructor () {
    this.vikingArmy = [];
    this.saxonArmy = [];

    this.addViking = function (viking) {
      this.vikingArmy.push(viking);
      
    }
    this.addSaxon = function (saxon) {
      this.saxonArmy.push(saxon);
    }
    this.vikingAttack = function () {
      let i = genRandom(this.saxonArmy.length);
      let results = this.saxonArmy[i].receiveDamage(this.vikingArmy[i].strength);

      if (this.saxonArmy[i].health <= 0) {
            this.saxonArmy.pop(i);
            return results;
      
          } else {
            return results;
          }
      



    }
    this.saxonAttack = function () {
      let i = genRandom(this.vikingArmy.length);
      let results =this.vikingArmy[i].receiveDamage(this.saxonArmy[i].strength);

       if (this.vikingArmy[i].health <= 0) {
             this.vikingArmy.pop(i);
             return results;

      } else {
        return results;
      }



    }
    
    this.showStatus = function () {
      if (this.vikingArmy.length <= 0) {
        return (`Saxons have fought for their lives and survive another day...`);

      } else if (this.saxonArmy.length <= 0) {
        return (`Vikings have won the war of the century!`);

      } else {
        return (`Vikings and Saxons are still in the thick of battle.`);

      }

    }
  }
}

function genRandom(x) {
  return Math.floor(Math.random() * Math.floor(x));
}



