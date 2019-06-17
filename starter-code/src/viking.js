// Soldier
class Soldier {
constructor(health, strength){
this.health = health;
this.strength = strength;
  }

attack(){
return this.strength;
}

receiveDamage(damage){
this.health = this.health - damage;

}
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage){
    this.health = this.health - damage;
    if(this.health <= 0){
      return `${this.name} has died in act of combat`;
    } 
    return `${this.name} has received ${damage} points of damage`;
    }

    battleCry(){
      return `Odin Owns You All!`;
    }
}

const qualquer = new Viking('Ragnar', 300, 50);
console.log(qualquer)
qualquer.receiveDamage(50);
console.log(qualquer)

// Saxon
class Saxon extends Soldier {
  constructor(health, strength){
    super(health, strength);
  }

 
  receiveDamage(damage){
    this.health = this.health - damage;

    if(this.health <= 0){
      return `A Saxon has died in combat`;
    }
    return `A Saxon has received ${damage} points of damage`;
    }

}

// War
class War {
  constructor(){
   this.saxonArmy = []; 
   this.vikingArmy = []; 
  }

  addViking(Viking){
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon){
    this.saxonArmy.push(Saxon);
  }

  vikingAttack(){
   let selectViking = Math.floor(Math.random() * this.vikingArmy.length); 
   let selectSaxon = Math.floor(Math.random() * this.saxonArmy.length); 
   let randomViking = this.vikingArmy[selectViking].attack();
   let saxonStatus = this.saxonArmy[selectSaxon].receiveDamage(randomViking);


   if(saxonStatus === `A Saxon has died in combat`){
    
    this.saxonArmy.splice(selectSaxon -1, 1);
    
   }
    return saxonStatus;
    
  }

  saxonAttack(){
    let selectViking = Math.floor(Math.random() * this.vikingArmy.length); 
    let selectSaxon = Math.floor(Math.random() * this.saxonArmy.length); 
    let randomSaxon = this.saxonArmy[selectSaxon].attack();
    let vikingStatus = this.vikingArmy[selectViking].receiveDamage(randomSaxon);

    if(vikingStatus ===  `${this.vikingArmy[selectViking].name} has died in act of combat`) {
     
    this.vikingArmy.splice(selectViking -1, 1);
     
    }
     return vikingStatus;
  }

  showStatus(){

    if(this.saxonArmy.length === 0){
      return 'Vikings have won the war of the century!'
    } else if(this.vikingArmy.length === 0){
      return 'Saxons have fought for their lives and survive another day...'
    } else return 'Vikings and Saxons are still in the thick of battle.'
    

  }
}
