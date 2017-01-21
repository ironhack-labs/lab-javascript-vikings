// //------------------------------------------------------
// // SOLDIER
// //------------------------------------------------------
// function Soldier() {}
//
// //------------------------------------------------------
// // GENERAL
// //------------------------------------------------------
// function General() {}
//
// //------------------------------------------------------
// // FOOTVIKING
// //------------------------------------------------------
// function FootViking() {}
//
// module.exports = {
//   Soldier:    Soldier,
//   General:    General,
//   FootViking: FootViking
// };


//------------------------------------------------------
// SOLDIERS
//------------------------------------------------------
function Soldier (health,strength) {
  this.health=health;
  this.strength=strength;
  this.attack=function (){
    return this.strength ;
  };
  this.receiveDamage=function(attack){
    return this.health -=attack;
  };
}

//------------------------------------------------------
// VIKING
//------------------------------------------------------
function Viking (name,health,strength) {
  Soldier.call(this,health,strength);
  this.name=name;
  this.receiveDamage = function(damage){
    if(this.health-damage <0 || this.health-damage ===0){
      return this.name + ' has died in act of combat';
    }else{
        this.health-=damage;
      return this.name + ' has received ' + damage + ' points of damage';}
   };
   this.battleCry = function(){
    return 'Odin Owns You All!';
  };
}
Viking.prototype =Object.create(Soldier.prototype);

//------------------------------------------------------
// SAXONS
//------------------------------------------------------
function Saxon (health,strength) {
  Soldier.call(this,health,strength);
  this.receiveDamage = function(damage){
    if(this.health-damage <0 || this.health-damage ===0){
      return 'A Saxon has died in combat';
    }else{
        this.health-=damage;
      return'A Saxon has received ' + damage + ' points of damage';}
   };
}
Saxon.prototype =Object.create(Soldier.prototype);
function War () {
  this.vikingsArmy = [];
  this.saxonsArmy = [];
  this.addViking=function() {
    this.vikingsArmy.push(new Viking());
  };
  this.addSaxon=function () {
    this.saxonsArmy.push(new Saxon());
  };
  //No pasa test
  this.vikingAttack=function(){
    return 'A saxon has received ' + viking.strength+ ' points of damage';
  };
  this.saxonAttack=function(){
    return viking.name + ' has received ' + saxon.strength + ' points of damage';
  };
  this.fight=function(){
    vikingFighter=this.vikingsArmy.pop();
    saxonFighter=this.saxonsArmy.pop();
    vikingFighter.battleCry();
    while(vikingsArmy.length!==0 && saxonsArmy.length!==0){
      if(vikingFighter.health===0){
        vikingFighter=this.vikingsArmy.pop();
      }
      if(saxonFighter.health===0){
        saxonFighter=this.saxonsArmy.pop();
      }
      //Se supone que se pegan a la vez ya que no se especifica
      //un campo velocidad de ataque.
      vikingFighter.receiveDamage(saxonFighter.attack);
      saxonFighter.receiveDamage(vikingFighter.attack);
    }
  };
  this.showStats=function(){
    if(saxonsArmy===0){
      return 'Vikings have won the war of the century!';
    }else{
      if (vikingsArmy===0) {
        return 'Saxons have won the war of the century!';
      }
    }
  };
}

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
