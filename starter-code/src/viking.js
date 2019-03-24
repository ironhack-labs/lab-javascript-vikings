// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
    console.log(Soldier.health)
  }

  attack(){
    return this.strength;
  }

  receiveDamage(damage){
    this.health =  this.health - damage;
  }



}
// Viking
class Viking extends Soldier {
  constructor (name, health, strength) {
    super(health, strength);
    this.name = name;

  }
  receiveDamage(damage) {
    this.health =  this.health - damage;
    if (this.health>0){
      return (this.name + " has received " + damage + " points of damage");
    }

    if (this.health <= 0){
      return (this.name + " has died in act of combat");
    }

  }

  battleCry(){
    return "Odin Owns You All!";

  }
}

// Saxon
class Saxon extends Soldier {
  constructor (health, strength){
    super(health, strength);
  }

  receiveDamage(damage){
    this.health =  this.health - damage;
    if (this.health>0){
      return ("A Saxon has received " + damage + " points of damage");
    }

    if (this.health <= 0){
      return ("A Saxon has died in combat");
    }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(newViking){
    this.vikingArmy.push(newViking);
  }

  addSaxon(newSaxon){
    this.saxonArmy.push(newSaxon);
  }

  vikingAttack(){
    var positionRandomViking=Math.floor(Math.random()*this.vikingArmy.length);
    var viking = this.vikingArmy[positionRandomViking];
    var positionRandomSaxon  =Math.floor(Math.random()*this.saxonArmy.length);
    var saxon = this.saxonArmy[positionRandomSaxon];

    var damageRecive = saxon.receiveDamage(viking.strength)
   if (saxon.health <= 0){
     this.saxonArmy.splice(positionRandomSaxon, 1);
   }
    return damageRecive;

  }

  saxonAttack(){
    var positionRandomViking = Math.floor(Math.random()*this.vikingArmy.length);
    var viking = this.vikingArmy[positionRandomViking];
    var positionRandomSaxon = Math.floor(Math.random()*this.saxonArmy.length)
    var saxon = this.saxonArmy[positionRandomSaxon];

    var damageRecive = viking.receiveDamage(saxon.strength)
    if (viking.health <= 0){
      this.vikingArmy.splice(positionRandomViking, 1);
    }
    return damageRecive;
  }

  showStatus(){

    if (this.vikingArmy.length === 0) 
      return ("Saxons have fought for their lives and survive another day...")

    if (this.saxonArmy.length === 0) 
      return ("Vikings have won the war of the century!");

    return ("Vikings and Saxons are still in the thick of battle.");
  
  }
}
