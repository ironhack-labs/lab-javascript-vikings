// Soldier
function Soldier(healt, strength) {}

// Viking
function Viking() {}

// Saxon
function Saxon() {}

// War
function War() {}

class Soldier {

    constructor (healthInt, strengthInt){
  
      this.health = healthInt;
      this.strength = strengthInt;
    }
  
    atack() {
      return this.strength;
    }
  
    receiveDamage(damageReceivedInt) {
      this.health -= damageReceivedInt;
    }
}
  
class Viking extends Soldier{
  
    constructor(nameInt, healthInt, strengthInt) {
  
      super(healthInt, strengthInt);
      this.name = nameInt;
    }
  
    receiveDamage(damageReceivedInt) {
  
      this.health -= damageReceivedInt;
  
      if (this.health > 0) {
          return this.name + ' has received ' + damageReceivedInt + ' points of damage';
      } else if (this.health <= 0) {
            return this.name + ' has died in act of combat';
      }
    }
  
    battleCry() {
      return 'Odin Owns You All!';
    }
}
  
class Saxon extends Soldier{
  
    constructor(healthInt, strengthInt){
      super(healthInt, strengthInt);
    }
  
    receiveDamage(damageReceivedInt) {
      
      this.health -= damageReceivedInt;
  
      if(this.health > 0) {
        return 'a Saxon has received ' + damageReceivedInt + ' points of damage';
      } else if(this.health <= 0){
        return 'A saxon has died in combat';
      }
    }
}

class War {

  constructor(){

    this.vikingArmy = Array();
    this.saxonArmy = Array();
  }

  addViking(vikingSoldierInt){
    this.vikingArmy.push(vikingSoldierInt);
  }

  addSaxon(saxonSoldierInt){
    this.saxonArmy.push(saxonSoldierInt);
  }

  vikingAttack(){

    let saxonAttacked = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];

    let vikingAttackingStrength = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)].strength;

    let resultOfTheAttack = saxonAttacked.receiveDamage(vikingAttackingStrength);

      if (saxonAttacked.health <= 0){
        this.saxonArmy.splice(this.saxonArmy.indexOf(saxonAttacked),1);
        return resultOfTheAttack;
        } else if (saxonAttacked.health > 0){
          return resultOfTheAttack;
        }

    //console.log(this.saxonArmy.indexOf(saxonAttacked))

    
  }

  saxonAttack(){

  }

  showStatus(){


  }
}


let Luis = new Viking('Luisem', 100, 120);
let Jaime = new Viking('Jaimes', 100, 20);
let Pablo = new Saxon(100, 10);
let Barx = new Saxon(100, 15);

let warOfTheNorth = new War;

warOfTheNorth.addViking(Luis);
warOfTheNorth.addViking(Jaime);
warOfTheNorth.addSaxon(Pablo);
warOfTheNorth.addSaxon(Barx);

warOfTheNorth.vikingAttack();

warOfTheNorth


