// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    
    attack() { 
      return this.strength
    }

    receiveDamage(damage){
      this.health -=damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength ){
        super(health, strength)
        this.name = name;
        
    }

    receiveDamage(damage) {
        this.health -=damage;
        if (this.health>0) return this.name +" has received "+damage+" points of damage"
        if (this.health<=0) return  this.name +" has died in act of combat"

    }

    battleCry(){ 
        return "Odin Owns You All!"
    }
    
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -=damage;
        if (this.health>0) return "A Saxon has received "+damage+" points of damage"
        if (this.health<=0) return  "A Saxon has died in combat"


    }
}

// War
class War {
constructor (){
    this.vikingArmy=[];
    this.saxonArmy=[];
}

addViking(viking){
  this.vikingArmy.push(viking);
}

addSaxon(saxon){
    this.saxonArmy.push(saxon);
}





vikingAttack(){
    var a = intRandom(0, this.vikingArmy.length-1)
    var b = intRandom(0, this.saxonArmy.length-1)
    var vikStrength = this.vikingArmy[a].strength
    var saxonVictime = this.saxonArmy[b]
    var final = saxonVictime.receiveDamage(vikStrength);
    
    if (this.saxonArmy[b].health<=0){
        this.saxonArmy.splice(b, 1);
    } 
    return final

}

saxonAttack(){
    var a = intRandom(0, this.vikingArmy.length-1)
    var b = intRandom(0, this.saxonArmy.length-1)
    var saxStrength = this.saxonArmy[b].strength
    var vikVictime = this.vikingArmy[a]
    var final = vikVictime.receiveDamage(saxStrength);

    if (this.vikingArmy[a].health<=0){
        this.vikingArmy.splice(a, 1);
    }
    return final
}

showStatus() {
    if (this.saxonArmy.length === 0) return "Vikings have won the war of the century!"
    if (this.vikingArmy.length ===0) return "Saxons have fought for their lives and survived another day..."
    if (this.saxonArmy.length>=1 && this.vikingArmy.length>=1) return "Vikings and Saxons are still in the thick of battle."
}

//SUPER BONUS
armyAttack(attacker,defender){
    var a = entierAleatoire(0, this.attacker.length-1)
    var b = entierAleatoire(0, this.defender.length-1)
    var attackerStrength = this.attacker[a].strength
    var defenderVictime = this.defender[b]
    var final = defenderVictime.receiveDamage(attackerStrength);
    if (this.defender[b]<=0){
        this.defender.splice(b, 1)
    }
    return final;



    }

}




function intRandom(min, max)
{
    var a = Math.floor(Math.random() * (max - min + 1)) + min;
 return a;
}