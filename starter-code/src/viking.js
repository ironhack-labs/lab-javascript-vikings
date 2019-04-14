// Soldier

class Soldier {

    constructor(health, strength) {
        this.strength = strength;
        this.health = health;
    }

    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health -= damage;
    }
}


// Viking
class Viking extends Soldier {
    constructor (name,health,strength){
        super(health, strength);
        this.name = name;
        this.health = health;
        this.strength = strength;
    }

    receiveDamage(damage){
        this.damage = damage;
        this.health -= this.damage;
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`;          
        } else {
            return `${this.name} has received ${this.damage} points of damage`
        }   
    }

    battleCry(){
        return `Odin Owns You All!`
    }

}

// Saxon
class Saxon extends Soldier {
    constructor (health, strength){
        super(health, strength);
        this.health = health;
        this.strength = strength;
    }

    receiveDamage(damage){
        this.damage = damage;
        this.health -= this.damage;
        if (this.health <= 0) {
            return `A Saxon has died in combat`;          
        } else {
            return `A Saxon has received ${this.damage} points of damage`
        }   
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking){
        var name     = "Harald";
        var strength = 150;
        var health   = 300;
       return new Viking(name, health, strength);
       this.vikingArmy.push(viking);
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }
    vikingAttack(){
        receiveDamage.call()
    }
    saxonAttack(){}
    showStatus(){
        if (saxonArmy.length === 0 ) {
            return "Vikings have won the war of the century!"           
        } else if (vikingArmy.length === 0 ){
            return "Saxons have fought for their lives and survive another day..."
        } else {
            "Vikings and Saxons are still in the thick of battle."
        }
    }
}
