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
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;

    if (this.health > 0) {
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
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
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
    // Select a random Saxon
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomSaxonIndex];

    // Select a random Viking
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const randomViking = this.vikingArmy[randomVikingIndex];

    // Viking attacks Saxon
    const damage = randomViking.attack();
    const result = randomSaxon.receiveDamage(damage);

    // Remove dead Saxons from the army
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }

    return result;
  }

  saxonAttack() {
    // Select a random Viking
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const randomViking = this.vikingArmy[randomVikingIndex];

    // Select a random Saxon
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomSaxonIndex];

    // Saxon attacks Viking
    const damage = randomSaxon.attack();
    const result = randomViking.receiveDamage(damage);

    // Remove dead Vikings from the army
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }

    return result;
  }
  //MUY DIFICIL ESTO ATAQUES
  /*genericAttack(){   
    //Random viking and saxon
    const randomVikingIndex = Math.floor(Math.random()* this.vikingArmy.length)
    const randomSaxonIndex = Math.floor(Math.random()* this.saxonArmy)
    //Select time
    const randomViking = this.vikingArmy[randomVikingIndex]
    const randomSaxon = this.saxonArmy[randomSaxonIndex]
}*/

  showStatus() {
    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}

// Creo Vikingos y Saxons
const viking1 = new Viking("Olaf", 105, 52);
const viking2 = new Viking("Thor", 130, 41);
const saxon1 = new Saxon(60, 35);
const saxon2 = new Saxon(150, 20);

// Creamos una guerra
const war = new War();

// Añadimos en la guerra
war.addViking(viking1);
war.addViking(viking2);
war.addSaxon(saxon1);
war.addSaxon(saxon2);

// ¡¡EMPIEZA LA GUERRA!!
console.log("Viking Attack!:");
console.log(war.vikingAttack()); // Ataque Vikingo a un Saxon
console.log(war.vikingArmy); // Estado del ejército Vikingo
console.log(war.saxonArmy); // Estado del ejército Saxon

console.log("Saxon Attack:");
console.log(war.saxonAttack()); // Ataque de un Saxon a un Vikingo
console.log(war.vikingArmy); // Ver el estado del ejército Vikingo
console.log(war.saxonArmy); // Ver el estado del ejército Saxon

// Estado de la guerra
console.log("War Status...:");
console.log(war.showStatus()); // Estado actual de la guerra

// El resto es jugar con cambiar strength y vida en Saxons y Vikingos :D