// Soldier
class Soldier {
    constructor(hp, str){
        this.health = hp;
        this.strength = str;
    }

    attack(){
        return this.strength;    
    }

    receiveDamage(dmg){
        this.health = this.health - dmg;
    }
}

// Viking
class Viking extends Soldier {
    constructor(n, hp, str){
    super()
    this.name = n;
    this.health = hp;
    this.strength = str
    }

    receiveDamage(dmg){
        this.health = this.health - dmg;
        if(this.health > 0){
            return `${this.name} has received ${dmg} points of damage`;
        }
        if(this.health <= 0){
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry(){
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(hp, str){
        super();
        this.health = hp;
        this.strength = str;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(dmg){
        this.health = this.health - dmg;
        if(this.health > 0){
            return `A Saxon has received ${dmg} points of damage`;
        }
        if(this.health <= 0) {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    
    addViking(vik){
        this.vikingArmy.push(vik)
    }

    addSaxon(sax){
        this.saxonArmy.push(sax)
    }
}



