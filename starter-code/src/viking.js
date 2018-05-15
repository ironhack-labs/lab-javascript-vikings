// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
  this.attack = function(){
    return this.strength;
  }
  this.receiveDamage = function (damage){
    this.health = this.health - damage;
  }
}


// Viking
function Viking(name, health, strength) {
  
  Soldier.call(this, health, strength);
  this.name = name;
  
  this.battleCry = function(){
    return "Odin Owns You All!"
  }
  
  this.receiveDamage = function(damage){
    this.health = this.health - damage;
    if (this.health > 0){
      return this.name + " has received " + damage + " points of damage";
      } else if (this.health <= 0){
      return this.name + " has died in act of combat";
    }
  }
}

Viking.prototype=Object.create(Soldier.prototype);


// Saxon
function Saxon(health, strength) {
  
  Soldier.call(this,health,strength);
 
  this.receiveDamage = function (damage){
   this.health = this.health - damage;
    if (this.health > 0){
      return "A Saxon" + " has received " + damage + " points of damage";
      } else if (this.health <= 0){
      return "A Saxon" + " has died in combat";
    } 
  }
}

Saxon.prototype = Object.create(Soldier.prototype);



// War
function War() {

  this.vikingArmy = [];
  this.saxonArmy = [];
  
  this.addViking = function(viking){
    this.vikingArmy.push(viking);
  }
  
  this.addSaxon = function(saxon){
    this.saxonArmy.push(saxon);
  }
  
  this.vikingAttack = function(){

    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];  
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    if (randomSaxon.health > randomViking.strength) {
      return randomSaxon.receiveDamage(randomViking.attack());    

    } else if (randomSaxon.health < randomViking.strength ) {

      let index = this.saxonArmy.findIndex(function(currentSaxon){
        return currentSaxon.strength !== randomSaxon.strength && currentSaxon.health !== randomSaxon.health;
      });

      this.saxonArmy = this.saxonArmy.splice(index, 1);

      return randomSaxon.receiveDamage(randomViking.attack());    
    }  
  }

  this.saxonAttack = function(){
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];  
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    if (randomViking.health > randomSaxon.strength) {
      return randomViking.receiveDamage(randomSaxon.attack());    

    } else if (randomViking.health < randomSaxon.strength ) {

      let index = this.vikingArmy.findIndex(function(currentViking){
        return currentViking.strength !== randomViking.strength && currentViking.health !== randomViking.health;
      });

      this.vikingArmy = this.vikingArmy.splice(index, 1);

      return randomViking.receiveDamage(randomSaxon.attack());    
    }  
  }
  
  this.showStatus = function(){
    
  }
  
}


mike = new Viking("MikeNieva", 20, 10);
estela = new Viking("Estela", 30,25);

saxon1 = new Saxon(15,43);
saxon2 = new Saxon(4,2);


war = new War();

war.addViking(mike);
war.addViking(estela);
war.addSaxon(saxon1);
war.addSaxon(saxon2);


console.log(war.saxonAttack());
