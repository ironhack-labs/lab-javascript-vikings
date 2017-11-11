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
//
//heredamos sus Métodos desde Soldier  
Viking.prototype = Object.create(Soldier.prototype);
//
// El método "attack" del objeto Viking ya no hay que declararlo pq lo hereda de SOLDIER
// y tb habría heredado el método "receiveDamage" aunque lo queremos modificar:
Viking.prototype.receiveDamage = function(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
        return this.name + " has received " + this.damage + "  points of damage"
    }
    else {
        return this.name + " has died in act of combat" 
    }
}
//
// definimos el método battleCry
Viking.prototype.battleCry = function(){
    return "Odin Owns You All!";
    }
    

// SAXON
//
// Función constructora del objeto Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength )
}
//
//heredamos sus Métodos desde Soldier  
Saxon.prototype = Object.create(Soldier.prototype);
//
// El método "attack" del objeto Viking ya no hay que declararlo pq lo hereda de SOLDIER
// y tb habría heredado el método "receiveDamage" aunque lo queremos modificar:
Saxon.prototype.receiveDamage = function(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
        return "A Saxon has received " + this.damage + "  points of damage"
    }
    else {
        return "A Saxon has died in combat" 
    }
}



// WAR
//
// Función constructora del objeto War
function War() {
vikingArmy = [];

}
//
// Definimos el método "addViking" del objeto WAR
War.prototype.addViking = function(){
    
    }
//
// Definimos el método "addSaxon" del objeto WAR
War.prototype.addSaxon = function(){
    
    }
//
// Definimos el método "vikingAttack" del objeto WAR
War.prototype.vikingAttack = function(){
    
    }
//
// Definimos el método "saxonAttack" del objeto WAR
War.prototype.saxonAttack = function(){
    
    }
//
// Definimos el método "showStatus" del objeto WAR
War.prototype.showStatus = function(){
    
    }