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

War.prototype.addViking = function (viking){
  this.vikingArmy.push(viking) // add an element to vikingArmy array
}
War.prototype.addSaxon = function (saxon){
  this.saxonArmy.push(saxon) // add an element to saxonArmy array
}
War.prototype.vikingAttack = function(){
  function randomSelect(arr){  // Select an element from the array at random
    idx = Math.floor(Math.random() * this.arr.length)  
    return arr[idx]
  }
  if(this.vikingArmy.length == 0){ // If array is empty
    return undefined
  }else{
    this.selected_saxon = randomSelect(saxonArmy) // saxon element choosen at random
    this.selected_viking = randomSelect(vikingArmy) // viking element choosen at random

  }
  this.selected_saxon.receiveDamage(this.selected_viking.strength)
  if(this.selected_saxon.health <= 0){ // Health less equal zero means saxon is dead
    this.saxonArmy.splice(idx,1); // remove element from saxonArmy array
  }else{
    return `Saxon health is ${this.selected_saxon.health}`
  }
}

War.prototype.saxonAttack()
War.prototype.showStatus()
