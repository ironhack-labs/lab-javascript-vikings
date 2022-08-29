// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
attack(){
return this.strength
}
receiveDamage(damage){
 this.health -= damage
}

}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }
  //should return "NAME has received DAMAGE points of damage", if the Viking is still alive
//should return "NAME has died in act of combat", if the Viking dies
    receiveDamage(damage){  
    this.health -= damage 
    if (this.health >= 1){
        return `${this.name} has received ${damage} point of damage`
         }else if (this.health == 0){
        return `${this.name} has died in combat`
   }}
   battleCry(){
    let phrase = "Odin Owns You All!"
    return phrase;
   }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
    }
    receiveDamage(damage){  
        this.health -= damage 
        if (this.health >= 1){
            return `A Saxon has received ${damage} point of damage`
             }else if (this.health == 0){
            return `A Saxon has died in combat`
       }}
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(viking){
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }
  //ARMIES ATTACK
  vikingAttack(){
/* should make Saxon receiveDamage() equal to the strength of a Viking
should remove dead saxons from the army
should return result of calling receiveDamage() of a Saxon with the strength of a Viking*/

  }
  saxonAttack(){}
  showStatus(){}

 
  
}

addViking();
addViking();
addViking();
addViking();
addViking();
addSaxon();
addSaxon();
addSaxon();
addSaxon();
addSaxon();