class Soldier{
  constructor(healthArg, strengthArg){
    this.health = healthArg;
    this.strength = strengthArg;
  }

  attack(){
    return this.strength
  };
  
  receiveDamage(damage){
    this.health = this.health - damage

  };
  
}

class Viking extends Soldier{
  constructor(nameArg, healthArg, strengthArg){
    super(healthArg, strengthArg)
    this.name = nameArg;
   }
   
  receiveDamage(damage){
    this.health = this.health - damage
    if(this.health > 0){
      return this.name + " has received " + damage + " points of damage"
    }else{
      return this.name + " has died in act of combat"
    }
  };

  battleCry(){
    return 'Odin Owns You All!'
  };
}


class Saxon extends Soldier{
  constructor(healthArg, strengthArg){
    super(healthArg, strengthArg)
  }

  receiveDamage(damage){
    this.health = this.health - damage
    if(this.health > 0){
      return "A Saxon has received " + damage + " points of damage"
    }else{
      return "A Saxon has died in combat"
    }
};
}

class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  
  }

    addViking(viking){
      this.vikingArmy.push(viking)
    };
    addSaxon(saxon){
      this.saxonArmy.push(saxon)
    };
    vikingAttack(){
      this.viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
      this.saxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
      return this.saxon.receiveDamage(this.viking.strength)
    //  this.saxonArmy.forEach((saxon) => {
    //    if(this.saxon.health <= 0){
    //     unset(this.saxonArmy.indexOf(this.saxon))
    //    }
    // });
    };

    saxonAttack(){
      this.viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
      this.saxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
      return this.viking.receiveDamage(this.saxon.strength)
    //  this.vikingArmy.forEach((viking) => {
    //    if(this.viking.health <= 0){
    //     unset(this.vikingArmy.indexOf(this.viking))
    //    }
    // });


    };


}
