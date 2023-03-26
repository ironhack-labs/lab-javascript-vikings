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

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
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
  vikingArmy = []; // here comes the new Soldier Vikings
  saxonArmy = []; // here comes the new Soldier Saxons

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  internalAttack(shouldVikingAttack) {
    // shouldVikingAttack = true or false

    let attackerArmy = this.saxonArmy;
    let victimArmy = this.vikingArmy;

    if (shouldVikingAttack) {
      console.log("Vikins will attack");
      attackerArmy = this.vikingArmy;
      victimArmy = this.saxonArmy;
    }

    let randomVictimIndex = Math.round(Math.random() * (victimArmy.length - 1)); // [i]
    let randomAttackerIndex = Math.round(
      Math.random() * (attackerArmy.length - 1)
    ); // [i]

    let victim = victimArmy[randomVictimIndex];
    let attacker = attackerArmy[randomAttackerIndex];

    let damageAttack = attacker.strength;

    console.log("::: attack :::");
    console.log({ victim, attacker });

    let resultAttack = victim.receiveDamage(damageAttack);
    console.log(resultAttack);

    //console.log("Saxon after attack", {fighterSaxon})
    if (victim.health <= 0) {
      victimArmy.splice(randomVictimIndex, 1);
      console.log("Dead!!!!");
      console.log(victimArmy);
    }

    return resultAttack;
  }

  vikingAttack() {
    /*
    let randomSaxonIndex = Math.round(
      Math.random() * (this.saxonArmy.length - 1)
    ); // [i]
    let randomVikingIndex = Math.round(
      Math.random() * (this.vikingArmy.length - 1)
    ); // [i]

    let fighterSaxon = this.saxonArmy[randomSaxonIndex];
    let fighterViking = this.vikingArmy[randomVikingIndex];

    let damageAttack = fighterViking.strength;

    console.log("::: vikingAtack :::");
    console.log({ fighterSaxon, fighterViking });

    let resultAttack = fighterSaxon.receiveDamage(damageAttack);
    console.log(resultAttack);

    //console.log("Saxon after attack", {fighterSaxon})
    if (fighterSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
      console.log("Dead!!!!");
      console.log(this.saxonArmy);
    }*/

    let resultAttack = this.internalAttack(true);
    return resultAttack;
  }

  saxonAttack() {
    /*
    let randomSaxonIndex = Math.round(
      Math.random() * (this.saxonArmy.length - 1)
    ); // [i]
    let randomVikingIndex = Math.round(
      Math.random() * (this.vikingArmy.length - 1)
    ); // [i]

    let fighterSaxon = this.saxonArmy[randomSaxonIndex];
    let fighterViking = this.vikingArmy[randomVikingIndex];

    let damageAttack = fighterSaxon.strength;

    console.log("::: saxonAtack :::");
    console.log({ fighterViking, fighterSaxon });

    let resultAttack = fighterViking.receiveDamage(damageAttack);
    console.log(resultAttack);

    //console.log("Saxon after attack", {fighterSaxon})
    if (fighterViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
      console.log("Dead!!!!");
      console.log(this.vikingArmy);
    }
    */
    let resultAttack = this.internalAttack(false);
    return resultAttack;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      console.log("Vikings have won the war of the century!");
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      console.log(
        "Saxons have fought for their lives and survived another day..."
      );
      return "Saxons have fought for their lives and survived another day...";
    } else {
      console.log("Vikings and Saxons are still in the thick of battle.");
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}

// Create and Start Game ---------------------------------------------------

let battleWar = new War();

// create saxons & vikings
let newSaxon1 = new Saxon(100, 40);
let newSaxon2 = new Saxon(100, 50);
let newViking1 = new Viking("Martin", 100, 60);
let newViking2 = new Viking("Silvia", 100, 60);
let newViking3 = new Viking("Luan", 100, 70);

// add figthers to war
battleWar.addSaxon(newSaxon1);
battleWar.addSaxon(newSaxon2);
battleWar.addViking(newViking1);
battleWar.addViking(newViking2);
battleWar.addViking(newViking3);

// start viking attack
battleWar.vikingAttack();
battleWar.vikingAttack();
battleWar.vikingAttack();

battleWar.saxonAttack();

battleWar.showStatus();
