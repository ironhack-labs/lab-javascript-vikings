// Soldier
class Soldier {
    constructor(health, strength) {   
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
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health = this.health - damage;
        if(this.health >= 1){
            return `${this.name} has received ${damage} points of damage`;
        }
        else{
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry(){
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health = this.health - damage;
        if(this.health >=1){
            return `A Saxon has received ${damage} points of damage`;
        }
        else{
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];
    
    addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }
    vikingAttack(){
        let vikingRand = Math.floor(Math.random() * this.vikingArmy.length);
        let saxonRand = Math.floor(Math.random()* this.saxonArmy.length);
        saxonArmy[saxonRand].receiveDamage(this.vikingArmy[vikingRand].attack());
        //No me sale el tercer metodo del vikingAttack(), no entiendo porque no me lo pinta con este último código.
    }
    saxonAttack(){

    }
    showStatus(){

    }
}
