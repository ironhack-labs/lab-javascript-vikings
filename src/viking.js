// Soldier
class Soldier {
 constructor(health, strength) {
    this.health = health;
    this.strength = strength;
 }
  attack () {
      return this.strength;
  }
  receiveDamage (damage){
    this.health = this.health - damage;
  }
}  

// Viking
class Viking extends Soldier {
   constructor(name,strength,health) {
   super(strength,health);
   this.name = name; 
}
  attack (){
      return this.strength;
  }
   receiveDamage (damage){
       this.health = this.health - damage;
       if (this.health > 0){
        return `${this.name} has received ${damage} points of damage`
     } else {
        return `${this.name} has died in act of combat`
     }
   }
   battleCry(){
       return 'Odin Owns You All!'
   }
}

// Saxon
class Saxon extends Soldier {
    constructor(strength,health) {
    super(strength,health)
}

attack (){
    return this.strength;
}
receiveDamage(damage){

    this.health = this.health - damage;
       if (this.health > 0){
        return `${this.name} has received ${damage} points of damage`
     } else {
        return `${this.name} has died in act of combat`
     }
   }
}


// War
class War {
    
}
