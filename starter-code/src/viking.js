// Soldier
function Soldier (health, strength) {
    this.health = health;
    this.strength = strength;
}
Soldier.prototype.attack = function(){
    return this.strength;
}

Soldier.prototype.receiveDamage = function(damage){
   this.health -= damage;
}

// Viking
function Viking (name, health, strength) {
    Soldier.call(this,health, strength);
    this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
        return this.name + " has received " + damage + " points of damage";
    } else {
        return this.name + " has died in act of combat";
    }
}

Viking.prototype.battleCry = function(){
    return "Odin Owns You All!";
  }
  
  // Saxon
  
  
  function Saxon (health, strength) {
    Soldier.call(this, health, strength);
  }

  Saxon.prototype = Object.create(Soldier.prototype);

  Saxon.prototype.receiveDamage = function(damage){
    this.health = this.health - damage;
    if(this.health > 0){
        return "A Saxon has received " + damage + " points of damage";
    }else{

        return "A Saxon has died in combat";
    }  
  }

  // War
function War () {
    this.vikingArmy = [];
    this.saxonArmy = [];
}


  War.prototype.addViking = function (Viking){
    this.vikingArmy.push(Viking);
}

War.prototype.addSaxon = function (Saxon){
    this.saxonArmy.push(Saxon);
}
  //HASTA AQUI OK
War.prototype.vikingAttack = function(){
    indexSaxon = Math.floor(Math.random()*this.saxonArmy.length);
    indexViking = Math.floor(Math.random()*this.vikingArmy.length);
    saxo = this.saxonArmy[indexSaxon];
    viking = this.vikingArmy[indexViking];
    exit = saxo.receiveDamage(viking.attack());
    if(saxo.health<=0){
        this.deleteSaxon(indexSaxon);
    }
    return exit;
}

War.prototype.saxonAttack = function(){
    indexSaxon = Math.floor(Math.random()*this.saxonArmy.length);
    indexViking = Math.floor(Math.random()*this.vikingArmy.length);
    saxo = this.saxonArmy[indexSaxon];
    viking = this.vikingArmy[indexViking];
    exit = viking.receiveDamage(saxo.attack());
    if(viking.health<=0){
        this.deleteViking(indexViking);
    }
    return exit;
}

War.prototype.deleteSaxon = function(index){
    this.saxonArmy.splice(index,1);
}

War.prototype.deleteViking = function(index){
    this.vikingArmy.splice(index,1);
}


War.prototype.showStatus = function(){
    if(this.saxonArmy.length === 0){
        return "Vikings have won the war of the century!";
    }else if(this.vikingArmy.length === 0){
        return "Saxons have fought for their lives and survive another day...";
    }else if(this.saxonArmy.length>0 && this.vikingArmy.length>0){
        return "Vikings and Saxons are still in the thick of battle.";
    }
}


