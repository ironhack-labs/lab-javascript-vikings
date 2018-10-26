/******** SOLDIER ********/

function Soldier(health, strength) {
    this.health=health;
    this.strength=strength;
}
/* Creamos los prototipos fuera de la clase, para no crearlos cada vez que referenciemos al padre */

Soldier.prototype.attack= function(){
    return this.strength;
}
Soldier.prototype.receiveDamage= function(damage){
    this.health=this.health-damage;
}

/***** VIKING ******/

function Viking(name,health, strength) {
    Soldier.call(this,health,strength);
    this.name=name;
    this.battleCry= function(){
        return "Odin Owns You All!";
    }
}

/*Heredamos los prototype del padre, y lo desreferenciamos del mismo*/

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage= function(damage){
    
    this.health=this.health-damage;
    if(this.health) return `${this.name} has received ${damage} points of damage`
    return `${this.name} has died in act of combat`;
}


// Saxon
function Saxon() {}

// War
function War() {}
