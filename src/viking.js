// Soldier
class Soldier {
    constructor(health, strength){
        this.health=health
        this.strength=strength
    }

    attack(){
        return this.strength
    }

    receiveDamage(damage){
     this.health-=damage
    }


};

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength)
        this.name=name
    }

    receiveDamage(damage){

        this.health-=damage

        if(this.health>0){
            return this.name + " has received "+ damage+ " points of damage"
        }else{
            return this.name + " has died in act of combat"
        }

    }

    battleCry(){
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier{

    receiveDamage(damage){

        this.health-=damage

        if(this.health>0){
            return "A Saxon has received " +damage+" points of damage"
        }else{
            return "A Saxon has died in combat"
        }
    }

}

// War
class War {

    constructor(){
        this.vikingArmy=[]
        this.saxonArmy=[]
    }

    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    
    vikingAttack(){
        
        let saxonVictim=this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let vikingAttaker=this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];

       let attackresult= saxonVictim.receiveDamage(vikingAttaker.strength);

        if(saxonVictim.health<=0){
            this.saxonArmy.splice(saxonVictim,1)
        }

        return attackresult
       
    }
    saxonAttack(){
        
        let vikingVictim=this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        let saxonAttaker=this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];

        let attackresult= vikingVictim.receiveDamage(saxonAttaker.strength);

        if(vikingVictim.health<=0){
            this.vikingArmy.splice(vikingVictim,1)
        }

        return attackresult
       
    }
    showStatus(){
        if (this.saxonArmy.length===0 && this.vikingArmy.length>0){
           return "Vikings have won the war of the century!"
        }else if(this.vikingArmy.length===0 && this.saxonArmy.length>0 ){
            return "Saxons have fought for their lives and survived another day..."
        }else{
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
