/*class TiketManager {
    #precioBaseDeGanancia = 2
    constructor(){
        this.eventos = []
    }
    agregarEvento(nombre,lugar,precio,capacidad=50,fecha= new Date()){
    const evento = {
        id: this.#generarIdEvento(),
        nombre,
        lugar,
        precio: precio + this.#precioBaseDeGanancia,
        capacidad,
        fecha,
        participantes: []
    }
    this.eventos.push(evento)
}

agregarUsuario(idEvento, idUsuario){
    const evento = this.#buscarEvento(idEvento)
    if(!evento){
        return 'Este producto no existe'
    }
    if(evento.participantes.includes(idUsuario)){
        return 'Usuario ya registrado en el evento'
    }
    evento.participantes.push(idUsuario)
}
ponerEventoEnGira(idEvento,nuevoLugar,nuevaFecha){
    const evento = this.#buscarEvento(idEvento)
    if(!evento){
        return 'Este producto no existe'
    }
    const nuevoEvento = {
        ...evento,
        lugar: nuevoLugar,
        fecha: nuevaFecha,
        participantes: [],
        id: this.#generarIdEventos()
    }
    this.eventos.push(nuevoEvento)
}

   #buscarEvento(idEvento){
    return this.eventos.find(e=>e.id === idEvento)
  }
   #generarIdEventos(){
    return this.eventos.length
    ? this.eventos[this.eventos.length-1].id+1
    : 1
  }

}*/
//SINCRONICA
const fs = requiere('fs')

//escribir el archivo
//fs.writeFileSync('archivo.txt', 'primer archivo creado')

//leer un archivo
//const infoArchivo = fs.readFileSync('archivo.txt')
//console.log(infoArchivo);

//eliminar un archivo
//fs.unlinkSync('archivo.txt')

//existe un archivo
//const existeArchivo = fs.existsSync ('archivo.txt')
//console.log(existeArchivo);

//añadir informacion
//fs.appendFileSync('archivo.txt' , 'segundo parrafo')

//ASINCRONICA

//escribir el archivo
fs.writeFile('archivoAsinc.txt' , 'primer archivo', (error)=>{
    if (error) {
        console.log(error);
    } else {
        console.log('Archivo creado con exito');
    }
})