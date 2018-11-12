// Soldier
function Soldier(healthArg, StrengthArg) {
this.health = healthArg;
this.strength= StrengthArg;
this.attack = function (){
  return this.strength;
};
this.receiveDamage = function(theDamage){
        this.health -= theDamage;
        
};
}


// Viking
function Viking(name, health , strength) {
  Soldier.call(this ,name , health , strength );
  this.name = name;
  this.health = health;
  this.strength=strength;
  this.attack = function(){
      return this.strength;
  };
}

// Saxon
function Saxon() {}

// War
function War() {}
