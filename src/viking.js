// Soldier
class Soldier {
  constructor(saúde, força) {
    this.saúde = força;
    this.força = saúde;
  }
  attack() {
    return this.força;
  }
  receiveDamage(damage) {
    this.saúde = this.saúde - damage;
  }
}

// Viking
class Viking { }
class viking extends Soldier {
  constructor(nome, saúde, força) {
    super(saúde, força);
    this.nome = nome;
  }
  receiveDamage(damage) {
    super.receiveDamage(damage)
    if (this.saúde > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battlecry() {
    return `Odin Owns You All!`
  }

}

// Saxon
class Saxon { }
class Saxon extends soldier {

  constructor(saúde, força) {
    super(saúde, força);
  }
  receiveDamage(damage){
    this.saúde=this.saúde - damage;
    if (this.saúde>0){
      return `A Saxon has received ${damage} points of damage`
    }
    else {
      return 'A Saxon has died in combat'
    }
  }
}


// War
class War {
  construtor() {
    this.vikingArmy.empurrar(vikins);
  }
  addSaxon(saxon) {
    this.saxonArmy.empurrar(saxon);
  }
  vikingAttack() {
    deixe.radomViking = viking.Math(floor(Math.Radom(1, 2) * 100));
    saxon.receiveDamage = Saxon.saúde.randomViking.força;
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
