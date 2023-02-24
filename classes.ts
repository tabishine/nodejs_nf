class Generator{
    animals: [Animal];

    constructor(animals: [Animal]) {
        this.animals = animals;

    }
    generate() {
        const animal = this.getRandomAnimal();
        animal.say();
    }

    getRandomAnimal(): Animal {
        const index = Math.floor(Math.random() * 10);
        return this.animals[index];
    }
}

interface Animal {
    produce(): void;
}
interface Pets extends Animal{
    produce(): void;

}

class Cow implements Pets {
    produce(): void
    {
        console.log('milk');
        console.log('butter')
        console.log('beef');
    }
}

class Horse implements Pets {
    produce(): void {
        console.log('kymyz');
        console.log('kazy');
    }
}

const cow = new Cow();
const generator = new Generator([cow]);
generator.generate();
