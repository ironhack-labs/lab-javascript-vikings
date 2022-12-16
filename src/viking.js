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

        this.health -= damage;

    }

}

// Viking
class Viking extends Soldier{

    constructor(name, health , strength )
    {
        super(health,strength)
        this.name = name;
    }
   

    receiveDamage(damage){

        this.health -= damage;

        if(this.health >0)
        {
            return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;
        }

    }

    battleCry(){
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {

    constructor( health , strength )
    {
        super(health,strength)
    }
    receiveDamage(damage){
            this.health -= damage;
            if( this.health >0)
            {
                return `A Saxon has received ${damage} points of damage`;
            }
            else {
                return `A Saxon has died in combat`;
            }
    }

}

// War
class War {
   
    constructor()
    {
         vikingArmy  = [];
         saxonArmy  = [];     
    }

    addViking(Viking ){
        vikingArmy.push(Viking );
    }

    addSaxon(Saxon){
        saxonArmy.push(Saxon);
    }

vikingAttack(){
    let x = Math.floor(Math.random() * saxonArmy.length);
    let y = Math.floor(Math.random() * vikingArmy.length);

    let result  = saxonArmy[x].receiveDamage(vikingArmy[y].strength);
    if(saxonArmy[x].health <= 0)
    {
        saxonArmy.splice(x, x);
    }

    return `${result} | Viking Strength : ${vikingArmy[y].strength} `;
}


saxonAttack(){
    let x = Math.floor(Math.random() * saxonArmy.length);
    let y = Math.floor(Math.random() * vikingArmy.length);

    let result  = vikingArmy[y].receiveDamage(saxonArmy[x].strength);
    if(vikingArmy[y].health <= 0)
    {
        vikingArmy.splice(y, y);
    }

    return `${result} | Saxon Strength : ${saxonArmy[y].strength} `;

}
showStatus(){

if(saxonArmy.length == 0)
{
    return "Vikings have won the war of the century!";
}
else if(vikingArmy.length == 0){
return "Saxons have fought for their lives and survived another day...";
}
else if (saxonArmy.length >= 1 && vikingArmy.length >=1 ){
    return "Vikings and Saxons are still in the thick of battle.";
}

}
}