// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;

  this.attack = function (){
    return this.strength;
  };

  this.receiveDamage = function (damage) {
    this.health -= damage;
  }
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.battleCry = function(){
    return "Odin Owns You All!"
  };
  this.receiveDamage = function (damage) {
    this.health -= damage;
    if(this.health){
      return `${this.name} has received ${damage} points of damage`
    }else{
      return `${this.name} has died in act of combat`;
    }
  };
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);

  this.receiveDamage = function (damage){
    this.health -= damage;

    if (this.health > 0){
      return `A Saxon has received ${damage} points of damage`;
    } else{
      return `A Saxon has died in combat`;
    }
  }
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

// function to select a random item from an Array, to be used by War
// defined externally to War, because it will be used in several methods
function randomSelect(arr) {  // Select an element from the array at random
  idx = Math.floor(Math.random() * arr.length)  
  // return arr[idx]
  return idx;
}


War.prototype.addViking = function (viking){
  this.vikingArmy.push(viking) // add an element to vikingArmy array
}
War.prototype.addSaxon = function (saxon){
  this.saxonArmy.push(saxon) // add an element to saxonArmy array
}

// function to check Army and "remove" dead bodies LOL
// args: 
// --- army - array
// --- soldier - numeric
War.prototype.checkArmy = function (army, soldier){
  // if its health is less than 0, is dead
  if (army[soldier].health <= 0){
    // splice method to remove soldier from army
    army.splice(soldier, 1);
  }
}

War.prototype.vikingAttack = function(){
  // Validation of empty arrays
  if (this.vikingArmy.length == 0 || this.saxonArmy.length == 0){ // If array is empty
    return undefined
  }
  
  let selected_saxon = randomSelect(this.saxonArmy); // saxon element choosen at random
  let selected_viking = randomSelect(this.vikingArmy); // viking element choosen at random
  
  //call receiveDamage method of selected saxon. Saxon receives damage of selected viking
  let msg = this.saxonArmy[selected_saxon].receiveDamage(this.vikingArmy[selected_viking].strength);

  // check if saxon is still alive and remove dead body if necessary
  this.checkArmy(this.saxonArmy, selected_saxon);

  return msg;
}

War.prototype.saxonAttack = function() {
  // Validation of empty arrays
  if (this.vikingArmy.length == 0 || this.saxonArmy.length == 0){ // If array is empty
    return undefined
  }
  
  let selected_saxon = randomSelect(this.saxonArmy); // saxon element choosen at random
  let selected_viking = randomSelect(this.vikingArmy); // viking element choosen at random
  
  //call receiveDamage method of selected viking. Viking receives damage of selected saxon
  let msg = this.vikingArmy[selected_viking].receiveDamage(this.saxonArmy[selected_saxon].strength);

  // check if saxon is still alive and remove dead body if necessary
  this.checkArmy(this.vikingArmy, selected_viking);

  return msg;
}

War.prototype.showStatus = function() {
  // check viking Army status
  if (this.saxonArmy.length == 0){
    return `Vikings have won the war of the century!`;
  }

  // check saxon Army status
  if (this.vikingArmy.length == 0){
    return `Saxons have fought for their lives and survive another day...`;
  }

  // if there is at least one soldier of each army
  if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0){
    return `Vikings and Saxons are still in the thick of battle.`;
  }
}