// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;

  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength){
    super(health, strength);    
    this.name = name ;
  }
  // Soldier.attack()
  
  receiveDamage(damage){
    this.health = this.health - damage;
    if (this.health > 0){
      return this.name + " has received " +  damage + " points of damage";
    }
    return this.name + " has died in act of combat";

  }

  battleCry(){
    return "Odin Owns You All!";
  }

}

// Saxon
class Saxon extends Soldier{
  constructor(health,strength){
    super(health,strength)
  }

  receiveDamage(damage){
    this.health = this.health - damage;
    if (this.health > 0){
      return "A Saxon has received " +  damage + " points of damage";
    }
    return "A Saxon has died in combat";

  }



}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }


addViking(viking){
   this.vikingArmy.push(viking)
}
addSaxon(saxon){
  this.saxonArmy.push(saxon);
}
vikingAttack(){
  var chosenSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
  var chosenViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
  if (chosenSaxon.health<= chosenViking.strength){
    this.saxonArmy.splice(chosenSaxon)
  }
  return chosenSaxon.receiveDamage(chosenViking.strength)
}
saxonAttack(){
  var chosenSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
  var chosenViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
  if (chosenViking.health<= chosenSaxon.strength){
    this.vikingArmy.splice(chosenViking)
  }
  return chosenViking.receiveDamage(chosenSaxon.strength)

}
showStatus(){
  if (this.vikingArmy[0] == undefined){
   return "Saxons have fought for their lives and survive another day..."
  }
  if (this.saxonArmy[0] == undefined){
   return "Vikings have won the war of the century!"
  }
  if (this.saxonArmy[0] && this.vikingArmy !==undefined){
   return "Vikings and Saxons are still in the thick of battle."
}
}
}






var Harald = new Viking("Harald", 100, 60)
var John = new Saxon(50, 200)
var revolt = new War()

revolt.addViking(Harald)
revolt.addSaxon(John)
revolt.vikingAttack()


console.log(revolt.vikingArmy)
console.log(revolt.saxonArmy)


console.log(Harald.health)
console.log(John.health)
console.log(revolt.saxonArmy[0])
