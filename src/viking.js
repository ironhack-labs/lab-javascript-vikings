// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function attack() {
      return strength;
    };
    this.receiveDamage = function receiveDamage(damage) {
      this.health -= damage;
    };
    this.battleCry = function battleCry() {
      return "Odin Owns You All!";
    };
  }
}

// Viking

class Viking extends Soldier {
  constructor(name, health, strength) {
    super(); //Sei que tem que colocar ele, mas o que ele faz? *Pesquisar*
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.attack = function attack() {
      return strength;
    };
    this.receiveDamage = function receiveDamage(damage) {
      this.health -= damage;
      if (this.health !== 0) {
        return `${name} has received ${damage} points of damage`; //Pq aqui nao precisa colocar o this.name e lá fora precisa? *Pesquisar*
      } else {
        return `${name} has died in act of combat`;
      }
    };
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super();
    this.health = health;
    this.strength = strength;
    this.attack = function attack() {
      return this.strength;
    };
    this.receiveDamage = function receiveDamage(damage) {
      this.health -= damage;
      if (this.health !== 0) {
        return `A Saxon has received ${damage} points of damage`;
      } else {
        return `A Saxon has died in combat`;
      }
    };
  }
}

// War
class War {
  vikingArmy = []; // pq aqui nao pode colocar this?
  saxonArmy = [];
  addViking = function addViking(vikingObj) {

    this.vikingArmy.push(vikingObj);

  };
  addSaxon = function addSaxon(saxonObj){
      this.saxonArmy.push(saxonObj);
  }
}
