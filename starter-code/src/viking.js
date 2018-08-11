// Soldier
function Soldier(health,strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function(){
    return this.strength;
}

Soldier.prototype.receiveDamage = function (damage){
    this.health -= damage;
}

// Viking
function Viking(name, health,strength) {
    this.name = name;
    Soldier.call(this, health, strength);
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function(damage){
    this.health -= damage;
   if (this.health > 0){
        return this.name + " has received " + damage + " points of damage";
    } else {
       return this.name + " has died in act of combat";
   }
}

Viking.prototype.battleCry = function (){
    return "Odin Owns You All!";
}

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function(damage){
    this.health -= damage;
   if (this.health > 0){
        return "A Saxon has received " + damage + " points of damage";
    } 
       return "A Saxon has died in combat";
   }


// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function(Viking){
    this.vikingArmy.push(Viking);
}

War.prototype.addSaxon = function(Saxon){
    this.saxonArmy.push(Saxon);

    War.prototype.vikingAttack = function(){
        var r = Math.floor(Math.random()*this.vikingArmy.length);
        var s = Math.floor(Math.random()*this.saxonArmy.length);
        var resViking = this.saxonArmy[s].receiveDamage(this.vikingArmy[r].strength);
        if (this.saxonArmy[s].health <= 0){
          this.saxonArmy.splice(s,1);
        }
        return resViking;
      }
      
      War.prototype.saxonAttack = function(){
        var r = Math.floor(Math.random()*this.vikingArmy.length);
        var s = Math.floor(Math.random()*this.saxonArmy.length);
        var resSaxon = this.vikingArmy[s].receiveDamage(this.saxonArmy[r].strength);
        if (this.vikingArmy[s].health <= 0){
          this.vikingArmy.splice(s,1);
        }
        return resSaxon;
      }
      
      War.prototype.showStatus = function(){
        if(this.saxonArmy.length == 0){
          return "Vikings have won the war of the century!";
        }
        if(this.vikingArmy.length == 0){
          return "Saxons have fought for their lives and survive another day...";
        }
      return "Vikings and Saxons are still in the thick of battle.";
    }
}