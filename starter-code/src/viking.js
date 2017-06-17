// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
    
}
Soldier.prototype.attack = function(){
    return this.strength;
    }
Soldier.prototype.receiveDamage = function(damage){
    this.health -= damage;
    }





// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);    
    this.name = name;
    
}

Viking.prototype.battleCry = function (){
            return "Odin Owns You All!";
        }
Viking.prototype.receiveDamage = function(damage){
        this.health -= damage;
            if(this.health > 0){
                console.log(this.name + " has received " + damage  + " points of damage");
            }else{
                console.log(this.name + " has died in act of combat");             
            }
    this.health;
    }
    


Viking.prototype = Object.create(Soldier.prototype);
var soldier = new Soldier(1000, 500);
var viking = new Viking("Mike", 1000, 500);




// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
    
}
Saxon.prototype.receiveDamage = function(damage){
        this.health -= damage;
        if(this.health > 0){
            console.log("A Saxon has received " + damage + " points of damage");
        }else{
            console.log("A Saxon has died in combat");       
        }
    this.health;
    }

Saxon.prototype = Object.create(Soldier.prototype);
var saxon = new Saxon(700, 300);
    
console.log(soldier);
console.log(viking);
console.log(saxon);




