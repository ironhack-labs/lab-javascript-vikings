/********************************************
 * Soldier Class
*********************************************/
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

/********************************************
 * Viking Class (inherited from Soldier)
*********************************************/
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage"; 
    } else {
      return this.name + " has died in act of combat";
    }
  }

  battleCry() {
    return "Odin Owns You All"
  }
}

/********************************************
 * Saxon Class (inherited from Soldier)
*********************************************/
class Saxon extends Soldier{
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat"
    }
  }
}

/********************************************
 * War Class
*********************************************/
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(vikingObj) {
    this.vikingArmy.push(vikingObj);
  }

  addSaxon(saxonObj) {
    this.saxonArmy.push(saxonObj);
  }

  vikingAttack() {
    var saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    var viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    var message = saxon.receiveDamage(viking.attack());
    if (saxon.health <= 0) {
      this.saxonArmy = this.saxonArmy.filter(function(saxon) {
        return saxon.health > 0
      })
    }

    return message;
  }

  saxonAttack() {
    var saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    var viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    var message = viking.receiveDamage(saxon.attack());
    if (viking.health <= 0) {
      this.vikingArmy = this.vikingArmy.filter(function(viking) {
        return viking.health > 0
      })
    }

    return message;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day..."
    } else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}

var v1 = new Viking("Amelia" , 20, 20);
var v2 = new Viking("Min", 60, 32);
var s1 = new Saxon(100, 5)
var s2 = new Saxon(100, 7);

var w1 = new War();
w1.addViking(v1);
w1.addViking(v2);
w1.addSaxon(s1);
w1.addSaxon(s2);

console.log(w1);
console.log(w1.vikingAttack());
console.log(w1.showStatus())
console.log(w1.saxonAttack());
console.log(w1.showStatus())
