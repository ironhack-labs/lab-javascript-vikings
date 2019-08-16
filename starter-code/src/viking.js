// Soldier
function Soldier (health, strength) {
    this.health = health
    this.strength = strength
    this.attack = function(){
        return this.strength
    }
    this.receiveDamage = function (damage){
        this.health -= damage
    }
}

// Viking
function Viking (name, health, strength) {
    Soldier.call(this, health, strength)
    this.name = name
    this.receiveDamage = function (damage){
        this.health -= damage
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } else{
            return `${this.name} has died in act of combat`
        }
    }
    this.battleCry=function(){
        return 'Odin Owns You All!'
    }
}
Viking.prototype = Object.create(Soldier.prototype)
Viking.prototype.constructor = Viking


// Saxon
function Saxon (health,strength) {
    Soldier.call(this,health,strength)
    this.receiveDamage=function(damage){
        this.health -= damage
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        } else{
            return `A Saxon has died in combat`
        }
    }
}

Saxon.prototype=Object.create(Soldier.prototype)
Saxon.prototype.constructor=Saxon

// War
function War () {
    this.vikingArmy=[]
    this.saxonArmy=[]

    this.addViking=function(Viking){
        this.vikingArmy.push(Viking)
    }

    this.addSaxon=function(Saxon){
        this.saxonArmy.push(Saxon)
    }

    //un saxon recibira el daño = a la fuerza del vikingo 
    //remueve los saxons muertos de ¡l ejercito de los axon y regresa el daño recibido del saxon

    this.vikingAttack=function(){
        const tipoSaxon=this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        const tipoVikingo=this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        //pelea
        const mensaje=tipoSaxon.receiveDamage(tipoVikingo.strength)
        const indexSaxon=this.saxonArmy.indexOf(tipoSaxon)

        if(tipoSaxon.health<=0){
            this.saxonArmy.splice(indexSaxon,1)
            return mensaje
        }
    }

    this.saxonAttack=function(){
        const tipoSaxon=this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        const tipoVikingo=this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        //pelea
        const mensaje2=tipoVikingo.receiveDamage(tipoSaxon.strength)
        const indexVikingo=this.vikingArmy.indexOf(tipoVikingo)

        if(tipoVikingo.health<=0){
            this.vikingArmy.splice(indexVikingo,1)
            return mensaje2
        }else{
            return mensaje2
        }
    }

    this.showStatus=function(){
        if(this.saxonArmy<=0){
            return 'Vikings have won the war of the century!'
        }else if(this.vikingArmy<=0){
            return 'Saxons have fought for their lives and survive another day...'
        }else if(this.vikingArmy.length===1 && this.saxonArmy.length===1){
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }

}
