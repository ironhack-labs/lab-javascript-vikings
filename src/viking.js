// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack () {
        return this.strength;
    }
    receiveDamage (theDamage) {
        this.health = this.health - theDamage;
    }
}
//'should remove the received damage from the health property'//

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
    super(health, strength);
    this.name = 'Harald';
    this.health = 300;
    this.strength = 150;
    }
    attack() {
        return this.strength;
    }
    receiveDamage (theDamage) {
        this.health = this.health - theDamage;
        if (this.health > 0) { 
        return `${this.name} has received ${theDamage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry () {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    attack () {
        return this.strength;
    }
    receiveDamage (theDamage) {
        this.health = this.health - theDamage;
        if (this.health > 0) { 
        return `A Saxon has received ${theDamage} points of damage`;
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
//add received viking to army//
addViking (viking) {
    //take viking (which is a reference to function generateViking) and add it to this.vikingArmy
    this.vikingArmy.push(viking);
}

addSaxon (saxon) {
    this.saxonArmy.push(saxon);
}
randomSoldier () {
    
}

vikingAttack () {
    //A `Saxon` (chosen at random) has their `receiveDamage()` method called with the damage equal to the `strength` of a `Viking` (also chosen at random). This should only perform a single attack and the `Saxon` doesn't get to attack back
    //should be a function 
    //should receive **0 arguments**
    //should make a `Saxon` `receiveDamage()` equal to the `strength` of a `Viking`
    //should remove dead saxons from the army
    //should return **result of calling `receiveDamage()` of a `Saxon`** with the `strength` of a `Viking`
    /*function Product(name, price) {
        this.name = name;
        this.price = price;
      }
      
      function Food(name, price) {
        Product.call(this, name, price);
        this.category = 'food';
      }
      
      function Toy(name, price) {
        Product.call(this, name, price);
        this.category = 'toy';
      }
      
      const cheese = new Food('feta', 5);
      const fun = new Toy('robot', 40);*/

      Saxon.receiveDamage(Viking.strezngth)

}
saxonAttack () {
    
}
showStatus () {

}
}