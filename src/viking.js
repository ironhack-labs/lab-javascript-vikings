// Soldier
class Soldier {
    constructor(health, strength) { 
        this.health = health;
        this.strength= strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage){
        this.health -=damage;

    }
}

// Viking

class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;

    };

    receiveDamage(damage) {
        super.receiveDamage(damage)
        
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        };  
        return  `${this.name} has died in act of combat`;

    }

    battleCry() {
        return `Odin Owns You All!`
    }


}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        };
        return `A Saxon has died in combat`;


    }



}


// War
class War {
    //     should assign an empty array to the vikingArmy property

    // should assign an empty array to the saxonArmy property
    constructor() {
    this.vikingArmy= [];
        this.saxonArmy = [];
    }
//should add the received Viking to the army
     addViking(viking){
         this.vikingArmy.push(viking);

    }
    //should add the received Saxon to the army
   addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
//Saxon and viking (chosen at random)
        let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        //make Saxon receiveDamage() equal to the strength of a Viking

       const result = saxon.receiveDamage(viking.attack());
        //remove dead saxons from the army
        if (saxon.health<=0){
            this.saxonArmy.splice(this.saxonArmy.indexOf(saxon),1);
        };

        return result;
    }

    saxonAttack(){
//Saxon and viking (chosen at random)
        let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        //make viking receiveDamage() equal to the strength of a saxon

       const result = viking.receiveDamage(saxon.attack());
        //remove dead saxons from the army
        if (viking.health<=0){
            this.vikingArmy.splice(this.vikingArmy.indexOf(viking),1);
        };

        return result;
    }
  showStatus() {

    if (this.saxonArmy.length === 0) {
        return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0){
        return "Saxons have fought for their lives and survived another day..."
    } else { return "Vikings and Saxons are still in the thick of battle."}
  }

}
