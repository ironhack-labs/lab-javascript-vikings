// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health,
        this.strength = strength   
    }
    //function attack
    attack(){
        return this.strength
    }
     //function receiveDamage
    receiveDamage(damage){
         this.health -= damage;

    }


}

// Viking
class Viking extends Soldier {
    constructor(name, healthViking, strengthViking) {        
      super(healthViking, strengthViking) //Pedir melhor explicação sobre o super
      this.name = name
  
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        if(this.health == damage)
        {
            this.health -= damage
            return `${this.name} has died in act of combat`          
        }
        else{
        this.health -= damage
        return `${this.name} has received ${damage} points of damage`
        }
    }

    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(healthSaxon, strengthSaxon){
        super(healthSaxon, strengthSaxon)   
        this.health = healthSaxon,
        this.strength = strengthSaxon
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage;
     if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }

    }
}

// War
class War {
   constructor(){
       this.vikingArmy = [],
       this.saxonArmy = []
   }
   addViking(Vikingobject){
       this.vikingArmy.push(Vikingobject)

   }
   addSaxon(Saxonobject){
       this.saxonArmy.push(Saxonobject)
   }
   vikingAttack() {
    let randomSax = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomVik = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let saxRemove = this.saxonArmy.indexOf(randomSax);
    let vikingAttack = randomSax.receiveDamage(randomVik.strength);
    if (randomSax.health <= 0) {
      this.saxonArmy.splice(saxRemove, 1);
    }
    return vikingAttack;
  }

  saxonAttack(){
    let randomSax = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomVik = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let vikingRemove = this.vikingArmy.indexOf(randomVik);
    let saxonAttack = randomVik.receiveDamage(randomSax.strength);
    if (randomVik.health <= 0) {
      this.vikingArmy.splice(vikingRemove, 1);
    }
    return saxonAttack;

  }

  showStatus(){
      if(this.saxonArmy.length <= 0){
          return "Vikings have won the war of the century!"
      }
      else if(this.vikingArmy.length <= 0){
          return "Saxons have fought for their lives and survive another day..."
      }
      else{
          return "Vikings and Saxons are still in the thick of battle."
      }
  }
}
