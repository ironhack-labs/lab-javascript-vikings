// Soldier
function Soldier(healthArg, strengthArg) {
this.health = healthArg;
this.strength= strengthArg;
this.attack = function (){
  return this.strength;
};
this.receiveDamage = function(theDamage){
       this.health -= 50;
        
};
}


// Viking
function Viking(name, health , strength) {
  Soldier.call (this , health , strength);
  this.name = name;
  this.health = health;
  this.strength=strength;
  this.attack = function(){
      return this.strength;
  };
  this.receiveDamage= function(damage){
      this.health -= damage;
      return this.health > 0 ? 
      console.log(this.name + "has received" + damage + "points of damage") : console.log(this.name + "has died in act of combat" );
  
    };
  this.battleCry = function(){
    return 'Odin Owns You All!';

  };
}

// Saxon
function Saxon(health , strength) {
  Viking.call ( this, name, health ,strength);
  this.health = health ;
  this.strength=strength;
  this.attack=function (){
    return this.strength;
  } ; 
  this.receiveDamage= function(damage){
     this.health -= 50;
     return  this.health > 0 ? `A Saxon has received ${damage} points of damage`: `A Saxon has died in combat`;
  };

  
}

// War
function War() {
  Viking.call(this);
  this.vikingArmy= [];
  this.saxonArmy=[];
}
