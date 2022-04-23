// Soldier
class Soldier {
    //propiedades en el constructo
  constructor(health,strength){
    this.health = health;
    this.strength = strength;
  }
    //Metodos
  attack(){
    return this.strength;
  }
  receiveDamage(damage){
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name,health,strength){
    super(health,strength)
    this.name = name;
  }
  //Metodos
  receiveDamage(damage){
    this.health -= damage;
    if(this.health>0){
      return `${this.name} has received ${damage} points of damage`;
    }else{
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry(){
    return `Odin Owns You All!`
  }


}

// Saxon
class Saxon extends Soldier{
  
  receiveDamage(damage){
    this.health -= damage;
    if(this.health>0){
      return `A Saxon has received ${damage} points of damage`;
    }else{
      return `A Saxon has died in combat`;
    }
  }

}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];
  addViking(Viking){
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon){
    this.saxonArmy.push(Saxon);
  }
  vikingAttack(){
    random_saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    random_vikin = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    random_saxon.receiveDamage(random_vikin.attack());

  }
  saxonAttack(){
    random_vikin = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    random_saxon = this.waxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    random_vikin.receiveDamage(random_saxon.attack())

  }
  showStatus(){}
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
