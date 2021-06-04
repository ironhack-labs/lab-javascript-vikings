// Soldier

class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength
  }

  attack () {
    return this.strength
  }
  
  receiveDamage(damage) {
    this.damage = damage;
    this.health = this.health - this.damage 
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

// War // ?? NENHUM TESTE DE WAR ESTA FUNCIONANDO
class War {
  constructor() { // ?? nao esta passando no teste, é this ou let?
    this.vikingArmy = []; // ?? nao esta passando no teste, é this ou let?
    this.saxonArmy = []; // ?? nao esta passando no teste, é this ou let?
  }

  addViking(Viking) { // ?? confirmar se é assim mesmo que colocar o viking object
    this.vikingArmy.push(new Viking) // ?? confirmar se nao precisa colocar o (i,i), acho que o push vai direto pro fim. confirmar se precisa do this
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(new Saxon) // ?? confirmar se nao precisa colocar o (i,i), acho que o push vai direto pro fim. confirmar se precisa do this
  }


  vikingAttack() {
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]; // pq aqui tem que usar o let?

    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

    let attack = randomSaxon.receiveDamage(randomViking.strength); // pergutnar se tem alguma forma de fazer iso sem ter que declarar essa variavel de attack
        
    if (randomSaxon.health<=0){
      this.saxonArmy.splice(randomSaxon);
    }

    return attack

  }

  saxonAttack() {
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]; // ?? pq aqui tem que usar o let?

    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

    let attack = randomViking.receiveDamage(randomSaxon.strength); 

    if (randomViking.health<=0){
      this.vikingArmy.splice(randomViking);
    }

    return attack
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


// ?? BONUS 5 COMO REPAFORAR O CODIGO PAR NAO TER QUE REPETIR O CODIGO EM SAXON E VIKING ATTACK

class Attack extends War {
  constructor(player1,player2) { 
    this.player1 = player1
    this.player2 =player2
  }

  playerAttack() {
    let player1 = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    let player2 = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

    let attack = player1.receiveDamage(player2.strength); 

    if (player1).health<=0){
      this.player1.splice(player1);
    }

    return attack
  }

}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
