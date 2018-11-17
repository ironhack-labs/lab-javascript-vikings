// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;

  this.attack = function() {
    return this.strength;
  }

  this.receiveDamage = function(demage) {
    this.health -= demage;
  }
}

// Viking
function Viking(name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
  
  
  this.attack = function() {
    return this.strength;
  }

  this.receiveDamage = function(demage) {
    this.health -= demage;
    if(this.health > 0) {
      return this.name + ' has received ' + demage + ' points of damage';
    } else {
      return this.name + ' has died in act of combat';
    }
  }

  this.battleCry = function(){
    return 'Odin Owns You All!';
  }
}

Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon(health, strength){
  Soldier.call(this, health, strength);

  this.receiveDamage = function(demage){
    this.health -= demage;
    if(this.health > 0) {
      return 'A Saxon has received ' + demage + ' points of damage';
    } else {
      return 'A Saxon has died in combat';
    }
  }
}

Saxon.prototype = Object.create(Soldier.prototype);


// War
function War() {

  this.vikingArmy=[];
  this.saxonArmy =[];

  this.addViking = function (viking) {
    this.vikingArmy.push(viking); 
  };

  this.addSaxon = function (saxon) {
    this.saxonArmy.push(saxon);
  };

  this.vikingAttack = function(){
    var index = Math.floor(Math.random() * this.vikingArmy.length);
    this.saxon =  this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    this.viking = this.vikingArmy[index];
    var result = this.saxon.receiveDamage(this.viking.strength);
    if( this.saxon.health <= 0){
      this.saxonArmy.splice(index, 1);
    }
    return result;
  };
  
  this.saxonAttack = function() {
    var index = Math.floor(Math.random() * this.vikingArmy.length);
    this.viking = this.vikingArmy[index];
    this.saxon =  this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    var result = this.viking.receiveDamage(this.saxon.strength);
    if( this.viking.health <= 0){
      this.vikingArmy.splice(index, 1);
    }
    return result;
  };

  this.showStatus = function() {
    if(this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!";  
    }  
    if(this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survive another day...";
    }
    if((this.vikingArmy.length >= 1) && (this.saxonArmy.length >=1)){
      return "Vikings and Saxons are still in the thick of battle."
    }

  };

}
