// Soldier
function Soldier(health, strength) {
    this.health=health;
    this.strength=strength;
}

Soldier.prototype.attack=function(){
    return this.strength;
}
Soldier.prototype.receiveDamage=function(damage){
    this.health-=damage;
}

// Viking
function Viking(name,health,strength) {
    Soldier.call(this,health,strength);
    this.name=name;
    
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;
Viking.prototype.battleCry=function(){
    return "Odin Owns You All!";
}

Viking.prototype.receiveDamage=function(damage){
    this.health-=damage;
    if(this.health-damage>0){
        return this.name+" has received "+damage +" points of damage";
    }else {
        return this.name+" has died in act of combat";
    }
}
// Saxon
function Saxon(health,strength) {
    Soldier.call(this,health,strength);
}

Saxon.prototype= Object.create(Soldier.prototype);
Saxon.prototype.receiveDamage=function(damage){
    this.health-=damage;
    if(this.health>0){
        return "A Saxon has received "+damage +" points of damage";
    }else {
        return "A Saxon has died in combat";
    }
}

// War
function War() {
    this.vikingArmy=[];
    this.saxonArmy=[];
}
function generateViking () {
    var name     = "Harald";
    var strength = 150;
    var health   = 300;

    return new Viking(name, health, strength);
  }

  function generateSaxon () {
    var health   = 60;
    var strength = 25;
    return new Saxon(health, strength);
  }
  War.prototype.addViking = function (viking) {
    // var viking=new generateViking();
    this.vikingArmy.push(viking);
    // return this.vikingArmy;
  }
  
  War.prototype.addSaxon = function (saxon) {
    this.saxonArmy.push(saxon);
  }
      
  function generateViking() {
    var name = "Harald";
    var strength = 150;
    var health = 300;
    return new Viking(name, health, strength);
  }
  
  function generateSaxon() {
    var health = 60;
    var strength = 25;
    return new Saxon(health, strength);
  }
  
  War.prototype.vikingAttack=function(){
    //S- to put out of the function
      var war = new War()
      var viking = new generateViking();
      var saxon = new generateSaxon();
      war.addViking(viking);
      war.addSaxon(saxon);
      // war.addSaxon(saxon);
      // war.addViking(viking);
    //E- to put out of the function
  
      var v=Math.floor(Math.random()*(war.vikingArmy.length));
      var s=Math.floor(Math.random()*(war.saxonArmy.length));
  
      var myviking=war.vikingArmy[v];
      var poorsaxon=war.saxonArmy[s];
      var dmg=myviking.strength;
      // poorsaxon.receiveDamage(myviking.attack());
     return poorsaxon.health-dmg;
  
  }