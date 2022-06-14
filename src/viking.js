// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(dmg){
    this.health -=dmg;
  }
}

// Viking
class Viking extends Soldier{
  constructor(name,health,strength){
    super(health, strength)
    this.name = name;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(dmg){
    this.health -=dmg;

    if (this.health>0){
      return `${this.name} has received ${dmg} points of damage`;
    } else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry(){
    return `Odin Owns You All!`
  }

}

// Saxon
class Saxon extends Soldier{

  receiveDamage(dmg) {
    this.health -= dmg;

    if (this.health>0){
      return `A Saxon has received ${dmg} points of damage`;
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {

  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addSaxon(newSaxon){
    this.saxonArmy.push(newSaxon);
  }


  addViking(newViking){
    this.vikingArmy.push(newViking);
  }

  vikingAttack(){
    //find random viking
    let rvi = Math.floor(Math.random()*this.vikingArmy.length)
    //find random saxon
    let rsi = Math.floor(Math.random()*this.saxonArmy.length)
    //select random viking
    let vik = this.vikingArmy[rvi];
    //select random saxon
    let sax = this.saxonArmy[rsi];

    //viking attacks saxon
    //b attleMessage is the string that is returned from receiveDamage()
    let battleMessage = sax.receiveDamage(vik.attack());
    //if saxon is dead, remove him from saxon army
    if (sax.health <=0){
      this.saxonArmy.splice(rsi,1);
    }
    //return the string result of the saxons receiveDamage()
    return battleMessage
  }

  saxonAttack(){
    //find random viking
    let rvi = Math.floor(Math.random()*this.vikingArmy.length)
    //find random saxon
    let rsi = Math.floor(Math.random()*this.saxonArmy.length)
    //select random viking
    let vik = this.vikingArmy[rvi];
    //select random saxon
    let sax = this.saxonArmy[rsi];

    //viking attacks saxon
    //b attleMessage is the string that is returned from receiveDamage()
    let battleMessage = vik.receiveDamage(sax.attack());
    //if saxon is dead, remove him from saxon army
    if (vik.health <=0){
      this.vikingArmy.splice(rvi,1);
    }
    //return the string result of the saxons receiveDamage()
    return battleMessage
  }

  showStatus(){
    if(this.saxonArmy.length === 0){
      return `Vikings have won the war of the century!`;
    } else if(this.vikingArmy.length === 0){
      return `Saxons have fought for their lives and survived another day...`
    } else {
      return `Vikings and Saxons are still in the thick of battle.`
    }
  }
}
let theBattleForMiddleEarth = new War()



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
