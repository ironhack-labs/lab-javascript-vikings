// Soldier
class Soldier {
  constructor (healthArg, strengthArg)  {
    this.health = healthArg;
    this.strength = strengthArg;
  }
  
  attack () {
    return this.strength;
  };

  receiveDamage (damageArg) {
    this.health = this.health - damageArg;
  }
}

// Viking
class Viking extends Soldier {

  constructor (name, healthArg, strengthArg) {
    super (healthArg, strengthArg);

    this.name = name;
  }
  
  receiveDamage (damages) {
    super.receiveDamage (damages); 
    
    if (this.health > 0) {
      return  this.name + " has received " + damages + " points of damage";
    } 
    
    else {
      return this.name + " has died in act of combat";
    }
    
  }

  battleCry () {
    return "Odin Owns You All!"
  }
}
    


  

// Saxon
class Saxon extends Soldier {

  constructor (health, strength) {
    super (health, strength);
  }


  receiveDamage (damage) {
    this.health = this.health - damage;

    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage"; 
    }

    else {
      return "A Saxon has died in combat";
    }
  }
}

// War
class War {

  constructor () {
    this.vikingArmy = [];

    this.saxonArmy = [];
  }

 

  addViking (viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon (saxon) {
    this.saxonArmy.push(saxon);
  }
    
  vikingAttack () {
    aViking = new Saxon ;
    receiveDamage (aViking.strength);
  }
}


