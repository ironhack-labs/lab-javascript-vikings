// Soldier

class Soldier {

    constructor(healthArg, strengthArg){
      this.health = healthArg;
      this.strength = strengthArg;

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
      
    constructor(nameArg, healthArg, strengthArg){
      super(healthArg, strengthArg)
    this.name = nameArg;
  }

    attack(){
      super.attack()
      return this.strength;
  }

  receiveDamage(theDamage) {
    this.health -= theDamage;
    
    if(this.health > 0) {
      return this.name + " has received " + theDamage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
    }
    battleCry() {
        return "Odin Owns You All!";
      }
  }


// Saxon

class Saxon extends Soldier {
      
    constructor(healthArg, strengthArg){
      super(healthArg, strengthArg)
  }
    attack(){
    super.attack()
    return this.strength;
}
  receiveDamage(theDamage) {
    this.health -= theDamage;
    if(this.health > 0) {
      return "A Saxon has received " + theDamage + " points of damage";
    } else {
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
      this.vikingArmy.push(viking);
    }
     addSaxon(saxon) {
      this.saxonArmy.push(saxon);
    }
    vikingAttack(){
      let randomSaxon = Math.floor((Math.random() * this.saxonArmy.length));
      let randomVik = Math.floor((Math.random() * this.vikingArmy.length));
      this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomVik].strength);
  
      for (var i = 0; i < this.saxonArmy.length; i += 1) {
      if(this.saxonArmy[randomSaxon].health <= 0) {
        this.saxonArmy.splice(randomSaxon, 1);
        return `A Saxon has died in combat` 
    } else {
      return this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomVik].strength);
      }
      }
    }
  
    saxonAttack(){
        let randomVik = Math.floor((Math.random() * this.vikingArmy.length));
        let randomSaxon = Math.floor((Math.random() * this.saxonArmy.length));
        let randomVikName = this.vikingArmy[randomVik].name;
    
        this.vikingArmy[randomVik].receiveDamage(this.saxonArmy[randomSaxon].strength);
    
        if(this.vikingArmy[randomVik].health <= 0) {
          this.vikingArmy.splice(randomVik, 1);
          
          return `${randomVikName} has died in act of combat`;
        }
    
          return `${randomVikName} has received ${this.saxonArmy[randomSaxon].strength} points of damage`;
      }
      showStatus(){
        if(this.saxonArmy.length === 0) {
          return "Vikings have won the war of the century!"
        } else if(this.vikingArmy.length === 0) {
          return "Saxons have fought for their lives and survive another day..."
        } else if(this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
          return "Vikings and Saxons are still in the thick of battle."
        }
      }
    }
