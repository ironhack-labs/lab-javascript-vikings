// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength;
  }
  receiveDamage(theDamage){
    this.health = this.health - theDamage;
  }
}


// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(theDamage){
    this.health = this.health - theDamage;
    if(this.health <= 0){
      return `${this.name} has died in act of combat`;
      
    }
    else {
      return `${this.name} has received ${theDamage} points of damage`;
    }
  }
  battleCry(){
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(theDamage){
    this.health = this.health - theDamage;
    if(this.health <= 0){
      return `A Saxon has died in combat`;
      
    }
    else {
      return `A Saxon has received ${theDamage} points of damage`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(vikingSoldier){
    this.vikingArmy.push(vikingSoldier);
  }
  addSaxon(saxonSoldier){
    this.saxonArmy.push(saxonSoldier);
  }
  vikingAttack(){
/*     const battleFeedback = saxon.receiveDamage(viking.strength); */
if(this.vikingArmy.lenght === 0 || this.saxonArmy.length === 0){
  return 'Both armies needs soldiers';
}
    const minIndex = 0;
    const vikingMax = this.vikingArmy.length;
    const saxonMax = this.saxonArmy.length;

    const vikingIndex = Math.floor(Math.random() * (vikingMax - minIndex)) + minIndex;
    const saxonIndex = Math.floor(Math.random() * (saxonMax - minIndex)) + minIndex;

    const viking = this.vikingArmy[vikingIndex];
    const saxon = this.saxonArmy[saxonIndex];

    const battleFeedBack = saxon.receiveDamage(viking.strength);

    if(saxon.health <= 0){
      this.saxonArmy.splice(saxonIndex, 1);
    }
    return battleFeedBack;
  }
  saxonAttack(){
    if(this.vikingArmy.lenght === 0 || this.saxonArmy.length === 0){
      return 'Both armies needs soldiers';
    }
        const minIndex = 0;
        const vikingMax = this.vikingArmy.length;
        const saxonMax = this.saxonArmy.length;
    
        const vikingIndex = Math.floor(Math.random() * (vikingMax - minIndex)) + minIndex;
        const saxonIndex = Math.floor(Math.random() * (saxonMax - minIndex)) + minIndex;
    
        const viking = this.vikingArmy[vikingIndex];
        const saxon = this.saxonArmy[saxonIndex];
    
        const battleFeedBack = viking.receiveDamage(saxon.strength);
    
        if(viking.health <= 0){
          this.vikingArmy.splice(vikingIndex, 1);
        }
        return battleFeedBack;
      }

  showStatus(){
    if(this.vikingArmy.length <= 0){
      return `Saxons have fought for their lives and survived another day...`;
    }
  if(this.saxonArmy.length <= 0){
     return `Vikings have won the war of the century!`;
  }
  return `Vikings and Saxons are still in the thick of battle.`
}
}

const war = new War();

//console.log(war.saxonAttack());

const ragnar = new Viking('Ragnar', 500, 50);
const saxon1 = new Saxon(90, 35);
const saxon2 = new Saxon(75, 25);
const saxon3 = new Saxon(82, 32);

war.addViking(ragnar);
war.addSaxon(saxon1);
war.addSaxon(saxon2);
war.addSaxon(saxon3);

console.log(war.vikingAttack());
console.log(war.showStatus());
console.log(war.saxonAttack());
console.log(war.saxonAttack());
console.log(war.vikingAttack());
console.log(war.showStatus());
console.log(war.vikingAttack());
console.log(war.vikingAttack());
console.log(war.showStatus());
console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.saxonAttack());
console.log(war.vikingAttack());
console.log(war.showStatus());
console.log(war.vikingAttack());
console.log(war.vikingAttack());
console.log(war.showStatus());
console.log(war.vikingAttack());
console.log(war.vikingAttack());
console.log(war.vikingAttack());
console.log(war.vikingAttack());
console.log(war.vikingAttack());
console.log(war.vikingAttack());
console.log(war.vikingAttack());
console.log(war.vikingAttack());
console.log(war.showStatus());



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
