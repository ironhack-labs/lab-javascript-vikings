// Soldier
class Soldier{

  constructor(healthArg, strengthArg){
    this.healthArg = healthArg
    this.strengthArg = strengthArg
  }

  attack(){
    return this.strengthArg
  }

  receiveDamage(damage){
    return this.healthArg - damage
  }

}

// Viking
class Viking extends Soldier{
  constructor(name, healthArg, strengthArg){
    super(healthArg,strengthArg)
    this.name = name
  }

  battleCry(){
    return "Odin Owns You All!"
  }

  receiveDamage(damage){
    this.healthArg = this.healthArg - damage
    if (this.healthArg > 0) {
    return this.name + " has received" + damage +"points of damage"      
    }else{
      return this.name + "has died in act of combat"
    }
  }

}

// Saxon
class Saxon extends Soldier{
  constructor(healthArg, strengthArg){
    super(healthArg,strengthArg)
  }

  
  receiveDamage(damage){
    this.healthArg = this.healthArg - damage
    if (this.healthArg > 0) {
      return "A Saxon has received" + damage +"points of damage"      
    }else{
      return "A Saxon has died in act of combat"
    }
  }

}

// War
class War{
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking){
    this.vikingArmy.push(viking);

  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }

  vikingAttack(){
    this.viking = this.vikingArmy[Math.floor(Math.random()*this-this.vikingArmy.length)]
    this.saxon = this.saxonArmy[Math.floor(Math.random()*this-this.saxonArmy.length)]

    return this.saxon.receiveDamage(this.viking.strengthArg)

  }

  saxonAttack(){
    this.viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
    this.saxon = this.saxonArmy[Math.floor(Math.random*this.saxonArmy.length)]

    return this.viking.receiveDamage(this.saxon.strengthArg)
  }

  showStatus(){

    if(this.saxonArmy.length == 0){
      return "Vikings have won the war of the century!"
    }else if(this.vikingArmy.length == 0){
      return "Saxons have fought for their lives and survive another day..."
    }else if(this.vikingArmy.length == 1 && this.saxonArmy == 1){
      return "Vikings and Saxons are still in the thick of battle."
    }

  }

}
