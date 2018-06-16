// Soldier
function Soldier (healthArg, strengthArg) {
    this.health = healthArg
    this.strength = strengthArg
    }

    Soldier.prototype.attack = function() {
        return this.strength;
      }  
    
      Soldier.prototype.receiveDamage = function(damage) {
        this.health -= damage;
      }

    var mySoldier = new Soldier ("healthArg", "strengthArg");
console.log(Viking.health); 
        
            

// Viking
function Viking (name, healthArg, strengthArg) {
    this.name = name 
    this.health = healthArg 
    this.strength = strengthArg
}

 Viking.prototype = Object.create(Soldier.prototype);
    
 Viking.prototype.receiveDamage = function (damage) {
    this.health = this.health - damage;

  }
  Viking.prototype.receiveDamage = function (damage){
    this.health = this.health - damage;
      if (this.health > 0) {
        return this.name + " has received " + damage + " points of damage";
      } else {
        return this.name + " has died in act of combat";
      }
    } 

  Viking.prototype.battleCry = function() {
    return "Odin Owns You All!";
    }



// Saxon
function Saxon(healthArg, strengthArg) {
    this.health = healthArg
    this.strength = strengthArg
}

Saxon.prototype = Object.create(Soldier.prototype);


Saxon.prototype.receiveDamage = function (damage){
     this.health = this.health - damage;
      if (this.health > 0) {
        return "A Saxon has received " + damage + " points of damage"
      } else {
        return "A Saxon has died in combat";
      }
    } 



    
// War
function War() {}
