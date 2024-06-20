// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
     super(health, strength);
     this.name = name; 
    }
    receiveDamage(damage) {
      super.receiveDamage (damage);
        if(this.health > 0) {
          return `${this.name} has received ${damage} points of damage`;
        } else {
          return `${this.name} has died in act of combat`;
        }
       }
    battleCry() {
      return "Odin Owns You All!";
    }  
}

// Saxon
class Saxon extends Soldier {
    constructor (health, strength) {
    super(health, strength);
    }
    receiveDamage(damage){
      this.damage = damage;
      this.health -= this.damage; 
      if(this.health > 0) {
        return `A Saxon has received ${damage} points of damage`;
       } else {
        return `A Saxon has died in combat`;
        }
       }
    }


// War
class War {
  constructor() {
    this.vikingArmy = []; 
    this.saxonArmy = [];  
   }

  addViking(Viking) {
    this.vikingArmy.push(Viking); 
   }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);  
   } 


  vikingAttack(){
    
    const randomNumber = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomNumber];
    const vikingAttack = this.Viking.strength;
    const attackResult = randomSaxon.receiveDamage(vikingAttack);

      if(randomSaxon.health <= 0){
        this.saxonArmy.splice(randomNumber, 1);   
        }

      return attackResult;
  }

  saxonAttack(){

    const randomNumber = Math.floor(Math.random() * this.vikingArmy.length);
    const randomViking = this.vikingArmy[randomNumber];
    const saxonAttack = this.saxon.strength;
    const attackResult = randomViking.receiveDamage(saxonAttack);

      if(randomViking.health <= 0){
        this.vikingArmy.splice(randomNumber, 1)   
        }

      return attackResult
  }

  showStatus(){
    this.name = []
      if(this.name = 0) {
        return `Vikings have won the war of the century!`;
      }

    
    

    

  }
}
