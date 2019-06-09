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
    this.health -= damage;
    return;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength);  
    this.name = name; 
  }
  attack() {
    return this.strength;
  }

  receiveDamage(damage){
    this.health -= damage;
    
    if(this.health > 0){
       return `${this.name} has received ${damage} points of damage`;
    } else if(this.health <= 0){
       return `${this.name} has died in act of combat`;
    }
  }
  
  battleCry() {
    return `Odin Owns You All!`;
  }

}
  
// Saxon
class Saxon extends Soldier{
  constructor(health, strength){
    super(health, strength);
  }

  attack(){
    return this.strength;
  }

  receiveDamage(damage){
    this.health -=damage;
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`;
    } else if(this.health <= 0){
      return `A Saxon has died in combat`;
    }
  }
}

// Extra Bonus Character
// Cimerian
// class Cimerian extends Soldier{
//  constructor(one, gods, health, strength){
//    super(health, strength);
//    this.one = one; //"Conan" El elegido
//    this.gods = gods; //Su Dios Crom.
//  }
//  attack(){
//    return this.strength;
//  }
//  receiveDamage(damage){
//    this.health -=damage;
//    if(this.health > 0){
//      return `A Cimerian has received ${damage} points of damage`;
//    } else if(this.health <= 0){
//      return `A Cimerian hasn´t died in combat, is Inmortal`;
//    }
//  }
//}



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
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);

    let result = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].attack());
    //lo meto un argumento al receivedDamage q es igualarlo al attack del vikingo
    //randomSaxon.receiveDamage(randomViking.strength);
    if(this.saxonArmy[randomSaxon].health <= 0){
      this.saxonArmy.splice(randomSaxon, 1)
    }

    return result;
  }

  saxonAttack(){
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);

    let result = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].attack());
    //lo meto un argumento al receivedDamage q es igualarlo al attack del saxon

    if(this.vikingArmy[randomViking].health <= 0){
      this.vikingArmy.splice(randomViking, 1)
    }

    return result;
  }

  showStatus(){
    if(this.vikingArmy.length > 0 && this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!" //Goto Walhalla
    } else if(this.vikingArmy.length === 0 && this.saxonArmy.length > 0){
      return "Saxons have fought for their lives and survive another day...";
    } else if(this.saxonArmy.length === this.vikingArmy.length)
    {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
