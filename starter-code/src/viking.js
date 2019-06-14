// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack(){return this.strength;}
  receiveDamage(theDamage) { 
    this.health = this.health - theDamage;
  }
  battleCry(){return "Odin Owns You All!";}  
}

// Viking
class Viking extends Soldier  {
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }
  receiveDamage(theDamage){
    // if (typeOf (theDamage)  === NaN ) {return undefined;}
    super.receiveDamage(theDamage);
    if (this.health > 0) {
        return `${this.name} has received ${theDamage} points of damage`;
    } else {
      return 'Harald has died in act of combat';
    }
  }
}

// Saxon
class Saxon extends Soldier {
  constructor( health, strength){
    super(health, strength);
   
  }
  receiveDamage(theDamage){
    // if (typeOf (theDamage)  === NaN ) {return undefined;}
    super.receiveDamage(theDamage);
    if (this.health > 0) {
        return `A Saxon has received ${theDamage} points of damage`;
    } else {
      return "A Saxon has died in combat";
    }
  }
}

// War
class War {
  constructor() {
      this.vikingArmy = [];
      this.saxonArmy = [];
    }
    addViking(aviking){
      this.vikingArmy.push(aviking);
    }
    addSaxon(asaxon){
      this.saxonArmy.push(asaxon);
    }

    vikingAttack() {
      
      let randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length);
      let randomSaxon = this.saxonArmy[randomSaxonNumber];

      let randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length);
      let randomViking = this.vikingArmy[randomVikingNumber];

      randomSaxon.receiveDamage(randomViking.strength);

      if (randomSaxon.health <= 0) { 
        var removedSaxon = this.saxonArmy.splice(randomSaxonNumber, 1);
        return "A Saxon has died in combat";
      }
    }

    saxonAttack() {
      let randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length);
      let randomSaxon = this.saxonArmy[randomSaxonNumber];

      let randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length);
      let randomViking = this.vikingArmy[randomVikingNumber];

      randomViking.receiveDamage(randomSaxon.strength);

      if (randomViking.health <= 0) { 
        var removedViking = this.vikingArmy.splice(randomVikingNumber, 1);
      }
      return `${randomViking.name} has received ${randomSaxon.strength} points of damage`;
    }
    
    showStatus() {
      if (this.saxonArmy.length < 1) {
        return "Vikings have won the war of the century!";
      }
      else if (this.vikingArmy.length <1 ) {
        return "Saxons have fought for their lives and survive another day...";
      } else {
        return "Vikings and Saxons are still in the thick of battle.";
      }
    }
}
