class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack(){
      console.log("The soldier´s strength is " + this.strength)
    }
    receiveDamage(damage){
      this.health = this.health - damage
    }
}
var soldado = new Soldier (80, 90)

soldado.attack()
soldado.receiveDamage(20)

console.log(soldado)

class Viking extends Soldier {
  constructor (health, strength, name) {
  super (health, strength)
  this.name = name
  }
  receiveDamage(damage){
  this.health = this.health - damage
  if(this.health > 0 ){
    console.log (this.name + " has received " + damage + " points of damage")
    } else {
      console.log(this.name + " has died in act of combat")
    }
  }
  battleCry(grito){
    console.log( "Odin Owns You All!")
  }

}

var vikingo = new  Viking (70, 60, "Chimuelo")
console.log(vikingo)

vikingo.attack() 
vikingo.receiveDamage(80)
vikingo.battleCry()


class Saxon extends Soldier {
  constructor (health, strength) {
  super (health, strength)
  }
  receiveDamage(damage){
  this.health = this.health - damage
  if(this.health > 0 ){
    console.log ("A Saxon has received " + damage + " points of damage")
    } else {
      console.log( "A Saxon has died in act of combat")
    }
  }

}

var sajon = new  Saxon (50, 30)
console.log(sajon)

sajon.attack()
sajon.receiveDamage(40)

class War {
  constructor (){

    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking(object){
    //this.vikingArmy.push = object
    
    this.vikingArmy[0] = new Viking(100,60,"Ipo");
    this.vikingArmy[1] = new Viking(100,70,"Astrid");
    this.vikingArmy[2] = new Viking(100,50,"Estoico");
    this.vikingArmy[3] = new Viking(100,50,"Patán Mocoso");
    this.vikingArmy[4] = new Viking(100,60,"Brutilda");
    this.vikingArmy[5] = new Viking(100,50,"Patapez");
    this.vikingArmy[6] = new Viking(100,90,"Bocón el rudo");
    this.vikingArmy[7] = new Viking(100,50,"Spitelout");
    this.vikingArmy[8] = new Viking(100,80,"Hoark");
    this.vikingArmy[9] = new Viking(100,50,"Chimuelo");
  }
  addSaxon(){
    this.saxonArmy[0] = new Saxon (100,50);
    this.saxonArmy[1] = new Saxon (100,20);
    this.saxonArmy[2] = new Saxon (100,30);
    this.saxonArmy[3] = new Saxon (100,20);
    this.saxonArmy[4] = new Saxon (100,70);
    this.saxonArmy[5] = new Saxon (100,40);
    this.saxonArmy[6] = new Saxon (100,20);
    this.saxonArmy[7] = new Saxon (100,60);
    this.saxonArmy[8] = new Saxon (100,40);
    this.saxonArmy[9] = new Saxon (100,50);
  }
  vikingAttack(){
    sajon.receiveDamage(this.strength)
  }
}

let w1 = new War(100,100);
w1.addViking();
w1.addSaxon();

console.log(w1.vikingArmy);

console.log(w1.saxonArmy);
