// Soldier (no entiendo bien el tema del function)
function Soldier(health, strength) {
    this.health= health;
    this.strength= strength;
    this.attack = function(){return this.strength;};
    this.receiveDamage =function(damage){this.health=this.health-damage;};
};

// Viking (falta el inherit, no entiendo por que el call no sirve)
function Viking(name,health, strength,) {
   Soldier.call(this,health,strength);
   this.name=name;
   this.receiveDamage =function(damage){this.health=this.health-damage;
    if (health >=1){
        return (name + ' has received ' + damage + ' points of damage')
    }
    else if (health <1){//no se por que no se lo traga
        console.log (name + ' has died in act of combat')
    };
  };
  this.battleCry= function(){return 'Odin Owns You All!'}
};

// Saxon
function Saxon() {}

// War
function War() {}
//this.attack();
  //  this.receiveDamage();


//    function receiveDamage(the damage){this.health-this.damage}
