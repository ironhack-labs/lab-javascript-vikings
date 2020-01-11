// Soldier
class Soldier {

    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    
    attack() {
        return this.strength;
    };
    
    receiveDamage(damage) {
        this.health -=  damage;
    };

}

//console.log(new Soldier(10,10).recieveDamage(5))

// Viking
class Viking extends Soldier{
    
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        }
        return `${this.name} has died in act of combat`
    }

    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{

    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }
        return `A Saxon has died in combat`
    }
}

// War
class War {
    
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    
    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const result = saxon.receiveDamage(viking.strength)
        if (saxon.health <= 0){
            this.saxonArmy.splice(this.saxonArmy.indexOf(saxon), 1)
        }
        return result
    }
    saxonAttack(){
        let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const result = viking.receiveDamage(saxon.strength)
        if (viking.health <= 0){
            this.vikingArmy.splice(this.vikingArmy.indexOf(viking), 1)
        }
        return result
    }

    attack(attackerStr){
        if(attackerStr == "viking"){
            let attacker = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
            let defensor = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
            let defArmy = this.vikingArmy
        } else if (attackerStr == "saxon"){
            let attacker = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
            let defensor = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
            let defArmy = this.saxonArmy
        } else {
            return "Bad attacker. This kind of soldier don't exists."            
        }
        const result = defensor.receiveDamage(attacker.strength)
        if (defensor.health <= 0){
            defArmy.splice(defArmy.indexOf(defensor), 1)
        }
        return result
    }

    showStatus(){
        if (this.saxonArmy.length == 0){
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length == 0){
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
        
}
