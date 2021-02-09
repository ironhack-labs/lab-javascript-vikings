// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
    
  }

  attack() {
    return this.strength;
  }

  receiveDamage(theDamage) {
    this.health -= theDamage;
  }
}

class Viking extends Soldier {
  constructor(name, health, strength) {
    super(name, health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

  receiveDamage(theDamage) {
    super.receiveDamage(theDamage);

    if (theDamage < this.health) {
      return `${this.name} has received ${theDamage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
    this.health= health;
    this.strength=strength;
  }

  receiveDamage(theDamage) {
    super.receiveDamage(theDamage);
    //console.log(this.health, theDamage)
    if (this.health > 0) 
    {
        //console.log(`A Saxon has received ${theDamage} points of damage`)
      return `A Saxon has received ${theDamage} points of damage`;

    } else {
      //console.log("died")
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

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }
       
    addSaxon(Saxon){

        this.saxonArmy.push(Saxon) ;

    }
    vikingAttack(){
        
    }

    saxonAttack(){

    }
    showStatus(){
        

    }
}









