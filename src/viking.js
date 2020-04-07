// Soldier
class Soldier {
constructor(health, strength){
this.health= health;
this.strength=strength;
}
attack(){
return this.strength;
}
receiveDamage(damage){
this.health -= damage;
}
}

// Viking
class Viking extends Soldier {
constructor(name, health, strength){
  super(health, strength);
  this.name=name;
}
attack(){
  return this.strength;
}
receiveDamage(damage){
    this.health -= damage
  return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`
}
battleCry(){
   return 'Odin Owns You All!';
 }
}
// Saxon
class Saxon extends Soldier{
  constructor(health,strength){
    super(health, strength);
  }
  attack(){
    return this.strength;
  }
  receiveDamage(damage){
   this.health -= damage;
   return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
    }
   }

// War
class War {
  constructor(){
  this.vikingArmy=[];
  this.saxonArmy=[];
  }
  addViking(viking){
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }
  vikingAttack(){
  let vikingRandom = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
  let saxonRandom = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
  let attackDamage = saxonRandom.receiveDamage(vikingRandom.strength);

  if(saxonRandom.health <= 0)
  this.saxonArmy.splice(this.saxonArmy.indexOf(saxonRandom, 1));

  return attackDamage;
  }
saxonAttack(){
let saxonRandom = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
let vikingRandom = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
let attackDamage = vikingRandom.receiveDamage(saxonRandom.strength);
 
 if(vikingRandom.health <= 0)
  this.vikingArmy.splice(this.vikingArmy.indexOf(vikingRandom, 1));

return attackDamage;
};
showStatus(){
  if (this.saxonArmy.length===0){
    return "Vikings have won the war of the century!";
  } else if(this.vikingArmy.length===0){
    return "Saxons have fought for their lives and survived another day...";
  }else{
   return  "Vikings and Saxons are still in the thick of battle.";
  }
};
};

