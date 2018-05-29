// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
    this.attack = function () {return this.strength; }
    this.receiveDamage = function (damage) {this.health -= damage; }
  }
}

// Viking
class Viking extends Soldier {
  constructor(nameArg, healthArg, strengthArg) {
    super(healthArg, strengthArg);
    this.name = nameArg;
    this.receiveDamage = function (damage) {
      this.health-=damage;
      if (this.health > 0) {
        return (this.name + " has received " + damage + " points of damage");
      } else {
        return (this.name + " has died in act of combat");
      }
    }
    this.battleCry = function () {
      return ("Odin Owns You All!");
    }
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(healthArg, strengthArg) {
    super(healthArg, strengthArg);
    this.receiveDamage = function (damage) {
      this.health -= damage;
      if (this.health > 0) {
        return ("A Saxon has received " + damage + " points of damage");
      } else {
        return ("A Saxon has died in combat");
      }
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    this.addViking= function(viking) {this.vikingArmy.push(viking);}
    this.addSaxon = function (saxon) {this.saxonArmy.push(saxon)};
    this.vikingAttack = function(){
      var randomize= parseInt(Math.random()*this.vikingArmy.length);
       this.saxon[randomize].health-=viking[randomize].strength;}
    this.saxonAttack = function() {viking.health = sajon.strength;}
  }
}
