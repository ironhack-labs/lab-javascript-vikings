//Soldier constructor
function Soldier(healthArg, strengthArg){
  this.healthArg    = healthArg;
  this.strengthArg  = strengthArg;
}
Soldier.prototype.attack = function(){
  return this.strengthArg;
};
Soldier.prototype.receiveDamage = function(damage){
  this.healthArg  = this.healthArg - this.damage;
};


//Viking constructor
function Viking(name, health, strength){
  this.name = name;
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage){
    this.healthArg = this.healthArg - damage;
    if (this.health <= 0){
      return this.name + ' has died in act of combat';
    }else{
      return this.name + ' has recieved ' + damage + ' points of damage';
    }
  };
}
Viking.prototype.attack = function(){
  return this.strength;
};
Viking.prototype.battleCry = function(){
  return 'Odin Owns You All';
};
Viking.prototype = Object.create(Soldier.prototype);


//Saxon constructor
function Saxon(health, strength){
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage){
    this.healthArg = this.healthArg - damage;
    if (this.health <= 0){
      return 'A saxon has died in combat';
    } else {
      return 'A saxon has received ' + damage + ' points of damage';
    }
  };
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.attack = function(){
  return this.strength;
};


//Thor has recieved 10 points of damage 90
var thor = new Viking("Thor", 100, 10);
console.log(thor.receiveDamage(10), thor.healthArg);


//A saxon has received 20 points of damage 80
var sax1 = new Saxon(100, 5);
console.log(sax1.receiveDamage(20), sax1.healthArg);
