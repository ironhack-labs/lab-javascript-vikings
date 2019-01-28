// Soldier
class Soldier{
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack(){
    return this.strength;
  }

  receiveDamage(damage){
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }



  receiveDamage(damage) {
    this.health = this.health - damage;
    if(this.health > 0){
      return this.name + " has received " + damage + " points of damage";
    }
    else {
      return this.name + " has died in act of combat";
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }


}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength){
    super(health,strength);
  }

  receiveDamage(damage){
    this.health = this.health - damage;
    if(this.health > 0){
      return "A Saxon has received " + damage + " points of damage";
    }
    else {
      return "A Saxon has died in combat";
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.viking = new Viking(this.name, this.health, this.strength);
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxon = new Saxon(this.health, this.strength);
    this.saxonArmy.push(saxon);
  }

  vikingAttack(){
    this.attViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    this.attSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
   
    this.newHealth = this.attSaxon.receiveDamage(this.attViking.strength);
    if (this.newHealth == "A Saxon has died in combat"){
      this.saxonArmy.splice(this.saxonArmy.indexOf(this.attSaxon),1);
    }
    return this.newHealth;
  }

  saxonAttack(){
    this.attViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    this.attSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
   
    this.newHealth = this.attViking.receiveDamage(this.attSaxon.strength);
    if (this.newHealth.includes("has died")){
      this.vikingArmy.splice(this.vikingArmy.indexOf(this.attViking),1);
    }
    return this.newHealth;
  }

  showStatus(){
    if(this.saxonArmy.length == 0){
      return "Vikings have won the war of the century!";
    }
    else if(this.vikingArmy.length == 0){
      return "Saxons have fought for their lives and survive another day...";
    }
    else {
      return "Vikings and Saxons are still in the thick of battle.";  
    }
  }
}

