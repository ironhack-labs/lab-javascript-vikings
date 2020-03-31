// Soldier
class Soldier {
    constructor(health, strength) {
      this.health = health;
      this.strength = strength;
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage;
    }
  }


// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
      super(health, strength);
      this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage;
        return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat` ;
    }
    battleCry(){
        return "Odin Owns You All!";
    }
  }

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health -= damage;
        return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat` ;
    }
}

function chooseRandom(array){
    return Math.floor(Math.random() * (array.length))
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
      }
    addViking(vikingObject){
        this.vikingArmy.push(vikingObject);
    };
    addSaxon(saxonObject){
        this.saxonArmy.push(saxonObject);
    };
    vikingAttack(){
        let saxonIndex = chooseRandom(this.saxonArmy);
        let vikingIndex = chooseRandom(this.vikingArmy);
        let saxon = this.saxonArmy[saxonIndex];
        let viking = this.vikingArmy[vikingIndex];
        let result = saxon.receiveDamage(viking.strength);
        if(saxon.health <= 0){
            this.saxonArmy.splice(saxonIndex,1);
        }
        return result;
    };
    saxonAttack(){
        let saxonIndex = chooseRandom(this.saxonArmy);
        let vikingIndex = chooseRandom(this.vikingArmy);
        let saxon = this.saxonArmy[saxonIndex];
        let viking = this.vikingArmy[vikingIndex];
        let result = viking.receiveDamage(saxon.strength);
        if(viking.health <= 0){
            this.vikingArmy.splice(saxonIndex,1);
        }
        return result;
    };
    showStatus(){
        if(this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`
        }
        else if(this.vikingArmy.length === 0){
            return `Saxons have fought for their lives and survived another day...`
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}
