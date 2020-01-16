console.clear()
/*
let soldier;
const strength = 150;
const health = 300;

let viking;
const name = 'Harald';
const strength = 150;
const health = 300;

let saxon;
const health = 60;
const strength = 25;
*/
// Soldier
class Soldier {
constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack(){
    const soldierAttack = this.strength;
    return soldierAttack;
    };
  receiveDamage(damage){
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;

      };
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        super.receiveDamage(damage)
        if(this.health<1){
            return "{$this.name} has died in act of combat"
        } else{
            return "{$this.name} has received {$damage} points of damage"
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength) {
        super(health, strength);
      };
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        super.receiveDamage(damage)
        if(this.health<1){
            return "A Saxon has died in combat"
        } else{
            return "A Saxon has received {$this.damage} points of damage"
        }
    }
}

// War
class War {

    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
 
    addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }
    vikingAttack(){
        //first atack from the vikings
        let randomViking = this.vikingArmy[Math.floor(Math.random() * vikingArmy.length)]; //picking a random viking
        this.saxonArmy[0].receiveDamage(randomViking.strength); //apliying the damage to one saxon
        
  
      }
    saxonAttack(){}
    showStatus(){}

}
let soldier = new Soldier(80, 100);
console.log(soldier)

let viking = new Viking("Alex", 80, 100);
console.log(viking)

let saxon = new Saxon("Luis",110, 75);
console.log(saxon)