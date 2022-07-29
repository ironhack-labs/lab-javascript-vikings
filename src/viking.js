// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength = this.strength;
      }

    receiveDamage(damage) {
        this.health = this.health - damage;
      }

}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength)  {
        super(health, strength);
        this.name = name;
    }
    
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
      }
    
    battleCry () {
        return "Odin Owns You All!";
    }  
}


// Saxon
class Saxon extends Soldier {
    constructor(health, strength)  {
        super(health, strength);
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
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

    addViking(viking) {
        this.Viking = viking;
        this.vikingArmy.push(this.Viking);
    } 
    addSaxon(saxon) {
        this.Saxon = saxon;
        this.saxonArmy.push(this.Saxon);
    } 

    vikingAttack() {
        const damageResult = this.Saxon.receiveDamage(this.Viking.strength);
        
        this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);
      
      return damageResult;
    }

    saxonAttack() {
        const damageResult = this.Viking.receiveDamage(this.Saxon.strength);
        
        this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);
      
      return damageResult;
    }
        

    showStatus() {

        if (!this.saxonArmy.length > 0) {
            return `Vikings have won the war of the century!`;          
        } else if (!this.vikingArmy.length > 0) {
            return `Saxons have fought for their lives and survived another day...`; 
        } else if (this.saxonArmy && this.vikingArmy !== 0) {
            return `Vikings and Saxons are still in the thick of battle.`; 
        } else {

        }
    }
}