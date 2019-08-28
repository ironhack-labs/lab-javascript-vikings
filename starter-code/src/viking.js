// Soldier
class Soldier {
   
    constructor(healthArg, strengthArg) {
        this.health = healthArg
        this.strength = strengthArg
    }

    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health-=damage

}
}

// Viking
class Viking extends Soldier {
    constructor(nameArg, healthArg, strengthArg){
        super(healthArg,strengthArg)
        this.name = nameArg
        this.health = healthArg
        this.strength = strengthArg
    }
   receiveDamage(damage){
       this.health -= damage
       if(this.health<=0){
           return `${this.name} has died in act of combat`
       }else{
           return `${this.name} has received ${damage} points of damage`
       }
   }
   battleCry(){
       return "Odin Owns You All!"
   }
}
// Saxon
class Saxon extends Soldier {
    constructor(healthArg, strengthArg){
        super(healthArg, strengthArg)
        this.health = healthArg
        this.strength = strengthArg
    }

    receiveDamage(damage){
        this.health -= damage
        if(this.health<=0){
            return `A Saxon has died in combat`
        }
        else{
            return `A Saxon has received ${damage} points of damage`
            
        }
    }
}



// War
class War{
    constructor(){
     

         this.vikingArmy = []
         this.saxonArmy = []
      
}

addViking = function (Viking) {

    this.vikingArmy.push(Viking)
}
addSaxon = function (Saxon) {
    this.saxonArmy.push(Saxon)
}
vikingAttack = function () {

}
saxonAttack = function () {
    
}
showStatus = function () {
    
}

}