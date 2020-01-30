// Soldier
class Soldier {
    constructor(health, strength) {
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
    constructor(name,health,strength){
        super(health,strength);
        this.name = name;
        
    }
    receiveDamage(damage){
        this.health-=damage;
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`;
        } 
        return `${this.name} has died in act of combat`;
    }  
    battleCry(){
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier {
    
    receiveDamage(damage){
        this.health-=damage;
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`;
        } 
        return `A Saxon has died in combat`;
    }  
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        let viking = this.vikingArmy[Math.floor((Math.random()*this.vikingArmy.length))];
        //
        let indexSaxon = Math.floor((Math.random()*this.saxonArmy.length));
        let saxon = this.saxonArmy[indexSaxon];
        
        let result = saxon.receiveDamage(viking.strength);
        if (result==='A Saxon has died in combat'){
            this.saxonArmy.splice(indexSaxon,1);
            
        }
        return result;
    }
    saxonAttack(){
        let saxon = this.saxonArmy[Math.floor((Math.random()*this.saxonArmy.length))];
        //
        let indexViking = Math.floor((Math.random()*this.vikingArmy.length));
        let viking = this.vikingArmy[indexViking];
        
        let result = viking.receiveDamage(saxon.strength);
        if (result===`${viking.name} has died in act of combat`){
            this.vikingArmy.splice(indexViking,1);
            
        }
        return result;
    }

    attack(attacker){
        let saxon = this.selectSoldier(this.saxonArmy);
        let viking = this.selectSoldier(this.vikingArmy);
        let result;
        if(attacker==='viking'){
            result=saxon.receiveDamage(viking.strength);
            if (result==='A Saxon has died in combat'){
                this.saxonArmy.splice(this.saxonArmy.indexOf(saxon),1);
                
            } 
        } else if (attacker==='saxon'){
            result=viking.receiveDamage(saxon.strength)
            if (result===`${viking.name} has died in act of combat`){
                this.vikingArmy.splice(this.vikingArmy.indexOf(viking),1);
                
            }
        } else { result = "Not fighting at this war";}
        
        return result;
    }

    selectSoldier(army){
        return army[Math.floor((Math.random()*army.length))];
    }
    
    showStatus(){
        if(this.saxonArmy.length===0){
            return "Vikings have won the war of the century!"
        }
        if(this.vikingArmy.length===0){
            return "Saxons have fought for their lives and survived another day..."
        }
        if(this.saxonArmy.length > 0 && this.vikingArmy.length > 0){
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}

let war = new War();
war.addViking(new Viking('Ragnar',200,200));
war.addSaxon(new Saxon(200,200));

console.log(war);

console.log(war.attack('asterix'));
console.log(war);

