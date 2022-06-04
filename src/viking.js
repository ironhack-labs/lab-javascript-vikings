// Soldier


class Soldier{
  constructor(health, strength){
     this.health = health;
     this.strength = strength;  
    };
   
    attack(){
      return this.strength;
    };

    receiveDamage(damage){
      this.health = this.health - damage;
    };

}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage){
    this.health = this.health-damage;
    if(this.health > 0){
      return `${this.name} has received ${damage} points of damage`
    }else{
      return `${this.name} has died in act of combat`
    }
  }

  battleCry(){
    return 'Odin Owns You All!'
  }
  attack(){
    return this.strength;
  }

}

// Saxon
class Saxon extends Soldier{

  attack(){
    return this.strength;
  }

  receiveDamage(damage){
    this.health = this.health-damage;
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`
    }else{
      return `A Saxon has died in combat`
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
    this.vikingArmy.push(Viking);
  };

  addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
  };


  vikingAttack(){
    let randomSaxon = Math.floor(this.saxonArmy.length * Math.random());
    let randomViking = Math.floor(this.vikingArmy.length * Math.random());

    let vikingHit = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);

    if(this.saxonArmy[randomSaxon].health <= 0){
      this.saxonArmy.splice(randomSaxon,1);
    }
    return vikingHit;
  };

  saxonAttack(){
    let randomSaxon = Math.floor(this.saxonArmy.length * Math.random());
    let randomViking = Math.floor(this.vikingArmy.length * Math.random());
    
    let saxonHit = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);

    if(this.vikingArmy[randomViking].health <= 0){
      this.vikingArmy.splice(randomViking,1)
    }
    return saxonHit;

  };

  showStatus(){
    if(this.saxonArmy.length <= 0){
      console.log('Vikings have won the war of the century!')
      return 'Vikings have won the war of the century!'
    } else if(this.vikingArmy.length <= 0){
      console.log('Vikings have won the war of the century!')
      return 'Saxons have fought for their lives and survived another day...'
    } else if(this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1){
      console.log('Vikings and Saxons are still in the thick of battle.')
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  };
}

/*
const vikingo = new Viking ('Odin', 5, 4)
const warriorSaxon = new Saxon (5,2)
const resultWar = new War ()

while(vikingo.health > 0 || warriorSaxon.health > 0){
  if(vikingo.health <= 0 || warriorSaxon.health <= 0){
    break;
  }

  resultWar.showStatus();
}
*/




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
