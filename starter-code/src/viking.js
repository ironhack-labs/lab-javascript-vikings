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
    return this.strength;
    };
  receiveDamage(damage){
    this.health = this.health - damage;
  }
}
// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength); //importante que esto esté primero (si no, peta)
        this.name = name;
      };
    attack(){
        return super.attack()
    }
    receiveDamage(damage){
        super.receiveDamage(damage);
        if(this.health>0){
            return "{$this.viking.name} has received {$damage} points of damage"
        } else{
            return "{$this.viking} has died in act of combat"
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
        super.attack()
    }
    receiveDamage(damage){
        super.receiveDamage(damage)
        if(this.health>0){
            return "A Saxon has received {$damage} points of damage"            
        } else{
            return "A Saxon has died in combat"
        }
    }
}

// War
class War {

    vikingArmy = [];
    saxonArmy = [];

    
    addViking(Viking){
        this.vikingArmy.push[Viking]
    }
    addSaxon(Saxon){
        this.saxonArmy.push[Saxon]
    }
    vikingAttack(){
        //Math.floor((Math.random() * 100) + 1);
    }
    saxonAttack(){}
    showStatus(){
        if(vikingArmy.length===0){
            return "Saxons have fought for their lives and survived another day...!"
        } else if(saxonArmy.length===0){
            return "Vikings have won the war of the century!"
            }
        else{
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }

}
