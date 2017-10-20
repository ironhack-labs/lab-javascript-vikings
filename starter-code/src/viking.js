// Soldier
function Soldier (health,strength) {
  this.health=health;
  this.strength=strength;

  Soldier.prototype.attack= function(){
      return this.strength;
  };
  Soldier.prototype.receiveDamage= function(damage){
      this.health -= damage;
  };
}

// Viking - Herencia.
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;
//Viking - Funciones
function Viking (name,health,strength) {
  Soldier.call(this, health, strength);
  this.name=name;

  Viking.prototype.attack= function(){
      return this.strength;
  };
  Viking.prototype.receiveDamage= function(damage){
      this.health -= damage;
      if(this.health>0){
        return this.name + " has received "+ damage + " points of damage";
      }else{
        return this.name +" has died in act of combat";
      }
  };
}

//Saxon -Herencia
Saxon.prototype=Object.create(Soldier.prtotype);
Saxon.prototype.constructor=Viking;
// Saxon - Funciones
function Saxon (health,strength) {
  Soldier.call(this, health, strength);

  Saxon.prototype.receiveDamage= function(damage){
      this.health -= damage;
      if(this.health>0){
        return "Has received "+ damage + " points of damage";
      }else{
        return "Has died in act of combat";
      }
  };
}

// War
function War () {}
