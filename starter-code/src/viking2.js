class Soldier(){
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
class Viking extends Soldier(){
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
     class Saxon extends Soldier(){

          constructor(health, strength){
            super(health,strength);
        }
          receiveDamage(amount){
            if (this.health > 0){
              return `A Saxon has received ${amount} of damage`
            } else {
              return 'A Saxon has died in combat.'
            }

          }
}

//War

  class War() {
      constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
      }
        addViking(theViking){
          this.vikingArmy.push(theViking);
        }
        addSaxon(theSaxon){
          this.saxonArmy.push(theSaxon);
        }

        vikingAttack(){
          let randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
          let randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
          let randomViking = this.vikingArmy[randomVikingIndex];
          let randomSaxon = this.saxonArmy[randomSaxonIndex];
          let result = randomSaxon.receiveDamage(randomViking.attack() )

          if (randomSaxon.health < 1){
            this.saxonArmy.splice(randomSaxonIndex, 1)
          }
            return result;
        }
        
  }