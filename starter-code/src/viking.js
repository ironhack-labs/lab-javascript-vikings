// Soldier
class Soldier  {
  constructor (healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
  }
    
  attack() {
    return this.strength

    
  }
  receiveDamage(damage){

this.health -= damage;
}

}



// Viking
class Viking extends Soldier{

  constructor(name, health, strength) {
    super(health, strength)
    this.name = name;
  }
  receiveDamage(damage){
    this.health -= damage;
    if (this.health> 0) {
      return `${this.name} has received ${damage} points of damage`;
      
    }else{
      return `${this.name} has died in act of combat`
    }

  }
  battleCry(){
    return `Odin Owns You All!`
  }
  
}

// Saxon
class Saxon extends Soldier{
  constructor(health, strength){
    super(health,strength)
  }
  receiveDamage(damage){
    this.health -= damage;
    if (this.health> 0) {
      return `A Saxon has received ${damage} points of damage`;
      
    }else{
      return `A Saxon has died in combat`
    }

  }
}

// War
class War {
  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []

    
  }
  addViking(vik) {
    this.vikingArmy.push(vik)
  }
  addSaxon(sax) {
    this.saxonArmy.push(sax)
  }
  vikingAttack(){
    const ramdomviking = Math.floor(Math.random() * this.vikingArmy.length)
    const ramdomsaxon = Math.floor(Math.random() * this.saxonArmy.length)
    const attack = this.saxonArmy[ramdomsaxon].receiveDamage(this.vikingArmy[ramdomviking].strength)
    if (this.saxonArmy[ramdomsaxon].health <=0) {
      this.saxonArmy.pop(ramdomsaxon)
      
    }
    return attack

    
  }
  saxonAttack(){
    const ramdomviking = Math.floor(Math.random() * this.vikingArmy.length)
    const ramdomsaxon = Math.floor(Math.random() * this.saxonArmy.length)
    const attack = this.vikingArmy[ramdomviking].receiveDamage(this.saxonArmy[ramdomsaxon].strength)
    if (this.vikingArmy[ramdomviking].health <=0) {
      this.vikingArmy.pop(ramdomviking)
      
    }
    return attack
    
  }
  showStatus(){
    if (this.saxonArmy.length == 0) {
      return `Vikings have won the war of the century!`
      
    } else if (this.vikingArmy.length === 0) {
    return `Saxons have fought for their lives and survive another day...`  
    }else{
      return `Vikings and Saxons are still in the thick of battle.`
    }
      
    
  }


}
