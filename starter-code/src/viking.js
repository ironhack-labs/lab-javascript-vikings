// Soldier
function Soldier (health, strength) {
    this.health = health;
    this.strength = strength;

    Soldier.prototype.attack = function(){
        return this.strength;
    }

    Soldier.prototype.receiveDamage = function(damage){
      this.health -= damage;
    }
}


var soldier1 = new Soldier(5,8);
console.log(soldier1.attack());
console.log(soldier1.receiveDamage(3));

// Viking
function Viking (name,health,strength) {
  Soldier.call(this,health,strength);
  this.name= name;

  Soldier.prototype.attack = function(){
    return this.strength;
  }

  Viking.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health > 0){
      return this.name + ' has received ' +  damage + ' points of damage';
    }else{
      return this.name + ' has died in act of combat';
    }
  }

  Viking.prototype.battleCry = function(){
    return 'Odin Owns You All!!'
  }
}

Viking.prototype = Object.create(Soldier.prototype);


// Saxon
function Saxon (health, strength) {
  Soldier.call(this,health,strength);

  Soldier.prototype.attack = function(){
    return this.strength;
  }

  Saxon.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health > 0){
      return 'A Saxon has received ' +  damage + ' points of damage';
    }else{
      return 'A Saxon has died in combat';
    }
  }
}

Saxon.prototype = Object.create(Soldier.prototype);

// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];

  War.prototype.addViking = function(Viking){
    this.vikingArmy.push(Viking);
  }

  War.prototype.addSaxon = function(Saxon){
    this.saxonArmy.push(Saxon);
  }

  War.prototype.vikingAttack = function(){
    var indexViking = Math.floor(Math.random() * this.vikingArmy.length);
    var indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    this.saxonArmy[indexSaxon].receiveDamage(this.vikingArmy[indexViking].attack());
    if(this.saxonArmy[indexSaxon].health <= 0){
      this.saxonArmy.splice(indexSaxon,1);
    }
  }

  War.prototype.saxonAttack = function(){
    var indexViking = Math.floor(Math.random() * this.vikingArmy.length);
    var indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    this.vikingArmy[indexViking].receiveDamage(this.saxonArmy[indexSaxon].attack());

  if(this.vikingArmy[indexViking].health <= 0){
    this.vikingArmy.splice(indexViking,1);

  }
}

  War.prototype.showStatus = function(){
    if(this.saxonArmy.length === 0){
      return 'Vikings have won the war of the century!';
    }else if(this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survive another day..."
    }else{
      return "Vikings and Saxons are still in the thick of battle."
    }
  }


}
