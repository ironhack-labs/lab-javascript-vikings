// Soldier
class Soldier {
    constructor (health,strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health-=damage;
    }
}


// Viking
class Viking extends Soldier{
    constructor (name,health,strength){
        super (health,strength);
        this.name=name;
    }
    receiveDamage(damage){
        this.health-=damage;
        if (this.health>0){
            
            return `${this.name} has received ${damage} points of damage`;  
        }else{
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health-=damage;
        if (this.health>0){
            
            return `A Saxon has received ${damage} points of damage`;  
        }else{
            return `A Saxon has died in combat`;
        }
    }
    

}


//Esta parte creo que es la que más me ha costado. 
//He tenido un problema con los checks ultimos de recieveDamage. 
//Obviamente el error no era en el código de abajo sino de base... :´(  

// War
class War {
    constructor(){
        this.vikingArmy =[ ];
        this.saxonArmy =[ ];

    }
    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        const vikingAttack = Math.floor(Math.floor(this.vikingArmy.length)*Math.random());
        const saxonRecieve = Math.floor(Math.floor(this.saxonArmy.length)*Math.random());
        const vikAtt = this.vikingArmy[vikingAttack];
        const saxRec = this.saxonArmy[saxonRecieve];

        let resultFight = saxRec.receiveDamage(vikAtt.strength);
        if (saxRec.health <= 0){
            this.saxonArmy.splice(saxonRecieve,1);
            return "A Saxon has died in combat";
        }
        return resultFight;
        
    }
    saxonAttack(){
        let saxonAttack = Math.floor(this.saxonArmy.length*Math.random());
        let vikingRecieve = Math.floor(this.vikingArmy.length*Math.random());
        let resultFight = this.vikingArmy[vikingRecieve].receiveDamage(this.saxonArmy[saxonAttack].strength);

        if (this.vikingArmy[vikingRecieve].health <= 0){
            this.vikingArmy.splice(vikingRecieve,1);
        }
        return resultFight;

    }
    showStatus() {
        if(this.vikingArmy.length === 0 ) {
            return 'Saxons have fought for their lives and survived another day...';
        } else if(this.saxonArmy.length === 0 ) {
            return "Vikings have won the war of the century!";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
