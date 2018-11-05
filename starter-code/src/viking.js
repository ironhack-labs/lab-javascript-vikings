// Object Soldier con dos parametros.

function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
};

// Creo una función para Soldier attack() que devuelve el valor de la fuerza de un soldado

Soldier.prototype.attack = function(){
    return this.strength;
};

// Creo una función para Soldier receiveDamage() que resta un parámetro damage a la propiedad health del Soldier

Soldier.prototype.receiveDamage = function(damage){
    this.health -= damage;
};

// Utilizo las siguientes propiedades para heredar las propiedades de Soldier a Viking y a Saxon

Viking.prototype = Object.create(Soldier.prototype);

Saxon.prototype = Object.create(Soldier.prototype);

// Objeto Viking con tres parámetros.

function Viking(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
};

// Creo una función para vikings de receiveDamage, en caso de que this.health ( el valor de health de Viking ) sea mayor que 0
// se devuelve un string con el valor del daño recibido. En caso de que this.health sea 0 o menor que 0 el vikingo en cuestión muere.

Viking.prototype.receiveDamage = function(damage){

    this.health -= damage;

    if ( this.health > 0){
        return this.name + ' has received ' + damage + ' points of damage';
    } else {
        return this.name + " has died in act of combat";
    }
};

Viking.prototype.battleCry = function(){
    return "Odin Owns You All!"
};

// Object Saxon con dos parámetros.

function Saxon(health, strength) {
    this.health = health;
    this.strength = strength;
};

// Creo una función para Saxon de receiveDamage, en caso de que this.health ( el valor de health de Saxon ) sea mayor que 0
// se devuelve un string con el valor del daño recibido. En caso de que this.health sea 0 o menor que 0 el saxon en cuestión muere.

Saxon.prototype.receiveDamage = function(damage){

    this.health -= damage;

    if (this.health > 0){
        return 'A Saxon has received ' + damage + ' points of damage';
    } else {
        return "A Saxon has died in combat"
    }
};

// Object War con dos keys, que serán los arrays que contengan los ejercitos de Vikings y Saxones

function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

// Declaro addViking un parámetro que es un Objeto Viking, y hace push de este Objeto al array de vikingArmy

War.prototype.addViking = function(Viking){
    this.vikingArmy.push(Viking);
};

// Declaro addSaxon un parámetro que es un Objeto Saxon, y hace push de este Objeto al array de vikingSaxon

War.prototype.addSaxon = function(Saxon){
    this.saxonArmy.push(Saxon);
};

// Viking Attack y Saxon Attack

// 1 - Cojo un número random para elegir un objeto Viking dentro del array vikingArmy. Genero un número entre 0 y 1 con Math.random() y lo multiplico por el tamaño
//     del array de vikingos. Después redondeo ese número para poder elegir más tarde un vikingo en el array de vikingArmy con ese numéro 'n'.( vikingArmy[n] )
// 2 - Realizo la misma operación con los Saxones que en el paso 1.
// 3 - Creo una variable para ver cual es el daño de este impacto. Cojo del array saxonArmy contenido en War, un saxon cualquiera utilizando el número obtenido en el paso 2.
//     y para ese saxon aplico la función creada anteriormente 'receiveDamage' que toma como parametro (damage). En este caso damage = la fuerza de un vikingo 'n' del vikingArmy gracias a la funcion attack().
//     que devuelve la fuerza del vikingo.
// 4 - Si el saxon tiene una vida igual o mayor que cero quiere decir que ha muerto, por lo que hacemos un slice(0,1) del array saxonArmy, eliminando así primer elemento.
// 5 - En cualquier otro caso devolvemos el resultado del daño de este ataque, que viene dado por la variable 'totalDamage'.

War.prototype.vikingAttack = function(){

    var anySaxon = Math.floor(Math.random() * this.saxonArmy.length);  //1
    var anyViking = Math.floor(Math.random() * this.vikingArmy.length);  //2
    var totalDamage = this.saxonArmy[anySaxon].receiveDamage(thl    is.vikingArmy[anyViking].attack());  //3

    if (this.saxonArmy[anySaxon].health <= 0) {  //4
      this.saxonArmy.splice(0, 1);  //5
    }
    return totalDamage;  //6
};

War.prototype.saxonAttack = function(){

    var anySaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var anyViking = Math.floor(Math.random() * this.vikingArmy.length);
    var totalDamage = this.vikingArmy[anyViking].receiveDamage(this.saxonArmy[anySaxon].attack());

    if (this.vikingArmy[anyViking].health <= 0) {
      this.vikingArmy.splice(0, 1);
    }
    return totalDamage;
};

// Show War Status

// 1 - Si la longitud del array saxonArmy es cero quiere decir que no quedan Saxones en la guerra, es decir que han ganado los vikingos.
// 2 - Si la longitud del array vikingArmy es cero quiere decir que no quedan Vikingos en la guerra, es decir que han ganado los saxones.
// 3 - Si la longitud del array de vikingArmy es mayor que cero y la de saxonArmy también quiere decir que hay todavía saxones y vikingos en la guerra y que aún no se ha terminado.

War.prototype.showStatus = function(){
    
    if (this.saxonArmy.length === 0){  //1
        return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length === 0){  //2
        return "Saxons have fought for their lives and survive another day..."
    } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0){  //3
        return "Vikings and Saxons are still in the thick of battle."
    }
};