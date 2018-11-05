// Soldier
function Soldier(healthArg, strengtArg) {
    this.health = healthArg
    this.strength = strengtArg
    this.attack = function(){
        return this.strength
    }
    this.receiveDamage = function(damage){
        this.health = this.health - damage
    }
}

// Viking
function Viking(name, healthArg, strengtArg) {
    Soldier.call(this, healthArg, strengtArg)  // sugerencia
    this.name = name
    //Soldier.call(this.healthArg)
    //Soldier.call(this.strengtArg)
    /*
    Soldier.call(this, attack())
    */
    this.receiveDamage = function(damage){
        //Soldier.call(this, receiveDamage(damage)) // sugerencia
        this.health = this.health - damage
        if(this.health > 0){
            return this.name + " has recived "+this.damage +" points of damage"
            }
            else{
            return this.name + "has died in act of combat"
            }
        }
   this.battleCry = function(){
        return "Odin Owns You All!"
    }
}

Viking.prototype = Object.create(Soldier.prototype)

// Saxon
function Saxon(healthArg, strengtArg) {
    Soldier.call(this, healthArg, strengtArg)
    /*
    Soldier.call(this, attack())
    */
    this.receiveDamage = function(damage){
        this.health = this.health - damage
        if(this.health > 0){
            return "A Saxon has recived "+ this.damage +" points of damage"
            }
            else{
            return "A Saxon has died in combat"
            }
    }
}

Saxon.prototype = Object.create(Soldier.prototype)


// War
function War() {
    this.vikingArmy = []
    this.saxonArmy = []

    this.addViking = (newViking) =>{
        this.vikingArmy.push(newViking)
    }
    this.addSaxon = (newSaxon) =>{
        this.saxonArmy.push(newSaxon)
    }

    this.vikingAttack = () =>{
        if (this.vikingArmy.lenght > 0 && this.saxonArmy.lenght > 0){
            var heridosSaxonArmy = []
            var vikingAttackingSaxon =
                this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.lenght)].receiveDamage(this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.lenght)].attack())
                    for(var i=0; i<this.saxonArmy.lenght;i++){
                        if(this.saxonArmy[i].health > 0){
                            heridosSaxonArmy.push(this.saxonArmy[i])
                        }
                    }
                    this.saxonArmy = heridosSaxonArmy
                    return vikingAttackingSaxon
        }
        /*
        if(this.vikingArmy.lenght>0 && this.saxonArmy.lenght < 1){    
            return "Vikings won the war"
        }
        */
        return "There's a winner"
        }
    

    this.saxonAttack = () =>{
        if (this.saxonArmy.lenght>0 && this.vikingArmy.lenght>0){
            var heridosVikingsArmy = []
            var saxonsAttackingVikings =
                this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.lenght)].receiveDamage(this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.lenght)].attack())
                    for(var i=0; i<this.vikingArmy.lenght;i++){
                        if(this.vikingArmy[i].health>0){
                            heridosVikingsArmy.push(this.vikingArmy[i])
                        }
                    }
                    //Actualiza el array de vikingsArmy
                    this.vikingArmy = heridosVikingsArmy
                    return saxonsAttackingVikings
        }
        return "There's a winner"
    }
}
