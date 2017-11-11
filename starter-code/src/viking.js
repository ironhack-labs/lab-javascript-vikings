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
    this.health -= damage;
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
    this.health -= damage;
    if (this.health > 0) {
        return this.name + " has received " + damage + " points of damage";
    }
    else {
        return this.name + " has died in act of combat";
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
    this.health -= damage;
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
    this.vikingArmy = [];
    this.saxonArmy = [];
}
//
// Definimos el método para seleccionar aleatoriamente un elemento de un array
Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
}
//
// Definimos el método "addViking" y "deleteViking" del objeto WAR
War.prototype.addViking = function(viking){
    if (viking instanceof Viking) {
        this.vikingArmy.push(viking);
    }
}
War.prototype.deleteViking = function (viking) {
    if (viking instanceof Viking) {
        index = this.vikingArmy.indexOf(viking);
        if (index !== -1) {
            this.vikingArmy.splice(index, 1);
        }
    }
}
//
// Definimos el método "addSaxon" y "deleteSaxon" del objeto WAR
War.prototype.addSaxon = function(saxon){
    if (saxon instanceof Saxon) {
        this.saxonArmy.push(saxon);
    }
}
War.prototype.deleteSaxon = function (saxon) {
    if (saxon instanceof Saxon) {
        index = this.saxonArmy.indexOf(saxon);
        if (index !== -1) {
            this.saxonArmy.splice(index, 1);
        }
    }
}
//
// Definimos el método "vikingAttack" del objeto WAR
War.prototype.vikingAttack = function() {
    saxon = this.saxonArmy.random();
    viking = this.vikingArmy.random();
    
    status = saxon.receiveDamage(viking.attack());
    if (!saxon.isStillAlive()) {
        this.deleteSaxon(saxon);
    }
    return status;
}
//
// Definimos el método "saxonAttack" del objeto WAR
War.prototype.saxonAttack = function () {
    saxon = this.saxonArmy.random();
    viking = this.vikingArmy.random();

    status = viking.receiveDamage(saxon.attack());
    if (!viking.isStillAlive()) {
        this.deleteViking(viking);
    }
    return status;
}
//
// Definimos el método "showStatus" del objeto WAR
War.prototype.showStatus = function() {
    if (this.saxonArmy.length === 0) {
        return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
        return "Saxons have fought for their lives and survive another day...";
    } else if (this.saxonArmy.length === 1 && this.vikingArmy.length === 1) {
        return "Vikings and Saxons are still in the thick of battle.";
    }
}

//NOTA: intentar crear un mini juego partiendo de esto al igual que en el ejercicio del cluedo.
//que le demos el numero de guerrreros de cada ejercito y que los construya aleatroriamente y que luego los enfrente
// y que muestre por consola el resultado de la batalla
