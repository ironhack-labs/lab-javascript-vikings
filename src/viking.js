// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
  }
  
  // Viking
  class Viking extends Soldier {

    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    
    // attack(){
    //     return this.strength;
    // }

    receiveDamage(damage) {
        this.health -= damage;

        if(this.health <= 0){
            return `${this.name} has died in act of combat`;
        } else {
            return `${this.name} has received ${damage} points of damage`;

        }
    }

    battleCry(){
        return "Odin Owns You All!";
    }

  }
  
  // Saxon
  class Saxon extends Soldier {

    // constructor(health, strength){
    //     super(health, strength);
    // }

    receiveDamage(damage) {
        this.health -= damage;

        if(this.health <= 0){
            return `A Saxon has died in combat`;
        } else {
            return `A Saxon has received ${damage} points of damage`;

        }
    }
  }
  
  // War
  class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking){
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }

    vikingAttack(){
        let indexSax = Math.floor(Math.random() * this.saxonArmy.length);
        let indexVik = Math.floor(Math.random() * this.vikingArmy.length);

        let resultCombat = this.saxonArmy[indexSax].receiveDamage(this.vikingArmy[indexVik].attack()); 

        if (this.saxonArmy[indexSax].health <= 0){
            this.saxonArmy.splice(indexSax);
        }

        return resultCombat;
        
    }

    saxonAttack(){
        let indexSax = Math.floor(Math.random() * this.saxonArmy.length);
        let indexVik = Math.floor(Math.random() * this.vikingArmy.length);

        let resultCombat = this.vikingArmy[indexVik].receiveDamage(this.saxonArmy[indexSax].attack()); 

        if (this.vikingArmy[indexVik].health <= 0){
            this.vikingArmy.splice(indexVik);
        }

        return resultCombat;
    }

    showStatus(){
        if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day...";
        } else if ((this.saxonArmy.length && this.vikingArmy.length) > 0){
            return "Vikings and Saxons are still in the thick of battle.";
        }

    }
  }


  