// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;

    this.attack = function(){
        return strength;
    }
    this.receiveDamage = function(damage){
        this.health -= damage;
    }
}

//Viking

function Viking (name, health, strength) {

    Soldier.call(this,health,strength);
    this.name = name;

    this.receiveDamage = function(damage){
        if (this.health - damage) { return this.name + "has recieved" + damage + "points of damage"
    }else if (this.health === 0) {return this.name + "has died in act of combat"}
    }

    this.battleCry = function(){
    return "Odin Owns You All"
    }

}

//Saxon
function Saxon (health,strength){
    Soldier.call(this,health,strength);


    this.receiveDamage = function(damage){
    if (this.health - damage) { return "A Saxon has recieved " + damage + " points of damage"
    }else if (this.health === 0) {"A Saxon died in act of combat"}
}
}

// // War
// function War() {}
