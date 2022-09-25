// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Auto {
  encender: boolean
  velocidadMaxima: number
  acelerar(): void
}

const conducirBatimovil = ( auto: Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil:Auto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Guason  {
  comer?: boolean,
  llorar?: boolean
  reir?: boolean,
}

const guason: Guason = {
  comer: true,
  llorar: true,
  reir: false
}

const reir = ( guason: Guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface ciudadGoticaFunction {
  (ciudadanos: string[]): number
}

const ciudadGotica:ciudadGoticaFunction  = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface caracteristicasPersona {
  nombre: string
  edad: number
  sexo: string
  estadoCivil: string
  imprimirBio(): void
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements caracteristicasPersona {
  public nombre: string
  public edad: number
  public sexo: string
  public estadoCivil: string
  imprimirBio(): void {
    
  }
}