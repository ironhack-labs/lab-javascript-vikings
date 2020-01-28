// Soldier
class Soldier {
constructor(health, strength) {
    //define properties
    this.health = health; 
    this.strength = strength;
}
    attack() {
        return this.strength
    }
    receiveDamage(damage){
        //Subtract damaged received in combat from health points
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        //define added property of name and use super to inherit properties defined in parent class soldier
        super (health,strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health=this.health-damage;
        //health checked for whether soldier lived or died, i.e. points <= 0 indicate solder has died
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }else{
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health,strength){
        //use super to inherit properties defined in parent class soldier
        super (health,strength);
    }
    receiveDamage(damage){
        this.health=this.health-damage;
        //Option2: super.receiveDamage(damage); <--calls on method receiveDamage in Soldier class
        
        //health checked for whether soldier lived or died, i.e. points <= 0 indicate solder has died
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }else{
            return "A Saxon has died in combat";
        }
    }

}

// War
class War {
    constructor() {
        //add property to define armies for both sides
        this.vikingArmy=[];
        this.saxonArmy=[];
    }
    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        //select random saxon from saxon army
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        //select random viking from viking army and get strength property
        let damageReceived= this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)].strength;
        //define the result of battle from viking attack on saxon
        let outcome= randomSaxon.receiveDamage(damageReceived);
        //function to remove saxon if result is death
        if (outcome=="A Saxon has died in combat"){
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon),1)
        }
        //return result of battle
        return outcome
        
    }
    saxonAttack(){
        //same as above but vice versa
        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        let damageReceived= this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)].strength;
        let outcome= randomViking.receiveDamage(damageReceived);
        if (outcome.includes("has died")) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking),1)
        }
        return outcome
        
    }
    showStatus(){
        //count soldiers in each army and return status of war based on headcounts
        if (this.saxonArmy.length==0){
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length==0){
            return "Saxons have fought for their lives and survived another day..."
        } else{
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
