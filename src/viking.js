// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;      
    }
    receiveDamage(damage){
        this.health -= damage;

        if (this.health > 0) {
            return (`${this.name} has received ${damage} points of damage`)
        } else {
            return (`${this.name} has died in act of combat`)
        }
    }
    battleCry() {
        return ("Odin Owns You All!");
    }
    

}

// Saxon
class Saxon extends Soldier { 

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
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    // Choosing the first Viking and the first Saxon
    const viking = this.vikingArmy[0];
    const saxon = this.saxonArmy[0];

    // Viking attacks Saxon
    const attack = viking.strength;
    const damage = saxon.receiveDamage(attack);

    // remove dead saxons
    if (saxon.health <= 0) {
      this.saxonArmy.shift();
    }
    return damage;
  }
  saxonAttack() {
      // Choosing the first Viking and the first Saxon
      const viking = this.vikingArmy[0];
      const saxon = this.saxonArmy[0];
  
      // Saxon attacks viking
      const attack = saxon.strength;
      const damage = viking.receiveDamage(attack);
  
      // remove dead vikings
      if (viking.health <= 0) {
        this.vikingArmy.shift();
      }
      return damage;

  }
  showStatus() {
    if (this.saxonArmy.length <= 0) {
        return `Vikings have won the war of the century!`
    }
    else if (this.vikingArmy.length <= 0) {
        return `Saxons have fought for their lives and survived another day...`
    } else {
        return `Vikings and Saxons are still in the thick of battle.`
    }
  }
}



const viking1 = new Viking("Miguel", 100, 100);
const saxon1 = new Saxon(100,100)

const warOfTheCentury = new War();

warOfTheCentury.addViking(viking1);
warOfTheCentury.addSaxon(saxon1);

console.log(warOfTheCentury.showStatus());