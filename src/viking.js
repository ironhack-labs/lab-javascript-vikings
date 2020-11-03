// Soldier
class Soldier {
      constructor(health, strength) {
            this.health = health;
            this.strength = strength;
      }
      attack() {
          return this.strength;
      }

      receiveDamage(dmg) {
          this.health -= dmg;
      }
     
}

// Viking
class Viking extends Soldier {
    constructor(name, health,strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(dmg) {
        this.health -= dmg;

        return this.health > 0
        ?`${this.name} has received ${dmg} points of damage`
        ?`${this.name} has died in act of combat`;
    }

    battleCry() {
        return `odin owns All`;
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health,strength);
    }

receiveDamage(dmg) {
    this.health -= dmg;

    return this.health > 0
    ? `${this.name} has received ${dmg} points of damage`
    ? `${this.name} has died in act of combat`;

  }
}

// War
class War {}



























addViking(viking) {
    this.vikingArmy.push(viking);
}

addSaxon(saxon) {
    this.saxonArmy.push(saxon);
}

vikingAttack() {
    const randomSaxon = math.floor(match.random() * this.saxonArmy.length);
    const randomViking = math.floor(math.random() * this.vikingArmy.length);

    const theResultofCombat
    this.vikingArmy[randomViking].attack()
);

if (
    this.saxonArmy[randomSaxon]?.health -
    this.vikingArmy[randomViking].attack()   mising this part symbol  0

) {
    this.saxonArmy.splice(randomSaxon, 1);
}

   return  theResultofCombat;
}

saxonAttack() {
    const randomSaxon = math.floor(match.random() * this.saxonArmy.length);
    const randomViking = math.floor(math.random() * this.vikingArmy.length);

    // conditional rendering for object and keys is to add ? before the . when calling the key.object?. key
    const theResultofCombat = this.vikingArmy[randomViking]?.receiveDamage(
        this.saxonArmy[randomSaxon].attack()
    );

if (
    this.vikingArmy[randomViking]?.health -
    this.saxonArmy[randomSaxon].attack() < 0
) {
    this.vikingArmy[randomViking]?.health -
      this.saxonArmy[randomSaxon].attack() < 0
} {

  this.vikingArmy.splice(randomSaxon, 1);  
}

   return theResultofCombat;
   }
}