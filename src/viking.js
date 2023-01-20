// Soldier
class Soldier {
    constructor(health, strength) {
        this.health= health;
        this.strength=strength;
    }

    attack(){
        return this.strength
    }

    receiveDamage(damage) {
        this.health-=damage
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name=name;
    }
    receiveDamage(damage){
        super.receiveDamage(damage)
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`
        }else{
            return `${this.name} has died in act of combat`   
        }
    }

    battleCry(){
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier{

    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health-=damage
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`
        }else{
            return `A Saxon has died in combat`   
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy=[];
        this.saxonArmy=[]
    }
    addViking(obj){
        this.vikingArmy.push(obj)
    }
    addSaxon(obj){
        this.saxonArmy.push(obj)
    }

    // genericMethod(attacker, defender){
    //             let randomAttacker = attacker[Math.floor(Math.random() * attacker.length)];
    //             let randomDefender = defender[Math.floor(Math.random() * defender.length)];
    //             let result = randomDefender.receiveDamage(randomAttacker.strength)
    //             let updatedArray = defender.filter(def => def.health > 0);
    //             attacker === this.vikingArmy ? this.saxonArmy = updatedArray : this.vikingArmy = updatedArray;
    //             return result
    // }

    vikingAttack(){
        let randomVik = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSax = Math.floor(Math.random() * this.saxonArmy.length);
        let result = this.saxonArmy[randomSax].receiveDamage(this.vikingArmy[randomVik].strength) 
        this.saxonArmy = this.saxonArmy.filter(sax => sax.health > 0);
        return result
    }
    saxonAttack(){
        let randomVik = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSax = Math.floor(Math.random() * this.saxonArmy.length);
        let result = this.vikingArmy[randomVik].receiveDamage(this.saxonArmy[randomSax].strength) 
        this.vikingArmy = this.vikingArmy.filter(vik => vik.health > 0);
        return result
    }
    showStatus(){
        if(!this.saxonArmy.length){
            return "Vikings have won the war of the century!"
        }else if(!this.vikingArmy.length){
            return "Saxons have fought for their lives and survived another day..."
        }else{
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
