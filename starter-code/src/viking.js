// Soldier
function Soldier (health, strength) {
  var health = 300;
  var strength = 150;
   this.health = 300;
   this.strength = 150;
 this.attack = function() { console.log('ataque de ' + this.strength)
 };
 this.recieveDamage = function() { console.log (this.health - this.strength)
 return 'health restante ' + (health - strength)
 };
 }
 var soldado1 = new Soldier ();
 soldado1.attack();
 soldado1.recieveDamage();
//hasta aqui segun yo, el attack es de 150 y el soldado recivedamage de 150 y le resta 150 de health. No se como hacer un console log para que aparezca, 'health restante' + this.health - this.strength.


// Viking

function Viking (name, health, strength){
  var name = 'Harald'
  var health = 300;
  var strength = 150;
  Soldier.call(this,health, strength);
 this.name = name
 //Soldier.call(this, attack());
 this.recieveDamage = function() { 
   if(this.strength > this.health){
     muerto = console.log(this.name + ' muerto');
   }else{ console.log(dam = this.name +' recibió ' + this.strength);
   }
 };
 battleCry = function() { return ('Odin Owns You All!!!')
 };
 }
//Viking.prototype = Object.create(Soldier.prototype);
//Viking.prototype.constructor = Viking;

var vikingo1 = new Viking (this.name, this.health, this.strength);
vikingo1.attack(this.health, this.strength)
vikingo1.recieveDamage(this.name, this.health, this.strength);
this.battleCry()


// Saxon
function Saxon (health, strength){
  var health   = 60;
  var strength = 25;
  Soldier.call(this,health, strength);
 this.attack = function (){
   strength
   return (health - strength)
 };
  this.recieveDamage = function() { 
   if(strength > health){
     muerto = console.log('A saxon is muerto');
   }else{ console.log(dam = 'A saxon recibió ' + strength);
   }
 };
 }
//Viking.prototype = Object.create(Soldier.prototype);
//Viking.prototype.constructor = Viking;

var saxon1 = new Saxon (this.health, this.strength);
saxon1.attack();
saxon1.recieveDamage(this.health, this.strength)
// Viking
function Viking() {}

// Saxon
function Saxon() {}

// War
function War() {}
