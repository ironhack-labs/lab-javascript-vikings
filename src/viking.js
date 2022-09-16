// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health,strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health,strength)
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }

}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];
    addViking(Viking){
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }
    vikingAttack(){
        let vikingFinalDamage = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].attack())
        if(this.saxonArmy[0].health <= 0){
            this.saxonArmy.pop(this.saxonArmy[0])
        }
        return vikingFinalDamage
    }
    saxonAttack(){
        let saxonFinalDamage = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].attack())
        if(this.vikingArmy[0].health <= 0){
            this.vikingArmy.pop(this.vikingArmy[0])
        }
        return saxonFinalDamage
    }
    showStatus(){
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        } else if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
