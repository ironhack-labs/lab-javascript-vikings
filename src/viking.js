// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength 
     //should return the strength property of the Soldier
  }
  receiveDamage(damage){
     this.health = this.health - this.damage //should remove the received damage from the health property
     //no returns

  }

}


// Viking
class Viking extends Soldier {
  constructor(name, health, strength){  ///  why is this failing Viking > class
    //should receive the name property as its 1st argument
    //failed
    //0.002s
    
//should receive 3 arguments (name, health & strength)
    super(name, health, strength)
    }
 
    receiveDamage(damage){
      this.health = this.health - this.damage 

      if(this.health > 0){
        return `${this.name} has received ${this.damage} points of damage`
      }
      else {
        return  `${this.name} has died in act of combat`
      }
      //if the Viking is still alive, it should return "NAME has received DAMAGE points of damage"
      //if the Viking dies, it should return "NAME has died in act of combat"

    }
    battleCry(){
      return "Odin Owns You All!" // no arguments only a return

    }


  }




// Saxon
class Saxon extends Soldier{
  constructor(name, health, strength){
    super(name, health, strength)
    } 

    receiveDamage(damage){
      this.health = this.health - this.damage 
      if(this.health > 0 ){
        return `A Saxon has received ${this.damage} points of damage`
      }
      else  {
        return  "A Saxon has died in combat"
      }
      //if the Saxon is still alive, it should return "A Saxon has received DAMAGE points of damage"
     //if the Saxon dies, it should return "A Saxon has died in combat"

    }

  }


/*
  // War
  class War {
    this.vikingArmy=[]
    this.saxonArmy=[] 

  addViking(vikingArmy){

    for(i=0;i<=10;i++)
      {
        this.vikingArmy.push(Viking())
        //not returning
      }

  }

  addSaxon(saxonArmy){
    for(i=0;i<=10;i++)
      {
        this.saxonArmy.push(Saxon())
        //not returning
      }
    
  }

  vikingAttack(){
// saxson army -  health == 0
//Saxon.receiveDamage() =  Viking.strength  // viking army the wording for this is funny 
    return Saxon.receiveDamage() + 

  }

  saxonAttack(){

  }

  showStatus(){

  }

}
*/
  // War
  class War {}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
