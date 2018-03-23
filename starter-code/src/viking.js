// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
}

Soldier.prototype.attack = function() {
    return this.strengthArg;
}

Soldier.prototype.receiveDamage = function(damage) {
   return Soldier.healthArg - damage;
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, healthArg, strengthArg);
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;



 Viking.prototype.receiveDamage = function(damage) {
     var currentHealth; 
     currentHealth = Viking.health - damage;

     if (currentHealth > 0) {
         console.log(name, " has recieved", damage, "points of damage");
     } else {
         console.log(name, " has died in act of combat");
     }
 }


// Solider.call(attack);
// g.prototype.battleCry = function () {

// console.log("odin owns you all");

// }


// Saxon
function Saxon(health, strength) {


     Soldier.call(this, healthArg, strengthArg);

     Solider.call(attack);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;
    Saxon.prototype.receiveDamage = function(damage) {

        var currentHealth; 
        currentHealth = Saxon.health - damage;
    
        if (currentHealth > 0) {
         console.log(name, " has recieved", damage, "points of damage");
        } else {
            console.log(name, " has died in act of combat");
        }

}

// War
function War() {}
