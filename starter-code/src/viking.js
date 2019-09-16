
class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = 300;
    this.strength = 150;
  }
  
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
  
}

// Viking
class Viking extends Soldier{
  constructor(name,health,strength){
    super(health,strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health-=damage;
    if (this.health <= 0){
      return `${this.name} has died in act of combat`
    } else if(this.health !==0){
    return `${this.name} has received ${damage} points of damage`
    }
  }

  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier{
  constructor(health,strength){
    super(health,strength);
    this.health = health;
    this.strength=strength;
   }

   attack() {
     return this.strength
   }
    
   receiveDamage(damage){
    this.health-=damage;
    if (this.health <= 0){
      return `A Saxon has died in combat`
    } else if(this.health !==0){
    return `A Saxon has received ${damage} points of damage`
    }
   }

}

// War
class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking(Viking){
   this.vikingArmy.push(Viking)
  }

  addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
  }

  vikingAttack () {
       
      let result = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength)

      this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0)

      return result
  }

  saxonAttack() {
    
        let result = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength)

        this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0)

        return result
  }

  showStatus(){
    if(this.saxonArmy.length ===0){
        return 'Vikings have won the war of the century!';
    }else if(this.vikingArmy.length ===0){
        return 'Saxons have fought for their lives and survive another day...';
    }else {
       return 'Vikings and Saxons are still in the thick of battle.';
    }
}
}
