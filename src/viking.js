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
        this.health-=damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage){
        this.health-=damage;

        if (this.health > 0 ) {return `${this.name} has received ${damage} points of damage`; }
        else { return `${this.name} has died in act of combat`; }
    }

    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health-=damage;
        let result;
        if (this.health >0) {result=`A Saxon has received ${damage} points of damage`; }
        else { result=`A Saxon has died in combat`; }
        return result;
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(v) {
        this.vikingArmy.push(v);
    }
    addSaxon(s){
        this.saxonArmy.push(s);
    }
    vikingAttack(){
        // console.log(`vikingAttack 1`);
        let vRandom=Math.floor(Math.random() * this.vikingArmy.length);
        let sRandom=Math.floor(Math.random() * this.saxonArmy.length);
        const viking=this.vikingArmy[vRandom];
        const saxon=this.saxonArmy[sRandom];
        let result=saxon.receiveDamage(viking.strength);
        if (saxon.health<=0){
            // console.log(`vikingAttack IN`);
            this.saxonArmy.pop(sRandom);
        }
        return result;
        // console.log(`vikingAttack out`);
    }
    saxonAttack(){
        let vRandom=Math.floor(Math.random() * this.vikingArmy.length);
        let sRandom=Math.floor(Math.random() * this.saxonArmy.length);
        const viking=this.vikingArmy[vRandom];
        const saxon=this.saxonArmy[sRandom];
        // console.log(`saxonAttack 1`);

        let result=viking.receiveDamage(saxon.strength);
        // console.log(`saxonAttack 2`);
        if (viking.health<=0){
            // console.log(`vikingAttack IN`);
            this.vikingArmy.pop(vRandom);
        }
        return result;
    }
    showStatus(){
        if (this.saxonArmy.length===0) {return "Vikings have won the war of the century!";}
        else if(this.vikingArmy.length===0) {return "Saxons have fought for their lives and survived another day..."}

    }
}
