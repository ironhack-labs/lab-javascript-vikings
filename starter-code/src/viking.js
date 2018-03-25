

//console.log("SECCION SOLDIER");

// Definimos Soldier como una CLASE con sus valores

function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
}
// Definimos las funciones de la clase Soldier

Soldier.prototype.attack = function () {
    return this.strength;
}
Soldier.prototype.receiveDamage = function (damage) {
    this.health -= 50;
}
// Definimos Vikings como una instancia de la clase Soldier.Añadimos una propiedad más "name"

function Viking(health, strength) {
    this.name = "Harold";
    Soldier.call(this, health, strength);
}

Viking.prototype = Object.create(Soldier.prototype); //El constructor Vikings es un objeto creado de la constructora Soldier
Viking.prototype.constructor = Viking; //Asiganmos.Mi pregunta es porque hacemos esto si ya Vikings es una constructora??

//var viking = new Viking(200,200)


//console.log(viking);
//console.log(viking.receiveDamage());  // comprobar que funciona el golpe
//console.log(viking);

//console.log("--------");

// Definimos una modificacion de la funcion receiveDamage
Viking.prototype.receiveDamage = function (damage) {
    this.health -= 50; // Cada golpe ,te quita 50 puntos
    if (this.health > 0) {
        return this.name + " has received " + damage + " points of damage";
    } else {
        return this.name + " has died in act of combat";
    }
};
// Creamos una nueva funcion de Vikings
Viking.prototype.battleCry = function () {
    return "Odin Owns You All!";
}

// Saxon es una instancia de la clase Soldier
function Saxon(health, strenght) {
    Soldier.call(this, health, strenght);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

//var saxon = new Saxon(200,200)
//console.log(saxon)

Saxon.prototype.receiveDamage = function (damage) {
    this.health -= 50;
    if (this.health > 0) {
        return "A Saxon has received" + damage + "points of damage";
    } else {
        return "A Saxon has died in combat"
    }
};

// War: entiendo que seria  una SUBCLASE de Soldier . No consigo enlazar war con las isntacias Vikings y Saxon
function War(){ 
   War.call(this);  // mi idea es conectar war con las instancias !!!!!
   this.vikingArmy = vikingArmy; // no consigo ver como conectar la funcion constructora WAR con las instancias Saxon y Vikings
   this.saxonArmy = saxonArmy;  
}

War.prototype=Object.create (Soldier.prototype);
War.prototype.constructor = War;

// Creando las funciones de la constructora War

War.prototype.addViking = function (viking) {
    this.vikingArmy.push(viking);           // añadir un vikingo a la armada vikinga  
};
War.prototype.addSaxon = function (saxon) {
    this.saxonArmy.push(saxon);            // igual pero la armada saxon
};
War.prototype.vikingAttack = function () {
    var numSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    var numViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    var golpe = saxon.receiveDamage(viking.attack()); // Saxon recibe un golpe de un vikingo
        if (saxon.health <= 0) { 
            this.saxonArmy.pop(); // quito un saxon del array saxonArmy
            return golpe;
        };
        return golpe;
    };
War.prototype.saxonAttack = function() {
    var saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    var viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    var golpe = viking.receiveDamage(saxon.attack()); // Vikingo recibe un golpe de Saxon
        if (viking.health <= 0) { 
            this.vikingArmy.pop(); // quito un vikingo del array saxonArmy
            return golpe;
        };
        return golpe;
    };

War.prototype.showStatus = function () {
     if (this.saxonArmy.length == 0) {
          return "Vikings have won the war of the century!";
         } else if (this.vikingArmy.length == 0) {
               return "Saxons have fought for their lives and survive another day...";
             } else {
           return "Vikings and Saxons are still in the thick of battle."
          }
    };

