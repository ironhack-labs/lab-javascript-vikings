// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(name, health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  //nota que aquí has definido quién va a ingresar a dónde
  //

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry(){
    return "Odin Owns You All!"
  }
}
//const pruebaVikingo = new Viking('arturo', 100, 200);
//console.log(pruebaVikingo.receiveDamage(500));

// Saxon
class Saxon extends Soldier {
  constructor(health,strength){
    super(health,strength)
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return "A Saxon has died in combat"
    }
  }
}

// War
class War {
//propiedad
constructor(){
  this.vikingArmy=[];
  this.saxonArmy=[];
}
//metodos
addViking(viking){
  this.vikingArmy.push(viking)
}

addSaxon(saxon){
  this.saxonArmy.push(saxon)
}

vikingAttack(){

  const randomSaxon =  this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
  const randomViking =  this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
  const vikingAttackResult = randomSaxon.receiveDamage(randomViking.strength)
  //quiero filtrar todo lo que se murió. randomSaxon es un objeto con health <0.
  //entonces filtro todo item que no sea randomSaxon y me quedo con ese filtro.
  
    if (randomSaxon.health <= 0) {
      this.saxonArmy = this.saxonArmy.filter((item) => item !== randomSaxon);
    }

    return vikingAttackResult    
  }

saxonAttack(){
  const randomSaxon =  this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
  const randomViking =  this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
  const saxonAttackResult = randomViking.receiveDamage(randomSaxon.strength)

  if (randomViking.health <= 0) {
    this.vikingArmy = this.vikingArmy.filter((item) => item !== randomViking);
  }
  return saxonAttackResult
}


showStatus(){
if (this.saxonArmy.length ===0 ){
  return "Vikings have won the war of the century!"
} else if (this.vikingArmy.length === 0 ){
  return "Saxons have fought for their lives and survived another day..."
} else {return "Vikings and Saxons are still in the thick of battle."}

}

}
//el super es de cuando usas Extends





  
const guerra1 = new War
const soldadoSaxon1 = new Saxon (60,25)
const soldadoViking1 = new Viking("harald",150,300)



















// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
