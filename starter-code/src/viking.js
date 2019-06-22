// Soldier
class Soldier{
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack(){
    return this.strength;
  }

  receiveDamage(theDamage){
    this.health -= theDamage;
  }
}
// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(theDamage){
    this.health -= theDamage;
    if(this.health <= 0){
        return `${this.name} has died in act of combat`;
    } 
    else {
        return `${this.name} has received ${theDamage} points of damage`;
    }
  }

  battleCry(){
    return "Odin Owns You All!";
  }

}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(theDamage){
    this.health -= theDamage;
    if(this.health <= 0){
      return `A Saxon has died in combat`;
    } 
    else {
      return `A Saxon has received ${theDamage} points of damage`;
    }
  }

  battleCry(){
    return "Odin owns you All!";
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(vikingObj){
    this.vikingArmy.push(vikingObj);
  }

  addSaxon(saxonObj){
    this.saxonArmy.push(saxonObj);
  }

  vikingAttack(){
    let rndSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];

    let rndViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];

    rndSaxon.receiveDamage(rndViking.attack());

    if(rndSaxon.health<=0){
      
      let index = this.saxonArmy.indexOf(rndSaxon);
      this.saxonArmy.splice(index);
      return `A Saxon has died in combat`;
    }

  }

  saxonAttack(){
    let rndSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];

    let rndViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];

    rndViking.receiveDamage(rndSaxon.attack());

    if(rndViking.health<=0){
      let index = this.vikingArmy.indexOf(rndViking);
      this.vikingArmy.splice(index);
      return `A Viking has died in combat`;
    } 
    
    else {
      return `${rndViking.name} has received ${rndSaxon.attack()} points of damage`;
    }

  }


  showStatus(){
    if (this.saxonArmy === undefined || this.saxonArmy.length == 0) {
      return `Vikings have won the war of the century!`;
    }

    else if(this.vikingArmy === undefined || this.vikingArmy.length == 0) {
      return `Saxons have fought for their lives and survive another day...`;
    }

    else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }


}
