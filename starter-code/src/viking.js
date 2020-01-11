// Soldier
class Soldier {
    constructor(health, strength) {
      this.health = health;
      this.strength = strength;
    }
  }
Soldier.prototype.attack=function(){
    return this.strength;
}
Soldier.prototype.receiveDamage=function(damage){
    this.health-=damage;
}

// Viking

class Viking  extends Soldier{
    constructor( name,health, strength){
      super (health, strength)
      this.name = name;
    };
    receiveDamage=function(damage) {
      this.health -= damage;
      if(this.health > 0){
        return `${this.name} has received ${damage} points of damage`
      }else{
        return `${this.name} has died in act of combat`
      }
    }
  
    battleCry(){
      return "Odin Owns You All!"
    }
  
  }

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage)
    {
      this.health -= damage
      if(this.health > 0){
        return `A Saxon has received ${damage} points of damage`
      }else{
        return `A Saxon has died in combat`
      }
    }
  }

// War
class War{
    constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
    } 
    addViking(vikingo){
      this.vikingArmy.push(vikingo);
    }  
    addSaxon(saxoon){
      this.saxonArmy.push(saxoon);
  }
  
  vikingAttack(){
    let pos=Math.floor(Math.random()*this.saxonArmy.length)
    let saxoon = this.saxonArmy[pos];
  
    let vikingo = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let respuesta = saxoon.receiveDamage(vikingo.attack());
    if (respuesta.includes("died")){
      this.saxonArmy.splice(pos,1)
    }
    return respuesta
  }
  
  saxonAttack(){  
    let pos=Math.floor(Math.random()*this.vikingArmy.length)
    let vikingo = this.vikingArmy[pos];
  
    let saxoon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let respuesta = vikingo.receiveDamage(saxoon.attack());
    if (respuesta.includes("died")){
      this.vikingArmy.splice(pos,1)
    }
    return respuesta
  }
  showStatus(){
    if(this.saxonArmy.length===0) {
        return "Vikings have won the war of the century!"
    }
    if(this.vikingArmy.length===0) {
        return "Saxons have fought for their lives and survived another day..."
    }
    return "Vikings and Saxons are still in the thick of battle."
  }
  }
