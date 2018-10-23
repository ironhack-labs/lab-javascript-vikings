// Soldier
class Soldier {
  constructor(health,strength) {
    this.health=health;
    this.strength=strength;
  }

  attack(){
    return this.strength;
  }

  receiveDamage(damage){
    this.health-=damage;
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength) {
    super(health, strength);
    this.name=name;
  }
  receiveDamage(damage){
    super.receiveDamage(damage);

    //this.health-=damage;
    return this.health > 0 ? this.name+" has received "+damage+" points of damage" : this.name +" has died in act of combat";
  }

  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier{
  constructor (health, strength) {
    super(health,strength);
  }

  receiveDamage(damage){
    super.receiveDamage(damage);
    //this.health-=damage;
    return this.health > 0 ? "A Saxon has received "+damage+" points of damage" : "A Saxon has died in combat";
  }

}

// War
class War {
  constructor() {
    this.vikingArmy=[];
    this.saxonArmy=[];
  }
 
  addViking(newViking){
    this.vikingArmy.push(newViking);
  }

  addSaxon(newSaxon){
    this.saxonArmy.push(newSaxon);
  }
 
  
   vikingAttack(){
    var saxonNr=Math.floor(Math.random()*this.saxonArmy.length);
    var vikingNr=Math.floor(Math.random()*this.vikingArmy.length);
    var result=this.saxonArmy[saxonNr].receiveDamage(this.vikingArmy[vikingNr].attack());
    if (this.saxonArmy[saxonNr].health<=0) this.saxonArmy.splice(saxonNr,1);
    return result;
  }  
 
  saxonAttack(){
    var saxonNr=Math.floor(Math.random()*this.saxonArmy.length);
    var vikingNr=Math.floor(Math.random()*this.vikingArmy.length);
    var result=this.vikingArmy[vikingNr].receiveDamage(this.saxonArmy[saxonNr].attack());
    if (this.vikingArmy[vikingNr].health<=0) this.vikingArmy.splice(vikingNr,1);

    return result;
  }

  showStatus(){
    if (this.saxonArmy.length<=0) return "Vikings have won the war of the century!"
    if (this.vikingArmy.length<=0) return "Saxons have fought for their lives and survive another day..."
    return "Vikings and Saxons are still in the thick of battle."
  } 
}
