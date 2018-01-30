// Soldier
//Create function Soldier with 2 arguments.
function Soldier(health, strength) {
//Create a property for each argument
    this.health = health;
    this.strength = strength;
//Create an attack method as a function
    Soldier.prototype.attack = function(){
//SHould return the strength property        
        return this.strength;
    }
//Create an receiveDamage method as a function 
    Soldier.prototype.receiveDamage = function (damage){
//Should remover the received damage from the health.  
        this.health -= damage;
    }
}

// Viking
//Create a viking function and pass 3 arguments through.
function Viking(name, health, strength) {
    this.name = name;

    Soldier.call(this, health, strength); 

}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function (damage){
    this.health -= damage;
    if(this.health > 0){
        return (this.name + " has received " + damage + " points of damage");
    }else{
        return (this.name + " has died in act of combat");
    }  
}



// Saxon
function Saxon(health, strength) {}

// War
function War() {}
