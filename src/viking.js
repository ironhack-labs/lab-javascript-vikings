// Soldier
class Soldier {
    constructor(health,strength){
        this.health=health;
        this.strength=strength;
    }
    attack(){   
        return this.strength;
    }
    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength)
        this.name=name;
    }
    receiveDamage(damage){
        this.health-= damage;
        if(this.health>0)
        return (this.name+" has received "+damage+" points of damage")
        else
        return(this.name+" has died in act of combat")
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
    this.health -= damage;
    if(this.health>0)
    return "A Saxon has received "+damage+" points of damage"
    else
    return "A Saxon has died in combat"

    }
}

// War
class War {
   
    // addSaxon();
    // vikingAttack();
    // saxonAttack();
    // showStatus();
    constructor (){
        this.vikingArmy =[]
        this.saxonArmy =[]
    }

    addViking(viking){
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }

    vikingAttack(){
        let saxon=this.saxonArmy[Math.floor(Math.random()*this.addSaxon.length)]
        let viking=this.vikingArmy[Math.floor(Math.random()*this.addViking.length)]
        let damage = saxon.receiveDamage(viking.attack())
//this.saxonArmy.indexOf(saxon)
        if(saxon.health<=0)
            this.saxonArmy.splice(this.saxonArmy.indexOf(saxon),1)

        return damage //saxon.receiveDamage(viking.attack())
     
    }
    saxonAttack(){
        let  saxon=this.saxonArmy[Math.floor(Math.random()*this.addSaxon.length)]
        let viking=this.vikingArmy[Math.floor(Math.random()*this.addViking.length)]
        let damage=viking.receiveDamage(saxon.attack())
        if(viking.health<=0)
            this.vikingArmy.splice(this.vikingArmy.indexOf(viking),1)

        return damage //viking.receiveDamage(saxon.attack())
    }
    showStatus(){
        if(this.saxonArmy.length === 0)
          return "Vikings have won the war of the century!"
        else if(this.vikingArmy.length === 0)
          return "Saxons have fought for their lives and survived another day..."
        else //if( this.saxonArmy.length >=1 && this.vikingArmy>=1)
          return "Vikings and Saxons are still in the thick of battle." 
    }
}

let war1 = new War();

//let sol = new Soldier(110 ,69);
//let vik = new Viking("Lolan",100,5)
let sax = new Saxon(50,2)

war1.addViking(new Viking("Lolan",100,5));
war1.addViking(new Viking("Lol",300,85));
war1.addViking(new Viking("Lola",80,15));
war1.addSaxon(sax)
war1.addSaxon(new Saxon(180,115));

while (war1.vikingArmy.length!=0 && war1.saxonArmy.length!=0){
    war1.saxonAttack();
    war1.vikingAttack();
    console.log(war1.showStatus());
}

