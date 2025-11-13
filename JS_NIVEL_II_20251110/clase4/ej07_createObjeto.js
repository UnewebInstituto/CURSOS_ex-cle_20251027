const animal = {
    moverse:function(){
        console.log(`${this.nombre}, se esta moviendo`);
    },
    especie:'mamifero'
};

const perro = Object.create(animal);

perro.nombre = 'Fido';
perro.edad = 3;

perro.moverse();
console.log(perro.especie);