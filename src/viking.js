// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength
  }
  receiveDamage(damage) {
    this.health=this.health - damage
  }
};

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(strength);
    this.name = name;
    this.health = health;
    this.strength=strength;   
  }  

  attack() {
    return this.strength 
  }
  receiveDamage(damage) {
    var newHealth= this.health-=damage;          
       if (newHealth > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`;
    }
  };
  battleCry(){
      return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
    constructor(health,strength){
        super(strength);
        this.health=health;
        this.strength=strength;        
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
      var newHealth= this.health-=damage;          
       if (newHealth > 0) {
        return `A Saxon has received ${damage} points of damage`;
    } else {
        return "A Saxon has died in combat";
    }
  }
}

// War
class War {
    constructor(){
        this.vikingArmy=([]);
        this.saxonArmy=([]);
    }
    addViking(viking){      
        this.vikingArmy.push(viking);
        }

    addSaxon(saxon){
        
         this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        let oldHealth=soxon.health
              }
          

//     saxonAttack(){
//       let oldHealth = JSON.parse(JSON.stringify(viking.health))
//         this.vikingArmy.forEach((newHealth2) => oldHealth -= viking.strength){
//             if (newHealth2>0){
//               return war.vikingArmy.length-=1
//             }else{
//               return `${viking.name} has received ${saxon.strength} points of damage`;
//             }
//             }
//         }; 
//       }
    
// 
//        
   }

