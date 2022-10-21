// Soldier
class Soldier {
    constructor(health, strength) {
      this.health = health
      this.strength = strength }
    attack() {
      return this.strength
    }
    receiveDamage(damage) {
      this.health -= damage
    }
    }
// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
      this.name = name }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
          return `${this.name} has received ${damage} points of damage`
        } else {
          return `${this.name} has died in act of combat`
        }
      }
    battleCry() {
      return "Odin Owns You All!"    
    } 
  }

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
      this.health -= damage
          if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
          } else {
            return `A Saxon has died in combat`
          }    
    }
    }

// War
class War {
    constructor(){
    };
    vikingArmy = [];
    saxonArmy = [];
    
    addViking(Viking){
        this.vikingArmy.push(Viking);
    };
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    };

    vikingAttack(){
        //random viking from the viking army
    let randomSax = Math.floor(Math.random()*this.saxonArmy.length);
    let randomVik = Math.floor(Math.random()*this.vikingArmy.length);

    let saxonSoldier = this.saxonArmy[randomSax];
    let vikingSoldier = this.vikingArmy[randomVik];

    let powerAttack = vikingSoldier.attack();
    let saxonDamage = saxonSoldier.receiveDamage(powerAttack);

    if (saxonSoldier.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(saxonSoldier), 1)
    }
    return saxonDamage
    };

    saxonAttack(){
 let randomSax = Math.floor(Math.random()*this.saxonArmy.length);
    let randomVik = Math.floor(Math.random()*this.vikingArmy.length);
    let saxonSoldier = this.saxonArmy[randomSax];
       let vikingSoldier = this.vikingArmy[randomVik];

    let powerAttack = saxonSoldier.attack();
    let vikingDamage = vikingSoldier.receiveDamage(powerAttack);
        if (vikingSoldier.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(vikingSoldier), 1)
        }
        return vikingDamage
    };
    showStatus() {
        if(this.saxonArmy.length == 0){
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length == 0) {
            return "Saxons have fought for their lives and survived another day..."
        } 
        return "Vikings and Saxons are still in the thick of battle."
    };
}