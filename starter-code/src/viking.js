// Soldier
class Soldier {
  constructor(healthArg, strengthArg){
    this.health=healthArg;
    this.strength=strengthArg;
  }

  attack(){
    return this.strength
  }

  receiveDamage(damage){
    this.health=this.health-damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, healthArg, strengthArg){
    super(healthArg, strengthArg)
    this.name = name;
  }
  receiveDamage(damage){
    this.health=this.health-damage;
    if(this.health>0){
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry(){
    return "Odin Owns You All!";
  }
}

// let teste = new Viking('bla', 80, 10)
// console.log(teste.battleCry())

// Saxon
class Saxon extends Soldier {
  constructor(healthArg, strengthArg){
    super(healthArg, strengthArg)
  }

  receiveDamage(damage){
    this.health=this.health-damage;
    if(this.health>0){
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy=[];
    this.saxonArmy=[];
  }


  addViking(newViking){
    this.vikingArmy.push(newViking)
  }
  addSaxon(newSaxon){
    this.saxonArmy.push(newSaxon);
  }
  vikingAttack(){
    let randomSaxonIndex=Math.floor(Math.random()*this.saxonArmy.length)
    let randomViking=this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
    let randomSaxon=this.saxonArmy[randomSaxonIndex]
    
    console.log("este eh o Saxon", randomSaxon)
    randomSaxon.receiveDamage(randomViking.attack())
    console.log("apos ataque", randomSaxon)
    if(randomSaxon.health<=0){
      this.saxonArmy.splice(randomSaxonIndex)
      return "A Saxon has died in combat"
    } 
  }

  saxonAttack(){
    let randomSaxonIndex=Math.floor(Math.random()*this.saxonArmy.length)
    let randomVikingIndex=Math.floor(Math.random()*this.vikingArmy.length)
    let randomViking=this.vikingArmy[randomVikingIndex]
    let randomSaxon=this.saxonArmy[randomSaxonIndex]
    
    console.log("este eh o Viking", randomViking)
    let damageDone=randomSaxon.attack();
    randomViking.receiveDamage(damageDone)
    console.log("apos ataque", randomViking)
    if(randomViking.health<=0){
      this.vikingArmy.splice(randomVikingIndex)
      return "A viking has died in combat"
    }
    return `${randomViking.name} has received ${damageDone} points of damage`
  }
  showStatus(){
    if(!this.vikingArmy.length){
      return "Saxons have fought for their lives and survive another day..."
    }
    if(!this.saxonArmy.length){
      return "Vikings have won the war of the century!"
    }
    if(this.saxonArmy.length>0 && this.vikingArmy.length>0){
      return "Vikings and Saxons are still in the thick of battle."
    }
  }

}

// const viking1=new Viking('roberto', 80, 10)
// const viking2=new Viking('dan', 70, 8)
// const saxon1=new Saxon(200, 5)
// const saxon2=new Saxon(150, 10)

// const newwar= new War
// newwar.addViking(viking1)
// newwar.addViking(viking2)
// newwar.addSaxon(saxon1)
// newwar.addSaxon(saxon2)

// console.log(viking1, viking2, newwar)

// newwar.vikingAttack()