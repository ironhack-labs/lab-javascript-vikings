// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack () {
        return this.strength
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
    }
}
// Viking
class Viking extends Soldier{
    constructor (name,health, strength){
        super(health,strength);
        this.name = name;
        
    }
    
    receiveDamage(damage){
        this.health = this.health - damage;
            if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
            } else {
                return `${this.name} has died in act of combat`;
            }
    };

    battleCry () {
            return `Odin Owns You All!`
    }
}
// Saxon
class Saxon extends Soldier{
    constructor (health, strength){
        super(health,strength)

    }
    receiveDamage(damage){
        this.health = this.health - damage;
            if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
            } else {
                return `A Saxon has died in combat`;
            }
    }; 

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

    vikingAttack() {
    let saxonRandom = Saxon[Math.floor(Math.random(saxonArmy.length))]
    let vikingRandom = Viking[Math.floor(Math.random(vikingArmy.length))]
        return saxonRandom = saxonRandom.receiveDamage - vikingRandom.attack;
    }

    saxonAttack(){
    let saxonRandom = Saxon[Math.floor(Math.random(saxonArmy.length))]
    let vikingRandom = Viking[Math.floor(Math.random(vikingArmy.length))]

        return vikingRandom = vikingRandom.receiveDamage - saxonRandom.attack;
    } 

    showStatus(){}


}
    