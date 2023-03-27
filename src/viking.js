// Soldier
class Soldier {
    constructor(health, strength) {

        this.strength = strength;
        this.health = health;
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
    constructor(name, strength, health) {

        super(strength, health);    
        this.name = name;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
            if (this.health > 0) {
          return `${this.name} has received ${damage} points of damage`;
        }   
            else {
          return `${this.name} has died in act of combat`;
        }
      }
      battleCry(){
        return `Odin Owns You All!`
      }
  
    }
  // Saxon
  class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
            if (this.health > 0) {
          return `A Saxon has received ${damage} points of damage`;
        }   
            else {
          return `A Saxon has died in combat`;
        }
      }

  }
  
  // War
  class War {
    constructor(){
    vikingArmy ();
    saxonArmy ();
    }
    addViking(viking){
        this.vikingArmy.push(viking);
      }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
      }
    vikingAttack(){
      let randomViking = this.vikingArmy[Math.floor(Math.random)]
    }
   
   
   
 }
