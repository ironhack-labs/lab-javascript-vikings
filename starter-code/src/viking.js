class Soldier {
    constructor(health, strength) {
      this.health = health;
      this. strength = strength;
    };

    attack() {
      return this.strength;
    };

    receiveDamage(damage) {
      //Control de undefined ¿?¿?¿?
      this.health -= damage;
    };

  };
  
  class Viking  extends Soldier{
    constructor(name, health, strength) {
      super(health, strength);
      this.name = name;
  
    };

    receiveDamage(damage) {
      this.health -= damage;
      if(this.health > 0) {
        return `${this.name} has received ${damage} points of damage`;
      } else if (this.health <= 0) {
        return `${this.name} has died in act of combat`;
      }
    }

    battleCry() {
      return `Odin Owns You All!`
    }
  };
  
  class Saxon extends Soldier {
    constructor(health, strength) {
      super(health, strength);
    };

    receiveDamage(damage) {
      this.health -= damage;
      if(this.health > 0) {
        return `A Saxon has received ${damage} points of damage`;
      } else if (this.health <= 0) {
        return `A Saxon has died in combat`;
      }
    }
  };
  
  class War {
    constructor() {
      this.vikingArmy = [];
      this.saxonArmy = [];
    };

    addViking(viki) {
      this.vikingArmy.push(viki);
    }

    addSaxon(saxo) {
      this.saxonArmy.push(saxo);
    }

    vikingAttack() {
      let saxo;
      let viki;
      let nSaxo;

      nSaxo = Math.floor(Math.random() * this.saxonArmy.length);
      saxo = this.saxonArmy[nSaxo];
      viki = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
      saxo.receiveDamage(viki.strength);

      if(saxo.health <= 0) {
        this.saxonArmy.splice(nSaxo, 1);
        return `A Saxon has died in combat`;
      }
    }

    saxonAttack() {
      let saxo;
      let viki;
      let nViki;

  
      nViki = Math.floor(Math.random() * this.vikingArmy.length);
      viki = this.vikingArmy[nViki];
      saxo = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
      viki.receiveDamage(saxo.strength);

      if(viki.health <= 0) {
        this.vikingArmy.splice(nViki, 1);
      }
    }

    showStatus() {
      if (this.saxonArmy === 0) {
        return `Vikings have won the war of the century!`;
      } else if (this.vikingArmy === 0) {
        return `Saxons have fought for their lives and survive another day...`;
      } else if ((this.saxonArmy === 1) && (this.vikingArmy === 1)) {
        return `Vikings and Saxons are still in the thick of battle.`;
      }

    }

  };