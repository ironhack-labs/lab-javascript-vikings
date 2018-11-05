class Soldier{
  constructor(healthArg, strengthArg){
    this.health = healthArg;
    this.strength = strengthArg;
  }
    attack(){
      return this.strength;
    }
    receiveDamage(amountOfDamage){
      this.health -= amountOfDamage;
    }
}

//Viking
class Viking extends Soldier{
  constructor(theName, theHealth, theStrength){
     // this.health = theHealth
      // this.strength = theStrength
      super(theHealth, theStrength)
      this.name = theName;
  }
      receiveDamage(_amount){
        //super takes .receiveDamage from extended class above to the current class, used if prior code is very long, easier to super than copy,paste or search for//
        super.receiveDamage(_amount);
        if (this.health > 0) {
          return `${this.name} has received ${_amount} of damage in combat`
        } else {
          return `${this.name} has died in the act of combat`
        }
      }
        battleCry() {
          return "Odin Owns You All!"
        }
        //end of class
        
}