// Soldier
class Soldier {
    constructor(health, strength) {
        //console.log("Your soldier health is " + health + " and his strength is " + strength);
        this.health = health;
        this.strength = strength;
       // this.damage = health --;
    }

    attack() {
        return this.strength
        console.log("Your attack equals " + this.attack) 
    }

    receiveDamage(damage) {
        this.health = this.health - damage
        // console.log("You've received " + this.damage + " damage")
    }
}

var soldierA = new Soldier(300, 150);


// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  attack() {
    return this.strength
    console.log("Your attack equals " + this.attack)
  }
    
  battleCry() {
      return "Odin Owns You All!"
    }

  receiveDamage(damage) {
    this.health = this.health - damage;
      if (this.health > 0) {
          return this.name + " has received " + damage + " points of damage";

      }
      else {
          return this.name + " has died in act of combat";
      }
  }
}




// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return "A Saxon has received " + damage + " points of damage";

        }
        else {
            return "A Saxon has died in combat";
        }
    }

}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Vicking) {
    this.vikingArmy.push(Vicking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
    vikingAttack() {
        Saxon.receiveDamage() = vicking.strength();
    }


}
