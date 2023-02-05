// Soldier
class Soldier {
    constructor(health, strength) {
        this.health=health;
        this.strength=strength;
    }

    attack(){
    return this.strength;
    }

    receiveDamage(damage){
        this.health=this.health-damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength)
    this.name=name;
    }

    receiveDamage(damage){
        this.health=this.health-damage;
        if(this.health>0){
            return this.name + " has received " + damage + " points of damage";
        }else {
            return this.name+" has died in act of combat";
        }
    }

    battleCry(){
        return "Odin Owns You All!";
    }
    
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }
receiveDamage(damage){
    this.health=this.health-damage;

    if(this.health>0){
        return "A Saxon has received " + damage + " points of damage";
    }else {
        return "A Saxon has died in combat";
    }
}

}

// War
class War {
    constructor(){
        this.vikingArmy=[];
        this.saxonArmy=[];
    }

    addViking(Viking){
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }

    vikingAttack(){
        const totalVikingos=this.vikingArmy.length;
        const totalSaxon=this.saxonArmy.length;
        //console.log(totalVikingos, totalSaxon)

        let numvi=Math.floor(Math.random() * totalVikingos);
        let numso=Math.floor(Math.random() * totalSaxon);
        //console.log(numvi, numso)
        let resultado=(this.saxonArmy[numso].receiveDamage(this.vikingArmy[numvi].attack));
        

        if(this.saxonArmy[numso].health<=0){
            totalSaxon.splice(numso,1);
        }
        return resultado;

        

    }

    saxonAttack(){
        const totalVikingos=this.vikingArmy.length;
        const totalSaxon=this.saxonArmy.length;

        let numvi=Math.floor(Math.random() * totalVikingos);
        let numso=Math.floor(Math.random() * totalSaxon);

        let resul=(this.vikingArmy[numvi].receiveDamage(this.saxonArmy[numso].attack));

        if(this.vikingArmy[numvi].health<=0){
            totalVikingos.splice(numvi,1);
        }
        return resul;
    }


}
