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
    vikingArmy =[]
    saxonArmy =[]

    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
       let  saxon=this.saxonArmy[Math.floor(Math.random()*this.addSaxon.length)]
        let viking=this.vikingArmy[Math.floor(Math.random()*this.addViking.length)]
        let damage = saxon.receiveDamage(viking.strength)
//this.saxonArmy.indexOf(saxon)
        if(saxon.health<=0)
            this.saxonArmy.splice(Math.floor(Math.random()*this.addSaxon.length),1)

        return damage //saxon.receiveDamage(viking.attack())
     
    }
    saxonAttack(){
        let  saxon=this.saxonArmy[Math.floor(Math.random()*this.addSaxon.length)]
        let viking=this.vikingArmy[Math.floor(Math.random()*this.addViking.length)]
        let damage=viking.receiveDamage(saxon.strength)
        if(viking.health<=0)
            this.vikingArmy.splice(Math.floor(Math.random()*this.addViking.length),1)

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
const war = new War;

war.addSaxon(new Saxon(100, 15));
war.addSaxon(new Saxon(100, 10));
war.addSaxon(new Saxon(100, 5));

war.addViking(new Viking("Ragnar", 100, 20));
war.addViking(new Viking("Rollo", 100, 15));
war.addViking(new Viking("Thorsten", 100, 10));


for (let i = 0; i < 20; i++) {
  war.saxonAttack();
  war.vikingAttack();
  console.log(war.showStatus());
}