// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
      this.health = healthArg;
      this.strength = strengthArg;
  };

  attack(){
    return this.strength;
  }

  receiveDamage(damage){
    this.health = this.health - damage;
  }
};

// Viking
class Viking extends Soldier{
  constructor(nameArg, healthArg, strengthArg) {
    super(healthArg, strengthArg);
    this.name = nameArg;
  };

  receiveDamage(damage){
    this.health = this.health - damage;
    if(this.health > 0){
      return this.name + " has received " + damage+ " points of damage";
    }else{
      return this.name + " has died in act of combat";
    }
  }

  battleCry(){
    return "Odin Owns You All!";
  }

};

// Saxon
class Saxon extends Soldier{
  constructor(healthArg, strengthArg) {
    super(healthArg, strengthArg);
    
  };

  receiveDamage(damage){
    this.health = this.health - damage;
    if(this.health > 0){
      return "A Saxon has received " + damage+ " points of damage";
    }else{
        return "A Saxon has died in combat";
    }
  }
};

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  };

  addViking(viking){
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }

  vikingAttack(){
    if (this.vikingArmy.length > 0 || this.saxonArmy.lentgh > 0){
      let numViking = Math.floor(Math.random() * this.vikingArmy.length);
      let numSaxon = Math.floor(Math.random() * this.saxonArmy.length);

      let result = this.saxonArmy[numSaxon].receiveDamage(this.vikingArmy[numViking].strength);
      
      if (this.saxonArmy[numSaxon].health <= 0){
        this.saxonArmy.splice(numSaxon, 1);
      }
      return result;

    } else {
      return undefined;
    }
  }

  saxonAttack(){
    if (this.vikingArmy.length > 0 || this.saxonArmy.lentgh > 0){
      let numViking = Math.floor(Math.random() * this.vikingArmy.length);
      let numSaxon = Math.floor(Math.random() * this.saxonArmy.length);

      let result = this.vikingArmy[numViking].receiveDamage(this.saxonArmy[numSaxon].strength);
      
      if (this.vikingArmy[numViking].health <= 0){
        this.vikingArmy.splice(numViking, 1);
      }
      return result;

    } else {
      return undefined;
    }
  }


  showStatus(){

    if (this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!";
    } 
    
    if (this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survive another day...";
    } 
    
    return "Vikings and Saxons are still in the thick of battle.";

  }
};