// Soldier
class Soldier {
  constructor(healthParam, strengthParam) {
    this.health = healthParam;
    this.strength = strengthParam;
  }
  attack = () => {
    return this.strength
  }
  receiveDamage = (theDamage) => {
    this.health = this.health - theDamage
  }
}

// Viking
class Viking extends soldier {
  constructor(nameParam,healthParam,strengthParam){
    super(healthParam , strengthParam);
    this.nameParam = Viking
  }
  attack = () => {
    return  this.strength
  }
  receiveDamage = (theDamage) => {
    this.health = this.health - theDamage;

    if(this.health > 0){
      return`${this.nameParam} has received ${theDamage} points of damage`
    }else{
      return `${this.nameParam} has die in act of combat`
    }
  }
  battleCry= () =>{
    return `Odin owns your all`
  }

}
  



// Saxon
class Saxon extends Soldier {
  receiveDamage = (theDamage) => {
    this.health = this.health - theDamage;

    if(this.health > 0){
      return`A sajon has received ${theDamage} points of damage`
    }else{
      return `A sajon has died in combat`
    }
  }


}

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
