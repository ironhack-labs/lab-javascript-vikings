// Soldier
class Soldier {
  constructor (health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack(){
    
    return this.strength;
  }

  receiveDamage(damage){
    
  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength){
    super(health, strength);
    this.name = name;
    
  }
    receiveDamage(Damage){

    }

    battleCry(){
      return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
  constructor (health, strength){ 
    super(health, strength)
  }
    attack(){
      return this.strength;
    }

    receiveDamage(Damage){
      
      
    }
}

// War
class War {
  constructor (){
      
    this.vikingArmy = [];
    this.saxonArmy = []
  }
  
    addViking(Viking){
      this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon){
      this.saxonArmy.push(Saxon)
    }
    vikingAttack(){

    }
    saxonAttack(){

    }
    shgowStatus(){
       

    }


}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
