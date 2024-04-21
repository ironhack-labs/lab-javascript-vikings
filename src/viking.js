// Soldier
class Soldier {
    //iteration 0
    constructor(health, strength) {
      this.health = health;
      this.strength = strength;
    }
  
    //iteration 1: metodos
    attack() {
      return this.strength;
    }
  
    receiveDamage(damage) {
      this.health = this.health - damage;
    }
  }
  
  // Viking
  // iteration 2: clase Viking va a ser hija de Soldier (va a heredar sus propiedades y métodos)
  class Viking extends Soldier {
    constructor(name, health, strength) {
      super(health, strength);
      this.health = health;
      this.strength = strength;
      this.name = name;
    }
  
    // reimplementamos el metodo receiveDamage
    receiveDamage(damage) {
      this.health = this.health - damage;
      if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`;
      } else if (this.health <= 0) {
        return `${this.name} has died in act of combat`;
      }
    }
    // nuevo metodo
    battleCry() {
      return "Odin Owns You All!";
    }
  }
  
  // Saxon
  class Saxon extends Soldier {
    //reimplementamos solo el metodo receiveDamage que es el unico que cambia respecto a la clase padre Soldier, el resto se mantienen igual
    receiveDamage(damage) {
      this.health = this.health - damage;
      if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`;
      } else if (this.health <= 0) {
        return `A Saxon has died in combat`;
      }
    }
  }
  
  // War
  class War {
    // propiedades
    constructor() {
      this.vikingArmy = [];
      this.saxonArmy = [];
    }
  
    // metodos
    addViking(viking) {
      this.vikingArmy.push(viking);
    }
  
    addSaxon(saxon) {
      this.saxonArmy.push(saxon);
    }
  
    vikingAttack() {
      const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
      const randomVikingIndex = Math.floor(
        Math.random() * this.vikingArmy.length
      );
  
      const randomSaxon = this.saxonArmy[randomSaxonIndex];
      const randomViking = this.vikingArmy[randomVikingIndex];
  
      // damage de Saxon sera igual al attack de un viking
      const result = randomSaxon.receiveDamage(randomViking.strength);
      if (randomSaxon.health <= 0) {
        return this.saxonArmy.splice(randomSaxonIndex, 1);
      } else if (randomSaxon.health > 0) {
        return result;
      }
    }
  
    saxonAttack() {
      const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
      const randomVikingIndex = Math.floor(
        Math.random() * this.vikingArmy.length
      );
  
      const randomSaxon = this.saxonArmy[randomSaxonIndex];
      const randomViking = this.vikingArmy[randomVikingIndex];
  
      const result = randomViking.receiveDamage(randomSaxon.strength);
      if (randomViking.health <= 0) {
        return this.vikingArmy.splice(randomVikingIndex, 1);
      } else if (randomViking.health > 0) {
        return result;
      }
    }
  }