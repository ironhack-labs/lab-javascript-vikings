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
  }
    receiveDamage(damage){
      this.health -= damage;
      if(this.health <= 0){
        return this.name + " has died in act of combat";
      }else{
        
        return this.name + " has received " + damage + " points of damage";
        
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
  }
  receiveDamage(damage){
    this.health -= damage;
    if(this.health <= 0){
      return "A Saxon has died in combat";
    }else{
      return "A Saxon has received " + damage + " points of damage";
    }
  }
}

// War
class War{
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking){
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }
  vikingAttack(){
    let randomViking = Math.floor((Math.random()*this.vikingArmy.length));
    let saxon = Math.floor((Math.random()*this.saxonArmy.length));
    this.saxonArmy[saxon].receiveDamage(this.vikingArmy[randomViking].strength);
    if(this.saxonArmy[saxon].health <= 0){
      this.saxonArmy.splice(this.saxonArmy[saxon], 1);
      return "A Saxon has died in combat";
    }
    }
    saxonAttack(){
      let randomViking = Math.floor((Math.random()*this.vikingArmy.length));
      let saxon = Math.floor((Math.random()*this.saxonArmy.length));
      this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[saxon].strength);
      if(this.vikingArmy[randomViking].health > 0){
        return this.vikingArmy[randomViking].name + " has received " + this.saxonArmy[saxon].strength + " points of damage";
      } else {
        this.vikingArmy.splice(this.vikingArmy[randomViking], 1);
      }
  }
  showStatus(){
    if(this.vikingArmy.length > 0 && this.saxonArmy.length > 0){
      return "Vikings and Saxons are still in the thick of battle.";
      
    }
    if(this.saxonArmy.length < 1){
     return "Vikings have won the war of the century!";
    }
    if(this.vikingArmy.length < 1) {
      return "Saxons have fought for their lives and survive another day...";
      }
    }
  }

