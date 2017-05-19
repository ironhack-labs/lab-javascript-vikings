/**
 * Soldier class. Have health and strength
 * @param health
 * @param strength
 */

function Soldier(health, strength) {
  this.strength = strength;
  this.health = health;

  /**
   * Return the strength property of the Soldier
   * @return strength
   */

  this.attack = function() {
    return this.strength;
  };

  /**
   * Remove the received damage from the health property
   * @param  damage
   * @return -
   */

  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (health < 0) this.health = 0; // health can't be negative.
  };
}


/**
 * A Viking is a Soldier with an additional property, their name.
 * They also have a different receiveDamage() method and new method, battleCry().
 * @param health
 * @param strength
 * @param name
 */

function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;

  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      this.health = 0; // health can't be negative.
      return console.log("" + this.name + " has died in act of combat");
    } else return console.log("" + this.name + " has received " + damage + " points of damage");
  };

  this.battleCry = function() {
    return console.log("Odin Owns You All!");
  };
}

/**
 * A Saxon is a weaker kind of Soldier. Unlike a Viking, a Saxon has no name.
 * Their receiveDamage() method will also be different than the original Soldier version.
 * @param  health
 * @param  strength
 */

function Saxon(health, strength) {
  Soldier.call(this, health, strength);

  this.receiveDamage = function(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      this.health = 0; // health can't be negative.
      return console.log("A Saxon has died in combat");
    } else return console.log("A Saxon has received " + damage + " points of damage");
  };
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];

  this.addViking = function(viking) {
    this.vikingArmy.push(viking);
  };

  this.addSaxon = function(saxon) {
    this.saxonArmy.push(saxon);
  };

  this.vikingAttack = function() {
    var saxon = this.saxonArmy[randomIndex(this.saxonArmy)];
    var viking = this.vikingArmy[randomIndex(this.vikingArmy)];

    if (this.vikingArmy.length === 0 || this.saxonArmy.length === 0) {
      return console.log("\n-");
    } else {
      console.log("************\nVIKING ATTACK!!\nSaxon Health after attack: " + saxon.health +
        "\n" + viking.name + " strength:" + viking.strength);

      saxon.receiveDamage(viking.attack());
      if (saxon.health === 0) {
        this.saxonArmy.splice(this.saxonArmy.indexOf(saxon), 1);
      }
      return console.log("Saxon health:" + saxon.health + "\n************");
    }

  };

  this.saxonAttack = function() {
    var saxon = this.saxonArmy[randomIndex(this.saxonArmy)];
    var viking = this.vikingArmy[randomIndex(this.vikingArmy)];

    if (this.vikingArmy.length === 0 || this.saxonArmy.length === 0) {
      console.log("\n-");
    } else {
      console.log("************\nSAXON ATTACK!!\n" + viking.name + " Health after attack: " + viking.health +
        "\nSaxon strength:" + saxon.strength);

      viking.receiveDamage(saxon.attack());
      if (viking.health === 0) {
        this.vikingArmy.splice(this.vikingArmy.indexOf(viking), 1);
      }
      return console.log(viking.name + " health:" + viking.health + "\n************");
    }

  };

  /**
   * Returns the current status of the War based on the size of the armies.
   * @return
   */

  this.showStatus = function() {
    if (this.vikingArmy.length <= 0) {
      console.info("Saxons have fought for their lives and survive another day...");
    }
    if (this.saxonArmy.length <= 0) {
      console.info("Vikings have won the war of the century!");
    }

    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      console.info("[============= Vikings and Saxons are still in the thick of battle. =============]");
    }
  };

  this.showInitialStatus = function() {
    console.log("*********************************************************\n***************          VIKINGS          ***************\n*********************************************************");

    console.log(war.vikingArmy);
    console.log(war.saxonArmy);
  };
}

/**
 * Return random index of array
 * @param  array
 * @return index
 */

function randomIndex(array) {
  return Math.floor(Math.random() * (array.length));
}


var viking1 = new Viking("Thor", 200, 50);
var viking2 = new Viking("Ragnar", 100, 25);
var viking3 = new Viking("Ubbe", 100, 10);
var viking4 = new Viking("Ivar", 100, 10);
var viking5 = new Viking("Sigurd", 100, 10);
var viking6 = new Viking("Ragnar", 100, 10);

var saxon1 = new Saxon(100, 20);
var saxon2 = new Saxon(50, 5);
var saxon3 = new Saxon(50, 5);
var saxon4 = new Saxon(50, 5);
var saxon5 = new Saxon(50, 5);
var saxon6 = new Saxon(50, 5);
var saxon7 = new Saxon(50, 5);
var saxon8 = new Saxon(50, 5);
var saxon9 = new Saxon(50, 5);
var saxon10 = new Saxon(50, 5);
var saxon11 = new Saxon(50, 5);
var saxon12 = new Saxon(50, 5);
var saxon13 = new Saxon(50, 5);
var saxon14 = new Saxon(50, 5);
var saxon15 = new Saxon(50, 5);
var saxon16 = new Saxon(50, 5);
var saxon17 = new Saxon(50, 5);
var saxon18 = new Saxon(50, 5);
var saxon19 = new Saxon(50, 5);
var saxon20 = new Saxon(50, 5);

var war = new War();
war.addViking(viking1);
war.addViking(viking2);
war.addViking(viking3);
war.addViking(viking4);
war.addViking(viking5);
war.addViking(viking6);

war.addSaxon(saxon1);
war.addSaxon(saxon2);
war.addSaxon(saxon3);
war.addSaxon(saxon4);
war.addSaxon(saxon5);
war.addSaxon(saxon6);
war.addSaxon(saxon7);
war.addSaxon(saxon8);
war.addSaxon(saxon9);
war.addSaxon(saxon10);
war.addSaxon(saxon11);
war.addSaxon(saxon12);
war.addSaxon(saxon13);
war.addSaxon(saxon14);
war.addSaxon(saxon15);
war.addSaxon(saxon16);
war.addSaxon(saxon17);
war.addSaxon(saxon18);
war.addSaxon(saxon19);
war.addSaxon(saxon20);

war.showInitialStatus();

for (var i = 0; i < 65; i++) {
  war.vikingAttack();
  war.saxonAttack();
  war.saxonAttack();
  war.showStatus();
}
