// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
    this.attack = function () {return this.strength; }
    this.receiveDamage = function (damage) {this.health -= damage; }
  }
}

// Viking
class Viking extends Soldier {
  constructor(nameArg, healthArg, strengthArg) {
    super(healthArg, strengthArg);
    this.name = nameArg;
    this.receiveDamage = function (damage) {
      this.health-=damage;
      if (this.health > 0) {
        return (this.name + " has received " + damage + " points of damage");
      } else {
        return (this.name + " has died in act of combat");
      }
    }
    this.battleCry = function () {
      return ("Odin Owns You All!");
    }
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(healthArg, strengthArg) {
    super(healthArg, strengthArg);
    this.receiveDamage = function (damage) {
      this.health -= damage;
      if (this.health > 0) {
        return ("A Saxon has received " + damage + " points of damage");
      } else {
        return ("A Saxon has died in combat");
      }
    }
  }
}

// War
class War {

  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    this.addViking = function (name,health,strength) { this.vikingArmy.push(new viking(name,health,strength)); }
    this.addSaxon = function (health,strength) { this.saxonArmy.push(new Saxon(health,strength));}
    this.vikingAttack = function () {
/*       if (this.vikinkgArmy.length > 0 && this.saxonArmy.length > 0) {
        var randomViking = parseInt(Math.random() * this.vikingArmy.length);
        var randomSaxon = parseInt(Math.random() * this.saxongArmy.length);
        this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].vikingAttack());
        this.saxonArmy.filter(function (element){
          return element.health<0;
        }).delete();
      } */
    }
    this.saxonAttack = function () { 
      
    }
    this.showStatus=function(){
      if(this.vikinkgArmy.length < 1){
        return ("Saxons have fought for their lives and survive another day...");
      }else if(this.saxonArmy.length < 1){
        return ("Vikings have won the war of the century!");
      }else if(this.saxonArmy.length ==1 && this.vikinkgArmy.length == 1){
        return ("Vikings and Saxons are still in the thick of battle.");
      }
    }
  }
}
