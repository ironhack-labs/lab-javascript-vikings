// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health
        this.strength = strength
    }
    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health -= damage
    }

}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage){
        this.health -= damage
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`;
        }

    }
    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health -= damage
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }  
        else {
            return "A Saxon has died in combat";
        }   
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(Viking){
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }

    genericAttack(attackerArmy, defenderArmy) { /* I really needed help from AI here, but I understood what was given*/
        const attackerIndex = Math.floor(Math.random() * attackerArmy.length);
        const defenderIndex = Math.floor(Math.random() * defenderArmy.length);
        const attacker = attackerArmy[attackerIndex];
        const defender = defenderArmy[defenderIndex];
        
        const damageReceived = defender.receiveDamage(attacker.strength);
    
        if (defender.health <= 0) {
          defenderArmy.splice(defenderIndex, 1);
        }
    
        return damageReceived;
      }

      vikingAttack() {
        return this.genericAttack(this.vikingArmy, this.saxonArmy);
      }
    
      saxonAttack() {
        return this.genericAttack(this.saxonArmy, this.vikingArmy);
      }

      showStatus() {
        if (this.saxonArmy.length === 0) {
          return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0) {
          return "Saxons have fought for their lives and survived another day..."
        } else {
          return "Vikings and Saxons are still in the thick of battle."
        }
      }
    
}
