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
  }

}

// Saxon
function Saxon() {}

// War
function War() {}
