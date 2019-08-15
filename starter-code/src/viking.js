// Soldier
class Soldier {
constructor(health, strength) {
    this.health = health;
    this.strength = strength;
    }

    attack () {
        return this.strength;
        }
    
    receiveDamage (damage) {
        this.health -= damage;
        }
    }

class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage (damage) {
     this.health -= damage
        if (this.health > 0) { 
            return `${this.name} has received ${damage} points of damage`;
 }
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`;
        }
    }
 
battleCry () {
    return `Odin Owns You All!`
    }
}
// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage (damage) {
        this.health -= damage
           if (this.health > 0) { 
               return `A Saxon has received ${damage} points of damage`;
    }
           if (this.health <= 0) {
               return `A Saxon has died in combat`;
           }
        }
     }
 

class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking (viking) {
        this.vikingArmy.push(viking)
      }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    
    vikingAttack(){
        let battlingSaxon = Math.floor(Math.random() * this.saxonArmy.length);

        let battlingViking = Math.floor(Math.random() * this.vikingArmy.length);
    
        let vAttack = this.saxonArmy[battlingSaxon].receiveDamage(
          this.vikingArmy[battlingViking].attack()
        );
    
        if (this.saxonArmy[battlingSaxon].health <= 0) {
          this.saxonArmy.splice(battlingSaxon, 1);
        }
    
        return vAttack;
    }

    saxonAttack (){
        let battlingViking = Math.floor(Math.random() * this.vikingArmy.length);

    let battlingSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    let sAttack = this.vikingArmy[battlingViking].receiveDamage(
      this.saxonArmy[battlingSaxon].attack()
    );

    if (this.vikingArmy[battlingViking].health <= 0) {
      this.vikingArmy.splice(battlingViking, 1);
    }

    return sAttack;
    }

   showStatus() {
        if (this.saxonArmy.length == 0) {
           return `Vikings have won the war of the century!`
       }
        if (this.vikingArmy.length ==0) {
            return `Saxons have fought for their lives and survive another day...`
        }
       else {
           return `Vikings and Saxons are still in the thick of battle.`
       }
   }
}

   const torbjorn = new Viking('Torbjörn', 75, 200 );
const war = new War()
war.addViking(torbjorn);
const saxon = new Saxon(50,50);
war.addSaxon(saxon);
console.log(war.vikingArmy);
console.log(war.saxonArmy);
war.vikingAttack();
console.log(war.saxonArmy, "attacked");
console.log(war.showStatus())
const saxon1 = new Saxon(75,50);
const saxon2 = new Saxon(85,50);
const saxon3 = new Saxon(75,80);
war.addSaxon(saxon1);
war.addSaxon(saxon2);
war.addSaxon(saxon3);
console.log(war.saxonArmy);
war.saxonAttack();
console.log(war.vikingArmy);
war.vikingAttack();
war.vikingAttack();
war.vikingAttack();
console.log(war.saxonArmy);

  

  