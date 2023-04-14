// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
   this.strength =strength;
  }
     attack(){
    return this.strength;
  }

   receiveDamage(Damage){
    this.health -= Damage;
  }

} 


// Viking
class Viking extends Soldier {
constructor(name, health, strength){
    super(name, health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
}
 receiveDamage(Damage){
    this.health -= Damage;
    if(this.health <= 0 ){ 
        return `${this.name} has died in act of combat`;
   } else {
       return `${this.name} has received ${Damage} points of damage`;
    } 
   }
   battleCry(){
    return 'Odin Owns You All!'
   } 
  }
   


// Saxon
class Saxon extends Soldier{
        receiveDamage(Damage){
        super.receiveDamage(Damage);
       if(this.health > 0 ){ 
            return `A Saxon has received ${Damage} points of damage`;
       } else {
           return `A Saxon has died in combat`;
        } 
    }
} 

// War
class War {}
