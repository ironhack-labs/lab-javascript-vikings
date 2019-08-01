// Soldier
class Soldier {
  constructor(health, strength) {
      this.health = health;
      this.strength = strength;        
  }
  attack(){
    console.log(this.strength)
    return this.strength;
  }

  receiveDamage(Damage){
    this.health -= Damage; 
  }
}


// Viking
class Viking extends Soldier{
  constructor(name,health,strength){
    super(health,strength);
    this.name = name;
  }
  receiveDamage(Damage){
    this.health -= Damage; 
    if(this.health > 0) return `${this.name} has received ${Damage} points of damage`
    return `${this.name} has died in act of combat`;
  }
  battleCry(){
    return `Odin Owns You All!`;
  }
  //if(this.health > 0) return `${name} has received ${damage} points of damage`
  //return `${name} has died in act of combat`;
  
}



// Saxon
class Saxon extends Soldier{
  constructor(health,strength){
    super(health,strength);
  }
  receiveDamage(Damage){
    this.health -= Damage; 
    if(this.health > 0) return `A Saxon has received ${Damage} points of damage`
    return `A Saxon has died in combat`;
  }

}

// War
class War {
  constructor(){
    
  }
  vikingArmy = [];
  saxonArmy = [];

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {}
  saxonAttack() {}
  showStatus() {}

}

war.addSaxon