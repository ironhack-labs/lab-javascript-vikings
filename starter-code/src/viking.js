var health = 0;
var strength = 0;

//soldier = new Soldier(health, strength);
// Soldier
function Soldier(health, strength) {
  //nuevo soldado generico
  this.health = 300;
  this.strength = 150;
  this.attack = function() {
    return (this.strength = 150);
  };
  this.receiveDamage = function(damage) {
    this.damage = 1;
    this.health = this.health - 50;
  };
} //final de soldier

//viking
Viking.prototype = Object.create(Soldier.prototype); //crea un nuevo objeto con las propiedades de solado
Viking.prototype.constructor = Viking; //ligado con vikingo = nuevo soldado vikingo
var viking = new Viking(name, health, strength);
// Viking

function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = "Harald";

  this.receiveDamage = function(damage) {
    this.damage = 1;
    this.health = this.health - 50;
    
  };

  this.battleCry = function() {
    return "Odin Owns You All!";
  };
} //final de viking


//saxon
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;
saxon = new Saxon(health, strength);
// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
  this.health =60;
  this.strength = 25;
  this.attack = function() {
    return this.strength = 25;
  };
  this.receiveDamage=function(damage){
      this.damage = damage;
      this.health = this.health - 50;
      if(health > 0){
          'sitll alive'
      }else if (damage == 45){
        return "A Saxon has received 45 points of damage";
      }else if(damage == 10){
        return "A Saxon has received 10 points of damage";
      }else if (health < 0){
        return ("A Saxon has died in combat");
      }
  };

}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];

    this.addViking = function(viking){
        this.vikingArmy =[viking];
    };

    this.addSaxon = function(saxon){
        this.saxonArmy = [saxon];
    };

    this.vikingAttack = function(){
    var oldHealth = saxon.health;
    saxon.health = (oldHealth - viking.strength);
    Saxon.call(this.sacon.health);
    Saxon.receiveDamage(saxon.health);
    };

    this.saxonAttack = function (){

    };

    this.showStatus = function (){

    };
}
