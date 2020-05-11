// Soldier
class Soldier  {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
     attack(){
       return this.strength;
   } 
// should be a function
// should receive 0 arguments
// should return the strength property of the Soldier

receiveDamage (damage){
 this.health -= damage;
} 
}

 class Viking extends Soldier {
    constructor  (name, health, strength){
 super(name,health, strength)
     this.name = name;
     this.health = health;
     this.strength = strength;
    }
    attack(){
        return this.strength;
    } 
    receiveDamage(damage) {
        if (this.health -= damage) {
          return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
       } 

    //    should remove the received damage from the health property
    //    if the Viking is still alive, it should return "NAME has received DAMAGE points of damage"
    //    if the Viking dies, it should return "NAME has died in act of combat"     

       battleCry(){
           return ("Odin Owns You All!");
       }  
 }

//  should remove the received damage from the health property
//  if the Viking is still alive, it should return "NAME has received DAMAGE points of damage"
//  if the Viking dies, it should return "NAME has died in act of combat"

// Saxon
class Saxon extends Soldier{
    attack(){
        return this.strength;
    } 

    receiveDamage(damage){
    if (this.health -= damage) {
        return `A Saxon has received ${damage} points of damage`;
      } else {
          return `A Saxon has died in combat`;
      }
}



// War
class War () {
    this.vikingArmy  =  [] ;
    this.saxonArmy = [];

}

 
