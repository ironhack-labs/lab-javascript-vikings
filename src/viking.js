// Soldier
class Soldier 
{
    constructor(health,strength)
    {
        this.health=health;
        this.strength=strength;
    }
    attack()
    {
        return this.strength;
    }
    receiveDamage(damage)
    {
        this.health-=damage;
    }
}

// Viking
class Viking extends Soldier
{
    constructor(name,health,strength)
    {
        this.name=name;
        super(health,strength)  
    }
    receiveDamage(damage)
    {
        this.health-=damage;
        if(Viking.health>0)
        {
            return `${this.name} has received ${this.damage} pints of damage`
        }
        else
        {
            return `${this.name} has died in combat`
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
    attack()
    {
        return this.strength
    }
    receiveDamage(_damage)
    {
        return `Saxon has received ${this.damage} pints of damage`
    }
    else
    {
        return `A Saxon has died in combat`
    }
}

// War
class War 
{
    constructor()
    {
        this.saxonArmy=[]
        this.vikingArmy=[]
    }
    addViking(Viking)
    {
        this.vikingArmy.push(Viking)
    }
    addSaxon(_Viking)
    {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack(){}
    saxonAttack(){}
    showStatus(){}
}
