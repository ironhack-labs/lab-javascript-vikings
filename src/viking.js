
// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health ;
    this.strength = strength;
  }
  attack(){
    return(this.strength);
  }
  receiveDamage(damage){
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(n, h, s) {
    super(h, s)
    this.name = n
  };

  receiveDamage(damage){
    this.health -= damage;

    if(this.health > 0){
      return `${this.name} has received ${damage} points of damage`
    }
    else{
      return `${this.name} has died in act of combat`
    }
    }

    battleCry(){
      return 'Odin Owns You All!';
    }
  };


new Viking('Bob', 10, 4)

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
    this.health -= damage;

    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`
    }
    else{
      return `A Saxon has died in combat`
    }
    }
}

// War
class War {
  constructor(){
  this.vikingArmy = [] ;
  this.saxonArmy = [] ; 
  }
 addViking(viking){
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }
  vikingAttack(){
    let randomSaxon = this.saxonArmy[Math.floor(this.vikingArmy.length * Math.random())]
    let randomViking = this.vikingArmy[Math.floor(this.saxonArmy.length * Math.random())];
    let result = randomSaxon.receiveDamage(randomViking.attack())
    if (randomSaxon.health <= 0){ 
      this.saxonArmy.splice(randomSaxon,1);
    }
    return result
  }
  saxonAttack(){}
  showStatus(){}
} 


