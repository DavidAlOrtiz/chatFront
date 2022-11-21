import moment from "moment";
export const horaMes = (fecha) => {
    const diaFormato = moment(fecha)
    return diaFormato.format('HH:mm a | MMMM Do')
}