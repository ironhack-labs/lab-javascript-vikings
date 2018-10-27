// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
}
    Soldier.prototype.attack = function(){
        return this.strength;
    };
    Soldier.prototype.receiveDamage = function(damage){
         this.health -= damage;
    }

//Viking
function Viking(nameViking, healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg );
    this.name = nameViking;
}
     Viking.prototype = Object.create(Soldier.prototype);
      Viking.prototype.receiveDamage = function(damage){
          this.health -= damage;
            if (this.health === 0) {
                return `${this.name} has died in act of combat`;
                  } else {
                    return `${this.name} has received ${damage} points of damage`;
              }
            }

    Soldier.prototype.battleCry = function(){
        return "Odin Owns You All!";
    }

// Saxonhe
function Saxon(health, strength) {
    Soldier.call(this, health, strength);
}
    Saxon.prototype = Object.create(Soldier.prototype);
    Saxon.prototype.receiveDamage = function(damage){
        this.health -= damage;
        if (this.health >0) {
            return `A Saxon has received ${damage} points of damage`;           
        } else {
            return `A Saxon has died in combat`;
        }

    }


// War
function War() {}
