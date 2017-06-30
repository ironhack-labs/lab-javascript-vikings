// Soldier ---------------------------------------------------------------------
function Soldier (healthArg, strengthArg) {

  // set health and strength properties of warrior
  this.health = healthArg;
  this.strength = strengthArg;

  // attack method
  this.attack = function() {
    return this.strength;
  }

  // receive damage method
  this.receiveDamage = function(damageArg) {
    this.health -= damageArg;
  }

}

// Viking ---------------------------------------------------------------------
function Viking (healthArg, strengthArg, name) {

  //call Soldier object contstructor
  Soldier.call(this, healthArg, strengthArg);

  //set name property
  this.name = name;

  // Viking receive damage function
  this.receiveDamage = function(damageArg) {
    this.health -= damageArg;
    return this.health > 0 ?
      this.name + " has received " + damageArg + " points of damage":
      this.name + " has died in act of combat";
  }

  // Viking battle cry function
  this.battleCry = function(){
    return "Odin owns you all!"
  }
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon ---------------------------------------------------------------------
function Saxon (healthArg, strengthArg) {

  //call Soldier object contstructor
  Soldier.call(this, healthArg, strengthArg);

  // Saxon receive damage function
  this.receiveDamage = function(damageArg) {
    this.health -= damageArg;
    return this.health > 0 ?
      "A Saxon has received " + damageArg + " points of damage":
      "A Saxon has died in act of combat";
  }

}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;


// War ---------------------------------------------------------------------
function War () {

  //Create "army" arrays for Saxons and Vikings
  this.vikingArmy = [];
  this.saxonArmy = [];

  // Method adds a Viking to the Viking Army
  this.addViking = function(vik) {
    this.vikingArmy.push(vik);
  };

  // Method adds a Saxon to the Saxon Army
  this.addSaxon = function(sax) {
    this.saxonArmy.push(sax);
  };

  // Launches an attack on a random Saxon by random Viking, and imposes damage = strength
  this.vikingAttack = function() {
    var vik = _.sample(this.vikingArmy);
    var sax = _.sample(this.saxonArmy);

    var outcome = sax.receiveDamage(vik.attack()); // damage is equal to viking's strength

    _.remove(this.saxonArmy, function(s) {return s.health < 0;} ); //removes all dead Saxons from army
    console.log(this.showStatus()); //displays updated status

    return outcome;
  };

  // Launches an attack on a random Viking by random Saxon, and imposes damage = strength
  this.saxonAttack = function() {
    var vik = _.sample(this.vikingArmy);
    var sax = _.sample(this.saxonArmy);

    var outcome = vik.receiveDamage(sax.attack()); // damage is equal to viking's strength

    _.remove(this.vikingArmy, function(v) {return v.health < 0;} ); //removes all dead Vikings from army
    console.log(this.showStatus()); //displays updated status

    return outcome;
  };

  // Returns status of Saxon-Viking war
  this.showStatus = function() {
    if (this.vikingArmy.length == 0) {return "Saxons have fought for their lives and survive another day...";}
    else if (this.saxonArmy.length == 0) {return "Vikings have won the war of the century!";}
    else {return "Vikings and Saxons are still in the thick of battle.";}
  };


//var thisWar = new War();
//var saxy = new Saxon(100, 5);
//var viky = new Viking(100, 10, "Lars");

//thisWar.addViking(viky);
//thisWar.addSaxon(saxy);





}
