// Soldier
class Soldier {
       constructor (health,strength)
    {
        this.health = health
        this.strength = strength
    }

attack()
{ return this.strength}
   receiveDamage(damage)
 {
this.health -= damage
 }
}
// Viking
class Viking  extends Soldier
{
    constructor(name,health,strength)
    {
         super (health,strength)
         this.name=name
    }
    attack()
    {
        return this.strength
    }
    receiveDamage(damage)
    {
        this.health -= damage
    if (this.health > 0)
    {
        return `${this.name} has received ${damage} points of damage`;

    }
    else
    {
        return `${this.name} has died in act of combat`;
    }
    }
battleCry()
{
    return "Odin Owns You All!"
}
}

// Saxon
class Saxon extends Soldier
 {
    receiveDamage(damage)
    {
        super.receiveDamage(damage);
    if (this.health > 0)
    {
        return `A Saxon has received ${damage} points of damage`;

    }
    else
    {
        return `A Saxon has died in combat`;
    }
    }
}

// War
class War {
   
    vikingArmy=[];
    saxonArmy=[];

    addViking(viking)
    {
        this.vikingArmy.push(viking);
    }

addSaxon(Saxon)
{
    this.saxonArmy.push(Saxon)
}
vikingAttack()
{
    let randomViking = this.vikingArmy[Math.floor(Math.random()) * this.vikingArmy.length];
    let randomSaxon = this.saxonArmy[Math.floor(Math.random()) * this.saxonArmy.length];
    let result  = randomSaxon.receiveDamage(randomViking.strength)
    this.saxonArmy.forEach(saxon => 
        {
            if(saxon.health <=0)
            {
                this.saxonArmy.splice(this.saxonArmy.indexOf(saxon));

            }
        })
        return result;
}
saxonAttack()
{
    let randomViking = this.vikingArmy[Math.floor(Math.random()) * this.vikingArmy.length];
    let randomSaxon = this.saxonArmy[Math.floor(Math.random()) * this.saxonArmy.length];
    let result  = randomViking.receiveDamage(randomSaxon.strength)
    this.vikingArmy.forEach(viking => 
        {
            if( viking.health <= 0)
            {
                this.vikingArmy.splice(this.vikingArmy.indexOf(viking));

            }
        })
        return result;
}
showStatus()
{
    if (this.saxonArmy.length === 0)
    {
        return 'Vikings have won the war of the century!'
    } else if (this.vikingArmy.length === 0)
    {
        return "Saxons have fought for their lives and survived another day..."
    } else {
        return "Vikings and Saxons are still in the thick of battle."
    }
}

}
