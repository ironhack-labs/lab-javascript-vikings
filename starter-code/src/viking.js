// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function() {
    return this.strength;
  };
  this.receiveDamage = function(damage) {
    this.health -= damage;
  };
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.receiveDamage = function(damage) {
    this.health -= damage

    if(this.health !== 0) {
      return `${this.name} has received ${damage} points of damage`
    }else{
      return `${this.name} has died in act of combat`
          }  
    } 
    this.battleCry = function(){
    return `Odin Owns You All!`
    }
  }
  
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon(health, strength){
  Soldier.call(this, health, strength)
  this.receiveDamage = function(damage) {
    this.health -= damage
    if(this.health !== 0) {
      return `A Saxon has received ${damage} points of damage`
    }else{
      return `A Saxon has died in combat`
          }  
    }  
  }


Saxon.prototype = Object.create(Soldier.prototype)
Saxon.prototype.constructor = Saxon

// War

function War(){

  this.vikingArmy = [],
  this.saxonArmy = []

  this.addViking = function(viking){ 
    this.vikingArmy.push(viking)
    for(i=0; i < 10; i++){
    }
    console.log(i)
  } 

  this.addSaxon = function(saxon){
    this.saxonArmy.push(saxon)
  }


  this.vikingAttack = function(){
    this.randomSaxon = Math.round(Math.random() * this.saxonArmy.length)
    this.randomViking = Math.round(Math.random() * this.vikingArmy.length)
    
    this.attackViking = function(randomSaxon){
      randomSaxon.receiveDamage(this.strength) === randomViking.strength
      //this.saxonArmy(randomSaxon).receiveDamage(this.damage) = this.vikingArmy(randomViking).strength
      // const battleResult = this.saxonArmy[randomoSaxon].receiveDamage(Viking.strength)
    }
    return this.attackViking
    
    // if (this.saxonArmy[Saxon].health === 0){
    //   this.saxonArmy.splice(randomoSaxon,1)
    // }
    // return battleResult
  }

  }
  
  // const vikingAttack = new Saxon()
  // vikingAttack.receiveDamage()


War.prototype = Object.create(Soldier.prototype)
War.prototype.constructor = War
// Pokemon.prototype.atacar = function(pokemon){
//   pokemon.receiveDamage(this.attack)
// }