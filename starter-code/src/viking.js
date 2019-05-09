// Soldier
class Soldier {
  constructor(health,strength){
    this.health = health;
    this.strength = strength;
  }

  attack(){
    return this.strength; 
  }

  receiveDamage(damage){
     this.health-=damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name,health,strength){
    super(health,strength)
    this.viking;
    this.name= name;    
  }

  receiveDamage(damage){
    
    super.receiveDamage(damage);
    if(this.health <= 0){return `${this.name} has died in act of combat`};
    
    return `${this.name} has received ${damage} points of damage`;
  }

  battleCry(){
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier{
  constructor(health,strength){
    super(health,strength);
  }

  receiveDamage(damage){
    
    super.receiveDamage(damage);
    if(this.health <= 0){return `A Saxon has died in combat`};
    
    return `A Saxon has received ${damage} points of damage`;
  }  



  
}

// War
class War {
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
    //gets a viking from a random position in the array;
    let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let saxonDamage = randomSaxon.receiveDamage(randomViking.strength);    
    if(randomSaxon.health){
      this.saxonArmy.splice(randomSaxon,1);
    }
    return saxonDamage;
  }

  saxonAttack(){
    //gets a viking from a random position in the array;
    let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let vikingDamage = randomViking.receiveDamage(randomSaxon.strength);    
    if(randomViking.health){
      this.vikingArmy.splice(randomViking,1);
    }
    return vikingDamage;
  }

  showStatus(){
    if(this.saxonArmy.length === 0){return "Vikings have won the war of the century!"}
    if(this.vikingArmy.length === 0){return "Saxons have fought for their lives and survive another day..."}
    if(this.saxonArmy.length>0 && this.vikingArmy.length>0){ return "Vikings and Saxons are still in the thick of battle."}
  }
}
