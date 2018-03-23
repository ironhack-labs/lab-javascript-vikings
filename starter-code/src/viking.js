// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function(){
      return this.strength;
  }
  this.receiveDamage = function(damage){
        this.health =  this.health - damage;
        }
  
}

// Viking
function Viking(name, health, strength) {
  Soldier.call(this,health,strength);
  this.name = name;
  
  this.receiveDamage = function(damage){
    this.health = this.health - damage;
    if (this.health > 0){
       return (this.name + " has received " + damage + " points of damage");
      }
    else{
      return (this.name + " has died in act of combat");
    }
  }

  this.battleCry = function(){
    return "Odin Owns You All!";
  }
}

Viking.prototype = Object.create(Soldier.prototype);

// Saxon
function Saxon(health, strength) {

  Soldier.call(this,health,strength);
  this.receiveDamage = function(damage){
    this.health = this.health - damage;

    if (this.health > 0){
        return ("A Saxon has received " + damage + " points of damage");
    }
    else{
      return ("A Saxon has died in combat");
    }
  
  }
}
Saxon.prototype = Object.create(Soldier.prototype);


// War
function War() {
this.vikingArmy = [];
this.saxonArmy = [];

this.addViking = function(Viking)
        {
          this.vikingArmy.push(Viking);
        };

this.addSaxon = function(Saxon)
        {
          this.saxonArmy.push(Saxon);
        };
        
this.vikingAttack = function()
        {
          var randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
          var randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        
          var randomSaxonSoldier = this.saxonArmy[randomSaxonIndex];
          var randomVikingSoldier = this.vikingArmy[randomVikingIndex];

          
          if (randomSaxonSoldier.health <= randomVikingSoldier.strength)
          {
              this.saxonArmy.splice(this.randomSaxonIndex,1);
          }
          return randomSaxonSoldier.receiveDamage(randomVikingSoldier.strength);
   
         
};


this.saxonAttack = function(){
          
          var randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
          var randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

          var randomSaxonSoldier = this.saxonArmy[randomSaxonIndex];
          var randomVikingSoldier = this.vikingArmy[randomVikingIndex];


          if (randomSaxonSoldier.strength >= randomVikingSoldier.health)
          {
              this.vikingArmy.splice(this.randomVikingIndex,1);
          }
          return randomVikingSoldier.receiveDamage(randomSaxonSoldier.strength);
};




this.showStatus =  function(){

  if (this.saxonArmy.length == 0)
    {
      return "Vikings have won the war of the century!";
    }
  
  else if (this.vikingArmy.length == 0)
    {
      return "Saxons have fought for their lives and survive another day...";
    }

    else {
      return "Vikings and Saxons are still in the thick of battle.";
    }

};



}
