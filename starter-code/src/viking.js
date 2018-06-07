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

Viking.prototype.battleCry=function(){
    return "Odin Owns You All!";
}

Viking.prototype.receiveDamage=function(damage){
    this.health-=damage;
    if(this.health>0){
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

  War.prototype.vikingAttack=function(){
      var v=Math.floor(Math.random()*(this.vikingArmy.length));
      var s=Math.floor(Math.random()*(this.saxonArmy.length));
  
      var myviking=this.vikingArmy[v];
      var poorsaxon=this.saxonArmy[s];
      var strg=myviking.attack();
      var value=poorsaxon.receiveDamage(strg)
      if(poorsaxon.health<0){
        this.saxonArmy.splice(poorsaxon);
          return value;
      }else {
        return poorsaxon.health;
      }
  
  }

  War.prototype.saxonAttack=function(){
    var v=Math.floor(Math.random()*(this.vikingArmy.length));
    var s=Math.floor(Math.random()*(this.saxonArmy.length));

    var poorviking=this.vikingArmy[v];
    var mysaxon=this.saxonArmy[s];
    var strg=mysaxon.attack();
    var value=poorviking.receiveDamage(strg);
    if(poorviking.health<=0 || this.vikingArmy.length==0){
        this.vikingArmy.splice(poorviking);
        return value;
    }else {
        return value;
    }
}

War.prototype.showStatus=function(){
    if(this.vikingArmy.length==0 && this.saxonArmy.length!=0 ){
        return "Saxons have fought for their lives and survive another day...";
    }else if ( this.vikingArmy.length!=0 && this.saxonArmy.length==0 ) {
        return "Vikings have won the war of the century!"
    }else if(this.vikingArmy.length>=1 && this.saxonArmy.length>=1 ) {
        return "Vikings and Saxons are still in the thick of battle.";
    }else {
        return "Special case to think about";
    }
}
