
// // Saxon
// function Saxon() {}

// War
// function War() {}


 //Soldier
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


//Viking
class Viking extends Soldier {
 constructor(name, health, strength) {
     super(name,health,strength)
     this.name = name;
     this.health = health;
     this.strength = strength;
 }

 receiveDamage(theDamage) {
     this.health -= theDamage;
     if(this.health > 0) {
         return `${this.name} has received ${theDamage} points of damage`
     } else {
         return `${this.name} has died in act of combat`;
     }
 }

battleCry() {
    return "Odin Owns You All!";
}

}


//Saxon 


// class Saxon extends Solider{
//     constructor(health, strength) {
//         super(health, strength)
//     }

//     receiveDamage(theDamage) {
//         this.health -= theDamage;
//         if(this.health > 0) {
//             return `A Saxon has received ${theDamage} points of damage`;
//         } else {
//             return `A Saxon has died in combat`;
//         }
//     } 
// }

class Saxon extends Soldier{
    constructor(health, strength){
      super(health, strength)
    }
    receiveDamage(damage) {
      this.health -= damage;
      if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`
      } 
      if (this.health <= 0){
        return `A Saxon has died in combat`
      }
    };
  }

  class War {
      constructor() {
          this.vikingArmy = [];
        this.saxonArmy = [];
      }

      addViking(axe) {
    this.vikingArmy.push(axe)
      }
addSaxon(sword) {
    this.saxonArmy.push(sword)
}
    vikingAttack() {
    let fightingViking = this.vikingArmy[Math.floor(Math.random()*(this.vikingArmy.length))];
    let saxonIndex = Math.floor(Math.random()*(this.saxonArmy.length));
    let fightingSaxon = this.saxonArmy[saxonIndex];
    fightingSaxon.receiveDamage(fightingViking.strength);   
    if(fightingSaxon.health <= 0) {
        this.saxonArmy.splice(saxonIndex,1);
        return "A Saxon has died in combat"
    } else {
        return  `A Saxon received ${fightingViking.strength} damage in combat`;
    }

    }

    saxonAttack() {
        let vikingIndex = Math.floor(Math.random()*(this.vikingArmy.length));
        let fightingViking = this.vikingArmy[vikingIndex];
        let fightingSaxon = this.saxonArmy[Math.floor(Math.random()*(this.saxonArmy.length))];
        fightingViking.receiveDamage(fightingSaxon.strength);
        if(fightingViking.health <= 0) {
            this.vikingArmy.splice(vikingIndex,1);
            return "Viking has died in combat";
        } else {
            return `${fightingViking.name} has received ${fightingSaxon.strength} points of damage`;
        }
    }

    showStatus() {
    if(this.saxonArmy < 1) {
        return "Vikings have won the war of the century!";  
    } else if(this.vikingArmy < 1) {
        return "Saxons have fought for their lives and survive another day...";
    }    else if(this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
    return "Vikings and Saxons are still in the thick of battle.";

    }
    
  }}