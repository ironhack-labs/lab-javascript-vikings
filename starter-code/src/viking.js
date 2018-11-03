// Soldier
function Soldier(health, strength) {
    this.strength = strength;
    this.health = health;
    this.attack = function(){
        return this.strength;
    }
    this.receiveDamage = function(damage){
        this.health -= damage    
    }
}

// Viking
function Viking(name, health, strength) {
    Soldier.call(this,health,strength)
    this.name = name;
    this.receiveDamage= function(damage){
        this.health -= damage
        if (this.health >0){
            return this.name +" has received "+ damage + "points of damage"
        }else{
            return this.name +" has died in act of combat"
        }
    }
    this.battleCry = function(){
        return "Odin Owns You All!"
    }
}

// Saxon
function Saxon(health, strength) {
    Soldier.call(this, health,strength)
    this.receiveDamage = function(damage){
            this.health -= damage
            if (this.health >0){
                return "A Saxon has received "+ damage + "points of damage"
            }else{
                return "A Saxon has died in combat"
            }
    }

}

// War
function War() {
    this.vikingArmy = []
    this.saxonArmy =[]
    this.addViking = (Viking)=>{
        this.vikingArmy.push(Viking)
    }
    this.addSaxon = (Saxon)=>{
        this.saxonArmy.push(Saxon)
    }
    this.vikingAttack = ()=>{
        let numerovik = this.vikingArmy.length
        let numerosax = this.saxonArmy.length
        let vikingo = this.vikingArmy[Math.floor(Math.random()*numerovik)]
        let saxon = this.saxonArmy[Math.floor(Math.random()*numerosax)]
        let retu = saxon.receiveDamage(vikingo.strength)
        if(saxon.health < 1){
            this.saxonArmy.splice(Math.floor(Math.random()*numerosax),1)
        }
        return retu +"with " + vikingo.strength +" of vikingo strength"

    }
    this.saxonAttack = ()=>{
        let numerovik = this.vikingArmy.length
        let numerosax = this.saxonArmy.length
        let vikingo = this.vikingArmy[Math.floor(Math.random()*numerovik)]
        let saxon = this.saxonArmy[Math.floor(Math.random()*numerosax)]
        let retu = vikingo.receiveDamage(saxon.strength)
        if(vikingo.health < 1){
            this.vikingArmy.splice(Math.floor(Math.random()*numerovik),1)
        }
        return retu +"with " + saxon.strength +" of saxon strength"
    }
    this.showStatus = ()=>{
        if(this.saxonArmy.length <1){
            return "Vikings have won the war of the century!"
        }else if(this.vikingArmy.length <1){
            return "Saxons have fought for their lives and survive another day.."
        }else{
            return "Vikings ans Saxons are still in the thick of battle"
        }
    }
}
