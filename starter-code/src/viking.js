// Soldier
class Soldier{ 
    constructor(health, strength){
        this.health   = health;
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
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage){
        this.health = this.health - damage;
        if(this.health > 0){
             return `${this.name} has received ${damage} points of damage`;
            //  return "NAME has received DAMAGE points of damage";
        }else{
            return `${this.name} has died in act of combat`;
            // return "NAME has died in act of combat";
        }
    }

    battleCry(){
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier{

    receiveDamage(damage){
        this.health = this.health - damage;
        if(this.health > 0){
             return `A Saxon has received ${damage} points of damage`;
        }else{
            return "A Saxon has died in combat";
        }
    }
}

// War
class War {

    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }


    addViking(Viking){
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }

    vikingAttack(){
        // console.log(`Reference? ${Saxon}`)
        // Con mayúscula o con minúscula?????
        let randomSaxon = saxonArmy[Math.floor(Math.random()*saxonArmy.length)];
        console.log(`randomSaxon is ${randomSaxon}`);

        Saxon.receiveDamage(Viking.strength);
        let oldHealth = Saxon.health;
        Saxon.health = oldHealth - Viking.strength;
        //Saxon.health = Saxon.health - Viking.damage();
        if (Saxon.health < 0){
            saxonArmy.pop();
        }
        return Saxon.receiveDamage(Viking.strength);
    }

    saxonAttack(){
        Viking.receiveDamage(Saxon.strength);
        if (Viking.health < 0){
            vikingArmy.pop();
        }
        return Viking.receiveDamage(Saxon.strength);
    }

    showStatus(){
        console.log(`${this.saxonArmy.length}`)
        console.log(`${this.vikingArmy.length}`)
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        }else if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day...";
        }else{
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}



