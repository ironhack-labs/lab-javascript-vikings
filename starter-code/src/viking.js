// Soldier
class Soldier {
  constructor (health, strength){
    this.health = health;
    this.strength = strength;
  }

  attack (){
    return this.strength;
  }

  receiveDamage (damage){
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier{
  constructor (name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  
  receiveDamage (damage){
    this.health -= damage;
    if (this.health > 0){
      return `${this.name} has received ${damage} points of damage`;
    }else{
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry (){
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier{
  constructor (health, strength) {
    super(health, strength);
  }

  receiveDamage (damage){
    this.health -= damage;
    if (this.health > 0){
      return `A Saxon has received ${damage} points of damage`;
    }else{
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War{
  constructor () {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking (viking){
    this.vikingArmy.push(viking);
    return;
  }

  addSaxon (saxon){
    this.saxonArmy.push(saxon);
    return;
  }

  vikingAttack (){
    let randomSaxon = war.randomSoldier(this.saxonArmy);
    let randomViking = war.randomSoldier(this.vikingArmy);

    let result = randomSaxon.receiveDamage(randomViking.strength);
  
    if ( randomSaxon.health <= 0){
      this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon),1);
    }
  
    return result;
  }

  saxonAttack (){
    let randomSaxon = war.randomSoldier(this.saxonArmy);
    let randomViking = war.randomSoldier(this.vikingArmy);
  
    let result = randomViking.receiveDamage(randomSaxon.strength);
  
    if ( randomViking.health <= 0){
      this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking),1);
    }
  
    return result;
  }

  showStatus (){
    if(this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!";
    }else if(this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survive another day...";
    }else{
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }

  randomSoldier (soldierArray){
    return soldierArray[Math.floor(Math.random() * soldierArray.length)];
  }
}

//Datos de prueba
let war = new War();
war.addSaxon(new Saxon(50,20));
war.addViking(new Viking("Ragnar", 50, 50));