// Soldier
class Soldier {
  constructor(health,strength){
      this.health = health
      this.strength = strength
  }
  attack() {
      return this.strength
  }
  receiveDamage(damage) {
      this.health -= damage
  }

}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
       super(health,strength)
       this.name = name

    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
        if(this.health>0) {
            return `${this.name} has received ${damage} points of damage`;
        }else {
            return `${this.name} has died in act of combat`;
        }

    }
    battleCry(){
        return 'Odin Owns You All!'
    }
  

}

// Saxon
class Saxon extends Soldier {
    constructor() {
        super(health,strength)
        
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
        if(this.health>0) {
            return `A Saxon has received ${damage} points of damage`
        }else {
            return `A Saxon has died in combat`
        }
    }


}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];

        let damage =randomSaxon.receiveDamage(randomViking.strength);
        if(randomSaxon.health<=0){
            this.saxonArmy.splice(randomSaxon,1);
        }
        return damage;
    }

   saxonAttack() {
       let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
       let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
       let damage = randomViking.receiveDamage(randomSaxon.strength);

       if(randomViking.health<=0) {
           this.vikingArmy.splice(randomViking,1);
       }
       return damage;
   }

}


