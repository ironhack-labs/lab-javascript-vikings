// Soldier
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
    

// Viking
class Viking extends Soldier{
    constructor(name,health, strength) {
        super(health, strength)
        this.name = name;
    }
    receiveDamage(theDamage) {
        this.health -= theDamage;
        if(this.health > 0) {
            return `${this.name} has received ${theDamage} points of damage`;
        } else if (this.health <= 0) {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry(){
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(theDamage) {
        this.health -= theDamage;
        if(this.health > 0) {
            return `A Saxon has received ${theDamage} points of damage`;
        } else if (this.health <= 0) {
            return "A Saxon has died in combat";       
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy= [];
    }
    
    addViking(vikingObj){
        this.vikingArmy.push(vikingObj)
    }
    addSaxon(saxonObj){
        this.saxonArmy.push(saxonObj);
    }
    vikingAttack() {
          const saxInd = Math.floor(Math.random() * this.saxonArmy.length);
          const vikInd = Math.floor(Math.random() * this.vikingArmy.length);

          const result = this.saxonArmy[saxInd].receiveDamage(this.vikingArmy[vikInd].strength)

          if (this.saxonArmy[saxInd].health <= 0) {
            this.saxonArmy.splice(saxInd, 1);
          }

          return result;
     }
     saxonAttack() {
        const saxInd = Math.floor(Math.random() * this.saxonArmy.length);
        const vikInd = Math.floor(Math.random() * this.vikingArmy.length);

        const result = this.vikingArmy[vikInd].receiveDamage(this.saxonArmy[saxInd].strength);

        if (this.vikingArmy[vikInd].health <= 0) {
            this.vikingArmy.splice(vikInd, 1);
        }

        return result;
     }
     showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return "Vikings and Saxons are still in the thick of battle."
        }
     }

}
