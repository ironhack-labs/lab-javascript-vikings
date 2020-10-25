// *Soldier*
// creating a class aka parent or super class (template for creating similar objects)
class Soldier {
  constructor(health, strength) {
    // constructor is the method triggered with the new kw
    this.health = health;
    this.strength = strength;
  }
  //fyi
  // const soldier1 = new Soldier(3,5);
  // console.log(soldier1) //output Soldier {health:3, strength:5}

  // class mehtod: attack and receiveDamange
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// testing
//const soldier1 = new Soldier(4,5);  --> creates a new instance of Soldier
//console.log(soldier1) --> {health:4,strength:5}
//const soldier2 = new Soldier (5,4) --> creates a new instance of Soldier
//console.log(soldier2) --> {health:5,strength:4}
//soldier1.attack(); --> strength is 5
//soldier1.receiveDamage(5); --> receives a damage of // 4-5 = -1
//console.log(soldier1.health);

// *Viking*
// another instance of the superclass/parent class of soldier
class Viking extends Soldier {
  // inherits the attributes from Soldier
  // constructor method is a special method for creating and initalizing objects created within a class
  constructor(name, health, strength) {
    // super refers to the parent/superclass and calls the constructor method and gets access to the properties and methods
    super(health, strength);
    // adding one addition attribute name, just for the Viking
    this.name = name;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      // personal note: careful with quotation marks and space
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

//testing
//const viking1 = new Viking("A",5,4); --> creates an instance of a Viking
//console.log(viking1); Viking{name:A,health:5,strength:4}
//viking1.attack(); --> strength 4
//viking1.receiveDamage(4); --> 0

// *Saxon*
// another instance of the superclass/parent class soldier
class Saxon extends Soldier {
  // constructor method is called automatically when a class is initated
  //constructor(){
  //super(health,strength);
  //};
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  }
}

// testing
//const saxon1 = new Saxon(3,4);
//console.log(saxon1);
//saxon1.receiveDamage(1);

//*War*
// this is a new class, a potential superclass or parent class
// five methods

class War {
  constructor() {
    // important: syntax is a little bit different to "normal object", = instead of :
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking) {
    // add the viking to the viking army - again personal reminder of syntax! not [] but ()! - push method
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    // add the saxon to the saxon army - again personal reminder of syntax! not [] but ()! - push method
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    // random viking is chosen
    const randomViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    //console.log(randomViking);

    let damageReceived = randomViking.strength;
    //console.log(damageReceived);
    //random saxon is chosen
    const randomSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    //console.log(randomSaxon);
    randomSaxon.receiveDamage(damageReceived);
    //console.log(randomSaxon);
    if (randomSaxon.health < 0) {
      console.log(`Saxon has died`);
    } else `Saxon has survived`;
    return damageReceived;

    // first approach
    // random viking is chosen from the army and his strength is the damage assigned to the randomly chosen saxon
    //let damageReceived = this.vikingArmy[
    //  Math.floor(Math.random() * this.vikingArmy.length)
    //].strength;
    // random saxon receives the strength from a randomly chosen viking
    //this.saxonArmy[
    //  Math.floor(Math.random() * this.saxonArmy.length)
    //].receiveDamage(damageReceived);
    //should remove dead saxons from the army
  }
  saxonAttack() {
    let damageReceived = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ].strength;
    this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ].receiveDamage(damageReceived);
  }
  showStatus() {}
}

//testing
//const war1 = new War ([],[]);
//console.log(war1);

//war1.addViking(viking1);
//console.log(war1); --> viking 1 has been added to the array
//war1.addViking(viking2);
//console.log(war1);
//war1.addSaxon(saxon1);
//console.log(war1);
//War {
//vikingArmy: Viking { health: 5, strength: 4, name: 'A' },
//Viking { health: 5, strength: 4, name: 'A' }],
//saxonArmy: [ Saxon { health: 3, strength: 4 } ]

//war1.vikingAttack();
