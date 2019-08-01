
/**
 * /*
  Investigar destructuring
  Investigar el spread operator
  let obj ={...oldobj} es lo mismo que 
  let obj = new Obj()
  [copiar uno por uno cada propiedad del objeto]
  const {name:usrnm,blood_type}=obj;
  Notese que esto funciona para arreglos
  Investigar que es hoisting
// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
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
  constructor(nameArg, healthArg, strengthArg) {
    super(healthArg, strengthArg);
    this.name = nameArg;
  }

  /* receiveDamage(damage) {
    super(damage);
    /* if (this.health > 0)
      return `${this.name} has recieved ${damage} points of damage`;
    return `${this.name} has died in act of combat`; 
  } */

  /* battleCry() {
    return "Odin Owns You All!s";
  } */
}

// Saxon
class Saxon {}

// War
class War {}
/* 
// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {}
}

// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}

 */
