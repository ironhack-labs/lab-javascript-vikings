// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(theDamage) {
    this.health -= theDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(theDamage) {
    this.health -= theDamage;
    if (this.health > 0) {
      return `${this.name} has received ${theDamage} points of damage`;
    }
    return `${this.name} has died in act of combat`;
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

/* Muy importante fijarse bien si has puesto bien las llaves, 
los corchetes o las comillas. esos pequeños fallos
hacen que no se te ejecute bien una función */

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(theDamage) {
    this.health -= theDamage;
    if (this.health > 0) {
      return `A Saxon has received ${theDamage} points of damage`;
    }
    return `A Saxon has died in combat`;
  }
}
// War
class War {
  vikingArmy = [];
  saxonArmy = [];
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    let saxon1 =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let viking1 =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    let damage = saxon1.receiveDamage(viking1.strength);

    /* Hay que guardar que el saxon1 recibe daño dentro de una variable, porque sino cuando
   hay que retornarlo no te lo va a ejecutar */

    /*IndexOff funciona solo con los Arrays */

    if (saxon1.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(saxon1), 1);
    }
    /* Hay que nombrar el Array de los saxones para usar splice y poder remover el elemento, pero tienes
que decir cual es el elemento que quieres remover y desde donde usando el indexof, por último tienes
que nombrar el elemento "saxon1" seleccionado aleatoriamente que quieres remover, y como último parametro tienes que decir cuantos
valores quieresremover */

    return damage;
  }
  /*Solo se devuelve entre `` cuando quieres devolver un string */
  saxonAttack() {
    let saxon1 =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let viking1 =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    let damage = viking1.receiveDamage(saxon1.strength);

    if (viking1.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(viking1), 1);
    }
    return damage;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
        return "Vikings have won the war of the century!"
    }
    else if (this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survived another day..."
    }
    else {
      return "Vikings and Saxons are still in the thick of battle."
    }
    
  }
}
