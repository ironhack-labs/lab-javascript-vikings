// Soldier
function Soldier() {}
function Soldier(health, strength) {
    this.health = health;
    this.strength =strength;
}
Soldier.prototype.attack=function(){
    return this.strength;
}
Soldier.prototype.receiveDamage=function(damage){
    this.health= this.health-damage;
}
// Viking
function Viking(){}
function Viking(name, health, strength) {
    Soldier.call(this, health, strength);
    this.name=name;
    this.attack=function(){
        return this.strength;
    }
    this.receiveDamage=function(damage){
        this.health=this.health-damage;
        if(this.health>0){
            return this.name + " has received " + damage + " points of damage";
        }else{
            return name+ " has died in act of combat";
        }
    }
    this.battleCry=function(){
        return "Odin Owns You All!";
    }

}
Viking.prototype = Object.create(Soldier.prototype);


// Saxon
function Saxon() {}
function Saxon(health, strength) {
    this.health = health;
    this.strength =strength;
    this.receiveDamage=function(damage){
        this.health=this.health-damage;
        if(this.health>0){
            return "A Saxon has received "+ damage+ " points of damage";
        }else{
            return "A Saxon has died in combat";
        }
    }
}
Saxon.prototype = Object.create(Soldier.prototype);

// War
function War() {}
function War() {
    this.vikingArmy=[];
    this.saxonArmy=[];
    
    this.addViking=function(viking){
        this.vikingArmy.push(viking);
    }

    this.addSaxon=function(saxon){
        this.saxonArmy.push(saxon);
    }

    this.vikingAttack=function(){
        var randomViking = Math.floor(Math.random()*this.vikingArmy.length);
        var randomSaxon= Math.floor(Math.random()*this.saxonArmy.length);
        if (this.saxonArmy[randomSaxon].health <= this.vikingArmy[randomViking].strength){
            this.saxonArmy[randomSaxon].health -= this.vikingArmy[randomViking].strength;
            this.saxonArmy.splice(randomSaxon, 1);
            return "A Saxon has died in combat";
        }
        else {
          return this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[0].strength);
        }
      }; 
      this.saxonAttack = function(){
        var randomSaxon= Math.floor(Math.random()*this.saxonArmy.length);
        var randomViking = Math.floor(Math.random()*this.vikingArmy.length);
        if (this.vikingArmy[randomViking].health <= this.saxonArmy[randomSaxon].strength){
          this.vikingArmy[randomViking].health -= this.saxonArmy[randomSaxon].strength;
          var corpse = this.vikingArmy[randomViking].name;
          this.vikingArmy.splice(randomViking, 1);
          return corpse + " has died in act of combat";
        }
        else {
          return this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[0].strength);
        }
      };
      this.showStatus = function(){
        if (this.vikingArmy.length === 0){return "Saxons have fought for their lives and survive another day...";}
        else if (this.saxonArmy.length === 0){return "Vikings have won the war of the century!";}
        else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {return "Vikings and Saxons are still in the thick of battle.";}
      };
    }

