// Soldier

class Soldier  {
  constructor(healthArg, strengthArg){
    this.health = healthArg;
    this.strength = strengthArg;
  }
    attack() {
      return this.strength
    }
    receiveDamage(damage){
      this.health -= damage
      // return `${this.name} has received ${damage} points of damage`
    }
    battleCry(){
      return "Odin Owns You All!"
    }
}




class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength);
    this.name = name
  }
  receiveDamage(damage){
    this.health -= damage
    if(this.health === 0 ){
      return `${this.name} has died in act of combat`
    }else {
      return `${this.name} has received ${damage} points of damage`
    }
  }
}


class Saxon extends Soldier{
  constructor(health, strength){
    super(health, strength)
  }

  receiveDamage(damage){
    this.health -= damage
    if(this.health === 0 ){
      return `A Saxon has died in combat`
    }else {
      return `A Saxon has received ${damage} points of damage`

    }
  }
}


class War{
  constructor(){
    this.vikingArmy = [],
    this.saxonArmy = []
  }
  addViking(Viking){
    this.vikingArmy.push(Viking)
  }

  addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
  }

  vikingAttack(){
    var randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    var randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    var saxonDamage = randomSaxon.receiveDamage(randomViking.strength)
    if(randomSaxon.health <= 0){
      this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon),1)
       return 'A Saxon has died in combat';
    } else{
      return `A Saxon has received ${randomViking.strength} points of damage`
    }
  }

  saxonAttack(){
    var randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    var randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    var vikingdamage = randomViking.receiveDamage(randomSaxon.strength)
    if(randomViking.health <= 0){
      this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1)
    }else {
      return `${randomViking.name} has received ${randomSaxon.strength} points of damage`

    }

  }

  showStatus(){
    if(this.saxonArmy.length === 0){
      return `Vikings have won the war of the century!`
    }else if(this.vikingArmy.length === 0){
      return `Saxons have fought for their lives and survive another day...`
    }else if (this.vikingArmy.length === 1 && this.saxonArmy.length === 1){
      return `Vikings and Saxons are still in the thick of battle.`
    }
  }
}


// vikingAttack(){
  // let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
  // let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
//   randomSaxon.receiveDamage(randomViking.strength)
//
//   if(randomSaxon.health <= 0){
//     this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1)
//   } else{
//
//   }
//
//
// }
