var health = 0;
var strength = 0;
console.log("hola");
//soldier = new Soldier(health, strength);
// Soldier
function Soldier(health, strength) {
  //nuevo soldado generico
  this.health = health;
  this.strength = strength;
  this.attack = function () {
    return this.strength;
  };
  this.receiveDamage = function (damage) {
    this.damage = damage;
    this.health -= this.damage;
  };
} //final de soldier
let soldier = new Soldier(300, 150);
console.log(soldier);
//viking
//ligado con vikingo = nuevo soldado vikingo
//var viking = new Viking(name, health, strength);
//crea un nuevo objeto con las propiedades de solado
//Viking.prototype.Soldier = Viking;

// Viking
Viking.prototype = Object.create(Soldier.prototype);

function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;

  this.receiveDamage = function (damage) {
    this.damage = damage;
    this.health -= damage;
    if (Viking.health > 1)
      return console.log(
        name,
        "has received ",
        this.damage,
        "points of damage"
      );
  };

  this.battleCry = function () {
    return "Odin Owns You All!";
  };
} //final de viking
let viking = new Viking("Harald");
console.log(viking);
//saxon
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;
saxon = new Saxon(health, strength);
// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
  this.health = 60;
  this.strength = 25;
  this.attack = function () {
    return (this.strength = 25);
  };
  this.receiveDamage = function (damage) {
    this.damage = damage;
    this.health = this.health - 50;
    if (health > 0) {
      ("sitll alive");
    } else if (damage == 45) {
      return "A Saxon has received 45 points of damage";
    } else if (damage == 10) {
      return "A Saxon has received 10 points of damage";
    } else if (health < 0) {
      return "A Saxon has died in combat";
    }
  };
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];

  this.addViking = function (viking) {
    this.vikingArmy = [viking];
  };

  this.addSaxon = function (saxon) {
    this.saxonArmy = [saxon];
  };

  this.vikingAttack = function () {
    var oldHealth = saxon.health;
    saxon.health = oldHealth - viking.strength;
    Saxon.call(this.sacon.health);
    Saxon.receiveDamage(saxon.health);
  };

  this.saxonAttack = function () {};

  this.showStatus = function () {};
}
