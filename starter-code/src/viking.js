// Soldier
function Soldier(healthArg, strengthArg){
  this.health = healthArg;
  this.strength = strengthArg;
  
  this.attack = function(){
    return this.strength;

  };
  this.receiveDamage = function(damage){
      this.health -= damage;
  }
}
 var mySoldier = new Soldier(90,90);

// console.log(mySoldier);
// console.log(mySoldier.attack());


// Viking

function Viking(nameArg,healthArg, strengthArg){
     Soldier.call(this, healthArg, strengthArg);
     this.name = nameArg;
     this.isDead = false;
     this.receiveDamage = function(damage){
        this.health -= damage;
     if (this.health>0){
         return this.name + " has received " + damage + " points of damage"
     }
     else{
         this.isDead = true;
         return this.name + " has died in act of combat"
     }
   }
        this.battleCry = function(){
            return "Odin Owns You All!";
        }

}
   Viking.prototype = Object.create(Soldier.prototype);
   Viking.prototype.constructor = Viking;
   var myViking = new Viking("Luis", 100, 100);
    //console.log(myViking.attack());


// Saxon
function Saxon(healthArg, strengthArg){
    Soldier.call(this, healthArg, strengthArg);
    this.isDead = false;
    this.receiveDamage = function(damage){
        this.health -= damage;
     if (this.health>0){
         return "A Saxon has received " + damage + " points of damage"
     }
     else{
         this.isDead = true;
         return "A Saxon has died in combat"
     }
   }

}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;
// War
function War(){
   this.vikingArmy = [];
   this.saxonArmy = [];
}



War.prototype.addViking = function(newViking){
    this.vikingArmy.push(newViking);
}

War.prototype.addSaxon = function(newSaxon){
    this.saxonArmy.push(newSaxon);

}
War.prototype.vikingAttack = function(){
    randomVikingNum = Math.floor(Math.random() * this.vikingArmy.length);
    randomViking = this.vikingArmy[randomVikingNum];
    randomSaxonNum = Math.floor(Math.random() * this.saxonArmy.length);
    randomSaxon = this.saxonArmy[randomSaxonNum];
    result = randomSaxon.receiveDamage(randomViking.strength)
      if (randomSaxon.isDead){
            this.saxonArmy.splice(randomSaxonNum,1);
        }
     return result;
    }

    War.prototype.saxonAttack = function(){
        randomVikingNum = Math.floor(Math.random() * this.vikingArmy.length);
        randomViking = this.vikingArmy[randomVikingNum];
        randomSaxonNum = Math.floor(Math.random() * this.saxonArmy.length);
        randomSaxon = this.saxonArmy[randomSaxonNum];
        result = randomViking.receiveDamage(randomSaxon.strength)
          if (randomViking.isDead){
                this.vikingArmy.splice(randomVikingNum,1);
            }
         return result;
        }

        War.prototype.showStatus = function(){
            if ((!Array.isArray(this.saxonArmy) || !this.saxonArmy.length)){
                return "Vikings have won the war of the century!"
            }
            
            if((!Array.isArray(this.vikingArmy) || !this.vikingArmy.length)){
                return "Saxons have fought for their lives and survive another day..."

            }
            
            
            return "Vikings and Saxons are still in the thick of battle."
            

        }