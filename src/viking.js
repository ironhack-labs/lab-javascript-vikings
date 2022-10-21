// Soldier
class Soldier {
    constructor(health,strength){
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;
    }

}

// Viking
class Viking  extends Soldier {
    constructor(name,health, strength){
        super(name, health, strength);
        this.name = name;
        this.health = health;
        this.strength = strength;
    }

    receiveDamage(damage){

        this.health -= damage;
        if (this.health === 0) {
            return `${this.name} has died in act of combat`;
          } else if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
          }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health,strength){
        super(health,strength);
    }

    receiveDamage(damage){

       this.health -= damage;
       if (this.health === 0) {
        return `A Saxon has died in combat`;
      } else if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`;
      }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];    
    }


    addViking(vikingObj){
       this.vikingArmy.push(vikingObj);
    }

    addSaxon(saxonObj){
       this.saxonArmy.push(saxonObj);
    }

  

    vikingAttack(){
        let vikingFight = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].attack()); 
        console.log(vikingFight);
        if (this.saxonArmy[0].health <= 0){ this.saxonArmy.splice(0); }
        //A Saxon has died in combat
        return vikingFight;
    }

    saxonAttack(){
        console.log(this.saxonArmy.length);
        let saxonFight = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].attack()); 

        if (this.vikingArmy[0].health <= 0){this.vikingArmy.splice(0);}

        return saxonFight;

    }

    showStatus(){
        if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day...";
        } else if ((this.saxonArmy.length && this.vikingArmy.length) > 0){
            return "Vikings and Saxons are still in the thick of battle.";
        }

    }
}
