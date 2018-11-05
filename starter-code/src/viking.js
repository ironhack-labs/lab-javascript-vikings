// Soldier
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

// Viking
class Viking extends Soldier {
  constructor(theName, theHealth, theStrength){
      // this.health = theHealth
      // this.strength = theStrength
      super(theHealth,theStrength)
      this.name = theName;
      }
      receiveDamage(amount){
        //super takes .receiveDamage from extended class above to the current class, used if prior code is very long, easier to super than copy,paste or search for//
        super.receiveDamage(amount);
        if(this.health > 0){
          return `${this.name} has received ${amount} points of damage`
        } else {
          return `${this.name} has died in act of combat`
        
      }
    
  }

        battlecry(){
          return "Odin Owns You All!"
        }
        //end class

// Saxon
class Saxon extends Soldier{

  constructor(health, strength){
      super(health, strength);
      //call parent's constructor and it works//

    }
    receiveDamage(amount){
        super.receiveDamage(amount);

        if(this.health > 0){
          return "A Saxon has received ${amount} points of damage"
        } else {
          return 'A Saxon has died in act of combat'
        
      }
   
   
   
      }
}

// War
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

      let result = randomSaxon.receiveDamage(randomViking.attack()  )

        if(randomSaxon.health < 1){
          this.saxonArmy.splice(randomSaxonIndex, 1)
      }
          return result;

    }
    saxonAttack(){
      let randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
      let randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
      let randomViking = this.vikingArmy[randomVikingIndex];
      let randomSaxon = this.saxonArmy[randomSaxonIndex];

      let result = randomViking.receiveDamage(randomSaxon.attack()  )

        // if(randomSaxon.health < 1){
        //   this.saxonArmy.splice(randomSaxonIndex, 1)

    }
          //below, is doing the attack with a loop format
          // this.vikingArmy= this.vikingArmy.filter((eachViking(=>{
            // return eachViking.health > 0;
          
      
      }
          return result;

    }
        showStatus(){
          if(this.saxonArmy.length ===0) {
            return "Vikings have won the war of the century!"
          }
        
          if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survive another day..."
          }
          return "Vikings and Saxons are still in the thick of battle."
        }