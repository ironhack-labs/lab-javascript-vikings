// Soldier
class Soldier {
  constructor(h, s) {
    this.health = h;
    this.strength = s;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

//test to inherit Viking from Soldier ??? !!!!
//const viking = new Soldier();
//const saxon = new Soldier();
class Viking extends Soldier {
  constructor(n, h, s) {
    super(h, s);
    this.name = n;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    //enlever les vies du soldat
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    this.name = "Odin Owns You All!";
    return this.name;
  }
}

// Saxon
// inherit Saxon from Soldier ??!!!
class Saxon extends Soldier {
  constructor(h, s) {
    super(h, s);
  }

  receiveDamage(damage) {
    //enlever les vies du soldat
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];
  addViking(viking) {
    this.vikingArmy.push(viking); //should add the recieved viking to the army
    this.vikingArmy; //return empty
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon); //should add the recieved saxon to the army
    this.saxonArmy; //return empty
  }

  //Armies Attack

  vikingAttack() {
    //return this.attack()??
    /*let randomSaxon = this.saxonArmy[Math.floor
    (Math.random() * this.saxonArmy.length)];*/
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonIndex];

    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomVikingIndex];

    let attackResultViking = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }
    return attackResultViking;
  }

  /* test: let randomViking = this.vikingArmy[Math.floor 
        (Math.random() * this.vikingArmy.length)];
        randomSaxon.receiveDamage(randomViking.strength);
        if (randomSaxon.health <= 0) { //if his life is less than zero is dead}
    //saxon.receiveDamage(damage) === this.strength;
    //only one saxon will be damaged have to use math.random()
    //when I have a random saxon or a random viking 
    //wrap the functioninside a variable if the saxon died or not dependin gon the health
    //same thing  lets random viking
    //then an attack happens -> have to use the strenght and health 
    //each viking will have a recieved damaged function 
    //have to define those into the class viking or class saxon 
    //Have to create the army from the class saxon and the class viking
    //I have to call the elements*/

  saxonAttack() {
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomVikingIndex];

    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonIndex];

    let attackResultSaxon = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }
    return attackResultSaxon;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
