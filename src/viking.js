// Soldier
class Soldier {
    constructor(health, strenght){
        this.health = health;
        this.strenght = strenght;
        }
    attack () {
        return this.strenght;
    }
    receiveDamage(damage) {
     this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strenght){
        super(health, strenght);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;

    if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`
         } else {
        return `${this.name} has died in act of combat`;
         }
    }
    battleCry() { 
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strenght){
        super(health, strenght);
    }
   
    receiveDamage(damage) {
        this.health = this.health - damage;
    
    if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`
       } else {
        return `A Saxon has died in combat`;
       }

 }

}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking){
        this.vikingArmy.push(viking);

    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        let vikingFighter = this.vikingArmy [0];
        let saxonFighter = this.saxonArmy [0];
        let result = saxonFighter.receiveDamage(vikingFighter.strenght);
     if (saxonFighter.health < vikingFighter.strenght) {
        this.saxonArmy.pop();
           }
           return result
         }

    saxonAttack(){
        let saxonFighter = this.saxonFighter [0];
        let vikingFighter = this.vikingFighter [0];
        let result = vikingFighter.receiveDamage(saxonFighter.strenght);
    if (vikingFighter.health < saxonFighter.strenght){
        this.vikingArmy.pop();
          }
          return result;
    }
   
   
    showStatus(){
        if (this.saxonArmy.lenght === 0) {
            return 'Vikings have won the war of the century!';
        } 
        if (this.vikingArmy.lenght === 0) {
            return 'Saxons have fought for their lives and survived another day...';
        }
        if (this.saxonArmy.lenght >= 0 && this.vikingArmy.lenght >= 0 ) {
            return 'Vikings and Saxons are still in the thick of the battle.';

        }
      }
    }
