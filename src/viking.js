// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name,health, strength,){
        super (health, strength)
        this.name = name;
    }

    receiveDamage(damage){
        this.health -= damage;
        const isAlife = this.health > 0;
        if(isAlife){
        return `${this.name} has received ${damage} points of damage`;
        } else{ 
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry(){
        return "Odin Owns You All!"
    }
    

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
      this.health -= damage;
  
      const isAlive = this.health > 0;
  
      if (isAlive) {
        return `A Saxon has received ${damage} points of damage`;
      }
  
      return `A Saxon has died in combat`;
    }
  }

// War
class War {
    constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
    }  
    
    addViking(viking){
        this.vikingArmy.push(viking);  
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);  
    }

    // Armies Attack

    vikingAttack() {
        if (this.vikingArmy.length && this.saxonArmy.length) {
          const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
          const randomVikingIndex = Math.floor(
            Math.random() * this.vikingArmy.length
          );
          const viking = this.vikingArmy[randomVikingIndex];
          const saxon = this.saxonArmy[randomSaxonIndex];
      
          const attack = saxon.receiveDamage(viking.attack());
      
          const isSaxonAlive = saxon.health > 0;
      
          if (!isSaxonAlive) {
            this.saxonArmy = this.saxonArmy.filter((_, i) => i !== randomSaxonIndex);
          }
      
          return attack;
        }
      }
    
      saxonAttack() {
        if (this.vikingArmy.length && this.saxonArmy.length) {
            const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
            const randomVikingIndex = Math.floor(
              Math.random() * this.vikingArmy.length
            );
            const viking = this.vikingArmy[randomVikingIndex];
            const saxon = this.saxonArmy[randomSaxonIndex];
        
            const attack = viking.receiveDamage(saxon.attack());
        
            const isVikingAlive = viking.health > 0;
        
            if (!isVikingAlive) {
              this.vikingArmy = this.vikingArmy.filter(
                (_, i) => i !== randomVikingIndex
              );
            }
        
            return attack;
        } 
       
      }

      showStatus() {
        if (!this.saxonArmy.length) {
          return "Vikings have won the war of the century!";
        } else if (!this.vikingArmy.length) {
          return "Saxons have fought for their lives and survived another day...";
        } else {
          return "Vikings and Saxons are still in the thick of battle.";
        }
      }
    }
    




