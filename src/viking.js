// Soldier

class Soldier {
  constructor( health ,strength ){
    this.health = health;
    this.strength = strength;
  }
  attack(){
   return this.strength
  }
  
  recieveDamage(damage){
    Math.max( 0, this.health - damage)
  }
    
}

//Math.max( 0, this.health - damage)//
// Viking

class Viking extends Soldier{
  constructor(name,health,strength){
    super(health,strength)
    this.name=name
  }
  recieveDamage(damage){
    super.recieveDamage(damage);
    if (this.health > 0) {
      
      return `${this.name} has received ${damage} points of damage`
    }else {
       return `${this.name} has died in act of combat`
      }
    }

  battleCry{
    return `Odin Owns You All!`
  }
}





// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`
    } else {
        return `A Saxon has died in combat`
    }
}
}
      



// War

clas War{
  constructor(){
    this.vikingArmy=[];
    this.saxonArmy=[];
  }

  addViking(viking){
    this.vikingArmy.push(viking);
  }
  addViking(viking){
    this.vikingArmy.push(viking);
  }

  vikingAttack(){
    const viking =this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
    const viking =this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]

    return saxonArmy.receiveDamage(viking.strenght)
  }
  saxonAttack(){
    const randomSaxonIndex = randomNum(0, this.saxonArmy.length)
    const randomVikingIndex = randomNum(0, this.vikingArmy.length)
    

  }
}
