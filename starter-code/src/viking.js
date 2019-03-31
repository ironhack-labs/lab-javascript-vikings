// Soldier
function Soldier(health, strength) {
    this.health = health
    this.strength = strength
      this.attack = () => {
     return strength
    }
    this.receiveDamage = (damage) => {
      //(health - damage)
      
       this.health -= damage
       
    }
    }
    let firstSoldier = new Soldier(100,50);

// Viking
function Viking (name, health, strength) {
    Soldier.call(this, health, strength)
    this.name = name
    this.battleCry = () => {
      return("Odin Owns You All!")
    }
    this.receiveDamage = (damage) => {
        this.health -= damage;
        if (this.health <= 0) {
            return (`${this.name} has died in act of combat`)
        } else {
          return (`${this.name} has received ${damage} points of damage`)
        } 
      };
  }
  Viking.prototype = Object.create(Soldier.prototype)

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health, strength)
    this.receiveDamage = (damage) => {
      this.health -= damage;
      if (this.health <= 0) {
          return (`A Saxon has died in combat`)
     } else {
        return (`A Saxon has received ${damage} points of damage`)
      } 
    };
  }
  Saxon.prototype = Object.create(Soldier.prototype);

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];

    this.addViking = (viking) => {
        this.vikingArmy.push(viking)
    }; 

    this.addSaxon = (saxon) => {
        this.saxonArmy.push(saxon)
    };

    this.vikingAttack = () => {
        let randomVikingNum = Math.floor(Math.random()*this.vikingArmy.length);
        let randomSaxonNum = Math.floor(Math.random()*this.saxonArmy.length);

         let randomViking =  this.vikingArmy[randomVikingNum];
         let randomSaxon = this.saxonArmy[randomSaxonNum];

         let attack = randomSaxon.receiveDamage(randomViking.strength);

         if(randomSaxon.health <= 0){
            this.saxonArmy.pop();
        }

            return attack
    }

    this.saxonAttack = () => {
        let randomVikingNum = Math.floor(Math.random()*this.vikingArmy.length);
        let randomSaxonNum = Math.floor(Math.random()*this.saxonArmy.length);

         let randomViking =  this.vikingArmy[randomVikingNum];
         let randomSaxon = this.saxonArmy[randomSaxonNum];

         let attack = randomViking.receiveDamage(randomSaxon.strength)

         if(randomViking.health <= 0){
             this.vikingArmy.pop();
         }
            return attack
    }

    this.showStatus = () =>{
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
