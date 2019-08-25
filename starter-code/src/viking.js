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
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  attack(){
    return super.attack();
  } 

  receiveDamage(damage){
    super.receiveDamage(damage);

    if(this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {

      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {

    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {

  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage){
    super.receiveDamage(damage);

    if(this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {

      return `A Saxon has died in combat`;
    }
  }

}

// War
class War {

  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  
  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {

    let theViking = this._getRandomMember(this.vikingArmy)[0];
    let [theSaxon, theSaxonKey] = this._getRandomMember(this.saxonArmy);
   
    let attackResult = theSaxon.receiveDamage(theViking.attack());  

    if (theSaxon.health <= 0) this.saxonArmy.splice(theSaxonKey, 1);
  
    return attackResult;
  }

  saxonAttack() {

    let theSaxon = this._getRandomMember(this.saxonArmy)[0];
    let [theViking, theVikingKey] = this._getRandomMember(this.vikingArmy);
   
    let attackResult = theViking.receiveDamage(theSaxon.attack());  

    if (theViking.health <= 0) this.vikingArmy.splice(theVikingKey, 1);
  
    return attackResult;
  }

  showStatus() {

    let msgSaxonWon = `Saxons have fought for their lives and survive another day...`;
    let msgVikingWon = `Vikings have won the war of the century!`;
    let msgWarContinues = `Vikings and Saxons are still in the thick of battle.`;

    return (this.saxonArmy.length === 0) ? msgVikingWon : (
           (this.vikingArmy.length === 0) ? msgSaxonWon : msgWarContinues);
     
  }
 
  _getRandomMember(army) {

    let keyArmyTotal = army.length - 1;
    let keyMemberSelected = Math.round(Math.random() * keyArmyTotal);
    let memberSelected = army[keyMemberSelected];

    return [memberSelected, keyMemberSelected];
  }

}
