export class persona {
    id?: number;// El id es autogenerado, para que no me tire error le pongo el ? que dice que no es necesario ese dato
    nombre: String;
    apellido: String;
    img: String;

    constructor(nombre: String, apellido: String, img: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
    }
}