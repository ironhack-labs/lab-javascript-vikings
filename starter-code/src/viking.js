// Soldier
class Soldier {
    constructor(healthArg, strengthArg) {
        this.health =300
        this.strength=150
        
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -=damage
        
    }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health,strength);
    this.name=name

  }
  attack(){
    return this.strength
}
receiveDamage(damage){
    this.health -=damage
    if(this.health===0){
        return `${this.name} has died in act of combat`
    }
    else if(this.health!==0){
        return `${this.name} has received ${damage} points of damage`
    }
    
}
battleCry(){
    return `Odin Owns You All!`
}
}
// Saxon
class Saxon extends Soldier{
    constructor( health, strength){
      super(health,strength)
          this.health=health
          this.strength=strength
      }
      attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -=damage
        if(this.health===0){
            return `A Saxon has died in combat`
        }
        else if(this.health!==0){
            return `A Saxon has received ${damage} points of damage`
        }
    }
}


// War
class War {
    constructor()
    {
        this.vikingArmy=[]    
        this.saxonArmy=[]  
    }

    addViking(Viking){
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }
    vikingAttack(){
        
        //const damageVicking=new this.Vicking.strength
        //const saxonDamage=new this.Saxon.receiveDamage(damageVicking)

       //return saxon.receiveDamage(this.vicking.strength)

        
    }
}
