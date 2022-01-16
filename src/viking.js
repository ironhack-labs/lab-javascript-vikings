// Soldier
class Soldier {
  constructor(health, strength)
  {
    this.health = health;
    this.strength = strength;
  }

  attack() 
  {
    return this.strength;
  }

  receiveDamage(damage) 
  {
    this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength)
  {
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

  receiveDamage(damage)
  {
    this.health -= damage;
  }

  battleCry()
  {
    console.log("Odin Owns You All!");
  }

  name = ""
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) 
  {
    this.health -= damage;
    console.log("A Saxon has received " + damage + " points of damage");

    if (this.health <= 0)
    {
        this.health = 0;
        console.log("A Saxon has died in combat.")
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  constructor()
  {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking)
  {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon)
  {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack()
  {
    this.Attack(saxonArmy);
  }

  saxonAttack()
  {
    this.Attack(vikingArmy);
  }

  Attack(Army)
  {
    let position = Math.random() * Army.length;
    Army[position] = (Army[position] > 0) ? Army[position] : 0;
  }

  showStatus()
  {
    if (this.saxonArmy.length == 0)
    {
      console.log("Vikings have won the war of the century!");
    }

    if (this.vikingArmy.length == 0)
    {
      console.log("Saxons have fought for their lives and survived another day...")
    }

    if ((this.vikingArmy.length > 0) && (this.saxonArmy.length > 0))
    {
      console.log("Vikings and Saxons are still in the thick of battle.")
    }
  }
}

var test = new War();
test.showStatus();

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
