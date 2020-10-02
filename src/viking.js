// Soldier
class Soldier {
    constructor(health, strength){
        this.sHealth = health
        this.health = health
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength)
        this.name = name
    }
    
    receiveDamage(damage){
        this.health -= damage
        if(this.health<=0){
            return `${this.name} has died in act of combat`
        }
        return `${this.name} has received ${damage} points of damage`
    }

    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength)
    }
    receiveDamage(damage) {
        this.health -= damage
        if(this.health<=0){
            return `A Saxon has died in combat`
        }
        return `A Saxon has received ${damage} points of damage`
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy =[]
    }

    addViking(vikingObj){
        this.vikingArmy.push(vikingObj)
    }

    addSaxon(saxonObj){
        this.saxonArmy.push(saxonObj)
    }

    vikingAttack(){
        if(this.saxonArmy.length==0){
            return 'No Saxon Army to carry out the attack with!'
        }

        if(this.vikingArmy.length==0){
            return 'No Viking army left to fight!'
        }
        let saxon = this.saxonArmy[Math.floor(Math.random() *(this.saxonArmy.length)) ]
        let viking = this.vikingArmy[Math.floor(Math.random() *(this.vikingArmy.length))]

        let damageDealt = saxon.receiveDamage(viking.strength)

        this.saxonArmy = this.saxonArmy.filter(function(el){
            return el.health > 0;
        })
        return damageDealt
    }
    
    saxonAttack(){
        if(this.saxonArmy.length==0){
            return 'No Saxon Army to carry out the attack with!'
        }

        if(this.vikingArmy.length==0){
            return 'No Viking army left to fight!'
        }


        let saxon = this.saxonArmy[Math.floor(Math.random() *(this.saxonArmy.length)) ]
        let viking = this.vikingArmy[Math.floor(Math.random() *(this.vikingArmy.length))]

        let damageDealt = viking.receiveDamage(saxon.strength)
        
        this.vikingArmy = this.vikingArmy.filter(function(el){
            return el.health > 0;
        })
        return damageDealt
    }

    attack(attacker){
        let damageDealt

        if(this.saxonArmy.length==0){
            return 'No Saxon Army left!'
        }
        
        if(this.vikingArmy.length==0){
            return 'No Viking Army left!'
        }

        let saxon = this.saxonArmy[Math.floor(Math.random() *(this.saxonArmy.length)) ]
        let viking = this.vikingArmy[Math.floor(Math.random() *(this.vikingArmy.length))]

        if(attacker == 'Viking'){
            damageDealt = saxon.receiveDamage(viking.strength)
            this.saxonArmy = this.saxonArmy.filter(function(el){
                return el.health > 0;
            })
        }else{
            damageDealt = viking.receiveDamage(saxon.strength)
            this.vikingArmy = this.vikingArmy.filter(function(el){
                return el.health > 0;
            })
        }
        return damageDealt

    }

    showStatus(){
        if(this.saxonArmy.length==0){
            return 'Vikings have won the war of the century!'
        }else if(this.vikingArmy.length == 0){
            return 'Saxons have fought for their lives and survived another day...'
        }else if(this.vikingArmy.length >= 1 && this.saxonArmy.length >=1){
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}





/*
Added extra functionality. 
1)  Saxons and Vikings have a starting health (sHealth) attribute to see what the starting health was and current health is.

2)  Attack(), vikingAttack(), saxonAttack() check the length of the saxon/viking Armies before anything. if either army is empty
    it returns a message. This stopped the code from erroring when the saxon / viking army was 0 and making an attack.

3)  The Below functions create vikings and saxons with different health and strengths and vikings have a name from a list of 30 names. 
    Vikings: health 0-900, strength 0-300, name from list
    Saxons: health 0-500, strength 0-100

4)  There is a loop for going through and generating 30 vikings and saxons

5)  I also added a do{}while() loop so that the game can be played until at least one of the armies win.backgound-green

6)  I have also commented out the Bonus general Attack() method in the war class. 
    I add this with a random attacker generator so that it wasn't always equal turns.

*/



function generateViking(vName) {
    let name = vName
    let health = Math.floor(Math.random() * 900)
    let strength = Math.floor(Math.random() * 300)
    return new Viking(name, health, strength);
}

function generateSaxon() {
    let strength = Math.floor(Math.random() * 100)
    let health = Math.floor(Math.random() * 500)
    return new Saxon(health, strength);
}

vikingNames = ["Alfred",
    "Barbara", 
    "Alta",
    "Cassie",  
    "Latrina",  
    "Muriel",  
    "Victor",  
    "Sheron",  
    "Emmett",  
    "Shaun",  
    "Renda",  
    "Jamar",  
    "Roma",  
    "Chong",  
    "Elroy",  
    "Eboni",  
    "Dusti",  
    "Alonso",  
    "Josie",  
    "Kiara",  
    "Sook",  
    "Zonia",  
    "Vida",  
    "Tomas",  
    "Lovella",  
    "Marci",  
    "Mabelle",  
    "Jean",  
    "Dan",  
    "Irina",  ]



war = new War();
for(x=0;x<vikingNames.length; x++){
    let viking = generateViking(vikingNames[x]);
    let saxon = generateSaxon();
    war.addViking(viking);
    war.addSaxon(saxon);
}


do{

    // let attacker = Math.round(Math.random())
    // if(attacker == 1){
    //     console.log(war.attack('Viking'))
    // }else{
    //     console.log(war.attack('Saxon'))
    // }

    console.log(war.vikingAttack())
    console.log(war.saxonAttack())
    console.log(war.showStatus())
    console.log(war.vikingArmy)
    console.log(war.saxonArmy)
}while(war.vikingArmy.length>0 && war.saxonArmy.length>0)
