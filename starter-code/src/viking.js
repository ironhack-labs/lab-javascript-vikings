// Soldier
function Soldier( health , strength ) {
 this.health = health;
 this.strength = strength;
}
Soldier.prototype.attack = function(){
  return this.strength;
}
Soldier.prototype.receiveDamage = function (damage){
  this.health = this.health - damage;
  if( this.constructor.name === "Viking"){
    if( (this.health ) > 0 ){
      return this.name + " has received " + damage + " points of damage"
    }else{
      return this.name + " has died in act of combat" 
    }
  }else if(this.constructor.name === "Saxon"){                
    if( (this.health ) > 0 ){ 
      return "A Saxon has received " + damage + " points of damage"
    }else{
      return "A Saxon has died in combat"
    }
  }
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength)
  this.name = name;
}
Viking.prototype.battleCry = function(){
  return "Odin Owns You All!"
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;
// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength)
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}
War.prototype.addViking = function(Viking){
  this.vikingArmy.push(Viking);
};

War.prototype.addSaxon = function(Saxon){
  this.saxonArmy.push(Saxon);
}
War.prototype.vikingAttack = function(){
  var attackerIndex = Math.floor(Math.random()*this.vikingArmy.length)
  var victimIndex = Math.floor(Math.random()*this.saxonArmy.length)
  var attacker = this.vikingArmy[attackerIndex]
  var victim = this.saxonArmy[victimIndex]
  var damage = attacker.strength

  EncounterResult = victim.receiveDamage( damage )
  
  if( victim.health <= 0){
    this.saxonArmy.splice(victimIndex,1)
  }
  return EncounterResult
}
War.prototype.saxonAttack = function(){
  var attackerIndex = Math.floor(Math.random()*this.saxonArmy.length)
  var victimIndex = Math.floor(Math.random()*this.vikingArmy.length)
  var attacker = this.saxonArmy[attackerIndex]
  var victim = this.vikingArmy[victimIndex]
  var damage = attacker.strength

  EncounterResult = victim.receiveDamage( damage )
  
  if( victim.health <= 0){
    this.vikingArmy.splice(victimIndex,1)
  }
  return EncounterResult
}
War.prototype.showStatus = function(){
  if(this.vikingArmy.length === 0){
    return "Saxons have fought for their lives and survive another day..."
  }
  else if(this.saxonArmy.length === 0){
    return "Vikings have won the war of the century!"
  }
  if (Viking && Saxon){
    return 'Vikings and Saxons are still in the thick of battle.'
  }
}
