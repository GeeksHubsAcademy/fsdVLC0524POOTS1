
//Esta es la clase Luchador, será la clase padre.
class Luchador {

    //Procedemos al encapsulamiento de dos propiedades, de modo protected en este caso
    //lo cual nos permitirá acceder a ellas desde la clase Luchador o las clases que
    //hereden de Luchador
    protected _nombre : string;
    protected _edad : number;

    //Constructor desde donde se inyectan las propiedades al instanciar la clase
    constructor(nombre : string, edad: number){
        this._nombre = nombre
        this._edad = edad
    }

    //método que simplemente menciona....no sería buena práctica
    // mencion () : void {

    //     console.log(`${this._nombre} golpea con su estilo ${this._edad}`)
    // }

    //Método estático
    static scream():void {
        console.log("buaaaaaaa")
    }

    //Getter y setter de nombre.....

    //Con el getter, tenemos un método que nos va a devolver el valor de la propiedad nombre
    get nombre ():string {
        return this._nombre
    } 

    //Con el setter podemos cambiar el valor de nombre de forma totalmente segura
    set nombre (nombre: string){
        this._nombre = nombre
    }
}

class Sumo extends Luchador {
    //Encapsulamiento
    private pais: string
    public weight: number

    constructor(nombre: string, edad: number, pais: string, weight: number){
        super(nombre, edad)
        this.pais = pais
        this.weight = weight
    }

    anuncio () : void {
        console.log(this._nombre, this._edad, this.pais)
    }
}

let luchador2 = new Luchador("manolo", 99)

//Modo getter para obtener
console.log(luchador2.nombre)


//Modo setter para setear
luchador2.nombre = "Pepe"


//Modo getter para obtener de nuevo
console.log(luchador2.nombre)


//Al tratarse de un método estático, puedo acceder directamente invocando a la clase
//sin instancia previa
Luchador.scream()