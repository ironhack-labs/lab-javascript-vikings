// Soldier
class Soldier {
  constructor(health = 10, strength = 5) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    console.log('-');
    console.log(`Attack Called! This Soilder's strength is ${this.strength}`);
    return this.strength;
  }

  recieveDamage(damage) {
    console.log(`This soilder currently has ${this.health} health`);
    console.log(`${damage} points of damage is being dealt.`);

    this.health = this.health - damage;

    console.log(`${this.health} health remaining`);
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  recieveDamage(damage) {
    console.log('-');
    console.log(`This viking currently has ${this.health} health.`);
    console.log(`${damage} points of damge is being dealt.`);

    this.health = this.health - damage;

    if (this.health > 0) {
      const text = `${this.name} has recieved ${damage} points of damage`;
      console.log(text);
      return text;
    } else {
      console.log('-');
      const text = `${this.name} has died in act of combat`;
      console.log(text);
      return text;
    }
  }

  battleCry() {
    const text = 'Odin Owns You All!';
    console.log(text);
    return text;
  }
}

// Saxon
class Saxon extends Soldier {
  recieveDamage(damage) {
    console.log('-');
    console.log(`This saxon currently has ${this.health} health.`);

    this.health = this.health - damage;

    if (this.health > 0) {
      console.log('-');
      const text = `A Saxon has recieved ${damage} points of damage`;
      console.log(text);
      return text;
    } else {
      console.log('-');
      const text = 'A Saxon has died in combat';
      console.log(text);
      return text;
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];
  randomAttacker;
  randomDefender;
  attackingArmy;
  defendingArmy;

  addViking(viking) {
    console.log('-');
    console.log(`Current viking army has ${this.vikingArmy.length} vikings.`);
    console.log(`Adding viking to army...`);
    this.vikingArmy.push(viking);
    console.log(`Now it has ${this.vikingArmy.length}.`);
  }

  addSaxon(saxon) {
    console.log('-');
    console.log(`Current saxon army has ${this.saxonArmy.length} saxons.`);
    console.log(`Adding saxon to army...`);
    this.saxonArmy.push(saxon);
    console.log(`Now it has ${this.saxonArmy.length}.`);
  }

  battle(attacker, defender) {
    const army = { Viking: this.vikingArmy, Saxon: this.saxonArmy };

    this.attackingArmy = army[attacker];
    this.defendingArmy = army[defender];

    const attackIdx = randomNum(0, this.attackingArmy.length);
    const defendIdx = randomNum(0, this.defendingArmy.length);

    this.randomAttacker = this.attackingArmy[attackIdx];
    this.randomDefender = this.defendingArmy[defendIdx];

    this.battleResults();
  }

  battleResults() {
    console.log('-');

    const attacker = this.randomAttacker;
    const defender = this.randomDefender;

    defender.recieveDamage(attacker.strength);
    console.log(`current viking army size: ${this.vikingArmy.length}`);
    console.log(`current saxon army size: ${this.saxonArmy.length}`);

    if (defender.health < 1) {
      console.log(`Defending soilder died, removing from army`);
      this.defendingArmy.splice(defender, 1);

      console.log(`current viking army size: ${this.vikingArmy.length}`);
      console.log(`current saxon army size: ${this.saxonArmy.length}`);
    }
  }

  showResults() {
    console.log('-');

    const saxonSize = this.saxonArmy.length;
    const vikingSize = this.vikingArmy.length;

    if (vikingSize > 0 && saxonSize > 0) {
      console.log('Vikings and Saxons are still in the thick of battle.');
    } else {
      if (vikingSize < 1) {
        console.log(
          'Saxons have fought for their lives and survived another day...'
        );
      }
      if (saxonSize < 1) {
        console.log('Vikings have won the war of the century!');
      }
    }
  }
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const viking = new Viking('ragnar');
const saxon = new Saxon();
const war = new War();

// functions //

war.addViking(viking);
war.addSaxon(saxon);

war.battle('Viking', 'Saxon');
war.showResults();
war.battle('Viking', 'Saxon');
war.showResults();
