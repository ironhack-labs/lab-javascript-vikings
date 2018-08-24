// Soldier
class Soldier {
  constructor(health,strength){
    this.health = health
    this.strength = strength
  }

  attack(){
    return this.strength
  }

  receiveDamage(theDamage){
    this.health -=theDamage
  }

}

// Viking
class Viking extends Soldier {
  constructor(name,health,strength){
    super(health,strength)
    this.name = name
  }

  receiveDamage(theDamage){
    this.health -=theDamage
    if(this.health>0){
      return (this.name + " has received "+theDamage+" points of damage")
    }
    else{
      return (this.name + " has died in act of combat")
    }
  }
  
  battleCry(){
    return "Odin Owns You All!"
  }

}
// Saxon
class Saxon extends Soldier{
  constructor(health,strength){
    super(health,strength)
  }

  receiveDamage(theDamage){
    this.health -=theDamage
    if(this.health>0){
      return ("A Saxon has received "+theDamage+" points of damage")
    }
    else{
      return ("A Saxon has died in combat")
    } 
  }

  

}

// War
class War {
  constructor(){
    this.vikingArmy= []
    this.saxonArmy= []
  }

  addViking(Viking){
    this.vikingArmy.push(Viking)
  }

  addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
  }

  vikingAttack(){
    let vikingoQueAtaca = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
    vikingoQueAtaca.strength = Math.floor(Math.random()*200)
    let azarSaxon = Math.floor(Math.random()*this.saxonArmy.length)
    let saxonQueRecibe = this.saxonArmy[azarSaxon]
    let resultadoReceiveDamage = saxonQueRecibe.receiveDamage(vikingoQueAtaca.strength)
   
    if(saxonQueRecibe.health<=0){
      this.saxonArmy.splice(azarSaxon,1)
    } 

    return resultadoReceiveDamage
  }

  saxonAttack(){
    let saxonQueAtaca = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
    saxonQueAtaca.strength = Math.floor(Math.random()*200)
    let azarViking = Math.floor(Math.random()*this.vikingArmy.length)
    let vikingoQueRecibe = this.vikingArmy[azarViking]
    let resultadoReceiveDamage2 = vikingoQueRecibe.receiveDamage(saxonQueAtaca.strength)
   
    if(vikingoQueRecibe.health<=0){
      this.vikingArmy.splice(azarViking,1)
    } 

    return resultadoReceiveDamage2
  }

  showStatus(){
    if(this.saxonArmy.length<=0){
      return "Vikings have won the war of the century!"
    }
    else if (this.vikingArmy.length<=0){
      return "Saxons have fought for their lives and survive another day..."
    }
    else {
      return "Vikings and Saxons are still in the thick of battle."
    }

  }

}
