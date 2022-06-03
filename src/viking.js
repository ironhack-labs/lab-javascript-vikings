// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength;
  }
  receiveDamage(damage){
    this.health -= damage;
  }

}

// Viking
class Viking extends Soldier{
  constructor(name,health,strength){
    super(health,strength);
    this.name = name;
  }
  receiveDamage(damage){
    this.health-=damage;
    if(this.health > 0){
      return `${this.name} has received ${damage} points of damage`;
    }else{
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry(){
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(damage){
    this.health -= damage;

    if(this.health > 0){
      return (`A Saxon has received ${damage} points of damage`);
    }else{
      return (`A Saxon has died in combat`)
    }
  }
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

  //SUPER BONUS - Iteration 5
  attack(attacker) {
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    const viking = this.vikingArmy[randomViking];
    const saxon = this.saxonArmy[randomSaxon];
    let message;

    if (attacker === "viking"){
      message = saxon.receiveDamage(viking.attack());
      if (saxon.health <= 0) {
        this.saxonArmy.splice(randomSaxon, 1);
      }
    
    } else if (attacker == "saxon"){
      message = viking.receiveDamage(saxon.attack());  
      if (viking.health <= 0) {
        this.vikingArmy.splice(randomViking, 1);
      }  
    
    
    }else{
      throw `Error ${attacker} not an avaliable army`;
    }
    return message;
  }

  vikingAttack(){
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);

    const saxon = this.saxonArmy[randomSaxon];
    const damage = this.vikingArmy[randomViking].attack();
    let message = saxon.receiveDamage(damage);


    if(saxon.health <= 0){
      this.saxonArmy.splice(randomSaxon,1);
    }
    return message;
  }

  saxonAttack(){
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);

    const viking = this.vikingArmy[randomViking];
    const damage = this.saxonArmy[randomSaxon].attack();
    let message = viking.receiveDamage(damage);


    if (viking.health <= 0) {
      this.vikingArmy.splice(randomViking, 1);
    }  
    return message;
  }
  showStatus(){
    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return "Vikings and Saxons are still in the thick of battle."
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day..."
      
    }
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!'
    }
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
