// Soldier
class Soldier {
    //values
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    };

    //methods
    attack (){
        return this.strength;
    };

    receiveDamage(damage){
        this.health -= damage;
    };

}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
          return `${this.name} has received ${damage} points of damage`;
        } else  {
          return `${this.name} has died in act of combat`;  
        }
        
      }
    //methods
    battleCry(){
        return "Odin Owns You All!";
    }
    
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
          return `A Saxon has received ${damage} points of damage`;
        } else  {
          return `A Saxon has died in combat`;  
        }
        
}
}
// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    //methods

    addViking(vikingSoldier){
    this.vikingArmy.push(vikingSoldier);
    };

    addSaxon(saxonSoldier) {
    this.saxonArmy.push(saxonSoldier);
    };

    // Armies attack
    selectRandom(arr) {

        if (arr.length === 0) {
            return undefined;
        }
        
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
        
        }
        
    vikingAttack() {
    let chosenSaxon = this.selectRandom(this.saxonArmy);
    let chosenViking = this.selectRandom(this.vikingArmy);
    
    let vikingDamage = chosenSaxon.receiveDamage(chosenViking.attack());
    if (chosenSaxon.health <= 0){
        this.saxonArmy.splice(this.saxonArmy.indexOf(chosenSaxon), 1);
    };
    return vikingDamage;
    }

    saxonAttack(){
        let chosenSaxon = this.selectRandom(this.saxonArmy);
        let chosenViking = this.selectRandom(this.vikingArmy);

        let saxonDamage = chosenViking.receiveDamage(chosenSaxon.attack());
        if (chosenViking.health <= 0){
            this.vikingArmy.splice(this.vikingArmy.indexOf(chosenViking), 1);
        };
        return saxonDamage;
        };

    showStatus(){
        if (this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`
        } else {
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    };


}
