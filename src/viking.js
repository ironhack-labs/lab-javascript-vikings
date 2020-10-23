// Soldier
class Soldier {
  constructor(_health, _strength){
    this.health = _health;
    this.strength = _strength;
  }
  attack(){
    return this.strength;
  }
  receiveDamage(_damage){
    this.health -= _damage;
    if(this.health > 0){
      console.log(`Soldier has received ${_damage} points of damage`);
    }else {
      console.log(`Soldier has died in act of combat`);
    }
  }
}

// Viking
class Viking extends Soldier {
  constructor(_name, _health, _strength){
    super(_health, _strength);
    this.name = _name;
  }
   receiveDamage(_damage){
    this.health -= _damage;
    if(this.health > 0){
      return `${this.name} has received ${_damage} points of damage`;
    }else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry(){
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(_health, _strength){
    super(_health, _strength);
  }
  receiveDamage(_damage){
    this.health -= _damage;
    if(this.health > 0){
      return `A Saxon has received ${_damage} points of damage`;
    }else {
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
  addViking(_viking){
    this.vikingArmy.push(_viking);
  }
  addSaxon(_saxon){  
    this.saxonArmy.push(_saxon);
  }
  vikingAttack(){

    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * (this.saxonArmy.length))];
    let randomViking = this.vikingArmy[Math.floor(Math.random() * (this.vikingArmy.length))];
    let resultOfTheAttack = randomSaxon.receiveDamage(randomViking.attack());
  
    if(randomSaxon.health <= 0){
      this.saxonArmy.splice(randomSaxon, 1);
    }
    return resultOfTheAttack;
  }
  saxonAttack(){
    
    let randomViking = this.vikingArmy[Math.floor(Math.random() * (this.vikingArmy.length))];

    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * (this.saxonArmy.length))];

    let resultOfTheAttack = randomViking.receiveDamage(randomSaxon.attack());

    if(randomViking.health <= 0){
      this.vikingArmy.splice(randomViking, 1);
    }
    return resultOfTheAttack;
  }

  showStatus(){
    if(this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!";
    }else if(this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}