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

    vikingAttack(){
        let vikRand = Math.floor(Math.random()*this.vikingArmy.length);
        let vik1= this.vikingArmy[vikRand];
        let saxRand = Math.floor(Math.random()*this.saxonArmy.length);
        let sax1 = this.saxonArmy[saxRand];
        sax1.receiveDamage(vik1.strength);
        if(sax1.health <= 0){
            this.saxonArmy.splice(saxRand,1);
            return "A Saxon has died in combat"
        
        }
    }

    saxonAttack(){
        let vikRand2 = Math.floor(Math.random()*this.vikingArmy.length);
        let vik2= this.vikingArmy[vikRand2];
        let saxRand2 = Math.floor(Math.random()*this.saxonArmy.length);
        let sax2 = this.saxonArmy[saxRand2];
        vik2.receiveDamage(sax2.strength);
        if(vik2.health <= 0){
            this.vikingArmy.splice(vikRand2,1);
        }else{
            return `${vik2.name} has received ${sax2.strength} points of damage`;
        }        
    }

    showStatus(){
        if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survive another day..."
        }if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        }if(this.saxonArmy.length > 0 && this.vikingArmy.length > 0){
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}


let ragnarok = new War()

ragnarok.addViking(new Viking('Gui',30,15))
ragnarok.addViking(new Viking('A',30,15))
ragnarok.addViking(new Viking('B',30,15))
ragnarok.addViking(new Viking('C',30,15))
ragnarok.addViking(new Viking('D',30,15))

ragnarok.addSaxon(new Saxon('Henry',28,22))

console.log(ragnarok.vikingAttack)
