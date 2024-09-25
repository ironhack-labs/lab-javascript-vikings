// Soldier
class Soldier {
    constructor(health,strength){
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }
    receiveDamage (damage){
        this.health -= damage;
        
    }

}

// Viking
class Viking extends Soldier{
    constructor(name,health,strength){
        super(health,strength);
        this.name = name;
        
    }
    receiveDamage(damage){
    this.health -= damage;
    if (this.health > 0){
        return `${this.name} has received ${damage} points of damage`;
    } else if (this.health < damage) {
        return `${this.name} has died in act of combat`;
    }

    }
    battleCry (){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health,strength){
        super(health,strength);
        
        
    }
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        } else if (this.health < damage) {
            return "A Saxon has died in combat";
        }

    }

}

// War
class War {
    
    constructor (){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking){
        this.vikingArmy.push(viking);

    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon); 

    }
    attack (attackerArray, victimArray){
        let attacker = attackerArray[Math.floor(Math.random()*attackerArray.length)];
        let victim = victimArray[Math.floor(Math.random()*victimArray.length)];
        const result = victim.receiveDamage(attacker.strength);
       
  
        
  
        if (victim.health <= 0) {
          victimArray.splice(victimArray.indexOf(victim),1);
        }
        
        return result;
    }
    
      vikingAttack(){
        return this.attack (this.vikingArmy, this.saxonArmy)
      }
      saxonAttack(){
        return this.attack (this.saxonArmy,this.vikingArmy)
      }

    //vikingAttack(){
    //   const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    //   const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    //   const result = randomSaxon.receiveDamage(randomViking.strength);
     

      

    //   if (randomSaxon.health <= 0) {
    //     this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon),1);
    //   }
      
    //   return result
    //}
    //saxonAttack(){
    //     const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    //     const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    //     const result = randomViking.receiveDamage(randomSaxon.strength);
       
  
        
  
    //     if (randomViking.health <= 0) {
    //       this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking),1);
    //     }
        
    //     return result

    // }
    showStatus(){
        if (this.saxonArmy.length <= 0){
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy <= 0){
            return "Saxons have fought for their lives and survived another day..."
        } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1){
            return "Vikings and Saxons are still in the thick of battle."
        }
        
    }
}
