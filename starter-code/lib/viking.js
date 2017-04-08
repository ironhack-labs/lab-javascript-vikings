function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function(){
  return this.strength ;
};

Soldier.prototype.receiveDamage = function(enemy){
  this.health -= enemy.attack() ;
  if (this instanceof Viking) {
    console.log(this.name + " has received " + enemy.attack() +" points of damage." );

    if(this.health <= 0){
      console.log(this.name + " has died in act of combat");
    }
  }
  else{
    console.log("A Saxon has received " + enemy.attack() + " points of damage.");
    if(this.health <= 0){
      console.log("A Saxon has died in combat");
    }
  }

};

Viking.prototype = Object.create(Soldier.prototype);

function Viking (name, health, strength) {
  Soldier.call(this,health,strength);
  this.name = name;
}

Viking.prototype.battleCry = function(){
  console.log("Odin Owns You All");
};

// Viking.prototype.receiveDamage = function(enemy)
Saxon.prototype = Object.create(Soldier.prototype);

function Saxon (health , strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype.attack = function(enemy){
  return this.strength * 0.5 ;
};

function War () {
  var viking1 = new Viking("Odin",100,100);
  var viking2 = new Viking("Kodran",80,15);
  var viking3 = new Viking("Sigurd",60,5);
  var viking4 = new Viking("Eysteinn",100,1);
  var viking5 = new Viking("Grim",90,20);

  var saxon1 = new Saxon(120,120);
  var saxon2 = new Saxon(105,20);
  var saxon3 = new Saxon(110,30);
  var saxon4 = new Saxon(109,20);
  var saxon5 = new Saxon(101,10);

  this.armyVikings = [viking1,viking2,viking3, viking4, viking5];
  this.armySaxons = [saxon1,saxon2,saxon3, saxon4, saxon5];
}

War.prototype.giveVikingArmy = function(){
  return this.armyVikings;
};

War.prototype.giveSaxonsArmy = function(){
  return this.armySaxons;
};

War.prototype.saxonAttack = function(armyOfSaxons1, armyOfVikings1){
  armyOfSaxons = shuffleArray(armyOfSaxons1);
  armyOfVikings = shuffleArray(armyOfVikings1);
  console.log("---------------------------------");
  console.log("Saxons Start an Attack");

  armyOfSaxons.forEach(function(attacker){
    if(armyOfVikings.length > 0){
      var indexVictim = Math.floor(Math.random()* armyOfVikings.length);
      var victim = armyOfVikings[indexVictim];
      victim.receiveDamage(attacker);
      if(victim.health <= 0)
      {
        armyOfVikings.splice(indexVictim, 1);
      }
    }
  });
};

War.prototype.vikingAttack = function(armyOfSaxons1, armyOfVikings1){
  armyOfSaxons = shuffleArray(armyOfSaxons1);
  armyOfVikings = shuffleArray(armyOfVikings1);
  console.log("---------------------------------");
  console.log("Vikings Start an Attack");

  armyOfVikings.forEach(function(attacker){
    if(armyOfSaxons.length>0) {
      var indexVictim = Math.floor(Math.random()* armyOfSaxons.length);
      var victim = armyOfSaxons[indexVictim];
      victim.receiveDamage(attacker);
      if(victim.health <= 0)
      {
        armyOfSaxons.splice(indexVictim, 1);
      }
    }
  });
};

War.prototype.fight = function(){
  var armySaxonsTemp = this.giveSaxonsArmy();
  var armyOfVikingsTemps = this.giveVikingArmy();

  var turns = false;
  while(armySaxonsTemp.length > 0 && armyOfVikingsTemps.length > 0){
    //Saxons are attaking
    if(turns === true){
      this.saxonAttack(armySaxonsTemp, armyOfVikingsTemps);
    }
  //Vikings are attaking
    else{
      this.vikingAttack(armySaxonsTemp, armyOfVikingsTemps);
    }
  turns = !turns;
  }

  if(armySaxonsTemp.length < 1){
    console.log("\nVikings have WON");
  }
  else{
    console.log("\nSaxons have WON");
  }
};

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};



/*var viking = new Viking("thor", 18, 35)

var saxon = new Soldier(15, 34)

viking.receiveDamage(saxon)*/
