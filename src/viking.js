// Soldier
class Soldier {
  constructor(_health, _strength) {
    this.health = _health;
    this.strength = _strength;
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
  constructor(_name, _health, _strength) {
    super();
    this.name = _name;
    this.health = _health;
    this.strength = _strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health != 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health != 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(Viking){
        this.Viking = {}
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon){
        this.Saxon = {}
        this.saxonArmy.push(Saxon)
    }

    vikingAttack(){
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]

        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]

        let battleResult = randomSaxon.receiveDamage(randomViking.strength)

        this.saxonArmy = this.saxonArmy.filter(function(saxon){
            return saxon.health > 0;
        })
        
        return battleResult
    }
    saxonAttack(){
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]

        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]

        let battleResult = randomViking.receiveDamage(randomSaxon.strength)

        this.vikingArmy = this.vikingArmy.filter(function(viking){
            return viking.health > 0;
        })
        
        return battleResult        
    }
    showStatus(){
        if (this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`
        } else if (this.vikingArmy.length === 0){
            return `Saxons have fought for their lives and survived another day...`
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }   
     }
}
