//Soldier

function Soldier (healthArg, strengthArg) {
  this.health = healthArg
  this.strength = strengthArg

  //The same that
  // Soldier.prototype.attack = function(){
  //   return this.strength;
  // }
  this.attack = function(){
    return this.strength;
  }

  //The same that
  // Soldier.prototype.receiveDamage = function(damage){  
  //   this.health -= damage; 
  // }
  Soldier.prototype.receiveDamage = function(damage){  
    this.health -= damage; 
  }
}

// Viking
function Viking(name, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = name;
  
  Viking.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if (this.health > 0){
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  }
  
  Viking.prototype.battleCry = function(){
    return "Odin Owns You All!"
    }
}
  Viking.prototype = Object.create(Soldier.prototype)
  Viking.prototype.constructor = Viking;



// Saxon
function Saxon(healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg)

  this.receiveDamage = function(damage){
    this.health -= damage;
    if (this.health > 0){
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  }
}
Saxon.prototype = Object.create(Soldier.prototype)
Saxon.prototype.constructor = Saxon;

// War
function War() {
  this.vikingArmy = []
  this.saxonArmy = []

  War.prototype.addViking = function(Viking){
    this.vikingArmy.push(Viking);
  }

  War.prototype.addSaxon = function(Saxon){
    this.saxonArmy.push(Saxon);
  }
}
//Army 
  War.prototype.vikingAttack = function(){
   var vikingRandom = Math.floor(Math.random() * this.vikingArmy.length);
   var saxonRandom = Math.floor(Math.random() * this.saxonArmy.length);
  
  var callSaxonDead =  this.saxonArmy[saxonRandom].receiveDamage(this.vikingArmy[vikingRandom].strength);


    for (var i = 0; i < this.saxonArmy.length; i++) {
      if (this.saxonArmy[i].health <= 0) {
          this.saxonArmy.splice(i, 1);
        }
        return  callSaxonDead
      }   
    }


War.prototype.saxonAttack = function(){
  var vikingRandom = Math.floor(Math.random() * this.vikingArmy.length);
  var saxonRandom = Math.floor(Math.random() * this.saxonArmy.length);

  var callVikingDead =  this.vikingArmy[vikingRandom].receiveDamage(this.saxonArmy[saxonRandom].strength);


  for (var i = 0; i < this.vikingArmy.length; i++) {
    if (this.vikingArmy[i].health <= 0) {
        this.vikingArmy.splice(i, 1);
      }
      return  callVikingDead
    }   
}

//Show status

War.prototype.showStatus = function(){
  if (this.saxonArmy.length === 0){
    return "Vikings have won the war of the century!"
  } else if (this.vikingArmy.length === 0) {
   return  "Saxons have fought for their lives and survive another day..."
  } else {
    return "Vikings and Saxons are still in the thick of battle."
  } 
}
