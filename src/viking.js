// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(theDamage){
        
        this.health = this.health - theDamage;
        
    }

}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength)
        this.name = name;
    }
    receiveDamage(theDamage){
        this.health = this.health - theDamage;
        if(this.health > 0) return `${this.name} has received ${theDamage} points of damage`
        else return `${this.name} has died in act of combat`;
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
   attack(){
    return this.strength;
   }
   receiveDamage(theDamage){
    this.health = this.health - theDamage
    if(this.health > 0) return `A Saxon has received ${theDamage} points of damage`
        else return `A Saxon has died in combat`;
   }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = []
    addViking(Viking){
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)

    }
    vikingAttack(){
        let rondmViking = Math.floor(Math.random() * this.vikingArmy.length);
        let rondmSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let vikAtack = this.saxonArmy[rondmSaxon].receiveDamage(this.vikingArmy[rondmViking].strength);
        if(this.saxonArmy[rondmSaxon].health <= 0) this.saxonArmy.pop(rondmSaxon);
       return vikAtack;
    }
    saxonAttack(){
        let rondmViking = Math.floor(Math.random() * this.vikingArmy.length);
        let rondmSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let saxonAtack = this.vikingArmy[rondmViking].receiveDamage(this.saxonArmy[rondmSaxon].strength);
        if(this.vikingArmy[rondmViking].health <= 0) this.vikingArmy.pop(rondmViking);
        return saxonAtack;

    }
    showStatus(){
        if(!this.vikingArmy.length) return "Saxons have fought for their lives and survived another day..."
        else if(!this.saxonArmy.length) return "Vikings have won the war of the century!"
        else return "Vikings and Saxons are still in the thick of battle."

    }
}
