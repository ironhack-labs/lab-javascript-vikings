// Soldier
class Soldier {
    constructor (health, strength) {
      this.health = health
      this.strength = strength
     } 
    
     attack(){
       return Soldier.strength = this.strength
    }
    receiveDamage(damage){
         this.health -= damage
    }
  
  } 


     
  

// Viking
class Viking extends Soldier {

    constructor(name, health, strength) {
        super(health, strength)
        this.name = name



    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health === 0) {
            return `${this.name} has died in act of combat`;
        } else if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;

        }


    }

    battleCry() {

        return 'Odin Owns You All!'

    }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength){
    super(health, strength)
    }
    attack(){
      return Saxon.strength = this.strength
    }
    receiveDamage(damage) {
      this.health -= damage;
      if (this.health === 0){
        return "A Saxon has died in combat"
      } else if (this.health > 0){
        return `A Saxon has received ${damage} points of damage`;
      }
  }


   
}
// War
class War {
  constructor(){
    this.vikingArmy =[]
    this.saxonArmy =[]
  }
  addViking(Viking) {
    this.vikingArmy.push(Viking)

  }
  addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
  }

  vikingAttack(){
    this.vikingArmy.forEach((elem, i)=>{
       
       this.vikingAr[i].strength = this.saxonArmy[i].health;
       if (this.vikingArmy[i] === 0) {
         this.vikingArmy.splice(i, 1)
       }
       
    })

    console.log(this.vikingArmy);
  }
  saxonAttack() {
    this.saxonArmy.forEach((elem, i)=>{
      
      this.saxonArmy[i].strength = this.vikingArmy[i].health 
      if (this.saxonArmy[i] === 0){
        this.saxonArmy.splice(i, 1)
      }

    })

    console.log(this.saxonArmy);
}
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
