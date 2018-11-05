// Soldier
function Soldier (health, strength) {
    this.health = health;
    this.strength = strength;

    this.attack = function(){
      return this.strength;
    };
    this.receiveDamage = function(damage){
      this.damage = damage;
      this.health = this.health - this.damage;
    };
  }


// Viking
function Viking(name, health, strenght) {
  
this.name = name;
 Soldier.call(this,health,strenght);
  

  Soldier.prototype.attack = function(){
    return this.strength;
  }

  this.receiveDamage = function(damage){
    this.damage = damage;
    this.health = this.health - this.damage;
    if(this.health>0){
      return (this.name +" has received "+ this.damage + " points of damage")
    } else {
      return (this.name + " has died in act of combat");
    }
  };
  this.battleCry = function(){
    return("Odin Owns You All!")
  }
}

// Saxon 
function Saxon(health,strenght) {
  Soldier.call(this,health,strenght);
  

  Soldier.prototype.attack = function(){
    return this.strength;
  }


  Viking.prototype.receiveDamage = function(damage){
    this.damage = damage;
    this.health = this.health - this.damage;
    if(this.health>0){
      return ( "A Saxon has received "+ this.damage + " points of damage")
    } else {
      return ("A Saxon has died in act of combat");
    }
  };
}

// War
function War() {
  this.vikingArmy = []
  this.saxonArmy = []
}

 War.prototype.addViking = function(Viking){
this.vikingArmy.push(Viking)
 }

 War.prototype.addSaxon = function(Saxon){
  this.saxonArmy.push(Saxon)
   }

   function vikingAttack(){
     
   }