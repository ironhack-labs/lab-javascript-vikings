// Soldier
class Soldier {
  constructor (health, strength){
    this.health = health
    this.strength = strength
  }
  attack(){
  return this.strength;
}

receiveDamage(damage){
   this.health -= damage
}
}



class Viking extends Soldier{
  constructor(name, health, strength){ 
  super(health, strength)
  this.name = name
  }
  receiveDamage(damage){
    this.health -= damage
    if(health > 0) console.log(name + " has received " + damage + " points of damage.")
    if(health <= 0) console.log(name + " has died in act of combat")
  }

  battleCry(){
    return "Odin Owns You All!"
  }
}

class Saxon extends Soldier{
  constructor(health, strength){
    super(health, strength)
  }

  receiveDamage(damage){
    this.health -= damage
    if(this.health > 0){  console.log("A Saxon has received " + damage + " points of damage")}
    if(this.health <= 0) console.log("A Saxon has died in combat")
  }

}
 var sax = new Saxon (100,90);
 sax.receiveDamage(5)
