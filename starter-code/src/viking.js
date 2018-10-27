/******** SOLDIER ********/

function Soldier(health, strength) {
    this.health=health;
    this.strength=strength;
}
/* Creamos los prototipos fuera de la clase, para no crearlos cada vez que referenciemos al padre */

Soldier.prototype.attack= function(){
    return this.strength;
}
Soldier.prototype.receiveDamage= function(damage){
    this.health=this.health-damage;
}

/***** VIKING ******/

function Viking(name,health, strength) {
    Soldier.call(this,health,strength);
    this.name=name;
    this.battleCry= function(){
        return "Odin Owns You All!";
    }
}

/*Heredamos los prototype del padre, y lo desreferenciamos del mismo*/

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage= function(damage){

    this.health=this.health-damage;
    if(this.health>0) return `${this.name} has received ${damage} points of damage`
    return `${this.name} has died in act of combat`;
}


// Saxon
function Saxon(health, strength) {
    Soldier.call(this,health,strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage= function(damage){

    this.health=this.health-damage;
    if(this.health>0) return `A Saxon has received ${damage} points of damage`
    return `A Saxon has died in combat`;
}

// War
function War() {
    War.prototype.vikingArmy=[];
    War.prototype.saxonArmy=[];
}
War.prototype.addViking= function(vikingObjet){
  War.prototype.vikingArmy.push(vikingObjet);
}
War.prototype.addSaxon= function(saxonObjet){
    War.prototype.saxonArmy.push(saxonObjet);
}
War.prototype.vikingAttack= function(){
  var vickingRandom=War.prototype.vikingArmy[Math.floor( Math.random()*War.prototype.vikingArmy.length)];
  var saxonRandom=War.prototype.saxonArmy[Math.floor(Math.random()*War.prototype.saxonArmy.length)];
  var resultOfRexiveDamage=saxonRandom.receiveDamage(vickingRandom.strength);
  if(saxonRandom.health<=0){
    War.prototype.saxonArmy.pop(saxonRandom);
    return resultOfRexiveDamage;
  }
  return resultOfRexiveDamage;

}
War.prototype.saxonAttack= function(){
    var vickingRandom=War.prototype.vikingArmy[Math.floor( Math.random()*War.prototype.vikingArmy.length)];
    var saxonRandom=War.prototype.saxonArmy[Math.floor(Math.random()*War.prototype.saxonArmy.length)];
    var resultOfRexiveDamage=vickingRandom.receiveDamage(saxonRandom.strength);
    if(vickingRandom.health<=0){
      War.prototype.vikingArmy.pop(vickingRandom);
      return resultOfRexiveDamage;
    }
    return resultOfRexiveDamage;
}
War.prototype.showStatus= function(){
    if(War.prototype.saxonArmy.length===0){
        return "Vikings have won the war of the century!";
    }else if(War.prototype.vikingArmy.length===0){
        return "Saxons have fought for their lives and survive another day..."
    }else{
        return "Vikings and Saxons are still in the thick of battle.";
    }
  
}