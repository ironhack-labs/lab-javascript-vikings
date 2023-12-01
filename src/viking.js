// Link to pull: https://github.com/ironhack-labs/lab-javascript-vikings/pull/3889


// Soldier
class Soldier {

    constructor(health, strength){
        this.health = health
        this. strength = strength
    }
    attack(){
        return this.strength

    }
    receiveDamage(damage) {
       
        this.health -= damage;
      }


}

// Viking
class Viking extends Soldier {
    constructor(name, health,strength){
        super(health,strength)
        this.name = name
    }
    receiveDamage(damage) {
        this.damage=damage
        this.health -= damage;
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`
        }
        else{
            return `${this.name} has died in act of combat`
        }
       

        }
        battleCry(){
            return "Odin Owns You All!"
        }
        
      }




// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health -= damage
        if(this.health>0){
        return `A Saxon has received ${damage} points of damage`}
        else{
            return  "A Saxon has died in combat"
        }

    }
}

// War
class War {
   constructor(){
    this.vikingArmy=[]
    this.saxonArmy=[]

   }
   addViking(vickingWarriors){
    this.vikingArmy.push(vickingWarriors)

   }
   addSaxon(SaxonWarriors){
    this.saxonArmy.push(SaxonWarriors)

   }
   vikingAttack(){
   let aSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
   let aViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]


    let result = aSaxon.receiveDamage(aViking.strength)

    if(aSaxon.health<=0){
        this.saxonArmy.length-=1
    }

    return result;
 }


saxonAttack(){
    let aSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    let aViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
 
 
    let result = aViking.receiveDamage(aSaxon.strength)
 
    if(aViking.health<=0){
        this.vikingArmy.length-=1
    }
 
     return result;
  }

  showStatus(){
    if(this.saxonArmy.length===0){
        return `Vikings have won the war of the century!`
    }
  
  else if(this.vikingArmy.length===0){
    return `Saxons have fought for their lives and survived another day...`
}

else if(this.saxonArmy.length!==0 || this.vikingArmy.length===0 ){
    return `Vikings and Saxons are still in the thick of battle.`
}


}


 
}
