// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health;
        this.strength = strength
    }

    attack(){
        return this.strength

    }

    receiveDamage(damage){
        this.health -= damage

    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength){
        super (name, health, strength);
        this.name = name;
        this.health = health;
        this.strength = strength;
         
    }

    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
    }
    else 
    return `${this.name} has died in act of combat`

    }
    battleCry(){
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier{

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }
        else 
        return `A Saxon has died in combat`
    }
}

// War
class War {

    vikingArmy = [ ];
    saxonArmy = [ ];


    addViking(Viking){
        this.vikingArmy.push(Viking)

    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }

    vikingAttack(){
        let saxonSoldier = this.saxonArmy(Math.floor(Math.random() * this.saxonArmy.length));
        let vikingArmy = this.vikingArmy(Math.floor(Math.random() * this.vikingArmy.length));
        
    }

    saxonAttack(){
        let saxonSoldier = this.saxonArmy(Math.floor(Math.random() * this.saxonArmy.length));
        let vikingArmy = this.vikingArmy(Math.floor(Math.random() * this.vikingArmy.length));

    }

    showStatus(){

    }

    
}
