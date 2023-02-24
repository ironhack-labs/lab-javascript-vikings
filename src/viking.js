// Soldier
class Soldier {
    constructor(health, strength) {
      this.health = health;
      this.strength = strength;
    }
    attack() {
      return this.strength;
    }
  
    receiveDamage(dmg) {
      this.health -= dmg;
    }
  }
// Viking

class Viking extends Soldier {
    constructor(name, health, strength) {
      super(health, strength);
      this.name = name;
    }
  
    receiveDamage(dmg){
      this.health -= dmg;
      if(this.health>0){
        return `${this.name} has received ${dmg} points of damage`
      }
      else{
        return `${this.name} has died in act of combat`
      }
    }
    battleCry() {
      return "Odin Owns You All!"
    }
  }

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
      super(health, strength);
    }
  
  
    receiveDamage(dmg){
      this.health -= dmg;
  
      if(this.health>0){
        return `A Saxon has received ${dmg} points of damage`
      }
      else{
        return `A Saxon has died in combat`
      }
    }
  
  }

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(viking){
        this.vikingArmy.push(viking);
    };

    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    };

    vikingAttack(){
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

        this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
        
        if (this.saxonArmy[randomSaxon].health<=0){
            this.saxonArmy.splice(randomSaxon)
            return 'A Saxon has died in combat'
        }
       
    };
    saxonAttack(){
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

        this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)

        if (this.vikingArmy[randomViking].health<=0){
            this.vikingArmy.splice(randomViking);
        }
        else{
            return `${this.vikingArmy[randomViking].name} has received ${this.saxonArmy[randomSaxon].strength} points of damage`
        }
    };

    showStatus(){
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        }
        else if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day...";
        }
        else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    };
}

const war = new War();


let viking1 = new Viking("Alex", 10, 10);
war.addViking(viking1);
let viking2 = new Viking("Eric", 5, 5);
war.addViking(viking2);

console.log(war.vikingArmy);

let saxon1 = new Saxon(100,100);
war.addSaxon(saxon1);
let saxon2 = new Saxon(200,200);
war.addSaxon(saxon2);