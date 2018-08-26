// Soldier
function Soldier(health, strength) {
    this.health= health;
    this.strength=strength;
    this.attack = function() { 
    return this.strength;}
    this.receiveDamage = function(damage) {
        this.health -= damage;
    }


}


function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
    this.attack=function() { 
        return this.strength;}
    this.receiveDamage = function(damage){
        this.health -= damage;
       if ( this.health <= 0) {
           return this.name+ " has died in act of combat";
       }else {
            
           return this.name +" has received "+ damage + " points of damage" ;

       }
   }
    this.battleCry = function(){
       return "Odin Owns You All!"

   } 
};




Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon(health, strength){
    Soldier.call(this, health, strength);
    this.receiveDamage = function(damage){
        this.health -= damage;
       if ( this.health <= 0) {
           return "A Saxon has died in combat";
       }else {
            
           return "A Saxon has received "+ damage + " points of damage" ;

       }

}
};
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {
    this.vikingArmy=[];
    this.saxonArmy=[];
    

    };



War.prototype.addViking= function(viking){
    this.vikingArmy.push(viking);
        
    }


War.prototype.addSaxon= function(saxon){
    this.saxonArmy.push(saxon);  
}
War.prototype.vikingAttack= function(){
 saxo.this.receiveDamage() = viking.strength;
}


War.prototype.saxonAttack= function(){

}
War.prototype.showStatus= function(){

}
