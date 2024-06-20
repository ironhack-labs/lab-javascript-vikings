// Soldier
class Soldier {

    constructor (health, strength){
    this.health=health;
      this.strengh=strength;
    }
    
      attack(){
        return Solder.this.strengh;
      }
    
      receiveDamage(damage) {
        this.health -= damage;
      }
    }
    // Viking
    class Viking extends Soldier {
    constructor (name, health, strength){
      super (health, strength);
      this.name = name;
    }
    
      receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0 && this.strength >0){
          return `${this.name} has received points of ${damage}.`;
        } else {
         return `${this.name} has died in act of combat.`;
        }
      }
    
        battleCry() {
          return "Odin Owns You All!"
        }
    }
    
    // Saxon
    class Saxon extends Soldier {
    
      receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0 && this.strength >0){
          return `A Saxon has received ${damage} points of damage.`;
        } else {
         return `A Saxon has died in act of combat.`;
        }
      }
    
    }
    
    // War
    class War {
    
      constructor() {
    this.vikingArmy = [];
        this.saxonArmy = [];
      }
    
      
      
    addViking(viking) {
     this.vikingArmy.push(viking);
    
    }
    addSaxon(Saxon) {
      this.saxonArmy.push(Saxon);
    }
      
    vikingAttack(){
    
      let resultViking= Saxon.receiveDamage(Viking.strengh);
    
      if (Saxon.health <=0 && Saxon.Strength <=0) {
        this.saxonArmy.splice(this.vikingArmy[], 1);
      }
      return result;
    
      
    }
    saxonAttack() {
     let resultSaxon= Viking.receiveDamage(Saxon.strengh);
    
      if (Viking.health <=0 && Viking.Strength <=0) {
        this.vikingArmy.splice(this.saxonArmy[], 1);
      }
      return result;
    
      
    }
    
    
     showStatus() {
            if (this.saxonArmy.length === 0) {
                return "Vikings have won the war of the century!";
            } else if (this.vikingArmy.length === 0) {
                return "Saxons have fought for their lives and survived another day...";
            } else {
                return "Vikings and Saxons are still in the thick of battle.";
            }
        }
    }