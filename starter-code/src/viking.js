// Soldier
function Soldier(health, strength) {

  this.health = health;
  this.strength = strength;
  this.attack = function(){
    return this.strength;
  }
  this.receiveDamage = function(damage){
    this.health =  health - damage;
  }

}


// Viking
function Viking(name, health, strength) {
  
  Soldier.call(this, health, strength)
  this.name = name;
  this.receiveDamage = function(damage){
 
    this.health = health - damage;

    if(this.health === 'alive'){
      return `${this.name} has received ${damage} points of damage`;
    }else{
      return `${this.name} has died in act of combat`;
    }

    

  }
  this.battleCry() = function(){
  
  
  }



}

 







// Saxon
function Saxon() {}

// War
function War() {}




