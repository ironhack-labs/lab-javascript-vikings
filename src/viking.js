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
  constructor(name, health, strength){
   super(health, strength);
   this.name = name;
  }
  receiveDamage(damage){
    this.health -= damage;

    if(this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
    return `${this.name} has died in act of combat`;
  }
  battleCry(){
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier{

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0){
      return `A Saxon has received ${damage} points of damage`;
    }
  return `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor(){
  this.vikingArmy = [];
  this.saxonArmy = [];

  }
  addViking(Viking){
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon){
    this.saxonArmy.push(Saxon);
  }
  vikingAttack(){
    let hitSaxon = Math.floor(Math.random()*this.saxonArmy.length);
    let hitViking = Math.floor(Math.random()*this.vikingArmy.length);
    let vikingStrength = this.vikingArmy[hitViking].strength;
    let attackedSaxon = this.saxonArmy[hitSaxon];
    let attack = attackedSaxon.receiveDamage(vikingStrength);
    if (attackedSaxon.health <= 0){
    this.saxonArmy.splice(hitSaxon, 1);
    }
    return attack;
  }
  saxonAttack(){
    let hitSaxon = Math.floor(Math.random()*this.saxonArmy.length);
    console.log(hitSaxon);
    let hitViking = Math.floor(Math.random()*this.vikingArmy.length);
    let saxonStrength = this.saxonArmy[hitSaxon].strength;
    let attackedViking = this.vikingArmy[hitViking];
    let attack = attackedViking.receiveDamage(saxonStrength);
    if (attackedViking.health <= 0){
      this.vikingArmy.splice(hitViking, 1);
      }
    return attack;

  }
  showStatus(){
    let winner
    if (this.saxonArmy.length < 1){
      winner = "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length < 1){
      winner = "Saxons have fought for their lives and survived another day..."
    } else if (this.vikingArmy.length === this.saxonArmy.length){
      winner = "Vikings and Saxons are still in the thick of battle."
    }

    return winner 
  }
}

