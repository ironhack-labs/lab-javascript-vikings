// Soldier
class Soldier {
    constructor(health,strength){
        this.health = health;
        this.strength=strength;
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
    constructor(name,health,strength){
        super(health,strength);
        this.name = name;
    }

    receiveDamage(damage){
        this.health -= damage;
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`
        }else{return `${this.name} has died in act of combat`}
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
        this.health -= damage;
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`;
        }else{return "A Saxon has died in combat"};
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
        let viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        let saxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let message=saxon.receiveDamage(viking.strength);
        if(saxon.health<=0){
            this.saxonArmy.pop();
        }
        return message;
    }
    saxonAttack(){
        let viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        let saxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let message=viking.receiveDamage(saxon.strength);
        if(viking.health<=0){
            this.vikingArmy.pop();
        }
        return message;
    }
    showStatus(){
        if(this.saxonArmy.length==0){
           return "Vikings have won the war of the century!";
        }
        if(this.vikingArmy.length==0){
            return "Saxons have fought for their lives and survived another day..."
        }

        if(this.vikingArmy.length>=1 && this.saxonArmy.length >=1){
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
