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
        this.health -= damage
    }
    
  }

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name 
    }
   attack() {
    return this.strength
   }
   receiveDamage(damage){
    this.health -= damage
    if (this.health > 0 ) {
        return `${this.name} has received ${damage} points of damage`
    } else {
        return `${this.name} has died in act of combat`
    }
   }
   battleCry() {
    return "Odin Owns You All!"
}
}


// Saxon
class Saxon extends Soldier {
   receiveDamage(damage){
    this.health -= damage
    if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`
    } else {
        return `A Saxon has died in combat`
    }
   }
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = [] 
    }
    addViking(vikingObj){
        this.vikingArmy.push(vikingObj)
    }
    addSaxon(saxonObj) {
        this.saxonArmy.push(saxonObj)
    }

    vikingAttack(){
        let randomVikingAttacker = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let randomSanxoVictim = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        
        let damage = randomSanxoVictim.receiveDamage(randomVikingAttacker.strength);  
         

        if (randomSanxoVictim.health <= 0 ) {
            this.saxonArmy.splice(randomSanxoVictim.length, 1)
        }
        return damage

    
    }

    saxonAttack(){
        let randomSaxonAttacker = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let randomVikingVictim = this.vickingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        
        let damage = randomVikingVictim.receiveDamage(randomSaxonAttacker.strength);  
         

        if (randomVikingVictim.health <= 0 ) {
            this.vikingArmy.splice(randomVikingVictim.length, 1)
        }
        return damage
    }
    showStatus() {
      if (this.saxonArmy.length > 0) {
         return `Vikings have won the war of the century!`
      } else if(this.vikingArmy.lastIndexOf) {

      }
    }
    
}
