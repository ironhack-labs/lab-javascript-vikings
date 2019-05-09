// Soldier
class Soldier {

  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }

  attack(){
    return this.strength;
  }

  receiveDamage(theDamage){
    this.health -= theDamage;
  }

}

// Viking
class Viking extends Soldier {

  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }

  receiveDamage(theDamage){
    super.receiveDamage(theDamage);

    if(this.health < 1){
      return `${this.name} has died in act of combat`
    }
    else{
      return `${this.name} has received ${theDamage} points of damage`;
    }
  }
  
  battleCry(){
    return `Odin Owns You All!`;
  }

}

// Saxon
class Saxon extends Soldier {

  constructor(health, strength){
    super(health, strength);
  }

  receiveDamage(theDamage){
    super.receiveDamage(theDamage);

    if(this.health < 1){
      return `A Saxon has died in combat`
    }
    else{
      return `A Saxon has received ${theDamage} points of damage`;
    }
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
    let randomSaxon = this.chooseCharacter(this.saxonArmy);
    let randomViking = this.chooseCharacter(this.vikingArmy);
    let damageGiven = randomSaxon.receiveDamage(randomViking.strength);

    let saxonArmyFiltered = this.saxonArmy.filter(e => e.health > 0);
    this.saxonArmy = saxonArmyFiltered;

    return damageGiven;
  }

  saxonAttack(){
    let randomSaxon = this.chooseCharacter(this.saxonArmy);
    let randomViking = this.chooseCharacter(this.vikingArmy);
    let damageGiven = randomViking.receiveDamage(randomSaxon.strength);

    let vikingArmyFiltered = this.vikingArmy.filter(e => e.health > 0);
    this.vikingArmy = vikingArmyFiltered;

    return damageGiven;
  }

  showStatus(){
    if(this.vikingArmy.length === 0){
      return `Saxons have fought for their lives and survive another day...`
    }
    else if(this.saxonArmy.length === 0){
      return `Vikings have won the war of the century!`
    }
    else if(this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1){
      return `Vikings and Saxons are still in the thick of battle.`
    }
  }

  chooseCharacter(arr){
    let randomIndex = Math.floor(Math.random() * arr.length);
    console.log(randomIndex)
    let randomCharacter = arr[randomIndex];

    return randomCharacter;
  }

}
