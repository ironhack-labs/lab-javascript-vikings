// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength


        

    }
  
     attack() {
      return this.strength;
     }
      receiveDamage(theDamage) {
          this.health -= theDamage
          
     }
}



// Viking
class Viking extends soldier{
    constructor(name, health, strength){
    super (health , strength)
    this.name = name
    this.health = health
    this.strength = strength
    }
    
    battleCry(){
       (`Odin los posee a todos ustedes`)
       }
        receiveDamage(theDamage){
            this.health -= thedamage
            if (this.health > 0){
                return `a saxon has received ${theDamage}points of the damage`;
            } else {
                return `a saxon has died in combat`
                }
            }

        
}
    

    


    
    


// Saxon
class Saxon extends soldier {
    constructor
}

// War
class War {}
