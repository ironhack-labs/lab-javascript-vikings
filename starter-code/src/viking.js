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
  //this.attack = function(){
  //    return this.strength;
  //};
  this.receiveDamage= function(damage){
      this.health -= damage;
      return this.health > 0 ? 
      console.log(this.name + "has received" + damage + "points of damage") : console.log(this.name + "has died in act of combat" );
    };
  this.battleCry = function(){
    return 'Odin Owns You All!';
  };
}

Viking.prototype= Object.create(Soldier.prototype);

// SaxonS
function Saxon(health , strength) {
  this.health = health ;
  this.strength=strength;
  this.attack=function (){
    return this.strength;
  } ; 
  this.receiveDamage= function(damage){
     this.health -= damage;
     return  this.health > 0 ? `A Saxon has received ${damage} points of damage`: `A Saxon has died in combat`;
  };

  
}
Saxon.prototype = Object.create(Viking.prototype);

// War
function War() {
  Viking.call(this);
  this.vikingArmy= [];
  this.saxonArmy=[];
  this.addViking=function(vikingObj){
        if(vikingObj){
        this.vikingArmy.push(vikingObj);
      }else { return undefined;}
     };
 this.addSaxon = function(saxonObj){
     if(saxonObj){
    this.saxonArmy.push(saxonObj);
  }else { return undefined;}
  };

  this.vikingAttack = function(){
    Saxon.receiveDamage(Viking.strength);
    this.oldHealth = Saxon.health;
    Saxon.health = oldHealth - Viking.strength;
    
  };

   this.saxonAttack = function(){


  }
}

