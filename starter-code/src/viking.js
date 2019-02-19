// Soldier
function Soldier (healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
    this.attack = function(){
      return this.strength;
    };
    this.receiveDamage = function(theDamage){
      this.health -= theDamage;
    };
}


// Viking

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

function Viking(name, healthArg, strengthArg) {
  this.name = name;
  Soldier.call(this, healthArg, strengthArg);

  this.receiveDamage = function(theDamage){
    this.health -= theDamage;

    if(this.health>0) {
      return this.name+" has received "+theDamage+" points of damage";
    } else {
      return this.name+" has died in act of combat";
    }
  }
  this.battleCry= function() {
    return "Odin Owns You All!";
  }
}

// Saxon
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

function Saxon(healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg)
  this.receiveDamage=function(theDamage) {
    this.health-=theDamage;
    if(this.health>0) {
      return "A Saxon has received "+theDamage+" points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  }
}

// War
function War() {
    this.vikingArmy =[];
    this.saxonArmy=[];
    this.addViking=function(Viking){
      this.vikingArmy.push(Viking);
    };
    
    this.addSaxon=function(Saxon){
      this.saxonArmy.push(Saxon);
    };

    this.vikingAttack=function(){
      var saxon=this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
      var viking=this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
      var receivedDamage = saxon.receiveDamage(viking.strength);
      if(saxon.health<=0) {
        var index=this.saxonArmy.indexOf(saxon);
        if(index>-1) {
          this.saxonArmy.splice(index, 1);
        }
      } return receivedDamage;
    };

    this.saxonAttack=function(){
      var saxon=this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
      var viking=this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
      var receivedDamage = viking.receiveDamage(saxon.strength);
      if(viking.health<=0) {
        var index=this.vikingArmy.indexOf(viking);
        if(index>-1) {
          this.vikingArmy.splice(index, 1);
        }
      } return receivedDamage;
    };

    this.showStatus=function(){
      if(this.saxonArmy==0) {
        return "Vikings have won the war of the century!";
      } else if(this.vikingArmy==0) {
        return "Saxons have fought for their lives and survive another day...";
      } else {
        return "Vikings and Saxons are still in the thick of battle.";
      }
    };
}
