// Soldier
class Soldier {
  constructor(health, strength) { //Comes in from Viking
  this.health=health;
  this.strength=strength;
  }
attack() {
  return this.strength
}
receiveDamage(damage) {
  this.health-=damage
}
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength);// Goes up to solider. 
    this.name=name;

  }
  receiveDamage(damage){
    this.health -= damage;
    if(this.health<1){
      return `${this.name} has died in act of combat`
    
    }else 
    return `${this.name} has received ${damage} points of damage`
  }
  battleCry(){
    return "Odin Owns You All!"
  }
  }
  
// Saxon
class Saxon extends Soldier {
  constructor(health, strength){
  super(health, strength);
  }
  receiveDamage(damage){
    this.health -= damage;
if(this.health<1){
  return `A Saxon has died in combat`

}else 
return `A Saxon has received ${damage} points of damage`
}
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack(){
  let randomViking = Math.floor(Math.random()*this.vikingArmy.length);
  let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
  let randomVikingAny = this.vikingArmy[randomViking].strength;
  let randomSaxonAny = this.saxonArmy[randomSaxon];
  let damage = randomSaxonAny.receiveDamage(randomVikingAny);
  if (randomSaxonAny.health <= 0) {
    this.saxonArmy.splice(randomSaxonAny, 1);
  } 
  return damage;
  }


  saxonAttack(){
  let randomViking = Math.floor(Math.random()*this.vikingArmy.length);
  let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
  let randomSaxonAny = this.saxonArmy[randomSaxon].strength;
  let randomVikingAny = this.vikingArmy[randomViking];
  let damage = randomVikingAny.receiveDamage(randomSaxonAny);
  if (randomVikingAny.health <= 0) {
    this.vikingArmy.splice(randomVikingAny, 1);
  } 
  return damage;
  }
  
  showStatus(){
    if (this.saxonArmy==0){
      return "Vikings have won the war of the century!"
    }else if (this.vikingArmy==0){
    return "Saxons have fought for their lives and survive another day..."
  } else {
  return "Vikings and Saxons are still in the thick of battle."
  }
}
} 
  

