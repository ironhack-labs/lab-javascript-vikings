// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack(){
    return this.strength;
  }

  receiveDamage(theDamage){
    this.health -= theDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health,strength);
    this.name = name;
  }
  receiveDamage(theDamage){
    // this.health -= theDamage;
    super.receiveDamage(theDamage);
    if(this.health > 0){
      return `${this.name} has received ${theDamage} points of damage`;
    }
    else{
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health,strength){
    super(health,strength);
  }
  receiveDamage(theDamage){
    // this.health -= theDamage; dont need to rewrite use line below instead
    super.receiveDamage(theDamage);
    if(this.health > 0){
      return `A Saxon has received ${theDamage} points of damage`;
    }
    else{
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(vikingObj){
    this.vikingArmy.push(vikingObj);
  }

  addSaxon(saxonObj){
    this.saxonArmy.push(saxonObj);
  }

  vikingAttack(){
    let chooseSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let chooseViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let result = chooseSaxon.receiveDamage(chooseViking.attack());
    // if Saxon dies (health <= 0) remove from this.saxonArmy (saxonArmy.splice)
    if(chooseSaxon.health <= 0){
      this.saxonArmy.splice( this.saxonArmy.indexOf(chooseSaxon), 1);
    }
    // return the string from .receiveDamage();
    return result; 
  
  
  }

  saxonAttack(){
    let chooseSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let chooseViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let result = chooseViking.receiveDamage(chooseSaxon.attack());
    // if Saxon dies (health <= 0) remove from this.saxonArmy (saxonArmy.splice)
    if(chooseViking.health <= 0){
      this.vikingArmy.splice( this.vikingArmy.indexOf(chooseViking), 1);
    }
    // return the string from .receiveDamage();
    return result; 



    return result;
  }

  showStatus(){
    if(this.saxonArmy.length === 0){
      return 'Vikings have won the war of the century!';
    }
   else if(this.vikingArmy.length === 0){
      return `Saxons have fought for their lives and survive another day...`;
    }
    else{
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
  
}
