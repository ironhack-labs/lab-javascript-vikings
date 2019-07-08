// Soldier
class Soldier {
  constructor(healthArg, strengthArg){
      this.health = healthArg
      this.strength = strengthArg
  }
  attack(){
      return this.strength
  }


  receiveDamage(damage){
      this.health -= damage
  }

}

//cntl + shift + 7 = descomentar bloque de codigo comentado o lo contrario jujuju

// Viking
class Viking extends Soldier{
  constructor(nameArg, healthArg, strengthArg){
      super(healthArg, strengthArg)
        this.name=nameArg
  
  }

  receiveDamage(damage){
     this.health -= damage
    
    if(this.health>0){
       return `${this.name} has received ${damage} points of damage`
      }else if(this.health<=0){
       return `${this.name} has died in act of combat`
    }
  }

  battleCry(){
    return "Odin Owns You All!"
  }

}

// Saxon
class Saxon extends Soldier{
  constructor(healthArg, strengthArg){
    super(healthArg, strengthArg)
    
  }

  receiveDamage(damage){
    this.health -= damage
   
   if(this.health>0){
      return `A Saxon has received ${damage} points of damage`
     }else if(this.health<=0){
      return `A Saxon has died in combat`
      }
    }


}
// War

class War {
  
  constructor(){
    this.vikingArmy=[]
    this.saxonArmy=[]
  }
  
  addViking (Viking){
    this.vikingArmy.push(Viking)
  }

  addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
  }


  vikingAttack(){
    randomViking = Math.floor(Math.random()*this.vikingArmy.length)
    randomSaxon = Math.floor(Math.random()*this.saxonArmy.length)

    randomSaxon.receiveDamage(damage)=randomViking.attack()

    if(randomSaxon.health===0){

    }
  }

  saxonAttack(){
    randomSaxon = Math.floor(Math.random()*this.saxonArmy.length)


  }

  showStatus(){
    if(Saxon.saxonArmy==0){
      return "Vikings have won the war of the century!"
    }else if(Viking.vikingArmy===0){
      return "Saxons have fought for their lives and survive another day..."
    }
  }
}


