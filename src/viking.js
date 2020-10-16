// Soldier
class Soldier {
    constructor(health, strength) {
      this.health = health;
      this.strength = strength;
    }
       //methods
  attack(){
  
    return this.strength;
  };
  receiveDamage(damage){
      this.health = this.health - damage;
  };
  
}
  
  // Viking
  class Viking extends Soldier {
    constructor(name, health, strength){
      super(health, strength)
      this.name = name;
    }
    receiveDamage(damage){
        this.health = this.health - damage;
        if(Viking){
            return `${this.name} has received ${damage} points of damage`
        } else { `${this.name} has died in act of combat`
        }

    }

    battleCry(){
        return "Odin Owns You All!";
    }
    
  }
  
  // Saxon
  class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength)
    }
    receiveDamage(damage){
        this.health = this.health - damage;
        if(Saxon){
            return `A Saxon has received ${damage} points of damage`
        } else { 'A Saxon has died in combat'
        }

    }

  }
  
  // War
  class War {}