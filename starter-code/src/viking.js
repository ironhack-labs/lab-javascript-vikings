// Soldier
class Soldier {
  constructor(healthArg,strengthArg){
    this.health = healthArg;
    this.strength = strengthArg;
  }       
 
 attack(){
    return this.strength;
  }

 receiveDamage(damage){
    if(damage !== 0){
        this.health = this.health - damage;
    }
  }
}

// Viking
class Viking extends Soldier{
  constructor(nameArg,healthArg,strengthArg){
    super(healthArg,strengthArg);
    this.name = nameArg;
  }
  
  receiveDamage(damage){
    this.health = this.health - damage;
    if(this.health > 0){
      return `${this.name} has received ${damage} points of damage`;
    }
    if(this.health <= 0){
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry(){
    return "Odin Owns You All!"; 
  }
  
}

// Saxon
class Saxon extends Soldier{
  constructor(healthArg,strengthArg){
     super(healthArg,strengthArg);   
  }

  receiveDamage(damage){
    this.health = this.health - damage;
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`;
    }
    if(this.health <= 0){
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
  
  addViking(Viking){
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon){
    this.saxonArmy.push(Saxon);
  }
 
  vikingAttack(){ 
    let damageViking = 0;
    let randomViking = Math.floor(this.vikingArmy.length * Math.random());
    damageViking = this.vikingArmy[randomViking].strength;
    let randomSaxon = Math.floor(this.saxonArmy.length * Math.random());
    let deadSaxon = this.saxonArmy[randomSaxon].receiveDamage(damageViking);
    if(this.saxonArmy[randomSaxon].health <= 0 ){
      this.saxonArmy.splice(randomSaxon, 1);
      return deadSaxon;
    }
    return deadSaxon;
  }
  saxonAttack(){
    let damageSaxon = 0;
    let randomSaxon = Math.floor(this.saxonArmy.length * Math.random());
    damageSaxon = this.saxonArmy[randomSaxon].strength;
    let randomViking = Math.floor(this.vikingArmy.length * Math.random());
    let deadViking =this.vikingArmy[randomViking].receiveDamage(damageSaxon);
    if(this.vikingArmy[randomViking].health <= 0 ){
      this.vikingArmy.splice(randomViking, 1);
      return deadViking;
    }
    return deadViking;
  }
  showStatus(){
    if(this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survive another day..."
    }
    if(this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!"
    }
    if(this.saxonArmy.length !==0 && this.vikingArmy.length !==0){
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}
