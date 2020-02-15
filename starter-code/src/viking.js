// Soldier
class Soldier {
    constructor(health,strength){
        this.health=health
        this.strength=strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health-=damage
    }
}

// Viking
class Viking extends Soldier{
    constructor(name,health,strength){
        super(health,strength)
        this.name=name
    }
    receiveDamage(damage){
        this.health-=damage
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`
        }else{
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health-=damage
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`
        }
        else{
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy=[]
        this.saxonArmy=[]
    }
    addViking(newViking){
        this.vikingArmy.push(newViking)
    }
    addSaxon(newSaxon){
        this.saxonArmy.push(newSaxon)
    }
    vikingAttack(){
        let randomSaxon=Math.floor(Math.random()*this.saxonArmy.length)
        let randomViking=Math.floor(Math.random()*this.vikingArmy.length)
        let vikingDmg=this.vikingArmy[randomViking].strength
        let result = this.saxonArmy[randomSaxon].receiveDamage(vikingDmg)
        this.saxonArmy = this.saxonArmy.filter(aliveSaxon=>aliveSaxon.health>0)
        return result
 
        //return this.saxonArmy[randomSaxon].receiveDamage(vikingDmg)
// console.log(this.vikingArmy[randomViking])
//         let result = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)
//         if(this.saxonArmy[randomSaxon].health <= 0){
//             this.saxonArmy.splice(randomSaxon,1)
//         }
//         return result
    }
    saxonAttack(){
        let randomSaxon=Math.floor(Math.random()*this.saxonArmy.length)
        let randomViking=Math.floor(Math.random()*this.vikingArmy.length)  
        let saxonDmg=this.saxonArmy[randomSaxon].strength
        let result = this.vikingArmy[randomViking].receiveDamage(saxonDmg)
        this.vikingArmy = this.vikingArmy.filter(aliveSaxon=>aliveSaxon.health>0)
        return result
    }
    showStatus(){
        if(this.saxonArmy.length===0){
            return "Vikings have won the war of the century!"
        }
        else if(this.vikingArmy.length===0){
            return "Saxons have fought for their lives and survived another day..."
        }
        else if(this.vikingArmy.length>=1 && this.saxonArmy.length>=1){
            return "Vikings and Saxons are still in the thick of battle."
        }
    }


}
let Harold= new Viking("Harold",100,10)
let Weak=new Saxon(10,10)
let Weak1= new Saxon(20,10)
let war=new War()
war.addViking(Harold)
war.addSaxon(Weak)
war.addSaxon(Weak1)
war.vikingAttack()
war.vikingAttack()

