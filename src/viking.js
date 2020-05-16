// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health,strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0 )
            return `${this.name} has received ${damage} points of damage`
        else
            return `${this.name} has died in act of combat`           
    }

    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0 )
            return `A Saxon has received ${damage} points of damage`
        else
            return `A Saxon has died in act of combat`            
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(v){
        this.vikingArmy.push(v);
    }

    addSaxon(s){
        this.saxonArmy.push(s);
    }

    vikingAttack(){
        const v = this.vikingArmy[parseInt(Math.random()*this.vikingArmy.length)];
        const s = this.saxonArmy[parseInt(Math.random()*this.saxonArmy.length)];
        const dam = s.receiveDamage(v.strength);
        this.saxonArmy = this.saxonArmy.filter(s => s.health > 0);
        return dam
    }
    saxonAttack(){
        const v = this.vikingArmy[parseInt(Math.random()*this.vikingArmy.length)];
        const s = this.saxonArmy[parseInt(Math.random()*this.saxonArmy.length)];
        const dam = v.receiveDamage(s.strength);
        this.vikingArmy = this.vikingArmy.filet(v => v.health >0);
        return dam
    }

    showStatus(){
        if (this.saxonArmy.length === 0)
            return "Vikings have won the war of the century!"
        if (this.vikingArmy.length === 0)
            return "Saxons have fought for their lives and survived another day..."
        if  (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1)
            return "Vikings and Saxons are still in the thick of battle."
    }
}