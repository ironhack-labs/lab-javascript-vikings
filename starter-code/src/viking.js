// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }

  // returns the strenght of the solider
  attack() {
    return this.strength;
  }

// should remove the received damage from the health property
  receiveDamage(theDamage) {
    this.health -= theDamage;
  }
}




// Viking
class Viking extends Soldier {
  constructor( name, health, strength ) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(theDamage) {
    this.health -= theDamage;

    if(this.health >0){
      return `${this.name} has received ${theDamage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry(){
    return 'Odin Owns You All!'
  }
}
// Saxon
class Saxon extends Soldier{
  constructor(health, strength){
    super(health, strength)
  }
  receiveDamage(theDamage){
    this.health -= theDamage;
    if(this.health > 0){
      return `A Saxon has received ${theDamage} points of damage`
    }else{
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking){
    //Adds 1 Viking to the vikingArmy
    this.vikingArmy.push(viking);
  }


  addSaxon(saxon){
    ////Adds 1 Saxon to the SaxonArmy
    this.saxonArmy.push(saxon);
  }
 

  vikingAttack(){

    //grabs the index of the Saxon
    let attackedSaxonArrayPosition = Math.floor(Math.random()*this.saxonArmy.length);
    let attackedSaxon = this.saxonArmy[attackedSaxonArrayPosition];
    let vikingAttacker = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    
    // should make a Saxon receiveDamage() equal to the strength of a Viking
    let results = attackedSaxon.receiveDamage(vikingAttacker.strength);

     // remove dead saxons from the army
    if(attackedSaxon.health <= 0){
      this.saxonArmy.splice(attackedSaxonArrayPosition, 1);
    }

    // should return result of calling receiveDamage() of a Saxon with the strength of a Viking  
    return results;
    
   
  }
  
  saxonAttack(){
    let attackedVikingArrayPosition = Math.floor(Math.random()*this.vikingArmy.length);
    let attackedViking = this.vikingArmy[attackedVikingArrayPosition];
    let saxonAttacker = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    
    // should make a Saxon receiveDamage() equal to the strength of a Viking
    let results = attackedViking.receiveDamage(saxonAttacker.strength);

     // remove dead saxons from the army
    if(attackedViking.health <=  0){
      this.vikingArmy.splice(attackedVikingArrayPosition, 1);
    }

    // should return result of calling receiveDamage() of a Saxon with the strength of a Viking  
    return results;
  }

  showStatus(){

    if(this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!";
    } else if(this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survive another day...";
    }else if(this.vikingArmy.length > 0 && this.saxonArmy.length > 0){
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}


