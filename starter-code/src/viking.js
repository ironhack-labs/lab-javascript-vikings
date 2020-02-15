// Soldier
class Soldier {
    constructor(health,strength)
    {
        this.health=health
        this.strength=strength
    }

    attack()
    {
        return this.strength
    }

    receiveDamage(theDamage)
    {
        this.health-=theDamage
    }
}

// Viking
class Viking extends Soldier {
    constructor (name,health,strength)
    {
        super (health,strength)
        this.name=name
    }

    receiveDamage(theDamage)
    {
        this.health-=theDamage
        if(this.health>0)
        {
            return(`${this.name} has received ${theDamage} points of damage`)
        }
        else
        {
            return(`${this.name} has died in act of combat`)
        }
        
    }

    battleCry()
    {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(theDamage)
    {
        this.health-=theDamage
        if(this.health>0)
        {
            return(`A Saxon has received ${theDamage} points of damage`)
        }
        else
        {
            return(`A Saxon has died in combat`)
        }
    }
}

// War
class War {

    constructor()
    {
        this.vikingArmy=[]
        this.saxonArmy=[]
    }

    addViking(viking)
    {
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon)
    {
        this.saxonArmy.push(saxon)
    }

    vikingAttack()
    {
        let indexRandomSaxon=Math.floor(Math.random()*this.saxonArmy.length)
        let indexRandomViking=Math.floor(Math.random()*this.vikingArmy.length)
        let result=this.saxonArmy[indexRandomSaxon].receiveDamage(this.vikingArmy[indexRandomViking].attack())
        if(this.saxonArmy[indexRandomSaxon].health<=0)
        {
            this.saxonArmy.splice(indexRandomSaxon,1)
        }
        return result

    }

    saxonAttack()
    {
        let indexRandomSaxon=Math.floor(Math.random()*this.saxonArmy.length)
        let indexRandomViking=Math.floor(Math.random()*this.vikingArmy.length)
        let result=this.vikingArmy[indexRandomViking].receiveDamage(this.saxonArmy[indexRandomSaxon].attack())
        if(this.vikingArmy[indexRandomViking].health<=0)
        {
            this.vikingArmy.splice(indexRandomViking,1)
        }
        return result

    }

    showStatus()
    {
        if(this.saxonArmy.length>0 && this.vikingArmy.length>0)
        {
            return "Vikings and Saxons are still in the thick of battle."
        }
        else if(this.vikingArmy.length===0)
        {
            return "Saxons have fought for their lives and survived another day..."
        }
        else if(this.saxonArmy.length===0)
        {
            return "Vikings have won the war of the century!"
        }

    }

    vikingSaxonAttack(attackers, defenders)
    {
        let indexRandomActiv=Math.floor(Math.random()*attackers.length)
        let indexRandomDamaged=Math.floor(Math.random()*defenders.length)     
        let res=defenders[indexRandomDamaged].receiveDamage(attackers[indexRandomActiv].attack())
        if(defenders[indexRandomDamaged].health<=0)
        {
            defenders.splice(indexRandomDamaged,1)
        }
        return res
    }
}
