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


// this.health y resto, son la propiedad del objeto, igualado al valor.

function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function(){
    return strength;
  };
  this.receiveDamage = function(damage){
    this.health -= damage;

  };
// this.receiveDamage propiedad de un objeto, le creamos una funcion llamada "damage"
//que es la que va a nombrar el daño que no sabemos que nos van a hacer
//this.health es dentro del soldado donde tenemos que quitar damage

}



var sold= new Soldier();//hemos creado la funcion constructora.

function Viking (name, health, strength, battleCry) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.battleCry = function() {
    return ('Odin Owns You All!');
  };


  this.receiveDamage = function(damage) {
     this.health = this.health - damage;

     if(this.health <= 0){
       return this.name + ' has died in act of combat';
     } else {
       return this.name + ' has received ' + damage + ' points of damage';
     }
   };



}
// llamamos al padre para que nos de sus valores y crear un nuevo hijo con sus parametros
// creamos prototype para llamar a soldier y nos cree Viking.
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

function Saxon (health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;



function War () {}

module.exports = {
  Soldier: Soldier,
  Viking:  Viking,
  Saxon:   Saxon,
  War:     War
};
