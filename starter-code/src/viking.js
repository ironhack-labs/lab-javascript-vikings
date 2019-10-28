class Soldier{
    constructor(health, strength) {
      this.health = health
      this.strength = strength
    }
      
    attack(){
      return this.strength
    }
    receiveDamage(damage){
      this.health -= damage
    } 
  }

  // Viking
  class Viking extends Soldier{

  
    constructor(name, health, strength){
      super(health, strength)
      this.name = name;
      }
      receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        else return `${this.name} has died in act of combat`;
    }
  
    battleCry(){  
      return "Odin Owns You All!"
    }
    

  }
  
  
  // Saxon
  class Saxon extends Soldier{
    constructor(health, strength){
      super(health, strength)
      this.strength = strength;}

      receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        else return `A Saxon has died in combat`;
    }
   
    }
  
  // War
  
  class War {
constructor (){
this.vikingArmy = [];
this.saxonArmy = [];
}

addViking (addv) {
  this.vikingArmy.push(addv);
}

addSaxon (adds){
  this.saxonArmy.push(adds);
}


  vikingAttack() {
    let randSax = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let randVik = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];

    randSax.receiveDamage(randVik.strength);

    if (randSax.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(randSax), 1);
      return `A Saxon has died in combat`; 
    }
  }

  saxonAttack() {
    let randSax = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let randVik = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];

    randVik.receiveDamage(randSax.strength);

    if (randVik.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(randVik), 1);
    } else if (randVik.health > 0);
    {
      return `${randVik.name} has received ${randSax.strength} points of damage`;
    }
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}