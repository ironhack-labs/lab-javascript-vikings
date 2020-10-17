// Soldier
class Soldier {
    constructor(health, strength){
        this.health=health;
        this.strength=strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health-=damage;
    }
}

const viking =new Soldier('buena','alta')
console.log(viking)


// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength)
        this.name=name;
    }
    receiveDamage(damage){
        this.health-=damage;
        if(this.health>0){
        return `${this.name} has received ${damage} points of damage`;
        } else{
            return `${this.name} has died in act of combat`;
    }
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength)
    }

receiveDamage(damage){
    this.health-=damage;
    if(this.health>0){
    return `A Saxon has received ${damage} points of damage`;
    } else{
        return `A Saxon has died in combat`;
        }
    }
}

const saxon1= new Saxon(100, 100)
const saxon2= new Saxon(80, 70)
const saxon3= new Saxon(20, 10)
const saxon4= new Saxon(100, 70)

/*
// War
class War {
    constructor(){
        this.vikingArmy=[];
        this.saxonArmy=[];
    }
    addViking(Viking){
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }
    vikingAttack(){
        Saxon

    }

}


*/