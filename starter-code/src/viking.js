// Soldier
class Soldier {
  constructor (health, strength){ 
    this.health = health;
    this.strength = strength;
  }

  attack() {
      return this.strength;
  }

  receiveDamage(damage){
    this.health -= damage; 
  }

}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength){
    super (health, strength);
    this.name = name; 
  }

  receiveDamage (damage){
    this.health -= damage; 
    if (this.health > 0){
      return this.name + " has received " + damage.toString() + " points of damage"
    }
    if(this.health <=0){
      return this.name + " has died in act of combat"
    }

  }
  battleCry(){
    return "Odin Owns You All!";
  }

}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength){
    super(health, strength);
  }
  receiveDamage(damage){
    this.health -= damage; 
    if (this.health > 0){
      return "A Saxon has received " + damage + " points of damage"
    }
    if(this.health <=0){
      return "A Saxon has died in combat"
    }
  }
}

// War
class War {

  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking(viking){
    this.vikingArmy.push(viking);

  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }

  vikingAttack(){
    let s = Math.floor(Math.random() * this.saxonArmy.length);
    let v = Math.floor(Math.random() * this.vikingArmy.length);

    saxonArmy[s].receiveDamage(vikingArmy[v].strength);
    
    let newHealth = saxonArmy[s].health;
    if (newHealth <=0){
      saxonArmy.splice(s,1);
    }
    return newHealth;
  }

  saxonAttack(){}
  showStatus(){}

}
