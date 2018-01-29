// Soldier
function Soldier (health, strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function(){
        return this.strength
    };
    this.receiveDamage = function (damage){
        return this.health - damage;
    }
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
    this.receiveDamage = function (damage){
        return this.health - damage;
        var newHealth = health-damage;
        if (newHealth >0){
            return (this.name + "has received" + damage + "points of damage")
        }else{
            return (this.name +"has died in act of combat");
        }
        

    this.battleCry = function (){
        return ("Odin Owns You All!");
    }
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor=Viking;

// Saxon
function Saxon(health, strength,) {
    Soldier.call(this, health, strength);
    this.receiveDamage = function (damage){
        return this.health - damage;
        var newHealth = health-damage;
        if (newHealth >0){
            return ("A " + this.name + " has received " + damage + " points of damage")
        }else{
            return ("A " + this.name + " has died in act of combat");
        }


}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor=Saxon;

// War
function War() {
    var vikingArmy = [];
    var saxonArmy = [];
    
  this.addViking = function (){

  }
  this.addSaxon = function (){

  }
  this.vikingAttack = function (){

  }
  this.saxonAttack = function (){

  }
  this.showStatus = function (){

  }
}
