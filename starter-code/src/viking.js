// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;

    }

}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){

        super(health, strength);
        this.name = name;
        this.health = health;
        this.strength = strength;

    }
    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;

        if (this.health > 0){
        let phrase = `${this.name} has received ${damage} points of damage`;
        return  phrase;
    } else {
        let phrase = `${this.name} has died in act of combat`;
        return  phrase;
    }
    }

    battleCry(){
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength) {
        super(health, strength)
    }

    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health -= damage;

        if (this.health > 0){
        let phrase = `A Saxon has received ${damage} points of damage`;
        return  phrase;
    } else {
        let phrase = `A Saxon has died in combat`;
        return  phrase;
    }
    }
}

// War
class War {
    constructor () {
    this.vikingArmy = [];
    this.saxonArmy = []
    } 

    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
      let vikingRandomIndex = Math.floor(Math.random() * this.vikingArmy.length);
      let saxonRandomIndex = Math.floor(Math.random() * this.saxonArmy.length);

      let saxonR = this.saxonArmy[saxonRandomIndex]; 
      let vikingR = this.vikingArmy[vikingRandomIndex];
      let received = saxonR.receiveDamage(vikingR.strength);
      if (saxonR.health <= 0){
        this.saxonArmy.splice(saxonRandomIndex, 1);
    }
      return received;
       
     
    }

    saxonAttack() {
        let vikingRandomIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let saxonRandomIndex = Math.floor(Math.random() * this.saxonArmy.length);
  
        let saxonR = this.saxonArmy[saxonRandomIndex]; 
        let vikingR = this.vikingArmy[vikingRandomIndex];

        let received = vikingR.receiveDamage(saxonR.strength);

        if (vikingR.health <= 0){
          this.vikingArmy.splice(vikingRandomIndex, 1);
      }
        return received;
         
       
      }

      showStatus(){

          if (this.saxonArmy.length === 0){
              return "Vikings have won the war of the century!";
          } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day...";
          } else {
            return "Vikings and Saxons are still in the thick of battle.";
          }
      }
}
