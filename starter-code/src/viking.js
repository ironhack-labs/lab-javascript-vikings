// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;

  this.attack = function(){
      return this.strength;
  }
  this.receiveDamage = function(damage){
      this.health = this.health - damage;

  }
}


// Viking
function Viking(name ,healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg, this.attack);
    this.name = name;
    this.receiveDamage = function(damage){
        this.health = this.health - damage;
        if(this.health > 0){
            return name + " has received " + damage + " points of damage";
        }else{
            return name + " has died in act of combat";
        }
    }
    this.battleCry = function (){
        return "Odin Owns You All!"
    }
    
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon(healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg, this.attack);
    this.receiveDamage = function(damage){
        this.health = this.health - damage;
        if(this.health > 0){
            return "A Saxon has received " + damage + " points of damage";
        }else{
            return "A Saxon has died in combat";
        }
    }
    
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];   

    this.addViking = function(Viking){
        this.vikingArmy.push(Viking);
    };

    this.addSaxon = function(Saxon){
        this.saxonArmy.push(Saxon);
    };

    this.vikingAttack= function(){
        var randomViking = Math.floor(Math.random()*(this.vikingArmy.length));
        var randomSaxon = Math.floor(Math.random()*(this.saxonArmy.length));
        var viking = this.vikingArmy[randomViking];
        var saxon = this.saxonArmy[randomSaxon];
        var saxonDMG = saxon.receiveDamage(viking.strength);
        if(saxon.health <=0){
            this.saxonArmy.splice(randomSaxon, 1);
        }
        return saxonDMG;
    } 
    this.saxonAttack= function(){
        var randomViking = Math.floor(Math.random()*(this.vikingArmy.length));
        var randomSaxon = Math.floor(Math.random()*(this.saxonArmy.length));
        var viking = this.vikingArmy[randomViking];
        var saxon = this.saxonArmy[randomSaxon];
        var vikingDMG = viking.receiveDamage(saxon.strength);
        if(viking.health <=0){
            this.vikingArmy.splice(randomViking, 1);
        }
        return vikingDMG;
    } 
    this.showStatus = function(){
        if(this.saxonArmy.length <= 0){
            return "Vikings have won the war of the century!";
        }else if(this.vikingArmy.length <= 0){
            return "Saxons have fought for their lives and survive another day...";
        }else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1){
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
    
    

}
