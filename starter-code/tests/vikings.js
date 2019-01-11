function Dog(name, barkSound, color){
    this.name = name;
    this.color = color;
    this.barkSound = barkSound;
    // this.late = function(){
    //     console.log(barkWay);
    // }
}

//prototype faz com que os objetos instanciados tenham em comum o mesmo método
//this é a referência ao próprio objeto

Dog.prototype.raws = 4;
Dog.prototype.bark = function(){
    console.log(this.barkSound);
}

const tiao = new Dog('tiao','Au au');
const chuck = new Dog('chuck', 'Wof Wof');

// tiao.bark();
// chuck.bark();
//tiao.color ='white';

console.log(tiao.barkSound);

//função construtora

//
