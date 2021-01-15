// Soldier

class Soldier{ 
    constructor(health, strength) {
        this.health=health;
        this.strength=strength;
     }

attack(){
return this.strength
}


receiveDamage(damage){
 this.health=this.health-damage
}
}




// Viking

class Viking extends Soldier {
    constructor (name, health, strength){ 
        super(health,strength)
        this.name=name;
    }

attack(){
    return this.strength
    }



receiveDamage(damage){
    this.health=this.health-damage
   
    if (this.health>=damage){
       return this.name + " has received " + damage + " points of damage"
    }
    else 
      return this.name + " has died in act of combat"
    }   


battleCry(){
    return "Odin Owns You All!"
    }   
}




// Saxon
class Saxon extends Soldier{

receiveDamage(damage){
    this.health=this.health-damage
   
    if (this.health>0){
       return `A Saxon has received ${damage} points of damage`
    }
    else 
    {
    return `A Saxon has died in combat`} 
 }   
}


// War
class War {
  constructor(){ 
   this.vikingArmy=[],
   this.saxonArmy=[]
  }



addViking(viking1){
    this.vikingArmy.push(viking1)
}



addSaxon(saxon1){
    this.saxonArmy.push(saxon1)
}


vikingAttack(){
//1.elegir saxon al azar
//2. conseguir vikingo fuerza
let saxon1
let viking1

    saxon1=Math.floor(Math.random()*saxonArmy)
    viking1=Math.floor(Math.random()*vikingArmy.length)
    saxon1.receiveDamage(viking1.strength)
    
}



saxonAttack(){

}




showStatus(){}

}





 