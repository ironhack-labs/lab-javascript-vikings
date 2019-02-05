// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  
  this.attack = function () { return this.strength; };
  
  this.receiveDamage = function (damage) { this.health -= damage; };
}
  
// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  
  this.receiveDamage = function (damage) { 
    this.health -= damage;
    if (this.health > 0) { return ( this.name + ' has received ' + damage + ' points of damage' ); }
    else { return ( this.name + ' has died in act of combat' ); }
  };
  
  this.battleCry = function () {
    return ( 'Odin Owns You All!' );
  };
}

var vik = new Viking();

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
  
  this.receiveDamage = function (damage) { 
    this.health -= damage;
    if (this.health > 0) { return ( 'A Saxon has received ' + damage + ' points of damage' ); }
    else { return ( 'A Saxon has died in combat' ); }
  };
}

var sax = new Saxon();

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
  
  this.addViking = function (vik) { this.vikingArmy.push(vik); };
  
  this.addSaxon = function (sax) { this.saxonArmy.push(sax) };
  
  this.vikingAttack = function () {
    var randomSax = Math.floor(Math.random() * (this.saxonArmy.length - 1));
    var randomVik = Math.floor(Math.random() * (this.vikingArmy.length - 1));
    var msg = this.saxonArmy[randomSax].receiveDamage( this.vikingArmy[randomVik].attack() );
    if ( this.saxonArmy[randomSax].health <= 0 ) { this.saxonArmy.splice( randomSax, 1 ); }
    return msg;
  };
  
  this.saxonAttack = function () {
    var randomSax = Math.floor(Math.random() * (this.saxonArmy.length - 1));
    var randomVik = Math.floor(Math.random() * (this.vikingArmy.length - 1));
    var msg = this.vikingArmy[randomVik].receiveDamage( this.saxonArmy[randomSax].attack() );
    if ( this.vikingArmy[randomVik].health <= 0 ) { this.vikingArmy.splice( randomVik, 1 ); }
    return msg;
  };
  
  this.showStatus = function () {
    if ( this.saxonArmy.length === 0 || this.vikingArmy.length === 0 ){
      if (this.saxonArmy.length === 0) { return 'Vikings have won the war of the century!'; }
      else { return 'Saxons have fought for their lives and survive another day...'; }
    }
    else { return 'Vikings and Saxons are still in the thick of battle.' }
  };
}
