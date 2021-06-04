// Soldier

class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack () {
    return this.strength
  }
  
  receiveDamage(damage) {
    this.damage = damage;
    this.health = this.health - this.damage;
  }  
}

// Viking

class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name
  }

  // attack() should be inherited from Soldier, no need to re-implement it

  receiveDamage(damage) {
    this.health = this.health - damage // nao precisa colocar o this na frente pq o damage só está nesta funcao

    if (this.health > 0) return `${this.name} has received ${damage} points of damage`
    return `${this.name} has died in act of combat`// nao precisa falar do else pq vai sair do if se for false e cai nesse return
  }

    battleCry() {
      return 'Odin Owns You All!'
    }
}

// Saxon

class Saxon extends Soldier { // You don't have to include constructor method since this class will inherit perfectly from the parents class, both, the health and the strength (it extends Soldier class 😉 )

  // attack() should be inherited from Soldier, no need to re-implement it

  receiveDamage(damage) {
    this.health = this.health - damage

    if (this.health > 0) return `A Saxon has received ${damage} points of damage`
    return `A Saxon has died in combat`
  }

}

// War 
class War {
  constructor() { 
    this.vikingArmy = []; // aqui é this pq não estamos criando uma variável, só estamos dizendo que a classe vai ter este atributo
    this.saxonArmy = []; 
  }
  
  addViking(viking) { // viking aqui é passador
    this.vikingArmy.push(viking) 
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon) // não precisa colocar o (i,i) pq diferente da aula não estamos declarando um novo objeto com os atributos i,i 
  }

 
  vikingAttack() {
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]; // usamos o let pq senao geraria 2 random diferentes, um pro attack e outro pro if dead

    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

    let attack = randomSaxon.receiveDamage(randomViking.strength); 
        
    if (randomSaxon.health<=0){
      this.saxonArmy.splice(indexOf(randomSaxon),1);
    }

    return attack

  }

  saxonAttack() {
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

    let attack = randomViking.receiveDamage(randomSaxon.strength); 

    if (randomViking.health<=0){
      this.vikingArmy.splice(indexOf(randomViking),1);
    }

    return attack
  }

  /*

  attack(soldier) { // BONUS 5
    
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    
    if (soldier === 'viking') {
      let attack = randomSaxon.receiveDamage(randomViking.strength);

      if (randomSaxon.health<=0){
        this.saxonArmy.splice(indexOf(randomSaxon),1);
      }

      return attack

    } else if (soldier === 'saxon'){
      let attack = randomViking.receiveDamage(randomSaxon.strength);

      if (randomViking.health<=0){
        this.vikingArmy.splice(indexOf(randomViking),1); // ?? esta errado, precisa consertar o splice. onde comeca e quantos itens vai remover. tem que tirar o random viking. metodo que encontra o indice no array

      return attack
      
    }

    */
    
  }

  showStatus() {
    if(this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    }
    if(this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day..."
    }
    if(this.vikingArmy.length>0 && this.saxonArmy.length>0) {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }

}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
