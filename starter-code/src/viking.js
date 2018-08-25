// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function(){
    return this.strength;
    //should return the strength property of the Soldier
}
Soldier.prototype.receiveDamage = function(damage){
    this.health -= damage;
    //should remove the received damage from the health property
}

// Vikings
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name = name;
}
Viking.prototype = Object.create(Soldier.prototype);

/*Viking.prototype.receiveDamage() = function(damage){
    this.health -= damage;
    if (health>0){
        console.log(this.name + " has received " + damage + " points of damage");
   // } else{
        console.log(this.name + " has died in act of combat");
   // }
}*/
//Viking.prototype.battleCry() = function(){
   // console.log("Odin Owns You All!");
//}



// Saxon
function Saxon() {}

// War
function War() {}
