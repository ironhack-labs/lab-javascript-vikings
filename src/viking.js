// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength =strength;
    }

    //metodos
    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -=  damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)  
        this.name = name;
        
    }
    //metodos
    receiveDamage(theDamage) {
        this.health -=  theDamage
        if(this.health > 0) {
            return `${this.name} has received ${theDamage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
}
    battleCry(){
        return "Odin Owns You All!"}}

// Saxon
class Saxon extends Soldier {
    constructor (health, strength) {
        super(health, strength)
    }

    receiveDamage(theDamage) {
        this.health -=  theDamage
        if (this.health > 0) {
            return `A Saxon has received ${theDamage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }

} 

// War
let vikingArmy = []
let saxonArmy = []


class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking) {
                
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
       
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        let saxon = this.saxonArmy[Math.floor(Math.random() * saxonArmy.length)];
        let viking = this.vikingArmy[Math.floor(Math.random() * vikingArmy.length)];
        let vAttack = viking.attack()
        let sDamage = saxon.receiveDamage(vAttack)

        if(saxon.health <= 0) {
            this.saxonArmy.splice(saxon,1)
    }
        return sDamage
}
    saxonAttack() {
        let saxon = this.saxonArmy[Math.floor(Math.random() * saxonArmy.length)];
        let viking = this.vikingArmy[Math.floor(Math.random() * vikingArmy.length)];

        
        let sAttack = saxon.attack()
        let vDamage = viking.receiveDamage(sAttack)


        if(viking.health <= 0) {
            this.vikingArmy.splice(viking,1)
         }
            return vDamage 
}
///////////////////////////////////////////////////////
////INTENTO DE REDUCCION DE CODIGO EN ATAQUES/////////

    randomAttackerSelect() {
        let armies = [viking, saxon]
        attackerArmy = armies[Math.floor(Math.random() * armies.length)]
    }

    
    armyAttack(attackerArmy) {
        let saxon = this.saxonArmy[Math.floor(Math.random() * saxonArmy.length)];
        let viking = this.vikingArmy[Math.floor(Math.random() * vikingArmy.length)]; 
        let attackerArmy = this.randomAttackerSelect()
            if(attackerArmy = viking) {
                defenderArmy = saxon 
            } else { defenderArmy = viking}

        let solAttack = attackerArmy.attack()
        let solDamage = defenderArmy.receiveDamage(solAttack)

        if(defenderArmy.health <= 0) { 
            if(defenderArmy === viking){
            this.vikingArmy.splice(viking,1)
         } else {this.saxonArmy.splice(saxon,1)}
        }
     return solDamage }
     
////////////////////////////////////////////////////////////////////////////////////////////////
    showStatus() {
       
       if(this.vikingArmy.length === 1 && this.saxonArmy.length === 1) {
           return "Vikings and Saxons are still in the thick of battle."
       }
        else if(this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
       
            
        }return  "Saxons have fought for their lives and survived another day..."
    }

}

