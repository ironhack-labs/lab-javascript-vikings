// Soldier
function Soldier(health,strength){
    this.health = health;
    this.strength = strength;
  
  }

  Soldier.prototype.attack = function(){
    return this.strength;
  }
  Soldier.prototype.receiveDamage = function(Damage){
  this.health = this.health - Damage;
  }
  
    
// Viking
function Viking(name,health,strength) {
    Soldier.call(this, name, owner);
    this.name = name;
};

function attack(){
    return Viking.strength;
}
function battleCry(){

}
 Viking.prototype.receiveDamage = function(Damage){
  this.health = this.health - Damage;
  if(this.health>=1){
      return this.name +" has received" + Damage + " points of damage";
  }
  else{
          return this.name + " has died in act of combat";
      }
  }
    

// Saxon
function Saxon() {}

// War
function War() {}
