// //------------------------------------------------------
// // SOLDIER
// //------------------------------------------------------
// function Soldier() {}
//
// //------------------------------------------------------
// // GENERAL
// //------------------------------------------------------
// function General() {}
//
// //------------------------------------------------------
// // FOOTVIKING
// //------------------------------------------------------
// function FootViking() {}
//
// module.exports = {
//   Soldier:    Soldier,
//   General:    General,
//   FootViking: FootViking
// };



function Soldier (strength, health) {
  this.strength = strength;
  this.health = health;
}

Soldier.prototype.attack = function(attacker) {
  var damageReceived = this.strength;
  return damageReceived;
};

Soldier.prototype.receiveDamage = function(attacker) {
  Soldier.attack(attacker);
  this.health -= damageReceived;
  var vikingState;
  var saxonState;
  if (Soldier === Viking) {
    if (this.health > 0) {
      vikingState = "alive";
      return Viking.name + " has receive " + damageReceive + "points of damage.";
    }else if (this.health <= 0) {
      vikingState = "dead";
      return Viking.name + " has died in act of combat.";
    }
  }else if (Soldier === Saxon){
    if (this.health > 0) {
      saxonState = "alive";
      return "A Saxon has received " + damageReceived + " points of damage.";
    }else if (this.health <= 0) {
      saxonState = "dead";
      return "A Saxon has died in combat.";
    }
  }
};

function Viking (health, strength, name) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.battlecry = "Odin Owns You All!";
}

function Saxon (health, strength) {
  Soldier.call(this, health, strength);
}

Viking.prototype = Object.create(Soldier.prototype);
Saxon.prototype = Object.create(Soldier.prototype);

function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}


var sizes = Math.floor(Math.random() * 10);
var vikingArmySize = sizes * 10;
var saxonArmysize = sizes * 200;
var vikingArmyIndex = (Math.floor(Math.random() * this.vikingArmySize));
var saxonArmyIndex = (Math.floor(Math.random() * this.saxonArmySize));
var smallestArmy = [];

console.log(vikingArmySize);
console.log(saxonArmysize);

War.prototype.vikingArmyFilling = function (){
  for (var i = 0; i < this.vikingArmySize; i++) {
    this.vikingArmy.push(new Viking(this.sizes*100, this.sizes*50, "Johnny"));
  }
  return this.vikingArmy;
};

War.prototype.saxonArmyFilling = function () {
  for (var j = 0; j < this.saxonArmySize; j++) {
    this.saxonArmy.push(new Saxon(this.sizes*40, this.sizes*20));
  }
  return this.saxonArmy;
};

War.prototype.smallestArmy = function(army1, army2) {
  if (army1.length < army2.length) {
    smallestArmy = army1;
  } else {
    smallestArmy = army2;
  }
  return smallestArmy;
};

War.prototype.combat = function() {
  this.vikingArmyFilling();
  this.saxonArmyFilling();
  var randomViking = this.vikingArmy[vikingArmyIndex];
  var randomSaxon = this.saxonArmy[saxonArmyIndex];
  this.smallestArmy(this.vikingArmy, this.saxonArmy);
  for (var l = 0; l < smallestArmy.length; l++) {
    this.smallestArmy(this.saxonArmy, this.vikingArmy);
    for (var k = 0; k < smallestArmy.length; k++) {
      randomViking.receiveDamage(randomSaxon);
        if (vikingState === "dead") {
          this.vikingArmy.slice(randomVikingIndex, 1);
        }
      randomSaxon.receiveDamage(randomViking);
        if (saxonState === "dead") {
          this.saxonArmy.slice(randomSaxonIndex, 1);
        }
      }
    }
  return this.saxonArmy, this.vikingArmy;
};

War.prototype.victory = function() {
  this.combat();
  if (this.saxonArmy.length === 0) {
    return "The Viking Army decimated their enemy. Only " + this.vikingArmy.length + " survived.";
  } else {
    return "Against all odds, the Saxon Army won the battle. Only " + this.saxonArmy.length + " survived.";
  }
};

var myWar = new War();
myWar.victory();
console.log(myWar.victory());
//
// War.prototype.charge = function(army) {
//   var totalAttack = 0;
//   for (var k = 0; k < army.length; k++) {
//     totalAttack += army[k].attack(army[k]);
//   }
//   if (army === vikingArmy) {
//     console.log("The Viking Horde has a combined strength of " + totalAttack);
//   } else if (army === saxonsArmy) {
//     console.log("The Saxons charge for a total of " + totalAttack + " strength");
//   }
//   return totalAttack;
// };
//
// War.prototype.armyHealth = function(army) {
//   var totalHealth = 0;
//   for (var l = 0; l < army.length; l++) {
//     totalHealth += army[l].health[l];
//   }
//   return totalHealth;
// };
//
// War.prototype.armyDamage = function(attacker, defendant) {
//   var attack = attacker.charge(attacker);
//   var hitPoints = defendant.armyHealth(defendant);
//   var healthLeft = hitPoints - attackPoints;
//   var soldiersLeft = Math.floor(healthLeft / totalHealth);
//   if (defendant === vikingArmy) {
//     return "The Viking army has a total of " + soldiersLeft + " left alive from the enemy's attack";
//   } else {
//     return "The Saxon army has a total of " + soldiersLeft + " left alive from the enemy's attack";
//   }
// };
//
// War.prototype.fight = function(army1, army2) {
//   console.log(War.armyDamage(army1, army2));
//   console.log(War.armyDamage(army2, army1));
// };

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
