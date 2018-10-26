// Soldier
//Two Arguments - health and strength
class Soldier{
  constructor(health, strength){
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
  super(health, strength)
      this.name = name;
      this.alive = true;
  }
    receiveDamage(damage){
      this.health -= damage;
      if(this.alive === true){
        return this.name + " has received " + damage + " points of damage ";
      }else{
        return this.name + " has died in act of combat";
      }
    }
    battleCry(){
      return "Odin owns you all!";
    }
}

// Saxon
class Saxon extends Soldier{
  constructor(health, strength){
    super(health, strength)
    this.alive = true;
  }
  receiveDamage(damage){
    this.health -= damage;
    if(this.alive === true){
      return "A Saxon has received" + damage + " points of damage";
    }else{
      return "A Saxon has died in combat";
    }
  }
}

// War
class War{
  constructor(){
    vikingArmy = [];
    saxonArmy = [];
  }
  addViking(viking){
    
  }
}
