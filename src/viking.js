// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;  
  }

  attack(){
    return this.strength;
  }

  receiveDamage(dmg){
    this.health = this.health - dmg;
  }

  checkHealth(){
    console.log(this.health);
  }
}


// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health,strength);
    this.name = name;
  }

  receiveDamage(dmg){
    this.health -=dmg;
    if( this.health <= 0 ){
      return `${this.name} has died in act of combat`;
    }else{
      return `${this.name} has received ${dmg} points of damage`;
    }
  }

    receiveDamageMine(dmg){
    if ( dmg >= this.health ) {
      this.health = 0;
      let whoDied = this.name;
      delete this;
      return `${whoDied} has died in act of combat`;
    }else {
      this.health -= dmg;
      return `${this.name} has received ${dmg} points of damage`;
    }
  }

  battleCry(){
    return 'Odin Owns You All!';
  }

}

// Saxon
class Saxon extends Soldier {


  receiveDamage(dmg){
    this.health -= dmg;
    if (this.health <= 0){
      return `A Saxon has died in combat`
    }
    return `A Saxon has received ${dmg} points of damage`; 
  }

}

// War
class War {

  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking){
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }

  vikingAttackMine(){
    if(!this.vikingArmy.length){
      return "";
    }

    let rollOne = rollDice(0,this.saxonArmy.length);
    let rollTwo = rollDice(0,this.vikingArmy.length);
    let dmgOut = this.vikingArmy[rollTwo].strength;
    let chosenSax = this.saxonArmy[rollOne];

    if ( dmgOut >= chosenSax.health ) {
       console.log('a saxon dies...');
       this.saxonArmy[rollOne].health = 0;
       this.saxonArmy.splice(rollOne,1);
       return(this.saxonArmy[rollOne].receiveDamage(dmgOut));
    }else{
        this.saxonArmy[rollOne].health -= dmgOut;
        return(this.saxonArmy[rollOne].receiveDamage(dmgOut));
    }
  }

  vikingAttack(){
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonIndex];
    let randomViking = this.vikingArmy[randomVikingIndex];

    const attackResult = randomSaxon.receiveDamage(randomViking.strength);
    
    if(attackResult === 'A Saxon has died in combat'){
        this.saxonArmy.splice(randomSaxonIndex,1);
    }
    return attackResult;
  }

  saxonAttack(){
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    let randomSaxon = this.saxonArmy[randomSaxonIndex];
    let randomViking = this.vikingArmy[randomVikingIndex];

    const attackResult = randomViking.receiveDamage(randomSaxon.strength);

    if(attackResult === `${randomViking.name} has died in act of combat`){
      this.vikingArmy.splice(randomVikingIndex,1);
    }

    return attackResult;
  }


  saxonAttackMine(){
    if(!this.saxonArmy.length){
      return "";
    }    
    console.log('SAXON ATTACK');
    let rollOne = rollDice(0,this.saxonArmy.length);
    let rollTwo = rollDice(0,this.vikingArmy.length);
    console.log(`saxonArmy index ${rollOne} and vikingArmy ${rollTwo}`);
    let dmgOut = this.saxonArmy[rollOne].strength;
    // if(howMany == 2){dmgOut = 500;}
    let chosenVik = this.vikingArmy[rollTwo];

    if ( dmgOut >= chosenVik.health ) {
       console.log('a viking dies...');
       console.log(this.vikingArmy);
       this.vikingArmy.splice(rollTwo,1);
       console.log(this.vikingArmy);
       return(chosenVik.receiveDamage(dmgOut));
    }else{
        this.vikingArmy[rollTwo].health -= dmgOut;
        return(this.vikingArmy[rollTwo].receiveDamage(dmgOut));
    }
  }

  attack(who){
      let dmged;
      (who == 'saxonArmy' ? dmged = 'vikingArmy' : dmged = 'saxon')

      let seedOne = Math.floor((Math.random() * this.who.length));
      let seedTwo = Math.floor((Math.random() * this.dmged.length));
      let dmgOut = this.who[seedOne].strength;

      let chosenVik = this.dmged[vikSeed];
      return(this.dmged[seedTwo].receiveDamage(dmgOut));
  }

  showStatus(){
    if (this.saxonArmy.length == 0){
      return "Vikings have won the war of the century!"
    }
    else if (this.vikingArmy.length == 0){
      return "Saxons have fought for their lives and survived another day..."
    }
    else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }

}

function rollDice(min,max){
  return Math.floor(Math.random() * (max - min) + min); 
}

function generateViking() {
  const name = 'Harald';
  const strength = 150;
  const health = 50;
  return new Viking(name, health, strength);
}

function generateSaxon() {
  const health = 60;
  const strength = 500;
  return new Saxon(health, strength);
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
