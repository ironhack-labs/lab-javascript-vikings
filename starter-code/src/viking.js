//SOLDIER
//
// Función constructora del objeto Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}
//
// Definimos el método "attack" del objeto Soldier
Soldier.prototype.attack = function(){
return this.strength;
}
//
// Definimos el método "receiveDamage" del objeto Soldier
Soldier.prototype.receiveDamage = function(damage) {
    this.health = this.health - damage;
}



// VIKING
//
// Función constructora del objeto Viking
function Viking(name, health, strength) {
    this.name = name;
    Soldier.call(this, health, strength )
}
Viking.prototype = Soldier.prototype;
//
// Definimos el método "attack" del objeto Viking


// Saxon
function Saxon () {}

// War
function War () {}
