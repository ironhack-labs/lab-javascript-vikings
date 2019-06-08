// Soldier
class Soldier {
  constructor (health, strength){
    this.health=health;
    this.strength=strength;
  }
  attack(){
    return this.strength;
  }
  receiveDamage(damage){
    this.health-=damage;
  }
}

// Viking
class Viking extends Soldier{
  constructor(name,health,strength){
    super (health, strength);
    this.name = name
  }
  receiveDamage(damage){
    this.health-=damage;
    if (this.health > 0){
      return `${this.name} has received ${damage} points of damage`
    }
    else return `${this.name} has died in act of combat`
  }
  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier{
  constructor(health,strength){
    super (health, strength);
  }
  receiveDamage(damage){
    this.health-=damage;
    if (this.health > 0){
      return `A Saxon has received ${damage} points of damage`
    }
    else return "A Saxon has died in combat"
  }
}

// War
class War {
  constructor(){
    this.vikingArmy= [];
    this.saxonArmy= [];
  }
  addViking(Viking){
    this.vikingArmy.push(Viking)
  }
  addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
  }
  vikingAttack(){
    //Make Saxon recieveDamage()
    let randomSaxonIndex= Math.floor((Math.random()*this.saxonArmy.length));
    let randomVikingIndex= Math.floor((Math.random()*this.vikingArmy.length));
    let vikingAttack = this.saxonArmy[randomSaxonIndex].receiveDamage(this.vikingArmy[randomVikingIndex].attack());
    //Remove dead Saxons from the army
    if (this.saxonArmy[randomSaxonIndex].health<=0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxonIndex), 1);
    }
    //Return the result of calling recieveDamage()of a saxon with the strength of a viking
    return vikingAttack;
  }

  saxonAttack(){
    //Make viking recieveDamage()
    let randomSaxonIndex= Math.floor((Math.random()*this.saxonArmy.length));
    let randomVikingIndex= Math.floor((Math.random()*this.vikingArmy.length));
    this.vikingArmy[randomVikingIndex].receiveDamage(this.saxonArmy[randomSaxonIndex].attack());
    //Remove dead vikings from the army
    if (this.vikingArmy[randomVikingIndex].health<=0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(randomVikingIndex), 1);
    }
  }
  showStatus(){
    if (this.saxonArmy.length<=0){
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length<=0){
      return "Saxons have fought for their lives and survive another day...";
    } else return "Vikings and Saxons are still in the thick of battle.";
  }
}