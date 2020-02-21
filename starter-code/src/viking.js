// Soldier
class Soldier {
  constructor(health, strength) {
      this.health = health,
      this.strength = strength
  }
  attack(){
      return this.strength
    };
  receiveDamage(damage){
      this.health -= damage
    };
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
    super (health, strength)
    this.name= name}
    battleCry(){
        return `Odin Owns You All!`
    }
    receiveDamage(damage){
        this.health -= damage;
        if (this.health >0){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super (health, strength)
    }
    receiveDamage(damage){
        this.health -= damage;
        if (this.health >0){
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War

class War {
    constructor(){
         this.vikingArmy = []
         this.saxonArmy= []
         this.Saxon
         this.Viking
    }
    addViking(Viking){
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }
    vikingAttack(){
        this.positionSaxon = random(this.saxonArmy.length);
        this.positionViking = random(this.vikingArmy.length);
        let result = (this.saxonArmy[this.positionSaxon].receiveDamage(this.vikingArmy[this.positionViking].strength))
        if (this.saxonArmy[this.positionSaxon].health <= 0){  this.saxonArmy.splice(this.positionSaxon)}
        return result
    }
    saxonAttack(){
        this.positionSaxon = random(this.saxonArmy.length);
        this.positionViking = random(this.vikingArmy.length);
        let result = (this.vikingArmy[this.positionViking].receiveDamage(this.saxonArmy[this.positionSaxon].strength))
        if (this.vikingArmy[this.positionViking].health <= 0){  this.vikingArmy.splice(this.positionViking)}
        return result
    }
/////////////////////////////////////////////////////

genericAttack(attacker){
    if (attacker === "Saxon"){
        this.positionAttacker=this.positionSaxon,
        this.positionDefender= this.positionViking,
        this.attackerArmy=this.saxonArmy,
        this.defenderArmy=this.vikingArmy
    } else if (attacker === "Vicking"){
        this.positionAttacker=this.positionViking,
        this.positionDefender= this.positionSaxon,
        this.attackerArmy=this.vikingArmy,
        this.defenderArmy=this.saxonArmy
    } else {return 'Please input valid contenders'}
    
    this.positionAttacker = random(this.attackerArmy.length);
    this.positionDefender = random(this.defenderArmy.length);
    let result = (this.defenderArmy[this.positionDefender].receiveDamage(this.attackerArmy[this.positionAttacker].strength))
    if (this.defenderArmy[this.positionDefender].health <= 0){  this.defenderArmy.splice(this.positionDefender)}
    return result
}
    




/////////////////////////////////////////////////////////
    showStatus(){
        this.vikingsAlive = this.vikingArmy.length
        this.saxonsAlive = this.saxonArmy.length
        if (this.saxonsAlive === 0) {return 'Vikings have won the war of the century!'}
        else if (this.vikingsAlive ===0) {return 'Saxons have fought for their lives and survived another day...'}
        else { return 'Vikings and Saxons are still in the thick of battle.'}
}
}
function random(value){return Math.floor(Math.random()*value);
}

console.log(War)