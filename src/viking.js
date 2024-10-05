//Las cuatro clases son Soldier, Viking, Saxon, war

// Iteración 0
/*Let's have a look at the first test case together to get you started.

The first test case says that "Soldier class >> should receive 2 arguments (health & strength)", so we have to write the correct code to pass this test. Let's make the Soldier class receive two arguments:*/

//Iteración 1
/*Modify the Soldier class and add 2 methods to it: attack(), and receiveDamage().

class
should receive 2 arguments (health & strength)
should receive the health property as its 1st argument
should receive the strength property as its 2nd argument

attack() method
should be a function
should receive 0 arguments
should return the strength property of the Soldier

receiveDamage() method
should be a function
should receive 1 argument (the damage)
should remove the received damage from the health property
shouldn't return anything
*/


// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

//Metodo para el ataque del soldado
  attack(){
      return this.strength;
  }

// Resta el daño a la salud y no devuelve nada
  receiveDamage(damage){
    this.health -= damage;
  }
};

//Iteración 2
//Viking, que hereda de Soldier
class Viking extends Soldier {
    constructor(name, health, strength) {
      super(health, strength); // Llama al constructor de Soldier
      this.name = name; // Propiedad adicional
    }
  
    // Sobrescribimos el método receiveDamage
    receiveDamage(damage) {
      this.health -= damage; // Resta el daño a la salud
  
      // Retorna un mensaje específico para los Vikingos
      if (this.health > 0) {//si salud es más que 0
        return `${this.name} has received ${damage} points of damage`;//recibe x puntos de daño pero sigue vivo
      } else {
        return `${this.name} has died in act of combat`;//la palmó
      }
    }
    //Metodo heredado attack


    // Método battleCry
    battleCry() {
      return "Odin Owns You All!";
    }
  }
  
  const viking1 = new Viking("Ragnar", 100, 20);
  // Llamamos al método heredado attack teniendo en cuenta el primer vikingo que se llama Ragnar, que tiene 100 de salud y recibe 20 de daño. 
  console.log(viking1.attack()); // Teniendo en cuenta su fuerza, console.log de vikingo1 devuelve 20 
  console.log(viking1.receiveDamage(30)); // Devuelve un mensaje de daño
  console.log(viking1.health); // Muestra la salud actual
  console.log(viking1.battleCry()); // Devuelve "Odin Owns You All!"
  
//Iteración 3
//Ahora se crea la clase Saxon, que es otra estirpe de guerreros 
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health -= damage;
        if (this.health >0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

const saxon = new Saxon(80, 15); // Crea un nuevo Saxon con 80 de salud y 15 de fuerza
console.log(saxon.receiveDamage(20)); // "A Saxon has received 20 points of damage"
console.log(saxon.health); // 60

console.log(saxon.receiveDamage(60)); // "A Saxon has died in combat"
console.log(saxon.health); // 0


//BONUS - Iteration 4: War
//Ahora hay que crear la clase war, que será un array y servirá para llevar la cuenta de la batalla entre los soldados y los vikingos
// Clase War
class War {
  constructor() {
    this.vikingArmy = []; // Inicializa el ejército vikingo como un array vacío
    this.saxonArmy = []; // Inicializa el ejército saxón como un array vacío
  }

  // Método para añadir un vikingo al ejército
  addViking(viking) {
    this.vikingArmy.push(viking); // Añade el vikingo al ejército
  }

  // Método para añadir un saxón al ejército
  addSaxon(saxon) {
    this.saxonArmy.push(saxon); // Añade el saxón al ejército
  }

  // Método para que un vikingo ataque
  vikingAttack() {
    // Solo procede si hay saxones en el ejército
    if (this.saxonArmy.length === 0) {
      return "No hay saxones para atacar!";
    }
    
    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    
    const viking = this.vikingArmy[randomVikingIndex];
    const saxon = this.saxonArmy[randomSaxonIndex];

    // Realiza el ataque
    const damageResult = saxon.receiveDamage(viking.attack());

    // Elimina al saxón si ha muerto
    if (saxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }

    return damageResult; // Devuelve el resultado del ataque
  }

  // Método para que un saxón ataque
  saxonAttack() {
    // Solo procede si hay vikingos en el ejército
    if (this.vikingArmy.length === 0) {
      return "No hay vikingos para atacar!";
    }

    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    const saxon = this.saxonArmy[randomSaxonIndex];
    const viking = this.vikingArmy[randomVikingIndex];

    // Realiza el ataque
    const damageResult = viking.receiveDamage(saxon.attack());

    // Elimina al vikingo si ha muerto
    if (viking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }

    return damageResult; // Devuelve el resultado del ataque
  }

  
//Iteración 5
  // Método para mostrar el estado de la guerra
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}

// Ejemplo de uso
const war = new War();
const viking2 = new Viking("Loki", 80, 25);
const saxon1 = new Saxon(60, 15);
const saxon2 = new Saxon(70, 10);

war.addViking(viking1);
war.addViking(viking2);
war.addSaxon(saxon1);
war.addSaxon(saxon2);

// Realizar ataques y mostrar resultados
console.log(war.vikingAttack()); // Resultado del ataque vikingo
console.log(war.saxonAttack()); // Resultado del ataque saxón
console.log(war.showStatus()); // Estado actual de la guerra
