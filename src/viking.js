// Soldier

class Soldier {
    constructor(health,strength){
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super (health, strength);
        this.name = name;   
    }
    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health = this.health - damage
        if (this.health > 0){
            return this.name + " has received " + damage + " points of damage";
        }
        else{
            return this.name + " has died in act of combat";
        }
    }

    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health = this.health - damage;
        if (this.health > 0){
            return "A Saxon has received " + damage + " points of damage";
        }
        else{
            return "A Saxon has died in combat";
        }
    }
}

// War
class War{
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(vikObjeto){
        this.vikingArmy.push(vikObjeto);
    }

    addSaxon(saxObjeto){
        this.saxonArmy.push(saxObjeto);
    }

    vikingAttack(){
        let batalla = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].receiveDamage(this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].strength);
        this.saxonArmy = this.saxonArmy.filter(Saxon => Saxon.health > 0);
        return batalla;
    }
    
    saxonAttack(){
        let batalla = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].receiveDamage(this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength);
        this.vikingArmy = this.vikingArmy.filter(Viking => Viking.health > 0);
        return batalla
    }

    showStatus(){
        if (this.saxonArmy.length == 0){
            return "Vikings have won the war of the century!"
        }else if(this.vikingArmy.length == 0){
            return "Saxons have fought for their lives and survived another day..."
        }
        else{
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
