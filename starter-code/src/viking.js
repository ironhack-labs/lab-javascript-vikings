// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    
    attack() {return this.strength}
    receiveDamage(damage) { this.health -= damage }
  }

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super (health, strength)
        this.name = name   
                                        }

    receiveDamage(damage) {
       
        this.health -= damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`}
        else {return `${this.name} has died in act of combat`   }
        }                                

    battleCry() {return `Odin Owns You All!`}

    }

// Saxon
class Saxon extends Soldier {
    constructor (health, strength) {
        super (health, strength)    }
    
    receiveDamage(damage) {
       
        this.health -= damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`}
        else {return `A Saxon has died in combat`   }
            }             


}

// War
class War {
    vikingArmy = [];
    saxonArmy = []; 

    addViking(viking) {this.vikingArmy.push(viking)}
    addSaxon(saxon) {this.saxonArmy.push(saxon)}

    vikingAttack() {
        let rSax = Math.floor(Math.random() * this.saxonArmy.length)
        let rVik = Math.floor(Math.random() * this.vikingArmy.length)
        this.health = this.saxonArmy[rSax].receiveDamage(this.vikingArmy[rVik].strength)

        if (this.health > 0) {this.saxonArmy.push(rSax)} 
        else                 {this.saxonArmy.splice(rSax)}
        return this.health
         }

    saxonAttack() {
        let rSax = Math.floor(Math.random() * this.saxonArmy.length)
        let rVik = Math.floor(Math.random() * this.vikingArmy.length)
        
        let randomSaxon = this.saxonArmy[rSax];
        let randomViking = this.vikingArmy[rVik];

       const battle = 
        randomViking.receiveDamage(randomSaxon.strength);
            if (randomViking.health <= 0) {
                this.vikingArmy.splice(rVik, 1)
            }
        return battle;
    }

    showStatus = function(){
        if (this.saxonArmy.length> 0 && this.vikingArmy.length > 0)   {
                    return "Vikings and Saxons are still in the thick of battle."}
                    
        else if (this.saxonArmy.length  <= 0)  {return "Vikings have won the war of the century!"} 
        else if (this.vikingArmy.length <= 0)  {return "Saxons have fought for their lives and survived another day..."} 
        
                                }

}
