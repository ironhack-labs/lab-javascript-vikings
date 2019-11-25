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
        // 'remove' damage from the health property
        this.health-=damage;
        //if(this.health<0)this.health=0;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength);
        this.name=name;
    }
    // override receiveDamage()
    receiveDamage(damage){
        console.log("Viking '"+this.name+" with health "+this.health+" receiving "+damage+" points of damage.");
        super.receiveDamage(damage);
        console.log("\tViking '"+this.name+" left with "+this.health+" points of health.");
        return this.name+" has "+(this.health>0
            ?"received "+damage+" points of damage"
            :"died in act of combat");
    }
    // extra method
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    // only receiveDamage() is differently
    receiveDamage(damage){
        console.log("Saxon with health "+this.health+" receiving "+damage+" points of damage.");
        super.receiveDamage(damage);
        console.log("\tSaxon left with "+this.health+" points of health.");
        return(this.health>0
            ?"A Saxon has received "+damage+" points of damage"
            :"A Saxon has died in combat");
    }
}

// War
class War {
    constructor(){
        this.vikingArmy=[];
        this.saxonArmy=[];
    }
    addViking(viking){
        if(!viking||!(viking instanceof Viking))return null;
        let numberOfVikings=this.vikingArmy.length;
        this.vikingArmy.push(viking);
        //return(this.vikingArmy.push(viking)>numberOfVikings:viking:null);
    }
    addSaxon(saxon){
        if(!saxon||!(saxon instanceof Saxon))return null;
        let numberOfSaxons=this.saxonArmy.length;
        this.saxonArmy.push(saxon);
        //return(this.saxonArmy.push(saxon)>numberOfSaxons?saxon:null);
    }
    vikingAttack(){
        let numberOfSaxons=this.saxonArmy.length,numberOfVikings=this.vikingArmy.length;
        if(numberOfSaxons==0||numberOfVikings==0)return 0;
        // select a saxon
        let saxonIndex=Math.floor(Math.random()*numberOfSaxons);
        let saxon=this.saxonArmy[saxonIndex];
        let result=saxon.receiveDamage(this.vikingArmy[Math.floor(Math.random()*numberOfVikings)].attack());
        if(saxon.health<=0) // saxon died!
            this.saxonArmy.splice(saxonIndex,1);
        return result;
    }
    saxonAttack(){
        let numberOfSaxons=this.saxonArmy.length,numberOfVikings=this.vikingArmy.length;
        if(numberOfSaxons==0||numberOfVikings==0)return 0;
        // select a saxon
        let vikingIndex=Math.floor(Math.random()*numberOfVikings);
        let viking=this.vikingArmy[vikingIndex];
        let result=viking.receiveDamage(this.saxonArmy[Math.floor(Math.random()*numberOfSaxons)].attack());
        if(viking.health<=0) // saxon died!
            this.vikingArmy.splice(vikingIndex,1);
        return result;
    }
    showStatus(){
        if(this.saxonArmy.length==0)
            return "Vikings have won the war of the century!";
        if(this.vikingArmy.length==0)
            return "Saxons have fought for their lives and survived another day...";
        return "Vikings and Saxons are still in the thick of battle."
        console.log("Vikings:",this.vikingArmy);
        console.log("Saxons:",this.saxonArmy);
    }
}


