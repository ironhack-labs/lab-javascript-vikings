// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  
  this.receiveDamage = function(damage){
   this.health -= damage;
  }
}

  Soldier.prototype.attack = function(){
    return this.strength;
  }

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.health = health;
  this.strength = strength;

  this.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health > 0){
    return (`${this.name} has recieved ${damage} points of damage`)
    }else{
      return(`${this.name} has died in the act of combat`)
    }
  }

  this.battleCry = function(){
    console.log('Odin Owns You All!')
  }
}
// Saxon
function Saxon(health, strength){
 Soldier.call(this, health, strength);
  this.health = health;
  this.strength = strength;
  
  this.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health > 0){
      return (`A Saxon has recieved ${damage} points of damage`)
      }else{
        return("A Saxon has died in the act of combat")
      }
  }
}

// War
function War() {}
