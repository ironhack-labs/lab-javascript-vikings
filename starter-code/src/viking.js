// Soldier
class Soldier {
    constructor(health,strength){
        this.health=health;
        this.strength=strength;
    };
    attack(){
        return this.strength;
    };
    receiveDamage(damage){
        return this.health-=damage;
    }
};

// Viking
class Viking extends Soldier{
    constructor(name,health,strength){
        super(health,strength);
        this.name=name;
        this.receiveDamage=function(damage){
        this.health -= damage;
        if (this.health > 0){
           return `${this.name} has recived ${damage} points of damage`;
        }
        else{
           return `${this.name} has died in act of combat`;
        }
        };
    };
    battleCry = function(){
        return "Odin Owns You All!";
    };
};


// Saxon
class Saxon extends Soldier{
    constructor(health,strength){
        super(health,strength);
    
    this.receiveDamage=function(damage){
        this.health -= damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }
        else{
            return "A saxon has died in combat";
        }
    }
}
}

// War
class War {}
