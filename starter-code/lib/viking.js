//////////////////////////////
// SOLIDER - AREA
//////////////////////////////

function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
  Soldier.prototype.attack = enemy => enemy.receiveDamage(this.strength);
  Soldier.prototype.receiveDamage = damage => this.health -= damage;
}

//////////////////////////////
// VIKING - AREA
//////////////////////////////

function Viking (name, health, strength) {
  this.health = health;
  this.strength = strength
  this.name = name;
  this.attack = () => this.strength
  Viking.prototype.receiveDamage = damage => {
    this.health -= damage;
    return this.health > 0 ? this.name + " has received " + damage + " points of damage" : this.name + " has died in act of combat";
};
  Viking.prototype.battleCry = () => "Odin Owns You All!";
}

/*
// TEST TO CREATE A VIKING
const viking666 = new Viking("crazy old man", 100, 100);
console.log(viking666);
console.log(viking666.attack());
console.log(viking666.battleCry());
console.log(viking666.receiveDamage(10));
*/

//////////////////////////////
// SAXON - AREA
//////////////////////////////

function Saxon (health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = () => this.strength
  Saxon.prototype.receiveDamage = damage => {
    this.health -= damage;
    return this.health > 0 ? "A Saxon has received " + damage + " points of damage" : "A Saxon has died in combat";
  };
}

/*
// TEST TO CREATE A SAXON
const saxon666 = new Saxon(100, 80);
console.log(saxon666);
console.log(saxon666.receiveDamage(10));
console.log(saxon666.attack());
console.log(saxon666);
*/

//////////////////////////////
// WAR - AREA
//////////////////////////////


var warTime = new War();

// console.log(warTime.armySaxons);
// console.log(warTime.armyVikings);
//console.log(warTime.vikingAttack())
//console.log(warTime.saxonAttack())
//console.log(warTime.fight());
//console.log(warTime.showStats());

function War () {

  var viking1 = new Viking("Crazy M* F*",1,1);
  var viking2 = new Viking("Slingshot",10,10);
  var viking3 = new Viking("Tor",70,5);
  var viking4 = new Viking("Mother F*",10,100);
  var viking5 = new Viking("Booohoo",100,33);

  var saxon1 = new Saxon(1000,100);
  var saxon2 = new Saxon(100,100);
  var saxon3 = new Saxon(90,100);
  var saxon4 = new Saxon(100,50);
  var saxon5 = new Saxon(80,11);

  this.armyVikings = [viking1,viking2,viking3, viking4, viking5];
  this.armySaxons = [saxon1,saxon2,saxon3,saxon4, saxon5];
  //console.log(this.armySaxons);
  War.prototype.giveVikingArmy = function(){
    return this.armyVikings;
};

  War.prototype.giveSaxonsArmy = function(){
    return this.armySaxons;
};

  War.prototype.vikingAttack = () => {
  //console.log(this.armyVikings);
  this.armyVikings.forEach((attacker) => {
    if(this.armySaxons.length > 0) {
      var indexVictim = Math.floor(Math.random() * this.armySaxons.length);
      var victim = this.armySaxons[indexVictim];
      //console.log(victim.health);
      victim.receiveDamage(attacker);
      
      if (victim.health <= 0) {
        this.armySaxons.splice(indexVictim, 1);
      }
    }
  });
  
}
  War.prototype.saxonAttack = () => {
    var result = "";
    var vikings = this.armyVikings;
    this.armySaxons.forEach((attacker, index) => {
      result = attacker.attack(vikings[index]);
      
      if (vikings[index].health <= 0 ) vikings.splice(index, 1);
    });
    return result;
  };

  War.prototype.fight = () => {
    //random starting order
    if(Math.floor(Math.random() * 2)){
      this.vikingAttack();
      this.saxonAttack();
    } else {
      this.saxonAttack();
      this.vikingAttack();
    }
  };

  War.prototype.showStats = () => this.armyVikings.length >= this.armySaxons.length ? "Vikings have won the war of the century!" : "Saxons have won!";

}

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};