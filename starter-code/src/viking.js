// Soldier
class Soldier  {
  constructor (health, strength){
    this.health= health;
    this.strength= strength;
  }
  attack(){
    return this.strength;
  }
  receiveDamage(theDamage){
   this.health= this.health- theDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health,strength){
    super(health,strength); // calls the info from soldier
    this.name=name;
    // this.health=health;
    // this.strength=strength; DON'T REWRITE IT BC YOU ARE CALLING IT FROM SOLDIER
  }
  attack(){
    return this.strength;
  }
  receiveDamage(theDamage){
    this.health=this.health - theDamage;
    if (this.health > 0){
      return this.name + " has received " + theDamage + " points of damage"
    }
    else {
      return this.name + " has died in act of combat"
    }
  }
  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier{
  constructor(health,strength){
    super (health,strength)
  }
  attack(){
    return this.strength;
  }
  receiveDamage(theDamage){
    this.health = this.health- theDamage;
    if (this.health > 0){
      return "A Saxon has received " + theDamage + " points of damage"
    }
    else {
      return "A Saxon has died in combat"
    }
  }
}
// War
class War {
  constructor(){
    this.vikingArmy=[];
    this.saxonArmy=[];
  }
  addViking(Viking){
   this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon){
    this.saxonArmy.push(Saxon);
  }
  vikingAttack(){
    let randomSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ]
    let randomViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ]
    randomSaxon.receiveDamage(randomViking.strength);

    if(randomSaxon.health<0){
    this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon),1);
    return "A Saxon has died in combat"
      }
    }
  saxonAttack(){
    let randomSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ]
    let randomViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ]
    randomViking.receiveDamage(randomSaxon.strength);

    if(randomViking.health<=0){//bc you are also accounting for the amount of damage not just if they died
    this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking),1);
    // return randomViking.name + " has received " + randomSaxon.strength + " points of damage" --> has to be outside of if function
      }
      return randomViking.name + " has received " + randomSaxon.strength + " points of damage"
    }   
  showStatus(){
    if(this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!"
    }
    if (this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survive another day..."
    }
    else{
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}
  
  

