// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function() {
    return this.strength;
  }
  this.receiveDamage = function(damage) {
    this.health -= damage;
  }
}

//Viking
function Viking (name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength)
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

/*Viking.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    var result = "Harald has died in act of combat"
    if (this.health > 0) {
      result = this.name + ' has received ' + damage + "points of damage"
    }
    return result
  }
  */

Viking.prototype.battleCry = function(){
    return "Odin owns you all!"
}
// Saxon
function Saxon () {

}

// War
function War () {}
