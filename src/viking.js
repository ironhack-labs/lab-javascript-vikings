// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength; }

        attack() {
            return this.strength;
        }
        receiveDamage(damage) {
            this.health -= damage;
        }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
      super(health, strength); 
      this.name = name;
      }
    
      receiveDamage(damage) {
        this.health -= damage;
        if (this.health >= 1 ) {
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
    
    receiveDamage(damage) {
      this.health -= damage;
      if (this.health >= 1 ) {
        return `A Saxon has received ${damage} points of damage`;
      } else {
        return "A Saxon has died in combat";
      }
    }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = []; }

  addViking(Viking){
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon){
    this.saxonArmy.push(Saxon);
  }
  vikingAttack(){
    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[saxonIndex];
    const vikingIndex = Math.floor(Math.random() * this.saxonViking.length);
    const randomViking = this.vikingArmy[vikingIndex];
    const vikingStrength = randomViking.attack();
    randomSaxon.receiveDamage(vikingStrength);
    if (randomSaxon.health) {
      return  
    }
    randomSaxon.splice(this.saxonArmy); {
    return randomSaxon.receiveDamage(this.health -= randomViking.vikingStrength);
   }
    
  }

  saxonAttack(){}
  showStatus(){}
}
