// Soldier
class Soldier {
  constructor(health, strength){
  this.health = health;
  this.strength = strength;
}
attack (){
  return this.strength;
}
receiveDamage (damage) {
  this.health = this.health - damage;
}
}

// Viking
class Viking extends Soldier {
  constructor(n, health, strength){
    super (health, strength);
    this.name = n;
  }
  attack (){
    return this.strength;
  }
  receiveDamage (damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage"}
      else {return this.name + " has died in act of combat"}
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}



// // Saxon
class Saxon extends Soldier {
  constructor(health, strength){
    super (health, strength);
  }
    attack (){
      return this.strength;
    }
  receiveDamage (damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage"}
      else {return "A Saxon has died in combat"}
  }
}

// // War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking){
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon){
    this.saxonArmy.push(Saxon);
  }

vikingAttack(){
  var rndViking=Math.floor(Math.random()*this.vikingArmy.lentgh +1);
  var rndSaxon=Math.floor(Math.random()*this.vikingArmy.lentgh +1);
  var result=this.saxonArmy[rndSaxon].receiveDamage(this.vikingArmy[rndViking].strength);
  if (this.saxonArmy[rndSaxon].health<=0){
  this.saxonArmy.splice(rndSaxon,1);}
  return result;
}
saxonAttack(){
  var rndViking=Math.floor(Math.random()*this.vikingArmy.lentgh);
  var rndSaxon=Math.floor(Math.random()*this.vikingArmy.lentgh);
  var result=this.vikingArmy[rndViking].receiveDamage(this.saxonArmy[rndSaxon].strength);
   if (this.vikingArmy[rndViking].health<=0){
   this.vikingArmy.splice(rndViking,1);}
   return result;
  }



 showStatus() {
  if (this.vikingArmy.length<=0) {
    return "Saxons have fought for their lives and survive another day.."};
  if (this.saxonArmy.length<=0) {
    return "Vikings have won the war of the century!"};
  return "Vikings and Saxons are still in the thick of battle.";
  }
}





