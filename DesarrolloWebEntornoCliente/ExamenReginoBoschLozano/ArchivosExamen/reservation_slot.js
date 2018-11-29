/* PON EL CODIGO DE LA CLASE A PARTIR DE AQUÍ */

class ReservationSlot {
    constructor(autor, clase, fecha_reserva, hora_ini, duracion, descripcion) {

        this.autor = autor;
        this.clase = clase;
        this.fecha_reserva = fecha_reserva;
        this.hora_ini = hora_ini;
        this.duracion = duracion;
        this.descripcion = descripcion;
    }
    transformDuracion(_duracion) {
        let h_dura = Math.floor(parseInt(this.duracion) / 60);
        return h_dura;
    }

    transformHora(_horaIni) {
        let h_ini = parseInt(_horaIni.slice(0, 2));
        return h_dura;
    }
    returnMin(_horaIni) {
        let min = _horaIni.slice(3, 5);
        return min;
    }

    getEndTime() {
        let h_dura = this.transformDuracion(this.duracion);

        let h_ini = this.transformHora(this.hora_ini);
        let min = this.returnMin(this.hora_ini);
        let calculo = h_ini + h_dura;
        return String(calculo + ":" + min);
    }
    
        static overlaps (ResevaObject_1, ReservaObject_2)
        {
            let dura_1 = Math.floor(parseInt(ResevaObject_1.duracion)/ 60);
            let dura_2 = Math.floor(parseInt(ResevaObject_2.duracion)/ 60);

            let hora_ini_1 = this.transformHora(ReservaObject_1.hora_ini);
            let hora_ini_2 = this.transformHora(ReservaObject_2.hora_ini);

            let hora_fin_1= hora_ini_1 + dura_1;
            let hora_fin_2= hora_ini_2 + dura_2;

            if(ResevaObject_1.clase !== ReservaObject_2.clase)
                return true;

            if(ResevaObject_1.clase === ReservaObject_2.clase && hora_fin_1 < hora_ini_2 && hora_fin_1 < hora_fin_2)
                return true;

                if(ResevaObject_1.clase === ReservaObject_2.clase && hora_fin_1 > hora_ini_2 && hora_fin_1 > hora_fin_2)
                return false;

        }

}


/* FIN DEL CÓDIGO DE LA CLASE */

/* PON EL CÓDIGO DEL EJERCICIO 3 A PARTIR DE AQUÍ */

function getMostPopularUser(arrayReserSlot)
{
    let myMap = new Map();
    let indice = 0;
    for (const iterator of arrayReserSlot) {

        myMap.set(indice, iterator.autor);
    }    
}
let reservation = new ReservationSlot("Regi", "A", "30-12-2018", "09:00", "60", "Reserva Aula");
let reservation_2 = new ReservationSlot("Paco", "A", "30-12-2018", "09:00", "60", "Reserva Aula");

let array = [reservation, reservation_2];
getMostPopularUser(array);

/* FIN DEL EJERCICIO 3 */

/* PON EL CÓDIGO DEL EJERCICIO 4 A PARTIR DE AQUÍ */

/* FIN DEL EJERCICIO 4 */
function delayReservation(min, ReservationSlot) {
    if (Math.floor(parseInt(min) / 60) < 0)
        throw Error("Número no permitido");
    for (const iterator of ReservationSlot) {

        let h_ini = parseInt(iterator.hora_ini.slice(0, 2));
        let h_retra = Math.floor(min / 60);
        let minutos = iterator.hora_ini.slice(3, 5);
        let total = h_ini - h_retra;
        iterator.hora_ini = total + ":" + minutos;
    }
    return ReservationSlot;
}

let reser = new ReservationSlot("Regi", "A", "30-12-2018", "09:00", "60", "Reserva Aula");
let arrayPas = [reser];


function getReservationsFromUser(usuario, ReservationSlot) {
    return ReservationSlot.map(f => {
        if (f.autor === usuario) return f;
    });
}

let reser_1 = new ReservationSlot("Regi", "A", "30-12-2018", "09:00", "60", "Reserva Aula");
let reser_2 = new ReservationSlot("Paco", "A", "30-12-2018", "09:00", "60", "Reserva Aula");

let array_2 = [reser_1, reser_2];
getReservationsFromUser("Regi", array_2);




if(typeof(module) !== 'undefined' && module.exports){
    exports.ReservationSlot = ReservationSlot;
    exports.getMostPopularUser = getMostPopularUser;
  //  exports.delayReservations = delayReservations;
    exports.getReservationsFromUser = getReservationsFromUser;
}

/*if (document.body.hasChildNodes()) {
    /* PON AQUÍ EL CÓDIGO DEL EJERCICIO 5 */
    // Pon aquí el código para cambiar la tabla

    let table= document.body.firstElementChild;
   
    for (let i = 0; i < table.tBodies[0].children.length; i++) { 
   
         table.tBodies[0].rows[0].cells[i].style ='background-color:red;';  
    }    
    
       let p= document.getElementsByTagName(p)[0].textContent = "USUARIO";
      

    //Pon aquí tu código para cambiar el código del párrafo, de forma que muestre el usuario que más reservas ha realizado

    /* FIN DEL EJERCICIO 5 */
//}