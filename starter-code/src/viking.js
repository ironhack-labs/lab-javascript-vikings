// Soldier
function Soldier (health,strength) {
  this.health = health;
  this.strength = strength;
}

// Viking
function Viking (name,health,strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}
Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon (health,strength) {
  Soldier.call(this, health, strength);
}
Saxon.prototype = Object.create(Soldier.prototype);

// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

//Soldier prototype methods

Soldier.prototype.attack = function(){
  return this.strength;
};

Soldier.prototype.receiveDamage = function (damage) {
 this.health -= damage;
};
//Viking prototype methods modifications

Viking.prototype.receiveDamage = function (damage) {
 this.health -= damage;
 if (this.health > 0) {
   return this.name  +" has received " + damage + " points of damage";
 } else {return this.name + " has died in act of combat";}
};

Viking.prototype.battleCry = function () {
  console.log('Odin Owns You All!');
};

//Soldier prototype methods modifications
Saxon.prototype.receiveDamage = function (damage) {
 this.health -= damage;
 if (this.health > 0) {
   return "A Saxon has received "+ damage + " points of damage";
 } else {return "A Saxon has died in combat";}
};

//War prototype methods
War.prototype.addViking = function(Viking) {
  this.vikingArmy.push(Viking);
};

War.prototype.addSaxon = function(Saxon) {
  this.saxonArmy.push(Saxon);
};

War.prototype.vikingAttack = function(newWar) {
  var saxonLength = newWar.saxonArmy.length; //esto no funciona
  var vikingLength = newWar.VikingArmy.length; //esto no funciona
  var i = Math.floor(Math.random()*saxonLength);
  var j = Math.floor(Math.random()*vikingLength);
  if(newWar.saxonArmy[i] && newWar.vikingArmy[j]) {
    var attack = newWar.saxonArmy[i].receiveDamage(newWar.vikingArmy[j].strength);
    if (newWar.saxonArmy[i].health<=0) {
        newWar.saxonArmy.splice(1, i);
    }
  console.log(attack);
}
};

War.prototype.saxonAttack = function(newWar) {
  var saxonLength = newWar.saxonArmy.length; //esto no funciona
  var vikingLength = newWar.VikingArmy.length; //esto no funciona
  var i = Math.floor(Math.random()*saxonLength);
  var j = Math.floor(Math.random()*vikingLength);
  if (newWar.vikingArmy[i] && newWar.saxonArmy[j]) {
    var attack = newWar.vikingArmy[i].receiveDamage(newWar.saxonArmy[j].strength);
    if (newWar.vikingArmy[i].health<=0) {
    newWar.vikingArmy.splice(1, i);
    console.log('viking borrado');
  }
  console.log(attack);
}
};

War.prototype.clashOfArmies = function(newWar) {
  for (i=0; i<=100; i++) {
    if(Math.floor(Math.random()*2) === 0) {
      newWar.saxonAttack(newWar);
    }else {newWar.vikingAttack(newWar);}
    if (newWar.vikingArmy.length === 0 || newWar.saxonArmy.length === 0) {
      return newWar.showStatus();}
  }
};

War.prototype.showStatus = function(newWar) {
    if (newWar.saxonArmy.length <= 0) {
    return "Vikings have won the war";
  }if (newWar.vikingArmy.length <= 0){
    return "Saxons have won the war";
  } else { return "Vikings and Saxons are still in the thick of battle.";
  }
};




var vikingNames = ['Ingulbjörn', 'Hæng', 'Arni', 'Hæng', 'Vandrad', 'Ornulf','Thjodofl','Eldgrim','Asgaut','Ref','Sigvat','Eyjolf','Eyvald','Guda','Auðunar','Hrollaug', 'Glum', 'Asgeir', 'Orest', 'Hauk', 'Ljot'];
//Create Viking Army

var createArmies = function (newWar) {
  for (i=0; i<=19; i++) {
    var strength = Math.floor(Math.random()*10 + 1);
    var randomName = vikingNames[Math.floor(Math.random()*19 + 1)];
    if (newWar.saxonArmy.length<10) {
      var randomSaxon = new Saxon(5, strength);
      newWar.addSaxon(randomSaxon);
     }else {
       var randomViking = new Viking(randomName, 5, strength);
       newWar.addViking(randomViking);
     }
  }
};
//Create a war
var createAWar = function(newWar) {
  newWar = new War(newWar);
  createArmies(newWar);
  return newWar;
};
////////////////////////////////////
var cienAnos = createAWar('cienAnos');
console.log(cienAnos);
console.log(cienAnos.clashOfArmies(cienAnos));
// console.log(cienAnos.saxonArmy.length);
// console.log(cienAnos.vikingArmy.length);
console.log(cienAnos);
console.log(cienAnos.showStatus(cienAnos));
console.log(cienAnos.vikingArmy.length);
