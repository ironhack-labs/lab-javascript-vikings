// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack(){
    return this.strength;
  }

  receiveDamage(damage){
    this.health = this.health - damage;
  }

}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage){
    this.health = this.health - damage;
    if(this.health <= 0){
      return `${this.name} has died in act of combat`
    } else {
      return `${this.name} has received ${damage} points of damage`
    }
  }

  battleCry(){
    return "Odin Owns You All!"
  }

}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage){
    this.health = this.health - damage;
    if(this.health <= 0){
      return `A Saxon has died in combat`
    } else {
      return `A Saxon has received ${damage} points of damage`
    }
  }
 
}

// War
class War {
  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
    console.log(this.vikingArmy)
    console.log(this.saxonArmy)
  }

  addViking(viking){
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }

  vikingAttack(){
    function randomSoldier(arr) {
        return arr[Math.floor(Math.random() * (arr.length))];
      }

      let viking = randomSoldier(this.vikingArmy);
      let saxon = randomSoldier(this.saxonArmy);

      let attack = saxon.receiveDamage(viking.strength);

      if(attack === "A Saxon has died in combat") {
            this.saxonArmy.splice(this.saxonArmy.indexOf(saxon),1);
          }
          
    return attack

  }
    
  saxonAttack(){
    function randomSoldier(arr) {
        return arr[Math.floor(Math.random() * (arr.length))];
      }
    
      let viking = randomSoldier(this.vikingArmy);
      let saxon = randomSoldier(this.saxonArmy);

      let attack = viking.receiveDamage(saxon.strength)

      if(attack === `${viking.name} has died in act of combat`){
          this.vikingArmy.splice(this.vikingArmy.indexOf(viking),1);
      }
    
      return attack
  }

     showStatus(){
         if(!this.saxonArmy.length){
             return "Vikings have won the war of the century!"
         } else if(!this.vikingArmy.length) {
             return "Saxons have fought for their lives and survived another day..."
         } else if(this.vikingArmy.length === 1 && this.saxonArmy.length === 1){
             return "Vikings and Saxons are still in the thick of battle."
         }
     }
}
