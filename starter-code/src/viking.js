// Soldier
function Soldier(health,strength) {
    this.health=health
    this.strength=strength
}

Soldier.prototype.attack=function(){
    return this.strength
}

Soldier.prototype.receiveDamage=function(damage){
    this.health-=damage
}
// Viking

function Viking(name, health,strength) {
    Soldier.call(this,health,strength)
    
    this.name=name
    this.health=health
    this.strength=strength
}

Viking.prototype=Object.create(Soldier.prototype)

Viking.prototype.attack=function(){
    return this.strength
}

Viking.prototype.receiveDamage=function(damage){
    this.health-=damage
    if(this.health>0){
        return this.name +" has received "+ damage +" points of damage"
    } else{
        return this.name +" has died in act of combat"
    }  
}

Viking.prototype.battleCry=function(){
    return "Odin Owns You All!"    
}



// Saxon

Saxon.prototype=Object.create(Soldier.prototype)

function Saxon(health,strength) {
    Soldier.call(this,health,strength)
    
    this.health=health
    this.strength=strength
}

Saxon.prototype.attack=function(){
    return this.strength
}

Saxon.prototype.receiveDamage=function(damage){
    this.health-=damage
    if(this.health>0){
        return "A Saxon has received "+ damage +" points of damage"
    } else{
        return "A Saxon has died in combat"
    }  
}


// War
function War() {
    this.vikingArmy=[]
    this.saxonArmy=[]
}

War.prototype.addViking=function(viking){
    this.vikingArmy.push(viking)
}

War.prototype.addSaxon=function(saxon){
    this.saxonArmy.push(saxon)
}

War.prototype.vikingAttack=function(){
    let saxonR=Math.floor(Math.random()*this.saxonArmy.length)
    let vikingR=Math.floor(Math.random()*this.vikingArmy.length)
        
    

    let una = this.saxonArmy[saxonR].receiveDamage(this.vikingArmy[vikingR].strength)

    if(this.saxonArmy[saxonR].health<0){
        this.saxonArmy.splice(saxonR,1)
    }
    return una 


}

War.prototype.saxonAttack=function(){
    let saxonR=Math.floor(Math.random()*this.saxonArmy.length)
    let vikingR=Math.floor(Math.random()*this.vikingArmy.length)

   
   
   let dos = this.vikingArmy[vikingR].receiveDamage(this.saxonArmy[saxonR].strength)

    
    if(this.vikingArmy[vikingR].health<0){
        this.vikingArmy.splice(vikingR,1)
    }

    return dos
}


War.prototype.showStatus=function(){
    
   if(this.saxonArmy.length===0){
       return "Vikings have won the war of the century!"  
   } else if (this.vikingArmy.length===0){
       return "Saxons have fought for their lives and survive another day..."
   } else{
       return "Viking and Saxons are still in the thick of battle."
   }
}

