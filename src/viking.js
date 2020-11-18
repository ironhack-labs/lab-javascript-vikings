// Soldier
    
class Soldier {
    constructor(health, strength) {
      this.health = health;
      this.strength = strength;
    }

        attack() {
            return this.strength;
         }

         receiveDamage(damage) {
            this.health -= damage;
         }

}
// Viking

class Viking extends Soldier {
    constructor (name, health, strength){
        super();
        this.name = name;
        this.health = health;
        this.strength = strength;   
    }

    receiveDamage(damage) {
        this.health -= damage; 

        if (this.health <= 0) { 
            return `${this.name} has died in act of combat`;
          } else {
            return `${this.name} has received ${damage} points of damage`;
          }        
    };

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor (health,strength) {
        super ();
        this.health = health;
        this.strength = strength; 
    }

    receiveDamage(damage) {
        this.health -= damage; 

        if (this.health <= 0) { 
            return "A Saxon has died in combat";
          } else {
            return `A Saxon has received ${damage} points of damage`;
          }        
    };
}
// War

class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        const randoSaxon =this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        
        //should make a Saxon receiveDamage() equal to the strength of a Viking
        //should remove dead saxons from the army
        if 
        //should return result of calling receiveDamage() of a Saxon with the strength of a Vikin
        return;
    }

    saxonAttack(){
        //should make a Viking receiveDamage() equal to the strength of a Saxon
        //should remove dead vikings from the army
        //should return result of calling receiveDamage() of a Viking with the strength of a Saxon
        return;
    }
    
    showStatus(){
        if (this.vikingArmy.length >= 1 || this.saxonArmy.length >= 1 )  {
            return "Vikings and Saxons are still in the thick of battle." ; 
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."; 
        } else if (this.saxonArmy.length === 0) { 
            return "Vikings have won the war of the century!"
        }
    }
}
