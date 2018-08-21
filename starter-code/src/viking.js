// Soldier
class Soldier {
  constructor(healthArg,strengthArg){
    this.health = healthArg;
    this.strength = strengthArg;
  }
  attack(){
    return this.strength;
  };
  receiveDamage(damage){
    this.health -= damage;
  };

}

// // Viking
// class Viking {};
class Viking extends Soldier{
  constructor(vikingName, healthArg, strengthArg){
    super(healthArg, strengthArg)
    this.name = vikingName;
  }
  receiveDamage(damage){
    super.receiveDamage(damage)
    if(this.health > 0){
      return(`${this.name} has received ${damage} points of damage`)
    } 
    else{
      return(`${this.name} has died in act of combat`)
    }
  }

  battleCry(){
    return("Odin Owns You All!");
  }
}



// // Saxon
// class Saxon {};

class Saxon extends Soldier{
  constructor(healthArg, strengthArg){
    super(healthArg, strengthArg)
  }

  receiveDamage(damage){
    super.receiveDamage(damage)
    if(this.health > 0){
      return(`A Saxon has received ${damage} points of damage`)
    } 
    else{
      return(`A Saxon has died in combat`)
    }
  }
}

// // War
class War{
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  // addViking(name){
  // vikingArmy.push(name);  
  // };

  addViking(name){
    this.vikingArmy.push(name);
  }


  addSaxon(name){
    this.saxonArmy.push(name);
  };

  vikingAttack(){
    var randViking = Math.floor(Math.random() * this.vikingArmy.length);

    var randSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    var a = this.saxonArmy[randSaxon].receiveDamage(this.vikingArmy[randViking].strength);
    if (this.saxonArmy[randSaxon].health <= 0){
      this.saxonArmy.splice(randSaxon,1);
    }

    return a;
  }

  saxonAttack(){
    var randViking = Math.floor(Math.random() * this.vikingArmy.length);

    var randSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    var a = this.vikingArmy[randSaxon].receiveDamage(this.saxonArmy[randViking].strength);
    if (this.vikingArmy[randSaxon].health <= 0){
      this.vikingArmy.splice(randSaxon,1);
    }

    return a;

  }

  showStatus(){

    if(this.saxonArmy.length === 0){
      return("Vikings have won the war of the century!");
    }
    else if (this.vikingArmy.length === 0){
      return ("Saxons have fought for their lives and survive another day...");
    }
    else{
      return("Vikings and Saxons are still in the thick of battle.");
    }

  }

}
