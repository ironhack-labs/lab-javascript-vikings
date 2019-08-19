// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
      this.health=healthArg;
      this.strength=strengthArg;
  }
  attack(){
    return this.strength;
  }
  receiveDamage(damageArg){
    this.damage=damageArg;
    this.health-=this.damage;
  }
}

// Viking
class Viking extends Soldier{
  constructor(nameArg,healthArg, strengthArg){
    super(healthArg,strengthArg);
    this.name=nameArg;
  }
  attack(){
    return this.strength;
  }
  receiveDamage(damageArg){
    if(this.health-damageArg>0){
      this.health-=damageArg;
      return `${this.name} has received ${damageArg} points of damage`;
    }else{
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry(){
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier{
  constructor(healthArg, strengthArg){
  super(healthArg,strengthArg);
  }
  attack(){
    return this.strength;
  }
  receiveDamage(damageArg){
    if(this.health-damageArg>0){
      this.health-=damageArg;
      return `A Saxon has received ${damageArg} points of damage`;
    }else{
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy=[];
    this.saxonArmy=[];
  }
  addViking(viking){
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }
  
  vikingAttack(){
    const randomInteger=(minimum,maximumn)=>Math.floor(Math.random()*(maximum-minimum+1)+minimum);
    const vik=this.vikingArmy[Math.floor(Math.random)*this.vikingArmy.length];
    const sax=this.saxonArmy[Math.floor(Math.random)*this.saxonArmy.length];
    /* const firstCount = firstArmy.length;
    const secondCount = secondArmy.length;
    const firstIndex = randomInteger(0, firstCount - 1);
    const secondIndex = randomInteger(0, secondCount - 1);

    const first = firstArmy[firstIndex];
    const second = secondArmy[secondIndex];
    
    const firstStrength = first.strength;
    const attackMessage = second.receiveDamage(firstStrength); */

    const attackMessage=sax.receiveDamage(vik.strength);

    for(let saxon of this.saxonArmy){
      if(saxon.health<=0){
        const index=this.saxonArmy.indexOf(saxon);
        this.saxonArmy.splice(index,1);
      }
    }
    return attackMessage;
  }
  /* TEACHER================================================================================= 
  
  _genericAttack (firstArmy, secondArmy) {
    const firstCount = firstArmy.length;
    const secondCount = secondArmy.length;
    const firstIndex = randomInteger(0, firstCount - 1);
    const secondIndex = randomInteger(0, secondCount - 1);

    const first = firstArmy[firstIndex];
    const second = secondArmy[secondIndex];
    
    const firstStrength = first.strength;
    const attackMessage = second.receiveDamage(firstStrength);

    for (let second of secondArmy) {
      if (second.health <= 0) {
        const index = secondArmy.indexOf(second);
        secondArmy.splice(index, 1);
      }
    }
    return attackMessage;
  }
  vikingAttack () {
    return this._genericAttack(this.vikingArmy, this.saxonArmy);
  }

  saxonAttack () {
    return this._genericAttack(this.saxonArmy, this.vikingArmy);
  } ============================================================================================*/
  saxonAttack(){
    return this._genericAttack(this.saxonArmy, this.vikingArmy);
  }
  /* TEACHER================================================================================= 
  showStatus () {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }*/
}

