// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg,
  this.strength = strengthArg,
  this.attack = function() {
    return this.strength
  }
  this.receiveDamage = function(damage) {
    this.health = this.health - damage;
    if (this.constructor == Viking) {
      if (this.health > 0) {
        return (this.name + " has received " + damage + " points of damage");
      } else {
        return (this.name + " has died in act of combat");
      }
    } else if (this.constructor == Saxon) {
      if (this.health > 0) {
        return ("A Saxon has received " + damage + " points of damage");
      } else {
        return ("A Saxon has died in combat");
      }
    } 
  }
}

// Viking
function Viking(nameArg, healthArg, strengthArg) {
  Soldier.call(this);
  this.name = nameArg;
  this.health = healthArg;
  this.strength = strengthArg;
  this.battleCry = function() {
    return "Odin Owns You All!";
  }
  }

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon(healthArg, strengthArg) {
  Soldier.call(this);
  this.health = healthArg;
  this.strength = strengthArg;
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  this.addViking = function(Viking) {    //no tengo claro este punto, si voy a pasar una  callback function, debería pasar argumentos a la función Viking, no? 
    this.vikingArmy.push(Viking);
  }
  this.addSaxon = function(Saxon) {
    this.saxonArmy.push(Saxon);  // lo mismo que en addViking, no entiendo que no haya que dar argumenos a la función saxon al llamarla
  }
  this.vikingAttack = function() {
    var randomSaxon = Math.floor(Math.random() * (this.saxonArmy.length - 1));
    var randomViking = Math.floor(Math.random() * (this.vikingArmy.length - 1));
    var saxonDamage = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);  
    if (this.saxonArmy[randomSaxon].health <= 0) {
      this.saxonArmy.splice(randomSaxon, 1);
    }
    return saxonDamage;
  } 

  this.saxonAttack = function() {
    var randomSaxon = Math.floor(Math.random() * (this.saxonArmy.length - 1));
    var randomViking = Math.floor(Math.random() * (this.vikingArmy.length - 1));
    var vikingDamage = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);  
    if (this.vikingArmy[randomViking].health <= 0) {
      this.vikingArmy.splice(randomViking, 1);
    }
    return vikingDamage;
  }
  this.showStatus = function() {    //he probado primero con ifs anidados, pero no sé cómo contemplar el caso de que ambos sean cero, de hecho esa es la situación actual, y no entiendo cómo la está pasando Jasmine. Si ambos son cero, utilizado así siempre saldrá como ganador el que hayamos puesto primero en los ifs, y no es verdad, pero no estaría llegando al final del ciclo.
    if (this.saxonArmy.length == 0 && this.vikingArmy.length == 0) {
      return "Both died";
    }
    if (this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!";
    }
    if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survive another day...";
    }
    return "Vikings and Saxons are still in the thick of battle.";
     
  }
}
