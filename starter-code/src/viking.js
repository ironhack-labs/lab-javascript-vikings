// Soldier
function Soldier(health, strength) {
    
    this.strength= strength;
    this.health= health;
    
    }

    Soldier.prototype.attack = function(){
      
      return this.strength;
      
    };
    
    Soldier.prototype.receiveDamage = function (damage){
      this.health -= damage;
 
      return                
    };
      //console.log(guerrero.receiveDamage());

// Viking
function Viking(name, health, strength) {

    Soldier.call(this, name, health, strength );
     this.name = name; 
     
function battleCry (){
 return "Odin Owns You All!"

}
function receiveDamage(damage){
    this.health -= damage;

    if (health < 0) {
        return this.name  + " has received "+ damage +"  points of damage ";
    }  

    else {
        return  name + " has died in act of combat ";
        
    }

}



function attack(){
return Viking.strength;

function health(){

    return Viking.health;
}



}
}

    



// Saxon
function Saxon() {}

// War
function War() {}
