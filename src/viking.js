// Soldier
class Soldier {
    constructor (health,strength){
        this.health=health;
        this.strength=strength;
    }
    attack ()  {
        return this.strength;
    }
    receiveDamage (damage){
     this.health-=damage;
     
    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength)
       this.name=name;
    }
  receiveDamage(damage) {
    this.health-=damage;
    if (this.health > 0){
        return `${this.name} has received ${damage} points of damage`
    }
    return `${this.name} has died in act of combat`
  } 
  battleCry() {
      return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
    constructor(name,health){
        super(name,health)
    }
    receiveDamage(damage) {
        this.health-=damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }
        return `A Saxon has died in combat`
      } 

    
}

// War
class War {
constructor()
{
    this.vikingArmy = []
     this.saxonArmy = []
     
}
addViking(Viking){
    this.vikingArmy.push(Viking)
}
addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
}
PositionArmy(Attack,Defense){  //THIS IS ONLY FOR SUPERBONUS,not used in this code.
    let numRandattack = Math.floor((Math.random()*this.Attack.length)) 
    let numRanddefense = Math.floor((Math.random()*this.Defense.length)) 
    let result = this.DefenseArmy[numRanddefense].receiveDamage(this.Attack[numRandattack].strength)
     if (this.Defense[numRanddefense].health <= 0 ){
       this.Defense.splice(numRanddefense,1)
    }
 return result;
 }
vikingAttack(){
   let numRandsaxon = Math.floor((Math.random()*this.saxonArmy.length)) 
   let numRandviking = Math.floor((Math.random()*this.vikingArmy.length)) 
   let result = this.saxonArmy[numRandsaxon].receiveDamage(this.vikingArmy[numRandviking].strength)
    if (this.saxonArmy[numRandsaxon].health <= 0 ){
      this.saxonArmy.splice(numRandsaxon,1)
   }
return result;
}
saxonAttack(){
    let numRandsaxon = Math.floor((Math.random()*this.saxonArmy.length)) 
    let numRandviking = Math.floor((Math.random()*this.vikingArmy.length)) 
    let result = this.vikingArmy[numRandviking].receiveDamage(this.saxonArmy[numRandsaxon].strength)
     if (this.vikingArmy[numRandviking].health <= 0 ){
       this.vikingArmy.splice(numRandviking,1)
    }
 return result;
 }
showStatus(){
    if(this.saxonArmy == 0){
        return "Vikings have won the war of the century!"
    }
    if(this.vikingArmy == 0){
        return "Saxons have fought for their lives and survived another day..."
    }else{
        return "Vikings and Saxons are still in the thick of battle."
    }
    
    
}
}
