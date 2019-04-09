// Soldier
class Soldier {

  constructor (health, strength) { //came from viking super 
    this.health = health;
    this.strength = strength;
  }
    attack(){
      return this.strength;
    };
    receiveDamage(damage){
      // console.log('in here')
      this.health = this.health - damage ;
      //return health;
    };
}

// Viking
class Viking extends Soldier {

  constructor(name, health, strength){
    super(health, strength)//pass this to solier
    this.name=name;
  }
  
  receiveDamage(damage){
    // console.log('hi', this.health)
    super.receiveDamage(damage) 
    console.log(this)
    if (this.health > 0 ){
        return `${this.name} has received ${damage} points of damage`
        } else if (this.health===0){
          return `${this.name} has died in act of combat`
        }
  }
 
  battleCry() {
    return `Odin Owns You All!`
  }
  }

// Saxon
class Saxon extends Soldier{

  constructor (health,strength){
    super(health,strength)
  }

  receiveDamage(damage){
    // console.log('hi', this.health)
    super.receiveDamage(damage) 
    if (this.health !=0){
      return `A Saxon has received ${damage} points of damage`
        } else if (this.health===0){
          return `A Saxon has died in combat`
        }
  }
}

// War
class War {

  constructor() {
  this.vikingArmy=[];
  this.saxonArmy=[];
  }
  //Add warriors to battlefield
  addViking(viking){
  this.vikingArmy.push(viking);
  }

  addSaxon(saxon){
  this.saxonArmy.push(saxon);
  
  //Attacks
  vikingAttack() {
  //Set Damage equal to strength
  let rand1 = Math.floor(Math.random()*this.saxonArmy.length);
  let randomSaxon = this.saxonArmy[rand1];

  let rand2 = Math.floor(Math.random()*this.vikingArmy.length)
  let randomViking = this.vikingArmy[rand2];
  
  randomSaxon.receiveDamage(randomViking.strength)
if (saxonArmy[rand2].health <= 0) {
    saxonArmy.splice(rand2,1)
}
  }
  //if(he dies){  this.saxonArmy.splice(rand1, 1) }
  //
  //Remove from battlefield
  
  // } 
  

  // saxonAttack() {

  //   let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
  //   let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
  //   randomViking.receiveDamage(randomSaxon.strength)}