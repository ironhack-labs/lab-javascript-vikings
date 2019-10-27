// Soldier
class Soldier {
    constructor(health, strength) {
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
  class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
        }
        receiveDamage(damage){
          this.health -= damage;
        }
        
    battleCry(){
        return 'Odin Owns You All!';
    }
  }
  // Saxon
  class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength);
    }
    receiveDamage(damage){
        this.health -= damage;
      }
  }
  // War
  class War {}
