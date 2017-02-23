function Soldier(health, strength){
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function(){
  return this.strength;
};

Soldier.prototype.recieveDamage = function(enemy){
  return this.health - enemy.attack();
};

function Viking(name,health,strength){
  Soldier.call(this, health, strength);
  this.name = name;
}


Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Soldier.prototype.battleCry = function(){
  if(this.name){
    return "Odin OWN YOU ALLL!!!!!11"
  }
};



Soldier.prototype.recieveDamage = function(enemy){
  if(this.name){
    if (this.health < enemy.attack()){
      return this.name + " has died in act of combat."
    }else{
      return this.name + " has recived " + enemy.attack() + " points of damage";
    }
      }else{
              if (this.health < enemy.attack()){
      return "A Saxon has died in combat."
    }else{
      return "Saxon has recived " + enemy.attack() + " points of damage";
    }
      }
};


function Saxon(health,strength){
  Soldier.call(this,health,strength)
};
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;


var war = function(){}

var odin = new Viking("Odin",1000,1000);
var thor = new Viking("Thor",900,900);
var skidblandir = new Viking("Skidblandir",800,800);
var baldr = new Viking("Baldr",700,700);
var vali = new Viking("Vali",600,650);

var vikingArmy = [odin,thor,skidblandir,baldr,vali];

var arthur = new Saxon(100,120);
var brian = new Saxon(120,200);
var ben = new Saxon(150,220);
var robin = new Saxon(160,210);
var gus = new Saxon(80,3);

var saxonArmy = [arthur,brian,ben,robin,gus];


var calcStr = function(array){
  var sumStr = 0;
  for(var i=0;i<array.length;i++){
    var sumStr = sumStr + array[i].attack()
  }
  return sumStr;
}



var calcHel = function(array){
  var sumHel = 0;
  for(var i=0;i<array.length;i++){
    var sumHel = sumHel + array[i].health
  }
  return sumHel;
}

var result = 0;

var war = function(attacker,defender){
  result = calcHel(defender)-calcStr(attacker);
{
  if (result > 0) {
    console.log("Vikings still have " + result + " left")
    }else{ console.log("Vikings have won!!") }
}};

war(vikingArmy,saxonArmy)
