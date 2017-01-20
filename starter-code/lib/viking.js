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

function Soldier (health,strength) {
  this.health=health;
  this.strength=strength;
  this.attack=function(){return strength;};
  this.receiveDamage=function(damage){
    return this.health-=damage;};
}
///////////////////////////
function Viking (name,health,strength) {
  Soldier.call(this,health,strength);
  this.name=name;
  this.receiveDamage=function(damage){
     this.health-=damage;
     return this.name +' has received ' + damage + ' points of damage';
   };//Funcion Damage
  //function battleCry(){return 'Odin Owns You All!'}

}
 Viking.prototype=Object.create(Soldier.prototype);
/////////////
function Saxon () {}

function War () {}

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
