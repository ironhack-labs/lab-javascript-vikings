// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength
    }
    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health -= damage;
    }

}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength){
        super(health,strength);
        this.name = name; 
    }

 receiveDamage(damage) {
      // REMOVE THE RECEIVED DAMAGE FROM HEALTH PROPERTY
         super.receiveDamage(damage);
         if (this.health > 0) {
             return `${this.name} has received ${damage} points of damage`
         } else {
             return `${this.name} has died in act of combat` 
        }
    }

    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
   // super(health, strength)
   receiveDamage(damage){
       super.receiveDamage(damage);
       if (this.health > 0){
           return `A Saxon has received ${damage} points of damage`
       } else {
           return "A Saxon has died in combat"
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
    let randomSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let randomViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];

    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    let damage = randomViking.attack();
    let message = randomSaxon.receiveDamage(damage);

    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }

    return message;
  }

  saxonAttack() {
    let randomSaxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let randomViking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];

    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    let damage = randomSaxon.attack();
    let message = randomViking.receiveDamage(damage);

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }

    return message;
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
