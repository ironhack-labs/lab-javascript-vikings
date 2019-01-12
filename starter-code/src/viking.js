// Soldier
function Soldier(health , strength) {
  this.health = health;
  this.strength = strength;
  
  
  this.attack = function() {
    
      return this.strength;
  }
  
  this.receiveDamage = function(thedamage) {
      this.health -= thedamage;
      
      
      
  }
}




// Viking
function Viking() {}

// Saxon
function Saxon() {}

// War
function War() {}
