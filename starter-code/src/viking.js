// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack = function () {
    return this.strength;
  }

  receiveDamage = function (damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage = function (damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry = function () {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {

  receiveDamage = function (damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return "A Saxon has died in combat";
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking = function (viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon = function (saxon) {
    this.saxonArmy.push(saxon);
  }

  /*Los saxonAttack y vikingAttack no consigo que me pasen los test de jasmine, no se si es que no he usado correctamente los metodos 
  Math.floor y random (los mire por internet y en la leccion class and inheritance) o si el error es debido a otra cosa*/

  vikingAttack = function () {

    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length - 1);

    let saxonPlayer = this.saxonArmy[randomSaxon];
    let vikingPlayer = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length - 1)];

    let result = saxonPlayer.receiveDamage(vikingPlayer.attack());
    if (saxonPlayer.health <= 0) {
      //quitarlo del array saxonArmy
      this.saxonArmy.splice(randomSaxon, 1);
    }
    return result;
  }
  saxonAttack = function () {

    let ramdonViking = Math.floor(Math.random() * this.vikingArmy.length - 1);

    let vikingPlayer = this.vikingArmy[ramdonViking];
    let saxonPlayer = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length - 1)];

    let result = vikingPlayer.receiveDamage(saxonPlayer.attack());
    if (vikingPlayer.health <= 0) {
      //quitarlo del array vikingArmy
      this.vikingArmy.splice(ramdonViking, 1);
    }
    return result;
  }
}
