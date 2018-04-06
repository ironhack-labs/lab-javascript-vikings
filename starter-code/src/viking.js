// Soldier
function Soldier(health,strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function() {
      return this.strength;
  };
  this.receiveDamage = function(damage) {
    this.health - damage;
}
}

// Viking
function Viking(name,health,strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.receiveDamage = function(damage) {
    this.health = this.health - damage;
    if( this.health > 0) {
      return this.name + ' has receive ' + damage + ' points of damage';
    } else if ( this.health <= 0 ) {
      console.log( this.name + ' has died in act of combat');
    }
  }
  this.battleCry = function() {
    return 'Odin Owns You All';
  }
} 


// Saxon
function Saxon(health,strength) {
  Soldier.call(this, health, strength);
  
  this.receiveDamage = function(damage) {
    this.health = this.health - damage;
    if( this.health > 0) {
      return 'A Saxon has receive ' + damage + ' points of damage';
    } else if ( this.health <= 0 ) {
      console.log( 'A Saxon has died in act of combat');
    }
  }
  this.battleCry = function() {
    return 'Odin Owns You All';
  }
}


// War
function War() {
   this.vikingArmy = [],
   this.saxonArmy = []
   
   
}

War.prototype.addViking = function (viking) {
  this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function (saxon) {
  this.saxonArmy.push(saxon);
}



War.prototype.vikingAttack = function () {
  this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].receiveDamage(this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].strength);
  this.saxonArmy.filter(function(){
    return Saxon.health > 0
  })
  
}

War.prototype.saxonAttack = function () {
  this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].receiveDamage(this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength);
  this.vikingArmy.filter(function(){
    return Viking.health > 0;
  }
  
}

//War.prototype.showStatus();




var soldier1 = new Viking('R',50,50);
var soldier2 = new Saxon(0,100);

var nuevaguerra = new War();
//soldier1.receiveDamage(50);

nuevaguerra.addViking(soldier1);
nuevaguerra.addSaxon(soldier2);

nuevaguerra.vikingAttack();


