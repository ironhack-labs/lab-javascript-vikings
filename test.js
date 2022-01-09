class Animal {
    constructor(name, mainColor, sound) {
      this.name = name;
      this.mainColor = mainColor;
      this.sound = sound;
    }
    scream(intensity) {
      console.log(`${this.sound} ${'!'.repeat(intensity)}`);
    }
  }
   
  // The class Cat has, by default, all the same attributes and methods as Animal but it will have some that just belong to the cat
  class Cat extends Animal {
    constructor(name, mainColor, sound, nbOfLegs) {
      // `super` refers to the constructor of the parent (Animal)
      // with super Cat gets all the attributes and methods of the Animal class
      super(name, mainColor, sound);
      this.nbOfLegs = nbOfLegs; // <== a new attribute, just for cats
    }
  }
   
  const garfield = new Cat('Garfield', 'orange', 'Meow', 4);
  console.log(garfield);
  // {
  //   name: 'Garfield',
  //   mainColor: 'orange',
  //   sound: 'Meow',
  //   nbOfLegs: 4
  // }