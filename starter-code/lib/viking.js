function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function() {};
  this.receiveDamage = function(damage) {
  return this.health -= damage;
  };
}


function Viking (name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.receiveDamage =  function(damage) {
   this.health -= damage;
    if (this.health > 0 ){
      return (this.name + ' has received ' + damage + ' points of damage');
    } else {
      return (this.name + ' has died in act of combat');
    }
  };
  this.battleCry = function() {
    return "Odin Owns You All!";
  };
}


Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;


function Saxon (health, strength) {
  Soldier.call(this, health, strength);
  this.receiveDamage =  function(damage) {
   this.health -= damage;
    if (this.health > 0 ){
      return ('A Saxon has received ' + damage + ' points of damage');
    } else {
      return 'A Saxon has died in combat';
    }
  };
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;


function War () {
 this.vikingsArmy =[];
 this.addViking = function(newViking){
  this.vikingsArmy.push('Odin');
 };
 this.saxonsArmy = [];
 this.addSaxon = function(newSaxon){
   this.saxonsArmy.push(newSaxon);
 };
 this.saxonAttack = function(){
   return (viking.name + ' has received ' +  saxon.strength + ' points of damage');
 };
 this.vikingAttack = function(){
   this.saxonsArmy.shift();
   return 'A Saxon has died in combat';
 };
 this.fight = function() {
   while (vikingsArmy.length || saxonsArmy.length > 0)
   return this.vikingAttack && this.saxonAttack;
};

 this.showStats = function(){
   if (this.saxonsArmy.length === 0)
   return ('Vikings have won the war of the century!');
};
 }



// War.prototype = Object.create(Viking.prototype);
// War.prototype.constructor = War;
  //
  // function Animal (name, owner) {
  // this.name = name;
  // this.owner = owner;
// }
//

//
// function Soldier (health, strength) {
//   this.health = 300;
//   this.strength = 150;
//   this.attack = enemy.health - 50;
//   this.receiveDamage = this.health - 50;
// }

// var vikings = new Animal("Arya", "Josephine");
// var yourAnimal = new Animal("Max",  "Owen");
  // this.sword = function() {
  //      this.attack++;
  // };
  // this.blood = function() {
  //       this.health--;

  // var x = new Viking(42,423,"thor");
 // console.log(x);

 // var MyVikings = new Viking ['Thor', 'Odin', 'Baldur', 'Loki', 'Borr', 'Forseti', 'Fulla', 'Gefjun', 'Hermóðr', 'Alejandorr', 'Höðr', 'Vali'];

 // var war = ['Thor', 'Odin', 'Baldur', 'Loki', 'Borr', 'Forseti', 'Fulla', 'Gefjun', 'Hermóðr', 'Alejandorr', 'Höðr', 'Vali'];

// function VikingList () {
//   this.Thor = Thor;
//   this.Odin = Odin;
//   this.Baldur = Baldur;
//   this.Loki = Loki;
//   this.Borr = Borr;
//   this.Forseti = Forseti;
//   this.Fulla = Fulla;
//   this.Gefjun = Gefjun;
//   this.Hermóðr = Hermóðr;
//   this.AleJandror = AleJandror;
//   this.Höðr = Höðr;
//   this.Vali = Vali;
// }

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
