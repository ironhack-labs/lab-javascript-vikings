// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
    console.log(`remaining life points are ${this.health}`);
  }
  attack() {
    return this.strength;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(name, health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength; // aqui no entiendo porque hay que volver a enviarle los argumentos si no los quiero cambiar y ya los hereda de soldier
  }
receiveDamage(damage) {
  super.receiveDamage(damage)
  if(this.health <= 0)
  return `${this.name} has died in act of combat`
  else return `${this.name} has received ${damage} points of damage`
}
battleCry(){
  return "Odin Owns You All!";
}
  
}
// Saxon
class Saxon extends Soldier{
  constructor( health, strength) {
    super(health, strength);
    this.health = health;
    this.strength = strength; 
  }
  



}

// War
class War {}
