// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function() { // add attack method
    return this.strength
}
Soldier.prototype.receiveDamage = function(damage) { // add receive damage method
    this.health -= damage
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this, health, strength); // call Soldier properties and methods 
    this.name = name; 
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage) { // edit receive damage method for Vikings 
    this.health -= damage;
    if(this.health > 0) {
        return this.name + " has received " + damage + " points of damage"
     } else {
         return this.name + " has died in act of combat"
       }
}

Viking.prototype.battleCry = function() { // add battleCry method 
    return "Odin Owns You All!";
}


// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage) {
    this.health -= damage;
    if(this.health > 0) {
        return  "A Saxon has received " + damage + " points of damage"
     } else {
         return "A Saxon has died in combat"
    }
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

// Add Viking
War.prototype.addViking = function(viking) { 
   this.vikingArmy.push(viking);
}

// Add Saxon
War.prototype.addSaxon = function(saxon) { 
    this.saxonArmy.push(saxon);
}

// Viking Attack
War.prototype.vikingAttack = function() {
    var vikingSoldierIndex = randomFighter(this.vikingArmy);
    var vikingSoldier = this.vikingArmy[vikingSoldierIndex]

    var saxonSoldierIndex = randomFighter(this.saxonArmy);
    var saxonSoldier = this.saxonArmy[saxonSoldierIndex]

    var attackMessage = saxonSoldier.receiveDamage(vikingSoldier.strength); // damage received from Saxon soldier is equal to Viking streng

    if(saxonSoldier.health <= vikingSoldier.strength) {
        this.saxonArmy.splice(saxonSoldierIndex)     
    }
    
    return attackMessage;
    
}

// Saxon Attack
War.prototype.saxonAttack = function() {
    var vikingSoldierIndex = randomFighter(this.vikingArmy);
    var vikingSoldier = this.vikingArmy[vikingSoldierIndex]

    var saxonSoldierIndex = randomFighter(this.saxonArmy);
    var saxonSoldier = this.saxonArmy[saxonSoldierIndex]

    var attackMsg = vikingSoldier.receiveDamage(saxonSoldier.strength); // damage received from Viking soldier is equal to Saxon strength

    if (vikingSoldier.health <= saxonSoldier.strength) {
        this.vikingArmy.splice(vikingSoldierIndex)
    }
    return attackMsg
}

// Show Status 
War.prototype.showStatus = function() {
    if(saxonArmy.length == 0) {
        return "Vikings have won the war of the century"
    } else if (vikingArmy.length == 0) {
        return "Saxons have fought for their lives and survive another day..."
    } else {
        return "Vikings and Saxons are still in the thick of battle";
    }
}

function randomFighter(army) {  // to pick up a random fighter 
   return Math.floor(Math.random() * Math.floor(army.length));
}



