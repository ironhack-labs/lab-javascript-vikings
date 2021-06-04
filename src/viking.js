// Soldier
class Soldier {
  constructor (health, strenght){
    this.health = health;
    this.strenght = strenght;
  }

}

attack (){
  return this.strenght;
}

receiveDamage(damage){
      this.health -= damage;
}

// Viking
class Viking {}
  class Viking extends Soldier{
    constructor(name, health,strenght){
      super(health,strenght);
      this.name = name;
  }
  receiveDamage(damage){
    return this.health -= damage;
    if(this.health > 0){
      return '${this.name} has received ${damage} points of damage';
    }
    return '${this.name} has died in combat!!!!!';
  }
  
  battleCry(){
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon {}
    class Saxon extends Soldier{
      receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
          return 'A Saxon has received ${damage} in combat!!!!';
        }

        return 'A Saxon has died in combat!!!!'
      }
    }


// War
class War {}
class War{
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking){
    this.vikingArmy.push(viking);
  }

  addSaxon(Saxon){
    this.saxonArmy.push(Saxon);
  }

  vikkingAttack(){
    let attacker = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let attackedSaxon = this.saxonArmy[Math.floor(Math.random()* this.saxonArmy.length)];

    if(attackedSaxon.receiveDamage(
      attacker.strenght === "A Saxon has died in combat";
    )
    )
    {this.saxonArmy.splice(this.saxonArmy.indexOf(attackedSaxon), 1);
    }
    return attackedSaxon.receiveDamage(attacker.strenght);
  }

  saxonAttack(){
      let attacker = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
      let attackedViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

      if(this.vikingArmy.attackedViking.health <= 0 ){
        this.vikingArmy.splice(this.vikingArmy.indexOf(attackedViking), 1);
      }
      return attackedViking.receiveDamage(attacker.strenght);
  }

  vikkingAttack();
  saxonAttack();
  showStatus();
}





// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
