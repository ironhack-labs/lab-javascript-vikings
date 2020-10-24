//Soldier
class Soldier {
      constructor(health, strength) {
            this.health = health;
            this.strength = strength;
            this.attack = function () {
                  return this.strength;
            };
            this.receiveDamage = function (damage) {
                  this.health -= damage;
            }
      }
};


// Viking
class Viking extends Soldier {
      constructor(name, health, strength) {
            this.name = name;
            this.health = health;
            this.strength = strength;
            this.receiveDamage = function (damage) {
                  this.health -= damage;

                  if (this.health > 0) {
                        return `${this.name} has recieved ${damage} points of damage`;
                  } else {
                        return `${this.name} died in the act of combat`;
                  }
            }
            this.battleCry = function () {

                  return "Odin Owns You All!";
            }
      }
};

// Saxon
class Saxon extends soldier {

      recieveDamage = function (damage) {
            this.health -= damage;
            if (this.health > 0) {
                  return `A Saxon has received ${damage} points of damage`;
            } else {
                  return `A Saxon has died in combat`
            }
      }
}



// War
class War {}